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
        this.showClearButton = true;
    }


    getUserData(userName) {

        if (userName.length === 0) {

            alert("Please provide any user name");
        }
        else {
            axios.get(`https://api.github.com/search/users?q=${userName}`).then(response => {
                this.setState({
                    UsersData: response.data.items
                });

            }).catch(err => {
                console.log("Error occured while receiving data. ", err);
            })
        }
    }

    clearUserData = () => {
        this.setState({
            UsersData: []
        });
    }
    render() {
        return <div>
            <Search getUserData={this.getUserData} clearUserData={this.clearUserData} Users={this.state.UsersData}></Search>
            <PeopleCards Users={this.state.UsersData} ></PeopleCards>
        </div>
    }

}

export default Peoples;