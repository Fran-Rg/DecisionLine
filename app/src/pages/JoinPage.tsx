import {
  IonContent,
  IonHeader,
  IonButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import AudioData from '../components/AudioData';
import { useEffect, useState } from 'react';
interface JoinPageProps {
  onUserType: (host: boolean) => void;
}
function JoinPage({ onUserType }: JoinPageProps) {
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  useEffect(()=>{
    AudioData.startReceiving(()=>{
      setAudioEnabled(true)
    });
  },[])
  const handleClick = (isHost:boolean) => {
    onUserType(isHost);
  };
  const renderToolbar = () => {
    return (
      <IonHeader>
        <IonToolbar>
          <IonTitle className=" text-start">{audioEnabled ? "Host or Join?" : "Please allow the use of your microphone"}</IonTitle>
        </IonToolbar>
      </IonHeader>
    );
  };

  return (
    <IonPage>
      <IonContent scroll-y="false">
        {renderToolbar()}
        <div className="fullheight xc">
          <div className="container hcs">
            {audioEnabled?<>
            <IonButton disabled={!audioEnabled} color="medium" size="large" onClick={() => handleClick(true)}>Host</IonButton>
            <IonButton disabled={!audioEnabled} size="large" onClick={() => handleClick(false)}>Join</IonButton>
            </> : <span>Please allow the use of your microphone</span>}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default JoinPage