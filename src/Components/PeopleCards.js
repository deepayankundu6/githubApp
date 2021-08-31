import React from "react"
import { useHistory } from 'react-router-dom';

const PeopleCards = (props) => {
    const history = useHistory();
    return <div style={CenterAlign}>
        {props.Users.map((user) => {
            return <div className="card" style={containerStyle}>
                <img className="card-img-top" style={myImageStyles} src={user.avatar_url} alt="User Image" />
                <div className="card-body">
                    <h5 className="card-title">{user.login}</h5>
                    <button onClick={() => history.push(`/details/${user.id}`)} className="btn btn-primary">Profile Link</button>
                </div>
                <br></br>
            </div>

        })}
    </div>
}



const myImageStyles = {
    borderRadius: '50%',
    width: '5rem',
    margin: 'auto',
    marginTop: '1%'
}

let containerStyle = {
    display: "flex",
    justifyContent: "center",
    margin: 'auto',
    width: '50%',
    textAlign: 'center',
    marginBottom: '1%',
    marginTop: '1%'
}

let CenterAlign = {
    margin: 'auto',
    width: '90%'
}
export default PeopleCards;