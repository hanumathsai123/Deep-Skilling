using Exercise_02_SwaggerEmployeeApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace Exercise_02_SwaggerEmployeeApi.Controllers;

[ApiController]
[Route("api/Emp")]
public class EmployeeController : ControllerBase
{
    private static readonly List<Employee> Employees =
    [
        new() { Id = 1, Name = "John", Salary = 50000, Permanent = true },
        new() { Id = 2, Name = "Mary", Salary = 65000, Permanent = false }
    ];

    [HttpGet(Name = "GetEmployees")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public ActionResult<List<Employee>> Get()
    {
        return Ok(Employees);
    }

    [HttpGet("{id:int}", Name = "GetEmployeeById")]
    public ActionResult<Employee> Get(int id)
    {
        var employee = Employees.FirstOrDefault(item => item.Id == id);
        return employee is null ? NotFound() : Ok(employee);
    }

    [HttpPost]
    public ActionResult<Employee> Post([FromBody] Employee employee)
    {
        Employees.Add(employee);
        return Ok(employee);
    }
}
