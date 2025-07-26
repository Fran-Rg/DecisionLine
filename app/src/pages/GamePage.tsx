import { useState, useEffect, useRef, useReducer, Fragment } from 'react';
import {
  IonContent,
  IonHeader,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonButtons,
  IonButton,
  IonPage,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonFooter,
} from '@ionic/react';
import { chevronForward, addCircleOutline, removeCircleOutline, chevronBack } from 'ionicons/icons';

import getRandomQuestion, { Question } from '../data/Questions';
import getChildren from '../data/Player';
function getTimeSeed() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const minuteTens = Math.floor(now.getMinutes() / 10); // Only tens digit

  return `${year}-${month}-${day}-${hour}-${minuteTens}`;
}

function GamePage() {
  const seed = useRef<string>(getTimeSeed());
  const [playerNumber, setPlayerNumber] = useState<number>(0);
  const [roundNumber, setRoundNumber] = useState<number>(1);
  const [n1, setN1] = useState<number>(0);
  const [n2, setN2] = useState<number>(0);
  const [question, setQuestion] = useState<Question>();
  const tapCountRefs = [useRef(0), useRef(0)];
  const tapTimerRefs = [useRef<NodeJS.Timeout | null>(null), useRef<NodeJS.Timeout | null>(null)];

  useEffect(() => {
    setQuestion(getRandomQuestion(seed.current, playerNumber, roundNumber))
  }, [seed.current, playerNumber, roundNumber]);

  const handleTitleTap = (idx: number) => {
    tapCountRefs[idx].current += 1;
    if (tapTimerRefs[idx].current) {
      clearTimeout(tapTimerRefs[idx].current!);
    }
    tapTimerRefs[idx].current = setTimeout(() => {
      if (tapCountRefs[idx].current === 2) {
        idx === 0 ? setN1((prev) => prev + 1) : setN2((prev) => prev + 1);
      } else if (tapCountRefs[idx].current === 3 && tapCountRefs[idx].current > 0) {
        idx === 0 ? setN1((prev) => prev - 1) : setN2((prev) => prev - 1);
      }
      tapCountRefs[idx].current = 0;
    }, 350);
  };

  //Render
  const renderToolbar = () => {
    return (
      <IonHeader>
        <IonToolbar className={`player-${playerNumber}`} style={{ minHeight: '70px' }}>
          <IonTitle style={{ 'minHeight': '70px' }}>
            Player {playerNumber + 1} - Round {roundNumber}
          </IonTitle>
          <IonButtons slot="start" style={{ 'minHeight': '70px', transform: "scale(1.3) translateX(20px)" }}>
            <IonButton className={`player-${playerNumber}`} onClick={() => setPlayerNumber(Math.max(playerNumber - 1, 0))}>
              <IonIcon slot="start" icon={removeCircleOutline} />
            </IonButton>
            <span>Player Number</span>
            <IonButton className={`player-${playerNumber}`} onClick={() => setPlayerNumber(playerNumber + 1)}>
              <IonIcon slot="end" icon={addCircleOutline} />
            </IonButton>
          </IonButtons >
          <IonButtons slot="end" style={{ 'minHeight': '70px', transform: "scale(1.3) translateX(-20px)" }}>
            <IonButton onClick={() => setRoundNumber(Math.max(roundNumber - 1, 1))} className={`player-${playerNumber}`}>
              <IonIcon slot="start" icon={chevronBack} />
            </IonButton>
            Round
            <IonButton onClick={() => setRoundNumber(roundNumber + 1)} className={`player-${playerNumber}`}>
              <IonIcon slot="end" icon={chevronForward} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    );
  };
  const renderQuestion = () => {
    return (
      <div style={{ height: "80%" }}>
        <IonCard color="medium" style={{ height: "100%" }}>
          <IonCardContent style={{
            "position": "absolute",
            "top": "50%",
            "left": "50%",
            "width": "90%",
            "-ms-transform": "translateY(-50%) translateX(-50%)",
            "transform": "translateY(-50%) translateX(-50%)",
          }}>
            <IonCardTitle style={{ textAlign: "center" }}><div style={{ transform: "rotate(180deg) scale(0.9)", opacity: 0.7 }}>{question != undefined && question.q}?</div>{question != undefined && question.q}?</IonCardTitle>
          </IonCardContent>
        </IonCard>
      </div>
    );
  };
  const renderFooter = () => {
    return (
      <IonFooter style={{ minHeight: "60px" }}>
        <IonTitle style={{ width: "50%", padding: 0, backgroundColor: "var(--background)" }} className={`player-${getChildren(playerNumber)[0]}`} onClick={() => handleTitleTap(0)}>
          <div style={{ transform: "rotate(180deg)", opacity: 0.7 }}>
            {question?.a1}
          </div>
          <div>
            {question?.a1}
          </div>
          {n1 > 0 && <div className='circle-num' style={{ right: "16px" }}>{n1}</div>}
        </IonTitle>
        <IonTitle style={{ width: "50%", left: "50%", padding: 0, backgroundColor: "var(--background)" }} className={`player-${getChildren(playerNumber)[1]}`} onClick={() => handleTitleTap(1)}>
          <div style={{ transform: "rotate(180deg)", opacity: 0.7 }}>
            {question?.a2}
          </div>
          <div>
            {question?.a2}
          </div>
          {n2 > 0 && <div className='circle-num' style={{ left: "16px" }}>{n2}</div>}
        </IonTitle>
      </IonFooter>
    )
  }
  return (
    <IonPage>
      {renderToolbar()}
      <IonContent scroll-y="false">
        {renderQuestion()}
      </IonContent>
      {renderFooter()}
    </IonPage>
  );
}

export default GamePage