import React from "react"

const PeopleCards = (props) => {
    return <div>
        {props.Users.map((user) => {
            return <div className="card" style={containerStyle}>
                <img className="card-img-top" style={myImageStyles} src={user.avatar_url} alt="User Image" />
                <div className="card-body">
                    <h5 className="card-title">{user.login}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <a href={user.html_url} className="btn btn-primary">Profile Link</a>
                </div>
                <br></br>
            </div>

        })}
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
export default PeopleCards;