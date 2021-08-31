import { React, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios';

function UserView() {
    const [userProfile, setUserProfile] = useState(Object);
    let { id } = useParams();

    useEffect(() => {
        axios.get(`https://api.github.com/user/${id}`).then(data => {
            setUserProfile(data.data);

        }).catch(err => {
            console.log("Error occured while receiving data. ", err);
        })
        console.log(userProfile);
    }, [])
    return <div>
        <div className="card text-center" style={containerStyle}>
            <div className="card-header">
                <h3></h3>
            </div>
            <div className="card-body" >
                <img src={userProfile.avatar_url} style={myImageStyles}></img>
                <h5 className="card-title">{userProfile.login}</h5>
                <p className="card-text">{userProfile.bio ? userProfile.bio : " No Bio Available!!! "}</p>
                <p className="card-text">  <i class="fas fa-map-marker-alt"></i> {userProfile.location ? userProfile.location : "NA"}</p>
                <p className="card-text"> <i class="fas fa-envelope"></i> {userProfile.email ? userProfile.email : "NA"}</p>
                <p className="card-text"> <i class="fas fa-building"></i> {userProfile.company ? userProfile.company : "NA"}</p>
                <p>
                    <i class="fas fa-box"></i> {userProfile.public_repos}&emsp;
                    <i class="fas fa-users"></i> {userProfile.followers}
                </p>
            </div>
            <div class="card-footer text-muted">
                <a href={userProfile.html_url}> Github Page</a>
            </div>
        </div>

    </div>

}

const myImageStyles = {
    borderRadius: '50%',
    width: '10rem',
    margin: '10px'
}

let containerStyle = {
    display: "flex",
    justifyContent: "center",
    margin: '1%'

}

export default UserView;