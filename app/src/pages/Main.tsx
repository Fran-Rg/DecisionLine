import React, { useState, useEffect } from 'react';
import NamePage from './NamePage';
import JoinPage from './JoinPage';
import GamePage from './GamePage';
const Main: React.FC = () => {

	const [name, setName] = useState<string>("");
	const [host, setHost] = useState<boolean>(false);
	const [gameState, setGameState] = useState<string>("");
	const [isVertical, setIsVertical] = useState<boolean>(window.innerWidth < window.innerHeight);

	useEffect(() => {
		setInterval(() => {
			setIsVertical(window.innerWidth < window.innerHeight);
		}, 1000);
		setGameState("name");
		// nameSet("Fran"); // DEBUG
		// userTypeSet(true);// DEBUG
	}, []);

	const nameSet = (name:string) => {
		console.log(`Name set to '${name}'`);
		setName(name);
		setGameState("join");
	}
	const userTypeSet = (host:boolean) => {
		console.log(`User '${name}' is ${host ? "host" : "guest"}`);
		setHost(host);
		setGameState("game");
	}

	if (isVertical) {
		return (
			<div style={{ textAlign: 'center', marginTop: '80%' }}>
				<p>
					You must use this app in landscape mode
				</p>
			</div>
		)
	}
	const states = {
		"name": <NamePage onName={nameSet} />,
		"join": <JoinPage onUserType={userTypeSet}/>,
		"game": <GamePage name={name} host={host}/>
	}
	return states[gameState] || <div>Unknown state</div>;
};

export default Main;
