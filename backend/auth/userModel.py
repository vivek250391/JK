from pydantic import BaseModel
from datetime import datetime
class UserModel(BaseModel):
    username: str
    password: str
    email:str|None=None
    disabled:str|None=None
    address:str|None=None
    last_login:datetime|None=None