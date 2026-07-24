using Exercise_04_EmployeeCrud.Models;
using Microsoft.AspNetCore.Mvc;

namespace Exercise_04_EmployeeCrud.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EmployeeController : ControllerBase
{
    private static readonly List<Employee> Employees =
    [
        new() { Id = 1, Name = "John", Salary = 50000, Permanent = true },
        new() { Id = 2, Name = "Mary", Salary = 65000, Permanent = false }
    ];

    [HttpGet]
    public ActionResult<List<Employee>> Get()
    {
        return Ok(Employees);
    }

    [HttpPut("{id:int}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public ActionResult<Employee> Put(int id, [FromBody] Employee employee)
    {
        if (id <= 0)
        {
            return BadRequest("Invalid employee id");
        }

        var existingEmployee = Employees.FirstOrDefault(item => item.Id == id);
        if (existingEmployee is null)
        {
            return BadRequest("Invalid employee id");
        }

        existingEmployee.Name = employee.Name;
        existingEmployee.Salary = employee.Salary;
        existingEmployee.Permanent = employee.Permanent;

        return Ok(existingEmployee);
    }
}
