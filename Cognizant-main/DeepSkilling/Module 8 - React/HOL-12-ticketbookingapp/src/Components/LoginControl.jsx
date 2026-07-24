import { useState } from "react";
import Guest from "./Guest";
import User from "./User";
import "../Styles/Ticket.css";

function LoginControl() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (

        <div className="container">

            <h1>Flight Ticket Booking</h1>

            {

                isLoggedIn

                ?

                <button
                    className="logoutBtn"
                    onClick={() => setIsLoggedIn(false)}
                >
                    Logout
                </button>

                :

                <button
                    className="loginBtn"
                    onClick={() => setIsLoggedIn(true)}
                >
                    Login
                </button>

            }

            <br /><br />

            {

                isLoggedIn

                ?

                <User />

                :

                <Guest />

            }

        </div>

    );

}

export default LoginControl;