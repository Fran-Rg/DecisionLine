import { useState, useEffect, useRef, useReducer, Fragment } from 'react';
import {
  IonContent,
  IonHeader,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButtons,
  IonButton,
  IonPage,
  IonIcon,
  IonTitle,
  IonProgressBar,
  IonToolbar,
  IonFooter,
} from '@ionic/react';
import { chevronForward, addCircleOutline, removeCircleOutline, sync } from 'ionicons/icons';

import getRandomQuestion, { Question } from '../data/Questions';
import getChildren from '../data/Player';
import AudioData from '../components/AudioData';

interface GamePageProps {
  host: boolean,
  id: string,
}
function GamePage({ host, id }: GamePageProps) {

  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const seed = useRef<string>(Date.now().toString().slice(8));
  const joinHash = useRef<string>("");
  const [playerNumber, setPlayerNumber] = useState<number>(AudioData.accepted ? -1 : 1);
  const playerTracker = useRef<any>({});
  const roundNumber = useRef<number>(1);
  const [question, setQuestion] = useState<Question>();

  useEffect(() => {
    console.log("GamePage mounted");
    if (AudioData.accepted) {
      AudioData.resetCallbacks();
      AudioData.addCallback(onDataReceived);
    }
    if (host) {
      setPlayerNumber(0);
      roundNumber.current = 1;
    } else {
      joinHash.current = String(Math.floor(Math.random() * (10000 + 1))).padStart(5, '0')
    }
  }, []);
  useEffect(() => {
    setQuestion(getRandomQuestion(seed.current, playerNumber, roundNumber.current))
  }, [seed.current, playerNumber, roundNumber.current]);

  useEffect(() => {
    if (!host && joinHash.current !== '') {
      forceSync()
    }
  }, [joinHash]);


  const onDataReceived = (data: string) => {
    const pay = data.split('.')
    console.log(`Data received: ${pay}`);
    const head = pay.shift()
    const action = pay.shift() || ""
    if (head == 'h' && host) {
      // client -> host
      switch (action) {
        case "s": // client Joins/sync and needs to handshake
          onSync(pay)
          break;
        default:
          console.log(`Unknown client action ${action}:${pay}`)
      }
    } else if (head == 'c' && !host) {
      // host -> clients
      switch (action) {
        case "s": // client Joins and get response handshake
          onAnswerJoin(pay)
          break;
        case "n": // next question
          onNext(parseInt(pay[0]))
          break;
        default:
          console.log(`Unknown client action ${action}:${pay}`)
      }
    }
    //forceUpdate()
  }


  // Host handlers
  const onSync = (payload: string[]) => {
    let playerNumber;
    if (!Object.keys(playerTracker.current).includes(payload[0])) {
      playerNumber = Object.keys(playerTracker.current).length + 1
      console.log(`New player ${payload[0]} join as player ${playerNumber}`)
      playerTracker.current[payload[0]] = playerNumber
    } else {
      playerNumber = playerTracker.current[payload[0]]
      console.log(`Existing player ${payload[0]} sync as player ${playerNumber}`)
    }
    setTimeout(() => {
      send(['c', 's', payload[0], payload[1], playerNumber.toString(), roundNumber.current.toString(), seed.current])
    }, 500)
  }
  const goNext = () => {
    const newRoundNumber = roundNumber.current + 1
    console.log(`Moving to Round ${newRoundNumber}`)
    roundNumber.current = newRoundNumber
    if (host) {
      send(['c', 'n', newRoundNumber.toString()])
    }
    forceUpdate()
  }

  const onAnswerJoin = (payload: string[]) => {
    const receivedId = payload.shift()
    const receivedHash = payload.shift()
    if (receivedId === id && receivedHash === joinHash.current) {
      console.log(`Game info ${payload}`)
      setPlayerNumber(parseInt(payload[0]))
      roundNumber.current = parseInt(payload[1])
      seed.current = payload[2]
    } else {
      console.log(`Game info payload Received for ${receivedId} != ${id} && ${receivedHash} != ${joinHash.current}`)
    }
  }
  const onNext = (newRoundNumber: number) => {
    console.log(`Client Moving to Round ${newRoundNumber}`)
    roundNumber.current = newRoundNumber
    forceUpdate()
  }
  const forceSync = () => {
    console.log(`Client Force sync`)
    send(['h', 's', id, joinHash.current])
  }
  // Else
  const send = (payload: string[]) => {
    if (AudioData.accepted) {
      const sendingText = payload.join('.')
      console.log(`Sending ${sendingText}`)
      AudioData.send(sendingText);
    }
  }
  //Render
  const renderToolbar = () => {
    return (
      <IonHeader>
        <IonToolbar className={`player-${playerNumber}`} style={{ minHeight: '70px' }}>
          <IonTitle style={{ 'paddingLeft': '10px', 'textAlign': 'left', 'minHeight': '70px' }}>
            Round {roundNumber.current} - {host ? "Host" : `Player ${playerNumber}`}
          </IonTitle>
          {host &&
            <IonButtons slot="end" style={{ 'minHeight': '70px', transform: "scale(1.2)" }}>
              <IonButton onClick={goNext} className={`player-${playerNumber}`}>
                Next
                <IonIcon slot="end" icon={chevronForward}></IonIcon>
              </IonButton>
            </IonButtons>}
          {!host &&
            <IonButtons slot="end" style={{ 'minHeight': '70px', transform: "scale(1.1) translateX(-12px)" }}>
              <IonButton className={`player-${playerNumber}`} onClick={() => setPlayerNumber(playerNumber - 1)}>
                <IonIcon slot="end" icon={removeCircleOutline} />
              </IonButton>
              <span>Player Number</span>
              <IonButton className={`player-${playerNumber}`} onClick={() => setPlayerNumber(playerNumber + 1)}>
                <IonIcon slot="end" icon={addCircleOutline} />
              </IonButton>
              <IonButton onClick={goNext} className={`player-${playerNumber}`}>
                Next Round
                <IonIcon slot="end" icon={chevronForward} />
              </IonButton>
              {AudioData.accepted && <IonButton onClick={forceSync} className={`player-${playerNumber}`}>
                Sync
                <IonIcon slot="end" icon={sync} />
              </IonButton>}
            </IonButtons>
          }
          {!host && playerNumber === -1 &&
            <IonProgressBar type="indeterminate"></IonProgressBar>}
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
        <IonTitle style={{ width: "50%", padding: 0, backgroundColor: "var(--background)" }} className={`player-${getChildren(playerNumber)[0]}`}><div style={{ transform: "rotate(180deg)", opacity: 0.7 }}>{question?.a1}</div><div >{question?.a1}</div></IonTitle>
        <IonTitle style={{ width: "50%", left: "50%", padding: 0, backgroundColor: "var(--background)" }} className={`player-${getChildren(playerNumber)[1]}`}><div style={{ transform: "rotate(180deg)", opacity: 0.7 }}>{question?.a2}</div><div >{question?.a2}</div></IonTitle>
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