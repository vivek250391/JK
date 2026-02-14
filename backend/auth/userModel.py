from uuid import UUID
from pydantic import BaseModel
from datetime import datetime
class UserModel(BaseModel):
    id: UUID|None=None
    username: str
    password: str|None=None
    email:str|None=None
    disabled:str|None=None
    address:str|None=None
    last_login:datetime|None=None