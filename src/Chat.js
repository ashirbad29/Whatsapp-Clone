import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import {
	Chat as ChatIcon,
	DonutLarge,
	InsertEmoticon,
	MoreVert,
	Mic,
} from '@material-ui/icons';
import { useParams } from 'react-router-dom';
import './Chat.css';
import db from './firebase';

function Chat() {
	const [input, setInput] = useState('');
	const [seed, setSeed] = useState('');
	const { roomId } = useParams();
	const [roomName, setRoomName] = useState();

	useEffect(() => {
		if (roomId) {
			db.collection('rooms')
				.doc(roomId)
				.onSnapshot(snapshot => setRoomName(snapshot.data().name));
		}
	}, [roomId]);

	// to generate a random avatar
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, [roomId]);

	const sendMessage = e => {
		e.preventDefault();
		console.log(input);
		setInput('');
	};

	return (
		<div className="chat">
			{/* chat header starts */}
			<div className="chat__header">
				<Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`} />
				<div className="chat__headerInfo">
					<h3>{roomName}</h3>
					<p>Last seen at...</p>
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
			{/* chat header ends */}

			{/* chat body starts */}
			{/* TODO: */}
			<div className="chat__body">
				{/* A message */}
				<p className={`chat__message ${true && 'chat__receiver'}`}>
					<span className="chat__name">ashirbad behera</span>
					Falcon op
					<span className="chat__timeStamp">2:57pm</span>
				</p>
			</div>
			{/* chat body ends */}

			{/* chat footer starts */}
			<div className="chat__footer">
				<InsertEmoticon />
				<form action="">
					<input
						value={input}
						type="text"
						placeholder="Type a message"
						onChange={e => setInput(e.target.value)}
					/>
					<button type="submit" onClick={sendMessage}>
						send message
					</button>
				</form>
				<Mic />
			</div>
			{/* chat footer ends */}
		</div>
	);
}

export default Chat;
