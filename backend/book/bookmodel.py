from sqlmodel import Field,SQLModel
from uuid import uuid4,UUID
class book(SQLModel, table=True):
    id: UUID = Field(default_factory=uuid4, primary_key=True)
    title: str
    path: str
    author: str
    genre: str|None=Field(default=None)