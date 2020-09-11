import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
	return (
		<div className="app">
			<div className="app__body">
				{/* sidebar */}
				<Sidebar />
				{/* chat box */}
			</div>
		</div>
	);
}

export default App;
