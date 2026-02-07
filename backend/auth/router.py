from fastapi import APIRouter
from auth.userModel import UserModel
from auth.authapplication import AuthApplication

application=AuthApplication()

auth_router=APIRouter()

@auth_router.post("/api/auth/Login")
async def auth_get(model: UserModel):
    data=application.authenticateUser(model)
    print(data)
    return data
    

@auth_router.post("/api/auth/signup")
async def auth_signup(model: UserModel):
    application.signup(model)
    return {"success":True}