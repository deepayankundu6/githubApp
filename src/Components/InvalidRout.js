import React, { Component } from "react"

class InvalidRoute extends Component {
    render() {
        return <div style={containerStyle}>
            <div className="center">
                <h1 style={{ color: 'Red' }}>No page found</h1>
                <h2>Please check the URL</h2>
            </div>
        </div>
    }
}
let containerStyle = {
    display: "flex",
    justifyContent: "center"
}
export default InvalidRoute;