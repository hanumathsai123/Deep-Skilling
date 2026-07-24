# Exercise 05 - JWT and CORS Security

CORS and JWT bearer authentication with role-based authorization. The Employee API is protected with `[Authorize(Roles = "POC,Admin")]`.

Generate an Admin token:

```http
GET /api/auth?userId=1&userRole=Admin
```

Authorization header:

```text
Authorization: Bearer <token>
```
