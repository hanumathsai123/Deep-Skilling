function User() {

    return (

        <div className="card">

            <h2>Welcome User</h2>

            <h3>Ticket Booking</h3>

            <table>

                <tbody>

                    <tr>

                        <td>Flight</td>

                        <td>AI-202</td>

                    </tr>

                    <tr>

                        <td>From</td>

                        <td>Hyderabad</td>

                    </tr>

                    <tr>

                        <td>To</td>

                        <td>Delhi</td>

                    </tr>

                    <tr>

                        <td>Price</td>

                        <td>₹6500</td>

                    </tr>

                </tbody>

            </table>

            <button className="bookBtn">

                Book Ticket

            </button>

        </div>

    );

}

export default User;