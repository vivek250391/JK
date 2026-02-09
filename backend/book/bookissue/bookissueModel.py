from datetime import datetime
from uuid import UUID
from pydantic import BaseModel,Field

class BookIssueModel(BaseModel):
    id: UUID|None
    bookId:UUID|None
    userId:UUID|None
    review:str|None
    borrowDate:datetime|None
    returnDate:datetime|None=Field(default=None)