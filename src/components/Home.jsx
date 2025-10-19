import { useNavigate, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";
import { HomeUserCard } from "./HomeUserCard";
import users from "../data/mock-data.json"

export function Home () {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase());
    };

    // const filteredUsers = users.filter((user) => 
    //     // user.name.toLowerCase().includes(searchQuery)

    // );

    const filteredUsers = users.filter((user) => {
        const fieldsSearching = [
            user.name,
            user.major,
            user.school,
            user.grade,
            user.age?.toString(),
            user.skills,
            user.passions,
            user.track,
            user.hobbies,
            user.mbti
        ];

        return fieldsSearching.some(
            (field) =>
                field &&
                field.toString().toLowerCase().includes(searchQuery)
        );
    });

    return (
        <div>
            <SearchBar onSearch={handleSearch}/>
            <div className="userCard-cont">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <Link to={`/profile/${user.name ? user.name.toLowerCase().replace(/\s+/g, "-") : "default-title"}`}>
                            <HomeUserCard key={user.id} user={user}/>
                        </Link>
                    ))
                ) : (
                    <p>User not found!</p>
                )}
            </div>
        </div>
    )
}