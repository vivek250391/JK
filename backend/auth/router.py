from fastapi import APIRouter

auth_router=APIRouter()

@auth_router.get("/api/auth/Login")
async def auth_get():
    return {"success":True}