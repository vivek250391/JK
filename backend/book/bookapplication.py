from sqlmodel import create_engine,select
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
    def add(self,book):
        repository.add(book)

