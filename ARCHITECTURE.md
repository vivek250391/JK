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

## interaction FLow

```

____________
|           |      
|   user    |
|___________|
     ||
     ||
     ||
_____________________
|                   |      
| frontend(Nextjs)  |
|___________________|
     ||
     ||
     ||











```
# Technology Stack

## Backend

- **Framework:**  Fast APi
- **Python Version** 3.13+
- **ORM Framework** SqlModel
- **DatabaseDriver** Psycopg
- **Database** Postgres18+(containerized)