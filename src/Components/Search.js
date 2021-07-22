import React, { Component, Fragment } from "react"

class Search extends Component {

    constructor(prop) {
        super(prop);
        this.state = {
            UserName: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.getUserData(this.state.UserName);
        this.setState({
            UserName: ""
        })

    }

    onChange = (e) => {
        this.setState({
            UserName: e.target.value
        })
    }

    render() {
        return <Fragment>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label >Search</label>
                    <input type="text" className="form-control" value={this.state.UserName} onChange={this.onChange} placeholder="User Name">
                    </input>
                </div>
                {!this.state.UserName.length ? "" : <button type="submit" className="btn btn-primary" value="Submit">Submit</button>
                }
            </form>
        </Fragment>
    }
}

export default Search;