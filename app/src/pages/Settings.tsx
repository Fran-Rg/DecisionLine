import {
	IonContent,
	IonHeader,
	IonLabel,
	IonMenuButton,
	IonNote,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import React from 'react';

const Settings: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle className=" text-start">Settings</IonTitle>
					<IonMenuButton slot="start"></IonMenuButton>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<div className="container relative mx-auto top-1/2 -translate-y-1/2">
					<IonLabel>Hello 👌</IonLabel>
					<IonNote>A very simple app with Ionic</IonNote>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Settings;
