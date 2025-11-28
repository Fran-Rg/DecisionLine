
import {
  IonContent,
  IonButton,
  IonPage,
  IonIcon,
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { chevronForward, chevronBack, chevronForwardOutline } from 'ionicons/icons';
import QRCode from 'qrcode';


interface JoinPageProps {
  start: (lang: string) => void;
}

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
];

function JoinPage({ start }: JoinPageProps) {
  const [qrURL, setQRurl] = useState<string>("");
  const [langIdx, setLangIdx] = useState<number>(0);

  useEffect(() => {
    QRCode.toDataURL(window.location.href)
      .then(setQRurl)
      .catch((err: string) => {
        console.error(err);
      });
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen scroll-y="false">
        <div className="outerwrap">
          <div className="innerwrap">
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
          <div className="innerwrap" style={{ flexDirection: 'column', alignItems: 'center' }}>
            <IonButton
              size="large"
              style={{ width: "30%", height: "30%" }}
              onClick={() => start(LANGUAGES[langIdx].code)}
            >
              Start
              <IonIcon slot="end" icon={chevronForward} />
            </IonButton>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 24 }}>
              <IonButton
                fill="clear"
                onClick={() => setLangIdx((langIdx + LANGUAGES.length - 1) % LANGUAGES.length)}
              >
                <IonIcon icon={chevronBack} />
              </IonButton>
              <span style={{ fontSize: 22, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 24 }}>{LANGUAGES[langIdx].flag}</span> {LANGUAGES[langIdx].label}
              </span>
              <IonButton
                fill="clear"
                onClick={() => setLangIdx((langIdx + 1) % LANGUAGES.length)}
              >
                <IonIcon icon={chevronForwardOutline} />
              </IonButton>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default JoinPage