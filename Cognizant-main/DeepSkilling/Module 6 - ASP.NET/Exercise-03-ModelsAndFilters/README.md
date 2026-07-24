# Exercise 03 - Models and Filters

Employee model with Department and Skill objects. `GET /api/employee` returns the standard employee list.

- `CustomAuthFilter` to validate an `Authorization: Bearer ...` header.
- `CustomExceptionFilter` to log exceptions to `error-log.txt` and return HTTP 500.
