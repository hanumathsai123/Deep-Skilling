import { useState } from "react";
import ListofPlayers from "./Components/ListofPlayers";
import IndianPlayers from "./Components/IndianPlayers";

function App() {

    const [flag, setFlag] = useState(true);

    return (

        <div>

            <button
                onClick={() => setFlag(!flag)}
                style={{
                    padding: "10px 20px",
                    margin: "20px",
                    cursor: "pointer"
                }}
            >
                {flag ? "Show Indian Players" : "Show List of Players"}
            </button>

            <hr />

            {
                flag
                    ? <ListofPlayers />
                    : <IndianPlayers />
            }

        </div>

    );

}

export default App;