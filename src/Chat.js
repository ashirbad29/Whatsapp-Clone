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
import { useStateValue } from './StateProvider';
import firebase from 'firebase';

function Chat() {
	const [input, setInput] = useState('');
	const [seed, setSeed] = useState('');
	const { roomId } = useParams();
	const [roomName, setRoomName] = useState();
	const [messages, setMessages] = useState([]);
	const [{ user }, dispatch] = useStateValue();
	useEffect(() => {
		if (roomId) {
			db.collection('rooms')
				.doc(roomId)
				.onSnapshot(snapshot => setRoomName(snapshot.data().name));

			// handle messages from db
			db.collection('rooms')
				.doc(roomId)
				.collection('messages')
				.orderBy('timestamp', 'asc')
				.onSnapshot(snapshot =>
					setMessages(snapshot.docs.map(doc => doc.data()))
				);
		}
	}, [roomId]);

	// to generate a random avatar
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, [roomId]);

	const sendMessage = e => {
		e.preventDefault();
		console.log(input);

		db.collection('rooms').doc(roomId).collection('messages').add({
			message: input,
			name: user.displayName,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInput('');
	};

	return (
		<div className="chat">
			{/* chat header starts */}
			<div className="chat__header">
				<Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`} />
				<div className="chat__headerInfo">
					<h3>{roomName}</h3>
					<p>
						{/* last seen... */}
						{new Date(
							messages[messages.length - 1]?.timestamp?.toDate()
						).toUTCString()}
					</p>
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
			<div className="chat__body">
				{/* A message */}
				{messages.map(message => (
					<p
						className={`chat__message ${
							message.name === user.displayName && 'chat__receiver'
						}`}
					>
						<span className="chat__name">{message.name}</span>
						{message.message}
						<span className="chat__timeStamp">
							{new Date(message.timestamp?.toDate()).toUTCString()}
						</span>
					</p>
				))}
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
