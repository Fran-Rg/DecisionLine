import { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonFooter,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
} from '@ionic/react';
interface NamePageProps {
  onName: (name: string) => void;
}
function NamePage({ onName }: NamePageProps) {
  const [name, setName] = useState<string>(localStorage.getItem("name") || "")

  const renderToolbar = () => {
    return (
      <IonHeader>
        <IonToolbar>
          <IonTitle className=" text-start">Enter your Name</IonTitle>
        </IonToolbar>
      </IonHeader>
    );
  };
  const start = () => {
    const outname = name.trim();
    localStorage.setItem("name", outname);

    onName(outname);
  }
  const renderFooter = () => {
    return (
      <IonFooter onClick={start}>
        <IonToolbar>
          <IonTitle >Start</IonTitle>
        </IonToolbar>
      </IonFooter>
    )
  }

  return (
    <IonPage>
      <IonContent scroll-y="false">
        {renderToolbar()}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle><IonInput
              style={{ border: "1px solid black" }}
              onIonInput={(e: any) => setName(e.target.value)}
              label="Username?"
              placeholder="Enter your username name"
              value={name}
              type="text"
              autocapitalize="words"
            /></IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Note: you will be requested to grant audio access, it is required for playing
          </IonCardContent>
        </IonCard>
      </IonContent>
      {renderFooter()}
    </IonPage>
  );
}

export default NamePage