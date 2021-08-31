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
        // console.log(userProfile);
    }, [])
    let name = userProfile.login
    return <div>
        <h2>Hi:{name}</h2>

    </div>

}

export default UserView;