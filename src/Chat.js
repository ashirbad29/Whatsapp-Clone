import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { Chat as ChatIcon, DonutLarge, MoreVert } from '@material-ui/icons';
import './Chat.css';

function Chat() {
	const [seed, setSeed] = useState('');

	// to generate a random avatar
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);

	return (
		<div className="chat">
			<div className="chat__header">
				<Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`} />
				<div className="chat__headerInfo">
					<h3>Room Name</h3>
					<p>Last seem at...</p>
				</div>
				<div className="chat__headerRight">
					<IconButton>
						<DonutLarge />
					</IconButton>

					<IconButton>
						<ChatIcon />
					</IconButton>

					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>

			<div className="chat__body">
				<p className="chat__message">Falcon op</p>
			</div>

			<div className="chat__footer"></div>
		</div>
	);
}

export default Chat;
