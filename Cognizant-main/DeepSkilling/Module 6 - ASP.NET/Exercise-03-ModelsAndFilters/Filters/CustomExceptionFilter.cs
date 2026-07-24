using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Exercise_03_ModelsAndFilters.Filters;

public class CustomExceptionFilter : IExceptionFilter
{
    public void OnException(ExceptionContext context)
    {
        var logPath = Path.Combine(AppContext.BaseDirectory, "error-log.txt");
        File.AppendAllText(logPath, $"{DateTime.Now:u} {context.Exception}\n");

        context.Result = new ObjectResult("Internal server error")
        {
            StatusCode = StatusCodes.Status500InternalServerError
        };
        context.ExceptionHandled = true;
    }
}
