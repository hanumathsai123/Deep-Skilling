import React, { Component } from "react";
import Cart from "../Models/Cart";
import "../Styles/OnlineShopping.css";

class OnlineShopping extends Component {

    constructor() {

        super();

        this.items = [

            new Cart("Laptop", 55000),

            new Cart("Mobile", 25000),

            new Cart("Headphones", 2500),

            new Cart("Keyboard", 1800),

            new Cart("Mouse", 900)

        ];

    }

    render() {

        return (

            <div>

                <h1>Online Shopping Cart</h1>

                <table border="1" cellPadding="10">

                    <thead>

                        <tr>

                            <th>Item Name</th>

                            <th>Price</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            this.items.map((item, index) => (

                                <tr key={index}>

                                    <td>{item.itemName}</td>

                                    <td>₹ {item.price}</td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        );

    }

}

export default OnlineShopping;