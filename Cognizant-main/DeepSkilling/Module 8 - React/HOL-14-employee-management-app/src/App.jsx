import { useState } from "react";
import EmployeeList from "./Components/EmployeeList";
import ThemeContext from "./ThemeContext";
import "./Styles/Employee.css";

function App() {

    const [theme, setTheme] = useState("light");

    const employees = [

        {
            id: 1,
            name: "John",
            designation: "Software Engineer",
            salary: 60000
        },

        {
            id: 2,
            name: "David",
            designation: "Tester",
            salary: 50000
        },

        {
            id: 3,
            name: "Smith",
            designation: "Project Manager",
            salary: 90000
        },

        {
            id: 4,
            name: "James",
            designation: "UI Developer",
            salary: 55000
        }

    ];

    return (

        <ThemeContext.Provider value={theme}>

            <div className="container">

                <h1>Employee Management System</h1>

                <button
                    className="toggleBtn"
                    onClick={() =>
                        setTheme(
                            theme === "light"
                                ? "dark"
                                : "light"
                        )
                    }
                >
                    Switch to {theme === "light" ? "Dark" : "Light"} Theme
                </button>

                <EmployeeList employees={employees} />

            </div>

        </ThemeContext.Provider>

    );

}

export default App;