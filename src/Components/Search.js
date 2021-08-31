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
        return <div style={CenterAlign}>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    &nbsp;  <label>Search</label>
                    &nbsp;  <input type="text" style={searchButtonStyle} className="form-control" value={this.state.UserName} onChange={this.onChange} placeholder="User Name">
                    </input>
                </div>
                &nbsp; {!this.state.UserName.length ? "" : <button type="submit" style={clearButtonStyle} className="btn btn-primary" value="Submit">Submit</button>
                }
                {!this.props.Users.length ? "" : <button className="btn btn-danger" style={clearButtonStyle} onClick={this.onClearClick}>Clear</button>
                }
            </form>

        </div>
    }
}

const clearButtonStyle = {

    marginLeft: '1%'
}

const searchButtonStyle = {
    width: '51%'
}

let CenterAlign = {
    margin: 'auto',
    width: '90%'
}


export default Search;