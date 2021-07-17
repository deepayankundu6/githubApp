import React from "react"

class PeopleCards extends React.Component {

    render() {
        console.log(this.props.Users);
        return this.props.Users.default.map((user) => {
            return <div class="card" style={{ margin: '1%' }}>
                <img class="card-img-top" style={myImageStyles} src={user.avatar_url} alt="User Image" />
                <div class="card-body">
                    <h5 class="card-title">{user.login}</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <a href={user.html_url} class="btn btn-primary">Profile Link</a>
                </div>
                <br></br>
            </div>
        });
    }
}

const myImageStyles = {
    borderRadius: '50%',
    width: '10rem'
}
export default PeopleCards;