from mock import Mock
from uuid import uuid4
from datetime import datetime
from book.bookissue.bookissueapplication import BookIssueApplication
from book.bookissue.bookissueEntity import bookIssue
from book.bookissue.bookissueModel import BookIssueModel
from book.bookissue.bookissueRepository import BookIssueRepository

def test_issuebookdetails_positive():
    bookIssueEntity=[bookIssue(uuid=uuid4(),bookId=uuid4(),userId=uuid4(),review=None,borrowDate=datetime.now())]
    BookIssueRepository.get=Mock(return_value=bookIssueEntity)
    b=BookIssueApplication()
    data=b.issueBookDetails()
    Mock.assert_called_once(BookIssueRepository.get)
    assert len(data)==1

def test_bookissue_positive():
    bookIssueModel=BookIssueModel(uuid=uuid4(),bookId=uuid4(),userId=uuid4(),review=None,borrowDate=datetime.now())
    BookIssueRepository.add=Mock(return_value=None)
    b=BookIssueApplication()
    data=b.issueBook(uuid4(),bookIssueModel)
    Mock.assert_called_once(BookIssueRepository.add)
    assert data==None

def test_bookissue_return_book_positive():
    BookIssueRepository.update=Mock(return_value=None)
    b=BookIssueApplication()
    data=b.returnBook(uuid4())
    Mock.assert_called_once(BookIssueRepository.update)
    assert data==None

def test_bookissue_update_review_positive():
    bookid=uuid4()
    bookIssueModel=BookIssueModel(review="Fake review")
    BookIssueRepository.updateReview=Mock(return_value=None)
    b=BookIssueApplication()
    data=b.updateReview(bookid,bookIssueModel)
    Mock.assert_called_once(BookIssueRepository.updateReview)
    assert data==None

def test_bookissue_get_review_by_bookid_positive():
    bookid=uuid4()
    bookIssueEntity=[bookIssue(uuid=uuid4(),bookId=bookid,userId=uuid4(),review=None,borrowDate=datetime.now())]
    BookIssueRepository.getReviewbyBookId=Mock(return_value=bookIssueEntity)
    b=BookIssueApplication()
    data=b.getReivewbybookId(bookid)
    Mock.assert_called_once(BookIssueRepository.getReviewbyBookId)
    assert len(data)==1

def test_bookissue_get_issued_books_not_returned_positive():
    bookid=uuid4()
    bookIssueEntity=[bookIssue(uuid=uuid4(),bookId=bookid,userId=uuid4(),review=None,borrowDate=datetime.now())]
    BookIssueRepository.getBookissuestoReturn=Mock(return_value=bookIssueEntity)
    b=BookIssueApplication()
    data=b.getIssuedbookNotReturned()
    Mock.assert_called_once(BookIssueRepository.getBookissuestoReturn)
    assert len(data)==1

def test_bookissue_is_book_issued_to_user_positive():
    bookissueid=uuid4()
    userid=uuid4()
    BookIssueRepository.isBookIssuedToUser=Mock(return_value=True)
    b=BookIssueApplication()
    data=b.isbookissuedToUser(bookIssueId=bookissueid,userId=userid)
    Mock.assert_called_once(BookIssueRepository.isBookIssuedToUser)
    assert data==True

def test_bookissue_is_book_issued_to_user_negative():
    bookissueid=uuid4()
    userid=uuid4()
    BookIssueRepository.isBookIssuedToUser=Mock(return_value=False)
    b=BookIssueApplication()
    data=b.isbookissuedToUser(bookIssueId=bookissueid,userId=userid)
    Mock.assert_called_once(BookIssueRepository.isBookIssuedToUser)
    assert data==False
