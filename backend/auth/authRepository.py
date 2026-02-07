from sqlmodel import select
from auth.userEntity import user
from Infrastructure.database import database

db=database()

class AuthRepository:
    def get(self):
        data=[]
        session=db.get_session()
        statement=select(user)
        results=session.exec(statement)
        for item in results:
            data.append(item)
        return data
    
    def getByUsername(self,username):
        data=[]
        session=db.get_session()
        statement=select(user).where(user.username==username)
        results=session.exec(statement)
        for item in results:
            data.append(item)
        return data
    
    def add(self,user):
        session=db.get_session()
        session.add(user)
        session.commit()