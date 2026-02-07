from uuid import uuid4,UUID
from sqlmodel import Field, SQLModel
from datetime import datetime
class user(SQLModel,table=True):
    id:  UUID = Field(default_factory=uuid4, primary_key=True)
    username: str
    password: str
    email:str
    disabled:bool|None=None
    address:str|None=None
    lastlogin: datetime