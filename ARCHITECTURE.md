# architecture
## modular monlith
ease of use in terms of moving bigger components to microservices if needed.
each functional area has its own set of buisness logic,models data access
we can also create a common functional area which houses common functionality and keep it at one place


# High level Architecture
```

___________________________________________________________________________________________________________________________
|                                                                                                                         |
|          Frontend(NextJs)  ========>  Backend(Python)====>Database(postgres)                                            |
|                                           || \\                                                                         |
|                                           ||   \\======> Ml Models                                                      |
|                                           ||                                                                            |
|                                   object database(Minio)                                                                |
|_________________________________________________________________________________________________________________________|


```

# choices and their reasoning
- **modular monlith** best of both worlds, monlith for small and each functional folder can be moved to microservice
- **Next.js** production ready react based ecosystem
- **fastapi** -validations and allow for dependency injection
- **frontend state management**  usestate hook , prefer local storage instead of context api context fails to hold values on browser refresh
- **SQLModel**-fits with ease with fastapi
-  **pydantic** -model validation
-  **asyncio** - connected/detached thread execution



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

## database schema(entities)


### book
```
class book(SQLModel, table=True):
    id: UUID = Field(default_factory=uuid4, primary_key=True)
    title: str
    path: str
    author: str
    genre: str|None=Field(default=None)
```

### bookissue
```
class bookIssue(SQLModel, table=True):
    id: UUID = Field(default_factory=uuid4, primary_key=True)
    bookId:UUID=Field(default=None,foreign_key="book.id")
    userId:UUID=Field(default=None,foreign_key="user.id")
    review:str|None=Field(default=None)
    borrowDate:datetime|None=Field(default=datetime.now())
    returnDate:datetime|None=Field(default=None)
```

### authentication
```

class user(SQLModel,table=True):
    id:  UUID = Field(default_factory=uuid4, primary_key=True)
    username: str
    password: str
    email:str
    disabled:bool|None=None
    address:str|None=None
    lastlogin: datetime

```