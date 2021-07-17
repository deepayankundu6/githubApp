import { Component } from "react";
import PeopleCards from "./PeopleCards";
import axios from 'axios';
import * as Data from "../Data.json"

class Peoples extends Component {
    UsersData; Users;
    componentDidMount() {
        this.UsersData = this.getData().data;
    }

    render() {
        console.log(this.UsersData);
        return <div><PeopleCards Users={Data} ></PeopleCards></div>

    }

    async getData() {

        return await axios.get('https://api.github.com/users')
    }
}
export default Peoples;