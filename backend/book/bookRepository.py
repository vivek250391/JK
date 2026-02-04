from sqlmodel import select
from book.bookmodel import book
from Infrastructure.database import database

db=database()

class bookRepository:
    def get(self):
        data=[]
        session=db.get_session()
        statement=select(book)
        results=session.exec(statement)
        for item in results:
            data.append(item)
        return data
    
    def add(self,book):
        session=db.get_session()
        session.add(book)
        session.commit()