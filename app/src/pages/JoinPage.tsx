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
  const [hostPicked, setHostPicked] = useState<boolean>(false);

  const handleClick = (isHost:boolean) => {
    setHostPicked(true)
    AudioData.startReceiving(() => {
      onUserType(isHost);
    }, () => {
      onUserType(false);
    });
  };
  const renderToolbar = () => {
    return (
      <IonHeader>
        <IonToolbar>
          <IonTitle className=" text-start">{!hostPicked ? "Host or Join?" : "Please allow the use of your microphone"}</IonTitle>
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
            {!hostPicked ? <>
            <IonButton disabled={hostPicked} color="medium" size="large" onClick={() => handleClick(true)}>Host</IonButton>
            <IonButton disabled={hostPicked} size="large" onClick={() => handleClick(false)}>Join</IonButton>
            </> : <span>Please allow the use of your microphone</span>}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default JoinPage