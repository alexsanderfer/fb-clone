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
                    <img src="https://scontent.flis9-1.fna.fbcdn.net/v/t1.0-9/124010810_171091051325599_5895172260957000872_n.jpg?_nc_cat=104&ccb=2&_nc_sid=825194&_nc_ohc=oUeZEgdIW1AAX8IiG8C&_nc_ht=scontent.flis9-1.fna&oh=04094e0b6a889a158b820a7b29bbd46a&oe=5FCD5623" alt=""/>
                </div>
            </div>
        </div>
    );
}