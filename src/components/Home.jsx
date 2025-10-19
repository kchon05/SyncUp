import { useNavigate } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { HomeUserCard } from "./HomeUserCard";
import users from "../data/mock-data.json"

export function Home () {
    return (
        <div>
            <SearchBar/>
            <div className="userCard-cont">
                {users.map((user) => (
                    <HomeUserCard key={user.id} user={user}/>
                ))}
            </div>
        </div>
    )
}