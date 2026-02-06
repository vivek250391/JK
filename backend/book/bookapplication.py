from sqlmodel import create_engine,select
from Infrastructure.database import database
from book.bookmodel import book
from book.bookRepository import bookRepository
from book.bookobjectstore import BookObjectStore

objectStore=BookObjectStore()
repository=bookRepository()
db=database()
class bookApplication:
    def get(self):
        data=repository.get()
        return data
    def add(self,book):
        repository.add(book)

