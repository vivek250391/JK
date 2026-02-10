from sqlmodel import select
from Infrastructure.database import database
from book.bookissue.bookissueEntity import bookIssue


db=database()

class BookIssueRepository:
    def get(self):
        data=[]
        session=db.get_session()
        statement=select(bookIssue)
        results=session.exec(statement)
        for entry in results:
            data.append(entry)
        return data

    def add(self,bookissue):
        session=db.get_session()
        session.add(bookissue)
        session.commit()

    def update(self,id,bookissue):
        session=db.get_session()
        statement=select(bookIssue).where(bookIssue.id==id)
        records=session.exec(statement)
        record=records.one()
        record.returnDate=bookissue.returnDate
        session.add(record)
        session.commit()

    def updateReview(self,id,bookissue):
        print(id)
        session=db.get_session()
        statement=select(bookIssue).where(bookIssue.id==id)
        records=session.exec(statement)
        record=records.one()
        record.review=bookissue.review
        session.add(record)
        session.commit()
