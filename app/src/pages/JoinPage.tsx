import {
  IonContent,
  IonHeader,
  IonButton,
  IonPage,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { chevronForward } from 'ionicons/icons';
import QRCode from 'qrcode'

interface JoinPageProps {
  start: () => void;
}
function JoinPage({ start }: JoinPageProps) {
  const [qrURL, setQRurl] = useState<string>("");

  useEffect(() => {
    QRCode.toDataURL(window.location.href)
      .then(setQRurl)
      .catch((err: string) => {
        console.error(err)
      })
  }, [])
  const renderToolbar = () => {
    return (
      <IonHeader>
        <IonToolbar>
          <IonTitle className=" text-start">Start</IonTitle>
        </IonToolbar>
      </IonHeader>
    );
  };

  return (
    <IonPage>
      <IonContent fullscreen scroll-y="false">
        {renderToolbar()}
        <div className='outerwrap'>
        <div className='innerwrap'>
          {qrURL && (
            <img
              style={{
                minHeight: "70%",
                minWidth: "70%",
              }}
              src={qrURL}
              alt="QR"
            />
          )}
          </div>
          <div className='innerwrap'>
            <IonButton size="large" style={{ width: "30%", height: "30%" }} onClick={() => start()}>
              Start
              <IonIcon slot="end" icon={chevronForward} />
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default JoinPage