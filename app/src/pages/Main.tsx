import React, { useState, useEffect } from 'react';
import JoinPage from './JoinPage';
import GamePage from './GamePage';
import { IonAlert, IonicSafeString, IonIcon } from '@ionic/react';
import { shareOutline, ellipsisVertical } from 'ionicons/icons';
import { renderToStaticMarkup } from 'react-dom/server'
function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
}
declare global {
  interface Window {
    enableNoSleep: () => void;
  }
}
const Main: React.FC = () => {
  const [gameState, setGameState] = useState<string>("");
  const [isVertical, setIsVertical] = useState<boolean>(window.innerWidth < window.innerHeight);
  const isPWA = window.matchMedia('(display-mode: standalone)').matches
  // const isPWA = true //DEBUG

  useEffect(() => {
    setInterval(() => {
      setIsVertical(window.innerWidth < window.innerHeight);
    }, 1000);
    console.log("Is PWA: ", isPWA)
    if (isPWA) {
      setGameState("join");
    }else{
      setGameState("pwa");
    }
    // setGameState("game") //DEBUG
  }, []);

  if (isVertical && gameState !== "pwa") {
    return (
      <div style={{ textAlign: 'center', marginTop: '80%' }}>
        <p>
          You must use this app in landscape mode
        </p>
      </div>
    )
  }
  const exportIcon = renderToStaticMarkup(<IonIcon icon={iOS() ? shareOutline : ellipsisVertical} style={{
    minHeight: "20px",
    minWidth: "20px",
  }} />)
  const handleStart = () => {
    if (window.enableNoSleep) {
      window.enableNoSleep();
    }
    setGameState("game")
  };
  const states = {
    "pwa": (<IonAlert
        isOpen={true}
        header="Install me"
        message={new IonicSafeString(`This works better as an app:<br/>1. Click ${exportIcon}<br/>2. "Add to Home Screen"`)}
        buttons={['Ok']}
        onDidDismiss={() => setGameState("join")}
      />),
    "join": <JoinPage start={handleStart} />,
    "game": <GamePage/>
  }
  return states[gameState] || (<div>Loading...</div>);
};
export default Main;
