from fastapi import FastAPI
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import os

from book.router import book_router
from auth.router import auth_router

#we could use .env.local and env.prod and so provided we set environment variable in the system for example dev local prod
origins=[
    os.getenv("HOST_TO_Allow")
]

config=load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,         # Allows specific origins
    allow_credentials=True,        # Allows cookies and authorization headers
    allow_methods=["*"],           # Allows all methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],           # Allows all headers
)

print(os.getenv("HOST_TO_Allow"))
app.include_router(book_router)
app.include_router(auth_router)
print("Hello world")