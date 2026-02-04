from sqlmodel import create_engine, SQLModel, Session
from book.bookmodel import book

class database:
    engine=None
    def initDb(self,DATABASE_USER,DATABASE_PASSWORD,DATABASE_HOST,DATABASE_PORT,DATABASE_NAME):


        # Construct the database URL
        # Format: "postgresql://user:password@host:port/dbname"
        DATABASE_URL = f"postgresql://{DATABASE_USER}:{DATABASE_PASSWORD}@{DATABASE_HOST}:{DATABASE_PORT}/{DATABASE_NAME}"

        # Create the engine
        database.engine = create_engine(DATABASE_URL, echo=True) # `echo=True` will log all generated SQL statements
        

    # Example function to create tables (must be called after models are defined)
    def create_db_and_tables(self):
        SQLModel.metadata.create_all(database.engine)

    # Example function to get a database session
    def get_session(self):
        with Session(database.engine) as session:
            return session
