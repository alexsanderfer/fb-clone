import './App.css';
import Header from './Header';
import React from "react";
import Stories from "./Stories";
import Feed from "./Feed";
import Footer from "./Footer"

function App() {
	return (
		<div className="App">
			<Header/>
			<Stories/>
			<Feed/>
			
			<Footer/>
		</div>
	);
}

export default App;