using Exercise_05_JwtCorsSecurity.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Exercise_05_JwtCorsSecurity.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize(Roles = "POC,Admin")]
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
}
