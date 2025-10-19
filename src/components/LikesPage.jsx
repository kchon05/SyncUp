import { useNavigate } from "react-router-dom";
import { LikesUserCard } from "./LikesUserCard";
import users from "../data/mock-data.json";

export function LikesPage () {
    return (
        <>
            <div className="likes-cont">
                <h1>Wants to Sync!</h1>

                <div className="likesUserCard-cont">
                    {users.map((user) => (
                        <LikesUserCard key={user.id} user={user} />
                    ))
                    }
                </div>
            </div>
        </>
    )
}