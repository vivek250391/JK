from sqlmodel import Field,SQLModel
from uuid import uuid4,UUID
class AiEntity(SQLModel,table=True):
    id: UUID = Field(default_factory=uuid4, primary_key=True)
    aiSummary:str=Field(default=None)
    bookId:UUID=Field(default=None,foreign_key="book.id")
  