# architecture
## modular monlith
ease of use in terms of moving bigger components to microservices if needed.
each functional area has its own set of buisness logic,models data access
we can also create a common functional area which houses common functionality and keep it at one place


# High level Architecture
```

___________________________________________________________________________________________________________________________
|                                                                                                                         |
|          Frontend(NextJs)  ========>  Backend(NextJs)====>Database(postgres)                                            |
|                                           || \\                                                                         |
|                                           ||   \\======> Ml Models                                                      |
|                                           ||                                                                            |
|                                   object database(Minio)                                                                |
|_________________________________________________________________________________________________________________________|


```

# Architecture DIagram



# Technology Stack

## Backend

- **Framework:**  Fast APi
- **Python Version** 3.13+
- **ORM Framework** SqlModel
- **DatabaseDriver** Psycopg
- **Database** Postgres18+(containerized)
- **Authentication** PythonJwt
- **ModelValidation** Pydantic
- **APIDocumentation** OpenAPI

## FrontEnd
- **Framework** Nextjs(in built routing,usefull hooks like use swr,productio grade framework)
- **extrnalAPIcall client** fetch
- **Styling** Vanilla Css with modules