import { useState } from "react";
import "../Styles/Complaint.css";

function ComplaintRegister() {

    const [employeeName, setEmployeeName] = useState("");

    const [complaint, setComplaint] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        const referenceNumber = Math.floor(
            100000 + Math.random() * 900000
        );

        alert(
            `Complaint Registered Successfully!\n\nEmployee Name : ${employeeName}\nReference Number : ${referenceNumber}`
        );

        setEmployeeName("");
        setComplaint("");

    };

    return (

        <div className="container">

            <form onSubmit={handleSubmit} className="form">

                <h1>Ticket Raising Application</h1>

                <div className="input-group">

                    <label>Employee Name</label>

                    <input

                        type="text"

                        value={employeeName}

                        onChange={(e) =>
                            setEmployeeName(e.target.value)
                        }

                        placeholder="Enter Employee Name"

                        required

                    />

                </div>

                <div className="input-group">

                    <label>Complaint</label>

                    <textarea

                        rows="5"

                        value={complaint}

                        onChange={(e) =>
                            setComplaint(e.target.value)
                        }

                        placeholder="Enter Complaint"

                        required

                    >

                    </textarea>

                </div>

                <button type="submit">

                    Submit Complaint

                </button>

            </form>

        </div>

    );

}

export default ComplaintRegister;