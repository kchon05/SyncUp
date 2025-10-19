import { useParams, useNavigate, Link } from "react-router-dom";
import users from "../data/mock-data.json";


export function IndivProfilePage() {
    const { userName } = useParams();
    const navigation = useNavigate();

    const user = users.find(
        (u) => u.name.toLowerCase().replace(/\s+/g, "-") === userName
    );

    // const goHome = () => {
    //     navigate("/");
    // }

    if (!user) {
        return <p>User not found!</p>
    }

    return (
        <>
            <div className="button-cont">
                <Link to="/">
                    <button className="go-back-btn">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                </Link>
                 
                 <button className="sync-btn">
                    <img src="/img/sync.svg"/>
                 </button>
            </div>

            <div className="information-cont">

            </div>
        </>
    )
}