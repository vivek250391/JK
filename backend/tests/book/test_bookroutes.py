from fastapi.testclient import TestClient
from uuid import uuid4
from mock import Mock
from book.bookapplication import bookApplication
from app import app
from Infrastructure.objectstore import objectstore
from book.bookModel import BookModel

client=TestClient(app)

def test_book_get_positive():
    #objectstore.init=Mock(return_value=None)
    #objectstore.createBucket=Mock(return_value=None)
    model=BookModel(id=uuid4(),title="Fake title",path="Fake path",author="Fake author",genre="Fake genre")
    bookApplication.get=Mock(return_value=[model])
    response=client.get("/api/book")
    assert response.status_code==200
    assert len(response.json())==1

def test_book_get_by_id_positive():
    id=uuid4()
    model=BookModel(id=id,title="Fake title",path="Fake path",author="Fake author",genre="Fake genre")
    bookApplication.getbyID=Mock(return_value=model)
    response=client.get(f"/api/book/{id}")
    assert response.status_code==200
    assert response.json()["path"]=="Fake path"
    assert response.json()["title"]=="Fake title"