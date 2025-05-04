import React, { useState, useEffect } from 'react';
import JoinPage from './JoinPage';
import GamePage from './GamePage';
const Main: React.FC = () => {

	const id = Date.now().toString().slice(8)
	const [host, setHost] = useState<boolean>(false);
	const [gameState, setGameState] = useState<string>("");
	const [isVertical, setIsVertical] = useState<boolean>(window.innerWidth < window.innerHeight);

	useEffect(() => {
		setInterval(() => {
			setIsVertical(window.innerWidth < window.innerHeight);
		}, 1000);
		setGameState("join");
		// userTypeSet(true);// DEBUG
	}, []);

	const userTypeSet = (host:boolean) => {
		console.log(`User '${id}' is ${host ? "host" : "guest"}`);
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
		"join": <JoinPage onUserType={userTypeSet}/>,
		"game": <GamePage id={id} host={host}/>
	}
	return states[gameState] || <div>Unknown state</div>;
};

export default Main;
