import { Component } from "react";
import PeopleCards from "./PeopleCards";
import axios from 'axios';
import Search from "./Search";

class Peoples extends Component {
    usersCount = 0;
    constructor(props) {
        super(props);

        this.state = {
            UsersData: []
        }
        this.getUserData = this.getUserData.bind(this);
    }
    // componentDidMount() {
    //     axios.get('https://api.github.com/users/${UserName}').then(data => {
    //         this.setState({
    //             UsersData: data.data
    //         })

    //     }).catch(err => {
    //         console.log("Error occured while receiving data. ", err);
    //     })
    // }

    getUserData(userName) {

        if (userName.length === 0) {

            alert("Please provide any user name");
        }
        else {
            axios.get(`https://api.github.com/search/users?q=${userName}`).then(data => {
                this.setState({
                    UsersData: data.data.items
                }, () => {
                    this.usersCount = this.state.UsersData.length;
                })

            }).catch(err => {
                console.log("Error occured while receiving data. ", err);
                this.usersCount = 0;
            })
        }
    }

    clearUserData = () => {
        this.setState({
            UsersData: []
        }, () => {
            this.usersCount = this.state.UsersData.length;
        });
    }
    render() {
        return <div>
            <Search getUserData={this.getUserData} clearUserData={this.clearUserData} usersCount={this.usersCount}></Search>
            <PeopleCards Users={this.state.UsersData} ></PeopleCards>
        </div>
    }

}
export default Peoples;