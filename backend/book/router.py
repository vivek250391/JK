from fastapi import APIRouter

book_router=APIRouter()

@book_router.get("/api/book/")
async def book_get():
    return {"success":True}