import React from "react"

class NavBar extends React.Component {
    render() {

        return <div class="Navbar" style={myStyles}> <i class="fab fa-github"></i> GitHub app.</div>
    }
}

const myStyles = {
    background: "#000080",
    color: "white",
    paddingBottom: "5px",
    paddingTop: "5px"
}
export default NavBar;