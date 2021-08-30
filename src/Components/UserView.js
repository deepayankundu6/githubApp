import React from "react"
import { Component } from "react";

class UserView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h2>Hi!</h2>
            {console.log(this.props.match.params.id)}
        </div>
    }
}


export default UserView;