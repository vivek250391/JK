from datetime import datetime
from uuid import UUID
from pydantic import BaseModel,Field

class BookIssueModel(BaseModel):
    id: UUID|None=None
    bookId:UUID|None=None
    userId:UUID|None=None
    review:str|None=None
    borrowDate:datetime|None=None
    returnDate:datetime|None=None