import { React, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';

function UserRepos() {
    const history = useHistory();
    const [userRepos, setUserRepos] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://api.github.com/user/${id}/repos`).then(response => {
            setUserRepos(response.data);
        }).catch(err => {
            console.log("Error occured while receiving data. ", err);
        })
    }, [])
    console.log("UserReposList:", userRepos);
    return <div>
        &nbsp;<i className="fas fa-chevron-square-left" onClick={() => history.goBack()} ></i>
        {userRepos.map((repo) => {
            return <div className="card" style={containerStyle}>
                <div className="card-body">
                    <h4 className="card-title">{repo.name}</h4>
                    <h5 className="card-text"><b>Description: </b>{repo.description}</h5>
                    <p className="card-text"><b>Created On: </b> {repo.created_at}</p>
                    <p className="card-text"><b>Last updated On: </b> {repo.updated_at}</p>
                    <a href={repo.svn_url} className="card-link">Repo link</a>
                </div>
            </div>
        })}
    </div>
}

let containerStyle = {
    display: "flex",
    justifyContent: "center",
    margin: '1%',
    width: '50%'
}

export default UserRepos;