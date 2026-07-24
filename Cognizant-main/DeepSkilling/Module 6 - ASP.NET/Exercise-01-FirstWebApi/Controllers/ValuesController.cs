using Microsoft.AspNetCore.Mvc;

namespace Exercise_01_FirstWebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ValuesController : ControllerBase
{
    private static readonly List<string> Values = ["value1", "value2"];

    [HttpGet]
    public ActionResult<IEnumerable<string>> Get()
    {
        return Ok(Values);
    }

    [HttpGet("{id:int}")]
    public ActionResult<string> Get(int id)
    {
        if (id < 0 || id >= Values.Count)
        {
            return BadRequest("Invalid value id");
        }

        return Ok(Values[id]);
    }

    [HttpPost]
    public ActionResult Post([FromBody] string value)
    {
        Values.Add(value);
        return Ok(Values);
    }

    [HttpPut("{id:int}")]
    public ActionResult Put(int id, [FromBody] string value)
    {
        if (id < 0 || id >= Values.Count)
        {
            return BadRequest("Invalid value id");
        }

        Values[id] = value;
        return Ok(Values[id]);
    }

    [HttpDelete("{id:int}")]
    public ActionResult Delete(int id)
    {
        if (id < 0 || id >= Values.Count)
        {
            return BadRequest("Invalid value id");
        }

        Values.RemoveAt(id);
        return Ok(Values);
    }
}
