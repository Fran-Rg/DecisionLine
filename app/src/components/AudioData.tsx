

function convertTypedArray(src, type) {
  var buffer = new ArrayBuffer(src.byteLength);
  var baseView = new src.constructor(buffer).set(src);
  return new type(buffer);
}
window.AudioContext = window.AudioContext || window.webkitAudioContext;
window.OfflineAudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
let ggwave;
ggwave_factory().then(function (obj) {
  ggwave = obj;
});

const AudioData = {

  audioContext: null,
  parameters: null,
  instance: null,
  context: null,
  recorder: null,
  mediaStream: null,
  ggwave: null,
  callbacks: [],

  init: function (callback) {
    if (!this.context) {
      if (ggwave == undefined){
        console.error("ggwave not loaded yet, retrying in 500ms");
          setTimeout(() => {
          this.init(callback);
        }, 500);
      } else {
        // instantiate the ggwave instance
        // ggwave_factory comes from the ggwave.js module
        this.context = new AudioContext({ sampleRate: 48000 });

        this.parameters = ggwave.getDefaultParameters();
        this.parameters.sampleRateInp = this.context.sampleRate;
        this.parameters.sampleRateOut = this.context.sampleRate;
        this.instance = ggwave.init(this.parameters);
        console.info("AudioData instance initialized");
        if (callback) {
          callback(this.instance);
        }
      }
    }else{
      if (callback) {
        callback(this.instance);
      }
    }
  },
  send: function (data: string) {
    this.init(() => {
      if (this.instance !== null) {
        // generate audio waveform
        var waveform = ggwave.encode(this.instance, data, ggwave.ProtocolId.GGWAVE_PROTOCOL_AUDIBLE_FASTEST, 10)
        // var waveform = ggwave.encode(this.instance, data, ggwave.ProtocolId.GGWAVE_PROTOCOL_ULTRASOUND_FASTEST, 10)

        // play audio
        var buf = convertTypedArray(waveform, Float32Array);
        var buffer = this.context.createBuffer(1, buf.length, this.context.sampleRate);
        buffer.getChannelData(0).set(buf);
        var source = this.context.createBufferSource();
        source.buffer = buffer;
        source.connect(this.context.destination);
        source.start(0);
        console.debug(`Message '${data}' sent`);
      } else {
        console.error("AudioData instance not initialized");
      }

    });
  },
  resetCallbacks: function () {
    this.callbacks = [];
  },
  addCallback: function (callback) {
    this.callbacks.push(callback);
  },
  startReceiving: function (onAccepted=null, callbacks = []) {
    this.init(
      () => {
        if (this.instance !== null) {
          if (this.recorder !== null) {
            console.error("Receiver already in place, resetting it.");
            this.recorder.disconnect(this.context.destination);
            this.mediaStream.disconnect(this.recorder);
            this.recorder = null;
          }
          const constraints = {
            audio: {
              echoCancellation: false,
              autoGainControl: false,
              noiseSuppression: false
            }
          };
          this.callbacks.concat(callbacks);

          navigator.mediaDevices.getUserMedia(constraints).then((e) => {
            console.log("Accepted Audio")
            onAccepted && onAccepted()
            this.mediaStream = this.context.createMediaStreamSource(e);

            var bufferSize = 1024;
            var numberOfInputChannels = 1;
            var numberOfOutputChannels = 1;

            if (this.context.createScriptProcessor) {
              console.debug("createScriptProcessor")
              this.recorder = this.context.createScriptProcessor(
                bufferSize,
                numberOfInputChannels,
                numberOfOutputChannels);
            } else {
              console.debug("createJavaScriptNode")
              this.recorder = this.context.createJavaScriptNode(
                bufferSize,
                numberOfInputChannels,
                numberOfOutputChannels);
            }
            this.recorder.onaudioprocess = (e) => {
              const source = e.inputBuffer;
              let res = ggwave.decode(this.instance, convertTypedArray(new Float32Array(source.getChannelData(0)), Int8Array));
              if (res && res.length > 0) {
                res = new TextDecoder("utf-8").decode(res);
                for (let i = 0; i < this.callbacks.length; i++) {
                  this.callbacks[i](res);
                }
                console.debug(`Message '${res}' received`);
              }
            }

            this.mediaStream.connect(this.recorder);
            this.recorder.connect(this.context.destination);
            console.log("Receiver started");
          }).catch((e) => {
            console.error(e);
          });
        } else {
          console.error("AudioData instance not initialized, cannot start receiving");
        }

      }
    );
  },
  stopReceiving: function () {
    if (this.recorder !== null) {
      this.recorder.disconnect(this.context.destination);
      this.mediaStream.disconnect(this.recorder);
      this.recorder = null;
      console.info("Receiver stopped");
    } else {
      console.error("Receiver not in place");
    }
  }
}

export default AudioData;