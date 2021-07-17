import { Component } from "react";
import PeopleCards from "./PeopleCards";
import axios from 'axios';
import * as Data from "../Data.json"

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
        // console.log("Api data received:", this.state.UsersData);
        return <div><PeopleCards Users={Data} ></PeopleCards></div>

    }
}
export default Peoples;