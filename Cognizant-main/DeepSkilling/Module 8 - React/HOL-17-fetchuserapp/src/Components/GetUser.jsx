import React, { Component } from "react";
import "../Styles/GetUser.css";

class GetUser extends Component {

    constructor() {

        super();

        this.state = {

            title: "",

            firstName: "",

            image: ""

        };

    }

    async componentDidMount() {

        const response = await fetch("https://api.randomuser.me/");

        const data = await response.json();

        this.setState({

            title: data.results[0].name.title,

            firstName: data.results[0].name.first,

            image: data.results[0].picture.large

        });

    }

    render() {

        return (

            <div className="container">

                <h1>Random User Details</h1>

                <div className="card">

                    <img
                        src={this.state.image}
                        alt="User"
                    />

                    <h2>

                        {this.state.title} {this.state.firstName}

                    </h2>

                </div>

            </div>

        );

    }

}

export default GetUser;