

function convertTypedArray(src, type) {
  var buffer = new ArrayBuffer(src.byteLength);
  var baseView = new src.constructor(buffer).set(src);
  return new type(buffer);
}
window.AudioContext = window.AudioContext || window.webkitAudioContext;
window.OfflineAudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;

const AudioData = {

  audioContext: null,
  parameters: null,
  instance: null,
  context: null,
  recorder: null,
  mediaStream: null,
  ggwave: null,

  init: function () {
    if (!this.context) {
      // instantiate the ggwave instance
      // ggwave_factory comes from the ggwave.js module
      ggwave_factory().then((obj) => {
        this.ggwave = obj;
        this.context = new AudioContext({ sampleRate: 48000 });

        this.parameters = this.ggwave.getDefaultParameters();
        this.parameters.sampleRateInp = this.context.sampleRate;
        this.parameters.sampleRateOut = this.context.sampleRate;
        this.instance = this.ggwave.init(this.parameters);
        console.info("AudioData instance initialized");
      });
    }
  },
  send: function (data) {
    if (this.instance !== null) {
      // generate audio waveform
      var waveform = this.ggwave.encode(this.instance, data, this.ggwave.ProtocolId.GGWAVE_PROTOCOL_AUDIBLE_FASTEST, 10)

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
  },
  startReceiving: function (onData) {
    if (this.instance !== null && onData !== null) {

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

      navigator.mediaDevices.getUserMedia(constraints).then((e) => {
        this.mediaStream = this.context.createMediaStreamSource(e);

        var bufferSize = 1024;
        var numberOfInputChannels = 1;
        var numberOfOutputChannels = 1;

        if (this.context.createScriptProcessor) {
          console.log("createScriptProcessor")
          this.recorder = this.context.createScriptProcessor(
            bufferSize,
            numberOfInputChannels,
            numberOfOutputChannels);
        } else {
          console.log("createJavaScriptNode")
          this.recorder = this.context.createJavaScriptNode(
            bufferSize,
            numberOfInputChannels,
            numberOfOutputChannels);
        }
        this.recorder.onaudioprocess = (e) => {
          const source = e.inputBuffer;
          let res = this.ggwave.decode(this.instance, convertTypedArray(new Float32Array(source.getChannelData(0)), Int8Array));
          if (res && res.length > 0) {
            res = new TextDecoder("utf-8").decode(res);
            onData(res);
            console.debug(`Message '${res}' received`);
          }
        }

        this.mediaStream.connect(this.recorder);
        this.recorder.connect(this.context.destination);
      }).catch((e) => {
        console.error(e);
      });
    } else {
      console.error("AudioData instance not initialized.");
    }
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