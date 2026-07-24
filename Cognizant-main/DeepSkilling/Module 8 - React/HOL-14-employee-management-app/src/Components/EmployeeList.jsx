import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees }) {

    return (

        <div className="employeeList">

            {

                employees.map((employee) => (

                    <EmployeeCard

                        key={employee.id}

                        employee={employee}

                    />

                ))

            }

        </div>

    );

}

export default EmployeeList;