import os
from uuid import UUID

from fastapi import APIRouter,UploadFile,File
from dotenv import load_dotenv

from book.bookapplication import bookApplication
from book.bookModel import BookModel
from book.bookobjectstore import BookObjectStore
from minio.error import S3Error
from book.bookissue.bookissueapplication import BookIssueApplication
from book.bookissue.bookissueModel import BookIssueModel

load_dotenv()
book_router=APIRouter()

objectStore=BookObjectStore()

@book_router.get("/api/book")
async def book_get():
    application=bookApplication()
    book=application.get()
    print(book)
    return book

@book_router.post("/api/book")
async def book_add(model:BookModel):
    application=bookApplication()
    application.add(model)
    return {"success":True}

@book_router.put('/api/books/{id}')
async def book_update(model:BookModel,id:UUID):
    application=bookApplication()
    application.update(id=id,model=model)
    return {"success":True}

@book_router.delete('/api/books/{id}')
async def book_update(id:UUID):
    application=bookApplication()
    application.delete(id)
    return {"success":True}

@book_router.post("/api/books/{id}/borrow")
async def borrow_book(id,bookIssueModel:BookIssueModel):
    application=BookIssueApplication()
    application.issueBook(id,bookIssueModel)
    return {"SUccess":True}

@book_router.post("/api/books/{id}/return")
async def return_book(id,bookIssueModel:BookIssueModel):
    application=BookIssueApplication()
    application.returnBook(id)
    return {"SUccess":True}

@book_router.post("/api/books/{id}/review")
async def return_book(id,bookIssueModel:BookIssueModel):
    application=BookIssueApplication()
    application.updateReview(id,bookIssueModel)
    return {"SUccess":True}

@book_router.post('/api/upload/{id}')
def upload_file_to_minio(id:UUID,file:UploadFile=File(...)):
    filename = file.filename.replace(" ", "-").strip()
    bucketName=os.getenv("MINIO_BUCKET_NAME")
    if filename == '':
        raise ValueError({"error": "No selected file"})

    # Generate a unique object name (e.g., using timestamp or UUID)
    object_name = f"uploads/{id}_{file.filename}" # Simple example, use UUID for production
    try:
        objectStore.insertObject(
                bucketName,
                file=file,
                objectName=object_name,
                fileData=file.file
            )

        
        print(f"message:File '{file.filename}' uploaded successfully as '{object_name}'bucket: {bucketName}, object_key: {object_name}")
        return ({"Success":True})
    except S3Error as e:
        print(f"MinIO Error: {e}")
        raise ValueError({"error": f"Failed to upload file: {e}"})
    except Exception as e:
        print(f"General Error: {e}")
        raise ValueError({"error": f"An unexpected error occurred: {e}"})
