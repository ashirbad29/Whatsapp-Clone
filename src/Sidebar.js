import React from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Avatar />
				<div className="sidebar__headerRight">
					<IconButton>
						<DonutLarge />
					</IconButton>

					<IconButton>
						<Chat />
					</IconButton>

					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>

			<div className="sidebar__search">
				<div className="siderbar__searchContainer">
					<SearchOutlined />
					<input placeholder="search or start new chat" type="text" />
				</div>
			</div>

			<div className="sidebar__chats">
				<SidebarChat />
			</div>
		</div>
	);
}
