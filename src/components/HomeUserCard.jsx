import { useNavigate } from "react-router-dom";
import users from "../data/mock-data.json";


export function HomeUserCard ({user}) {
    return (
        <div className="userCard">
            <div className="userCard-top">
                <div>
                    <div className="userImage-cont">
                        <img src={user.image}/>
                    </div>
                    <div className="name-cont">
                        <h1>{user.name}</h1>
                    </div>
                </div>
                
                <div className="nameMajor">
                    <h2>{user.major} @ {user.school}</h2>
                </div>
            </div>
            <div className="userCard-bio">
                <p>
                    Hi! I'm {user.name}.
                </p>
            </div>  
        </div>
    )
}