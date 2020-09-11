import React from 'react';
import { Avatar } from '@material-ui/core';

function SidebarChat() {
	return (
		<div className="sidebarChat">
			<Avatar src="https://avatars.dicebear.com/api/male/123.svg" />
			<div className="sidebarChat__info">
				<h3>Room name</h3>
				<p>Last message...</p>
			</div>
		</div>
	);
}

export default SidebarChat;
