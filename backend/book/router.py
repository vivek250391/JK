from fastapi import APIRouter,UploadFile,File
from dotenv import load_dotenv
import os
from book.bookapplication import bookApplication
from book.bookEntity import book
from book.bookobjectstore import BookObjectStore
from minio.error import S3Error

load_dotenv()
book_router=APIRouter()

objectStore=BookObjectStore()

@book_router.get("/api/book/")
async def book_get():
    application=bookApplication()
    book=application.get()
    print(book)
    return book

@book_router.post("/api/book")
async def book_add(book:book):
    application=bookApplication()
    application.add(book)
    return {"success":True}


@book_router.post('/api/upload/')
def upload_file_to_minio(file:UploadFile=File(...)):
    filename = file.filename.replace(" ", "-").strip()
    bucketName=os.getenv("MINIO_BUCKET_NAME")
    if filename == '':
        raise ValueError({"error": "No selected file"})

    # Generate a unique object name (e.g., using timestamp or UUID)
    object_name = f"uploads/{file.filename}" # Simple example, use UUID for production
    try:
        objectStore.insertObject(
                bucketName,
                file=file,
                objectName=object_name,
                fileData=file.file
            )

        
        print(f"message:File '{file.filename}' uploaded successfully as '{object_name}'bucket: {bucketName}, object_key: {object_name}")
    except S3Error as e:
        print(f"MinIO Error: {e}")
        raise ValueError({"error": f"Failed to upload file: {e}"})
    except Exception as e:
        print(f"General Error: {e}")
        raise ValueError({"error": f"An unexpected error occurred: {e}"})
