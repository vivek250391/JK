from passlib.context import CryptContext
from datetime import datetime
from uuid import uuid4
from auth.userModel import UserModel
from auth.authRepository import AuthRepository
from auth.userEntity import user


repository=AuthRepository()
class AuthApplication:
    context=None
    def setContext(self):
        AuthApplication.context = CryptContext(schemes=["argon2"], deprecated="auto")

    def hashPassword(self,password: str):
        return AuthApplication.context.hash(password)
    
    def verifyPassword(plain_password: str, hashed_password: str):
        return AuthApplication.context.verify(plain_password, hashed_password)
    
    def authenticateUser(self,model: UserModel):
        self.setContext()
        userentity=repository.getByUsername(model.username)
        print(userentity)
        passwordHash=self.hashPassword(model.password)
        if len(userentity)==0:
            return False
        if model.username!=userentity[0].username:
            return False
        if not self.verifyPassword(passwordHash,userentity[0].password):
            return False
        return True
            #create jwt

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