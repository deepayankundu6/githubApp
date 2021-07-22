import { Component } from "react";
import PeopleCards from "./PeopleCards";
import axios from 'axios';
import Search from "./Search";

class Peoples extends Component {
    constructor(props) {
        super(props);

        this.state = {
            UsersData: []
        }
        this.getUserData = this.getUserData.bind(this);
    }
    // componentDidMount() {
    //     axios.get('https://api.github.com/users').then(data => {
    //         this.setState({
    //             UsersData: data.data
    //         })

    //     }).catch(err => {
    //         console.log("Error occured while receiving data. ", err);
    //     })
    // }

    getUserData(userName) {

        if (userName.length == 0) {

            alert("Please provide any user name");
        }
        else {
            axios.get(`https://api.github.com/search/users?q=${userName}`).then(data => {
                this.setState({
                    UsersData: data.data.items
                })

            }).catch(err => {
                console.log("Error occured while receiving data. ", err);
            })
        }
    }
    render() {
        return <div>
            <Search getUserData={this.getUserData}></Search>
            <PeopleCards Users={this.state.UsersData} ></PeopleCards>
        </div>
    }

}
export default Peoples;