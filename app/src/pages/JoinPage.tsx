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
import QRCode from 'qrcode'

interface JoinPageProps {
  onUserType: (host: boolean) => void;
}
function JoinPage({ onUserType }: JoinPageProps) {
  const [hostPicked, setHostPicked] = useState<boolean>(false);
  const [qrURL, setQRurl] = useState<string>("");

  useEffect(() => {
    QRCode.toDataURL(window.location.href)
      .then(setQRurl)
      .catch((err: string) => {
        console.error(err)
      })
  }, [])
  const handleClick = (isHost: boolean) => {
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
          <div>
            {!hostPicked ? <>
              <IonButton disabled={hostPicked} color="medium" size="large" onClick={() => handleClick(true)}>Host</IonButton>
              <IonButton disabled={hostPicked} size="large" onClick={() => handleClick(false)}>Join</IonButton>
            </> : <span>Please allow the use of your microphone</span>}
          </div>
          <div style={{ position: "absolute", bottom: 0, right: 0 }} >
            {qrURL && <img style={{ minHeight: "200px", minWidth: "200px" }}src={qrURL} alt="QR" />}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default JoinPage