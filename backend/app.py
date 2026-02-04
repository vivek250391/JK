from fastapi import FastAPI
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import os

from Infrastructure.database import database
from book.router import book_router
from auth.router import auth_router

config=load_dotenv()
#we could use .env.local and env.prod and so provided we set environment variable in the system for example dev local prod
origins=[
    os.getenv("HOST_TO_Allow")
]
postgres=database()
postgres.initDb(
    DATABASE_HOST=os.getenv("DATABASE_HOST"),
    DATABASE_NAME=os.getenv("DATABASE_NAME"),
    DATABASE_PASSWORD=os.getenv("DATABASE_PASSWORD"),
    DATABASE_PORT=int(os.getenv("DATABASE_PORT")),
    DATABASE_USER=os.getenv("DATABASE_USER")
                )

#commented out because this only need to run when schema changes
#postgres.create_db_and_tables()
session=postgres.get_session()



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,         # Allows specific origins
    allow_credentials=True,        # Allows cookies and authorization headers
    allow_methods=["*"],           # Allows all methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],           # Allows all headers
)

print(os.getenv("HOST_TO_ALLOW"))
app.include_router(book_router)
app.include_router(auth_router)
print("Hello world")