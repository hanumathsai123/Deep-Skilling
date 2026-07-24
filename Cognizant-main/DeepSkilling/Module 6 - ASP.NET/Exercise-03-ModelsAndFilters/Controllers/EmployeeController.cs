using Exercise_03_ModelsAndFilters.Filters;
using Exercise_03_ModelsAndFilters.Models;
using Microsoft.AspNetCore.Mvc;

namespace Exercise_03_ModelsAndFilters.Controllers;

[ApiController]
[Route("api/[controller]")]
[CustomAuthFilter]
public class EmployeeController : ControllerBase
{
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public ActionResult<List<Employee>> Get()
    {
        return Ok(GetStandardEmployeeList());
    }

    [HttpGet("standard")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public ActionResult<Employee> GetStandrad()
    {
        return Ok(GetStandardEmployeeList().First());
    }

    [HttpGet("exception")]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public ActionResult ThrowException()
    {
        throw new InvalidOperationException("Exception thrown for custom exception filter demo.");
    }

    [HttpPost]
    public ActionResult<Employee> Post([FromBody] Employee employee)
    {
        return Ok(employee);
    }

    [HttpPut]
    public ActionResult<Employee> Put([FromBody] Employee employee)
    {
        return Ok(employee);
    }

    private static List<Employee> GetStandardEmployeeList()
    {
        var department = new Department { Id = 1, Name = "IT" };

        return
        [
            new()
            {
                Id = 1,
                Name = "John",
                Salary = 50000,
                Permanent = true,
                Department = department,
                Skills =
                [
                    new Skill { Id = 1, Name = "C#" },
                    new Skill { Id = 2, Name = "SQL" }
                ],
                DateOfBirth = new DateTime(1990, 5, 20)
            },
            new()
            {
                Id = 2,
                Name = "Mary",
                Salary = 65000,
                Permanent = false,
                Department = department,
                Skills =
                [
                    new Skill { Id = 3, Name = "ASP.NET Core" },
                    new Skill { Id = 4, Name = "Web API" }
                ],
                DateOfBirth = new DateTime(1992, 8, 14)
            }
        ];
    }
}
