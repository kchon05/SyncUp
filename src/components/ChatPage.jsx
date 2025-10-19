import { useNavigate } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { ChatCard } from "./ChatCardTemp";
import users from "../data/mock-data.json";

export function ChatPage () {
    return (
        <>
            <div className="chat-cont">
                {/* <h1>Chat</h1> */}

                <div className="chat-card-cont">
                    {users.map((user) => (
                        <ChatCard key={user.id} user={user} />
                    ))
                    }
                </div>
            </div>
        </>
    )
}