import { useState, useEffect } from 'react'
import './App.css'
import AudioData from './AudioData';


function App() {

  const [receiving, setReceiving] = useState(false);
  const [receivedText, setReceivedText] = useState("");
  const [sendingText, setSendingText] = useState("");

  useEffect(() => {
    AudioData.init();
  }, []);

  function startReceiving() {
    AudioData.startReceiving(setReceivedText);
    setReceiving(true);
  }
  function stopReceiving() {
    AudioData.stopReceiving();
    setReceivedText("");
    setReceiving(false);
  }

  function send() {
    AudioData.send(sendingText);
  }
  return (
    <div id="main-container">
      <h1>Testing</h1>

      <div>Tx Data:</div> <textarea onInput={e => setSendingText(e.target.value)} value={sendingText} />

      <button onClick={send}>Send: </button>
      <span >"{sendingText}"</span>


      <div>Rx data:</div> <textarea disabled value={receivedText}></textarea>

      <button onClick={receiving ? stopReceiving : startReceiving}>{receiving ? "Stop" : "Start"} capturing</button>


      <div className="cell-version">
        <div id="dialog"></div>
      </div>
    </div >)
}

export default App
