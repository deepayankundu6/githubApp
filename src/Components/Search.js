import React, { Component, Fragment } from "react"

class Search extends Component {
    render() {

        return <Fragment>
            <form>
                <div className="form-group">
                    <label >Search</label>
                    <input type="email" className="form-control" placeholder="User Name">
                    </input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Fragment>
    }
}

export default Search;