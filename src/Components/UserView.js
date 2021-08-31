import { React, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios';

function UserView() {

    let userProfiledata;
    let { id } = useParams();

    useEffect(() => {
        axios.get(`https://api.github.com/user/${id}`).then(data => {

            userProfiledata = data;
            console.log(userProfiledata);

        }).catch(err => {
            console.log("Error occured while receiving data. ", err);
        })
    }, [])


    return <div>
        <h2>Hi!</h2>

    </div>

}

export default UserView;