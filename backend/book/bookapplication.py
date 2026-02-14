from uuid import uuid4
from Infrastructure.database import database
from book.bookEntity import book
from book.bookModel import BookModel
from book.bookRepository import bookRepository
from book.bookobjectstore import BookObjectStore

objectStore=BookObjectStore()
repository=bookRepository()
db=database()
class bookApplication:
    def get(self):
        
        data=repository.get()
        model=[
            BookModel(
                id=ent.id,
                author=ent.author,
                title=ent.title,
                path=ent.path,
                genre=ent.genre
                ) for ent in data]

        return model
    
    def add(self,model:BookModel):
        bookentity=book()
        bookentity.author=model.author
        bookentity.genre=model.genre
        bookentity.id=uuid4()
        bookentity.title=model.title
        bookentity.path="/uploads/file"
        repository.add(bookentity)

    def update(self,id,model:BookModel):
        bookentity=book()
        bookentity.author=model.author
        bookentity.genre=model.genre
        bookentity.title=model.title
        repository.update(id,bookentity)

    def delete(self,id):
        repository.delete(id)

    def getbyID(self,id):
        entity:book=repository.getbyId(id)
        model:BookModel=entity.model_dump(include="title,id,author,genre")
        return model


    
