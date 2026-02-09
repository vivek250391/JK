from datetime import datetime
from uuid import uuid4,UUID
from book.bookissue.bookissueRepository import BookIssueRepository
from book.bookissue.bookissueModel import BookIssueModel
from book.bookissue.bookissueEntity import bookIssue

repository=BookIssueRepository()
class BookIssueApplication:
    def issueBookDetails(self):
        return repository.get()

    def issueBook(self,bookIssueModel:BookIssueModel):
        bookissue=bookIssue()
        bookissue.bookId=bookIssueModel.bookId
        bookissue.borrowDate=datetime.now()
        bookissue.id=uuid4()
        bookissue.userId=bookIssueModel.userId #this should be current user
        repository.add(bookissue)

    def returnBook(self, id):
        entity=bookIssue()
        entity.returnDate=datetime.now()
        repository.update(id,entity)
        