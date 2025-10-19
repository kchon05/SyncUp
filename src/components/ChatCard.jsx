import { useNavigate } from "react-router-dom";
import users from "../data/mock-data.json";

export function ChatCard ({user}) {
    return (
        <>
            <div className="chat-card">
                <div className="chat-left">
                    <div className="chat-img-cont">
                        <img src={user.image}/>
                    </div>

                    <div className="chat-text-cont">
                        <div className="chat-name-cont">
                            <h1>
                                {user.name}
                            </h1>
                        </div>

                        <div className="chat-message-cont">
                            <p>
                                Hi! How are you?
                            </p>
                        </div>
                    </div>
                </div>

                <button className="message-btn">
                    <img src="/public/img/message.svg"/>
                </button>
            </div>
        </>
    )
}