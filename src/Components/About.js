import React, { Component } from "react"

class About extends Component {
    render() {
        return <div style={containerStyle}>
            <div className="center">
                <h2> About this app:</h2>
                <h3> <b>Name: </b>Github App </h3>
                <h3> Version: 1</h3>
                <h5> Developed in react by Deepayan Kundu</h5>
            </div>
        </div>
    }
}
let containerStyle = {
    display: "flex",
    justifyContent: "center"
}
export default About;