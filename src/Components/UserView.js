import React from "react"
import { useParams } from "react-router-dom";

function UserView() {

    let { id } = useParams();

    return <div>
        <h2>Hi!</h2>
        {console.log(id)}
    </div>

}


export default UserView;