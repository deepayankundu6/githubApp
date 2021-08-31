import { React, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios';

function UserRepos() {
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
        {userRepos.map((repo) => {
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{repo.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{repo.description}</h6>
                    <p className="card-text">Created On : {repo.created_at}</p>
                    <p className="card-text">Last updated On : {repo.updated_at}</p>
                    <a href={repo.svn_url} className="card-link">link</a>
                </div>
            </div>
        })}
    </div>
}
export default UserRepos;