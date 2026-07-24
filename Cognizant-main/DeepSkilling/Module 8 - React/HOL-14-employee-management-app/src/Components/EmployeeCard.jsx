import { useContext } from "react";
import ThemeContext from "../ThemeContext";

function EmployeeCard({ employee }) {

    const theme = useContext(ThemeContext);

    return (

        <div className="card">

            <h2>{employee.name}</h2>

            <p>
                <b>Designation :</b> {employee.designation}
            </p>

            <p>
                <b>Salary :</b> ₹{employee.salary}
            </p>

            <button className={theme}>

                View Profile

            </button>

        </div>

    );

}

export default EmployeeCard;