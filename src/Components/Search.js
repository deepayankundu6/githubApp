import React, { Component, Fragment } from "react"

class Search extends Component {
    constructor(props) {
        super(props);
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

    onClearClick = () => {
        this.props.clearUserData();
    }

    render() {
        return <Fragment>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label >Search</label>
                    <input type="text" className="form-control" value={this.state.UserName} onChange={this.onChange} placeholder="User Name">
                    </input>
                </div>
                {!this.state.UserName.length ? "" : <button type="submit" style={clearButtonStyle} className="btn btn-primary" value="Submit">Submit</button>
                }

            </form>
            {!this.props.Users.length ? "" : <button className="btn btn-danger" style={clearButtonStyle} onClick={this.onClearClick}>Clear</button>
            }
        </Fragment>
    }
}

const clearButtonStyle = {

    marginLeft: '1%'
}

export default Search;