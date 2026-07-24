import React, { Component } from "react";

class EventExamples extends Component {

    constructor() {
        super();

        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    sayHello = () => {
        alert("Hello! Member!");
    };

    increase = () => {
        this.increment();
        this.sayHello();
    };

    sayWelcome = (msg) => {
        alert(msg);
    };

    onPress = () => {
        alert("I was clicked");
    };

    render() {

    return (

        <div className="container">

            <div className="counter">

                {this.state.count}

            </div>

            <button
                className="btn increment"
                onClick={this.increase}
            >
                Increment
            </button>

            <button
                className="btn decrement"
                onClick={this.decrement}
            >
                Decrement
            </button>

            <button
                className="btn welcome"
                onClick={() => this.sayWelcome("welcome")}
            >
                Say Welcome
            </button>

            <button
                className="btn click"
                onClick={this.onPress}
            >
                Click on Me
            </button>

        </div>

    );

}

}

export default EventExamples;