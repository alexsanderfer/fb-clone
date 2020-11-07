import './App.css';
import	{useState, useEffect} from 'react';
import Header from './Header';
import React from "react";
import Stories from "./Stories";
import FeedForm from "./FeedForm";
import Footer from "./Footer"
import FeedPost from "./FeedPost";
import {db} from './firebase';


function App() {
	const [posts, setPosts] = useState([]);
	useEffect(()=>{
		db.collection('posts').onSnapshot(snapshot => {
			setPosts(snapshot.docs.map(function (doc){
				return {info:doc.data()}
			}));
		})

		debugger;
	},[])

	return (
		<div className="App">
			<Header/>
			<Stories/>
			<FeedForm/>
			{
				posts.map(function(val) {
					return <FeedPost nome={val.info.nome}
									 conteudo={val.info.conteudo}
									 img={val.info.img}
									 horario={"20:00"}/>
				})
			}
			<Footer/>
		</div>
	);
}

export default App;