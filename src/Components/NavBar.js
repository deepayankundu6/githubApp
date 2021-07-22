import React, { Component, Fragment } from "react"
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {

        return <Fragment>
            <div className="Navbar" style={myStyles}> <i className="fab fa-github" ></i>  GitHubFinder
                <ul style={containerStyle}>
                    <li style={{ marginRight: '25px' }}> <Link to='/'>Home</Link></li>
                    <li><Link to='/about'> About</Link></li>
                </ul>
            </div>
        </Fragment>
    }
}

const myStyles = {
    background: "#000080",
    color: "white",
    paddingBottom: "5px",
    paddingTop: "5px"
}
let containerStyle = {
    display: "flex",
    justifyContent: "center",
}
export default NavBar;