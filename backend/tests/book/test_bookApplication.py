from mock import patch,Mock
import pytest
from uuid import uuid4
from book.bookapplication import bookApplication
from book.bookModel import BookModel
from book.bookRepository import bookRepository
from book.bookEntity import book




def test_book_application_Positive():
    bookentities=[book(id=uuid4(),title="fake title",path="fake path",author="fake author"),]
    bookRepository.get=Mock(return_value=bookentities)
    x=BookModel(id=uuid4())
    a=bookApplication()  
    data=a.get()
    assert len(data)==1

def test_book_application_add_positive():
    bookRepository.add=Mock(return_value=None)
    model=BookModel(id=uuid4(),title="fake title",path="fake path",author="fake author")
    a=bookApplication()
    data=a.add(model)
    Mock.assert_called_once(bookRepository.add)
    assert data==None

def test_book_application_update_positive():
    bookRepository.update=Mock(return_value=None)
    model=BookModel(id=uuid4(),title="fake title",path="fake path",author="fake author")
    a=bookApplication()
    data=a.update(uuid4(),model)
    Mock.assert_called_once(bookRepository.update)
    assert data==None

def test_book_application_delete_positive():
    bookRepository.delete=Mock(return_value=None)
    a=bookApplication()
    data=a.delete(id=uuid4())
    Mock.assert_called_once(bookRepository.delete)
    assert data==None

def test_book_application_get_by_id():
    id=uuid4()
    bookentity=book(id=id,title="fake title",path="fake path",author="fake author")
    bookRepository.getbyId=Mock(return_value=bookentity)
    a=bookApplication()
    data=a.getbyID(id=uuid4())
    Mock.assert_called_once(bookRepository.getbyId)
    assert data['author']=="fake author"
    assert data['id']==id