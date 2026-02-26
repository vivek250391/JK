from uuid import UUID
from pydantic import BaseModel

class AiModel(BaseModel):
    id:UUID|None=None
    aiSummary:str|None=None
    bookID:UUID|None=None