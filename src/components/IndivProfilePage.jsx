import { useParams, useNavigate, Link } from "react-router-dom";
import users from "../data/mock-data.json";


export function IndivProfilePage() {
    const { userName } = useParams();

    const user = users.find(
        (u) => u.name.toLowerCase().replace(/\s+/g, "-") === userName
    );

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
                 
                 <Link to="/">
                    <button className="sync-btn">
                        <img src="/img/sync.svg"/>
                    </button>
                 </Link>
            </div>

            <div className="indivProfPage-bottom">
                <div className="information-cont">
                    <div className="indivProfPfp">
                        <img src={user.image}/>
                    </div>

                    <div className="indivName">
                        <h1>{user.name} | {user.age}</h1>
                    </div>

                    <div className="indivMajorSchool">
                        <h2>{user.major} @ {user.school}</h2>
                    </div>

                    <div className="indivLink-btn">
                        <button className="linkedin-btn">
                           LinkedIn
                        </button>

                        <button className="resume-btn">
                            Resume
                        </button>
                    </div>

                    <div className="large-traits-cont">
                        <div className="traits-cont">
                            <div className="prof-cont">
                                <h3>Professional</h3>
                                <div className="tracks">
                                    <p className="tracks-title">Track</p>
                                    <p>{user.track}</p>
                                </div>  

                                <div className="passions">
                                    <p className="passions-title">Passions</p>
                                    <p>{user.passions}</p> 
                                </div>

                                <div className="skills">
                                    <p className="skills-title"> Skills</p>
                                    <p>{user.skills}</p>
                                </div>

                                <div className="endorsements">
                                    <p className="endorsements-title"> Endorsement</p>
                                    <p>{user.endorsements}</p>
                                </div>
                            </div>

                            <div className="pers-cont">
                                <h3>Personal</h3>
                                <div className="mbti">
                                    <p className="mbti-title">MBTI</p>
                                    <p>{user.mbti}</p>
                                </div>

                                <div className="hobbies">
                                    <p className="hobbies-title">Hobbies</p>
                                    <p>{user.hobbies}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   

                </div>
            </div>
        </>
    )
}