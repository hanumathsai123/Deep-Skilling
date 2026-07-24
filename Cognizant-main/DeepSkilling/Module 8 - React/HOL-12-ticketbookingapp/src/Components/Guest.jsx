function Guest() {

    return (

        <div className="card">

            <h2>Welcome Guest</h2>

            <h3>Flight Details</h3>

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

            <p style={{color:"red"}}>

                Login to book your ticket.

            </p>

        </div>

    );

}

export default Guest;