import os
from passlib.context import CryptContext
from datetime import datetime,timedelta,timezone
from dotenv import load_dotenv
from uuid import uuid4
import jwt
from auth.userModel import UserModel
from auth.authRepository import AuthRepository
from auth.userEntity import user

config=load_dotenv()
repository=AuthRepository()
class AuthApplication:
    context=None
    def setContext(self):
        AuthApplication.context = CryptContext(schemes=["argon2"], deprecated="auto")

    def hashPassword(self,password: str):
        return AuthApplication.context.hash(password)
    
    def verifyPassword(self,plain_password: str, hashed_password: str):
        return AuthApplication.context.verify(plain_password, hashed_password)
    
    def createAccessToken(data: dict, expires_delta: timedelta | None = None):
        to_encode = data.copy()
        if expires_delta:
            expire = datetime.now(timezone.utc) + expires_delta
        else:
            expire = datetime.now(timezone.utc) + timedelta(minutes=15)
        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(to_encode, os.getenv("JWT_SECRET_KEY"), algorithm="HS256")
        return encoded_jwt
    
    def authenticateUser(self,model: UserModel):
        self.setContext()
        userentity=repository.getByUsername(model.username)
        passwordHash=self.hashPassword(model.password)
        flag=True
        if len(userentity)==0:
            Flag=False
            return {"error":"Either username or password is invalid"}
        if model.username!=userentity[0].username:
            Flag=False
            return {"error":"Either username or password is invalid"}
        if not self.verifyPassword(passwordHash,userentity[0].password):
            Flag=False
            return {"error":"Either username or password is invalid"}
        if flag==True:
            token=jwt.encode({"payload":model.username},key=os.getenv("JWT_SECRET_KEY"),algorithm=os.getenv("JWT_ALGORITHM"))
        return {"Token":token}
            

    def signup(self,model:UserModel):
        self.setContext()
        passwordHash=self.hashPassword(model.password)
        print(passwordHash)
        userentity=user()
        userentity.id=uuid4()
        userentity.disabled=False
        userentity.username=model.username
        userentity.email=model.email
        userentity.address=model.address
        userentity.password=passwordHash
        userentity.lastlogin=datetime.now()
        repository.add(userentity)