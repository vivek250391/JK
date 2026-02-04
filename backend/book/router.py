from fastapi import APIRouter
from book.bookapplication import bookApplication
from book.bookmodel import book
book_router=APIRouter()



@book_router.get("/api/book/")
async def book_get():
    application=bookApplication()
    book=application.get()
    print(book)
    return book

@book_router.post("/api/book")
async def book_add(book:book):
    application=bookApplication()
    application.add(book)
    return {"success":True}