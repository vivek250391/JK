from datetime import datetime
from uuid import uuid4,UUID
from sqlmodel import Field,SQLModel

class bookIssue(SQLModel, table=True):
    id: UUID = Field(default_factory=uuid4, primary_key=True)
    bookId:UUID=Field(default=None,foreign_key="book.id")
    userId:UUID=Field(default=None,foreign_key="user.id")
    review:str|None=Field(default=None)
    borrowDate:datetime|None=Field(default=datetime.now())
    returnDate:datetime|None=Field(default=None)