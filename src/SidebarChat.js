import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';

function SidebarChat({ addNewChat }) {
	const [seed, setSeed] = useState('');

	// to generate a random avatar
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);

	const createChat = () => {
		const roomName = prompt('please enter name for chat');
		if (roomName) {
			//TODO: DATABAS STUFF
		}
	};

	return !addNewChat ? (
		<div className="sidebarChat">
			<Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`} />
			<div className="sidebarChat__info">
				<h3>Room name</h3>
				<p>Last message...</p>
			</div>
		</div>
	) : (
		<div onClick={createChat} className="sidebarChat">
			<h2>Add new Chat</h2>
		</div>
	);
}

export default SidebarChat;
