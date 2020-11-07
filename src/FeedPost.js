import profile from "./resources/profile.jpg";
import React from "react";

export default function (props) {
    return (
        <div className="feedPosts">
            <div className="feedPostSingle">
                <div className="feedPost_profile">
                    <img src={profile} alt=""/>
                    <h3>{props.nome} <br/> <span> {props.horario}</span></h3>
                </div>

                <div className="feedPost_content">
                    <p>{props.conteudo}</p>
                    <img src={props.img} alt=""/>
                </div>
            </div>
        </div>
    );
}