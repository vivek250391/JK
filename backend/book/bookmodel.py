from uuid import uuid4,UUID
from pydantic import BaseModel,Field

class BookModel(BaseModel):
    id: UUID=None
    title: str=None
    path: str=None
    author: str=None
    genre: str|None=Field(default=None)