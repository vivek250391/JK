import os
import asyncio
import sys
from fastapi import FastAPI,BackgroundTasks
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware



from Infrastructure.database import database
from Infrastructure.objectstore import objectstore
from book.router import book_router
from auth.router import auth_router
from aiagent.init import greet_message




#asyncio.gather(greet_message())
config=load_dotenv()
#we could use .env.local and env.prod and so provided we set environment variable in the system for example dev local prod
origins=[
    os.getenv("HOST_TO_Allow")
]
#init postgres database
postgres=database()
postgres.initDb(
    DATABASE_HOST=os.getenv("DATABASE_HOST"),
    DATABASE_NAME=os.getenv("DATABASE_NAME"),
    DATABASE_PASSWORD=os.getenv("DATABASE_PASSWORD"),
    DATABASE_PORT=int(os.getenv("DATABASE_PORT")),
    DATABASE_USER=os.getenv("DATABASE_USER")
                )

#init minio object store
store=objectstore()
store.init(
    MINIO_URL=os.getenv("MINIO_URL"),
    MINIO_ACCESS_KEY=os.getenv("MINIO_ACCESS_KEY"),
    MINIO_SECRET_KEY=os.getenv("MINIO_SECRET_KEY"),
    SECURE_CONNECTION=os.getenv("MINIO_SECURE_CONNECTION")
    )

store.createBucket(os.getenv("MINIO_BUCKET_NAME"))

#commented out because this only need to run when schema changes
postgres.create_db_and_tables()
session=postgres.get_session()



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,         # Allows specific origins
    allow_credentials=True,        # Allows cookies and authorization headers
    allow_methods=["*"],           # Allows all methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],           # Allows all headers
)

app.include_router(book_router)
app.include_router(auth_router)
