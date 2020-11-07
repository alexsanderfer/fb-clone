import profile from "./resources/profile.jpg";
import {FaRegSmile, IoMdImages, MdVideoCall} from "react-icons/all";

export default function() {
    return (
        <div className="feed">
            <div className="feedForm">
                <img src={profile} alt={""}/>
                <input type="text" placeholder={"No que você está pensando, Alexsander?"}/>
            </div>
            <div className="feedIcons">
                <div className="iconSingle">
                    <MdVideoCall/>
                    <span>Vídeo ao vivo</span>
                </div>

                <div className="iconSingle img">
                    <IoMdImages/>
                    <span>Foto/Vídeo</span>
                </div>

                <div className="iconSingle emoji">
                    <FaRegSmile/>
                    <span>Sentimento/atividade</span>
                </div>
				</div>
        </div>
    );
}