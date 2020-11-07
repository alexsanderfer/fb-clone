import './App.css';
import Header from './Header';
import React from "react";
import Stories from "./Stories";
import FeedForm from "./FeedForm";
import Footer from "./Footer"
import FeedPost from "./FeedPost";


function App() {
	return (
		<div className="App">
			<Header/>
			<Stories/>
			<FeedForm/>
			<FeedPost nome={"Alexsander"} conteudo={"Este é meu primeiro post, para web-desenvolvimento."} horario={"20:00"}/>
			<Footer/>
		</div>
	);
}

export default App;