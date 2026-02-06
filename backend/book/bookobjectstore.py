from Infrastructure.objectstore import objectstore

store=objectstore()

class BookObjectStore:
    def createStore(self):
        store.createBucket()
        return 1
    
    def insertObject(self,bucketName,objectName,fileData,file):
        store.insertObject(bucketName,objectName,fileData,file)
        return 1