import React from 'react';
import { home, settings } from 'ionicons/icons';
import {
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuToggle,
	IonNote,
} from '@ionic/react';

interface MenuItem {
	url: string;
	icon: string;
	title: string;
}

const AppPages: MenuItem[] = [
	{
		url: 'home',
		icon: home,
		title: 'Home',
	},

	{
		url: 'settings',
		icon: settings,
		title: 'Settings',
	},
];

const Menu: React.FC = () => {
	return (
		<IonMenu contentId="main" type="overlay">
			<IonContent>
				<IonList className=" h-full">
					<IonListHeader>Welcome!</IonListHeader>
					<IonNote>This is a simple app wit React + Vite + Ionic</IonNote>
					{AppPages.map((appPage, index) => {
						return (
							<IonMenuToggle autoHide={false} key={index}>
								<IonItem
									detail={false}
									lines="none"
									routerDirection="none"
									routerLink={appPage.url}
								>
									<IonIcon slot="start" icon={appPage.icon}></IonIcon>
									<IonLabel>{appPage.title}</IonLabel>
								</IonItem>
							</IonMenuToggle>
						);
					})}
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
