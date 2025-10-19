import users from "../data/mock-data.json";

export function LikesUserCard({user}) {

    return (
        <div className="likesUserCard">
            <div className="likesUserCard-top">
                <div className="likesNameImage">
                    <div className="likesUserImage-cont">
                        <img src={user.image}/>
                    </div>
                        <div className="likesName-cont">
                        <h1>{user.name}</h1>
                    </div>
                </div>
                
                <div className="likesUserMajor">
                    <h2>{user.major} @ {user.school}</h2>
                </div>
            </div>
            <div className="likesuserCard-bio">
                <p>
                    Hi! Are you still looking for another groupmate?
                </p>
            </div>  
        </div>
    )
}