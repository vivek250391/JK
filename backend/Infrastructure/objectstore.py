from minio import Minio
from minio.error import S3Error
import os


class objectstore:
    client=None
    def init(self,MINIO_URL,MINIO_ACCESS_KEY,MINIO_SECRET_KEY,SECURE_CONNECTION):
        secureConnection=True
        if SECURE_CONNECTION == 'False':
            secureConnection=False
        else :
            secureConnection=True
        objectstore.client = Minio(
        MINIO_URL,
        access_key=MINIO_ACCESS_KEY,
        secret_key=MINIO_SECRET_KEY,
        secure=secureConnection
    )
    
    def createBucket(self,bucketName):
        try:

    
   

    # Example: List existing buckets
            buckets = objectstore.client.list_buckets()
            print("Successfully connected to MinIO! Existing buckets:")
            for bucket in buckets:
                print(f"* {bucket.name} created at {bucket.creation_date}")

            if not objectstore.client.bucket_exists(bucketName):
                objectstore.client.make_bucket(bucketName)
                print(f"\nBucket '{bucketName}' created successfully.")
            else:
                print(f"\nBucket '{bucketName}' already exists.")

        except S3Error as e:
            print(f"An S3 error occurred: {e}")
        except Exception as e:
            print(f"An unexpected error occurred: {e}")

    def insertObject(self,bucketName,objectName,fileData,file):
        try:
            objectstore.client.put_object(
                bucket_name=bucketName,
                object_name=objectName,
                data=fileData, # Pass the in-memory stream
                length=file.size, # Content length is important
                content_type=file.content_type
            )
            print(f"Data successfully uploaded as object '{objectName}' to bucket '{bucketName}'")
        except Exception as err:
            print(err)

