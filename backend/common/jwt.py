import os
from dotenv import load_dotenv
import jwt
from jwt.exceptions import ExpiredSignatureError, InvalidTokenError
from fastapi.security import OAuth2PasswordBearer
from fastapi import Depends

config=load_dotenv()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
# Use a strong, securely stored secret key. Use RS256 for asymmetric keys.
SECRET_KEY = os.getenv("JWT_SECRET_KEY")
ALGORITHM = os.getenv("JWT_ALGORITHM")

def verify_jwt_token( token: str=Depends(oauth2_scheme)) -> dict:
    """Decodes/verifies a JWT. Raises exceptions for invalid tokens."""
    try:
        return jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM],
            #audience=required_audience,
            #issuer=required_issuer,
        )
    except Exception as e:
        raise InvalidTokenError(f"Invalid token: {e}")
