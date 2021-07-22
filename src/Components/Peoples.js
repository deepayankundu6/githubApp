import { Component } from "react";
import PeopleCards from "./PeopleCards";
import axios from 'axios';

class Peoples extends Component {
    constructor(props) {
        super(props);

        this.state = {
            UsersData: []
        }
    }
    componentDidMount() {
        axios.get('https://api.github.com/users').then(data => {
            this.setState({
                UsersData: data.data
            })

        }).catch(err => {
            console.log("Error occured while receiving data. ", err);
        })
    }

    render() {
        return <div>
            <PeopleCards Users={this.state.UsersData} ></PeopleCards>
        </div>
    }
}
export default Peoples;