# Run The Application
- clone the repository
- copy .env and put proper values
- run docker compose up command

# Run the Application in dev environment
- clone the repository
- copy .env and put proper values
## backend 
```
python -m env luminalibeenv
.\luminalibenv\scripts\activate.ps1
pip install -r requirements.txt
fastapi dev app.py
for prod mode run
fastapi run app.py
```

## database
container initialization
```
ensure volume postgres_data is created by create_volumne
docker run --name postgres1 -e POSTGRES_PASSWORD="my strong password" -d -p 5432:5432 -v postgres_data:/var/lib/postgresql/18/data postgres
```

## minio
container initialization
```
ensure volume ~/minio/data exists
docker run -d -p 9000:9000 -p 9001:9001 --name minio-server -e MINIO_ROOT_USER=minioadmin -e MINIO_ROOT_PASSWORD="my strong password" -v ~/minio/data:/data quay.io/minio/minio server /data --console-address ":9001"
```


## frontend
npm run dev

# project Structure

## backend
```
backend
|
|--------aiagent/
|          |----init.py
|
|--------auth/
|          |----authapplication.py
|          |----authrepository.py
|          |----router.py
|          |----userEntity.py
|          |----userModel.py
|
|
|
|--------book/
|          |-----bookissue/
|          |         |-------bookissueModel.py
|          |         |-------bookissueEntity.py
|          |         |-------bookissueRepository.py
|          |         |-------bookissueApplication.py
|          |
|          |-----bookApplication.py
|          |-----bookEntity.py
|          |-----bookModel.py
|          |-----bookobjectstore.py
|          |-----bookRepository.py
|          |-----router.py
|
|
|
|------Infrastructure/
|          |----database.py
|          |----objectstore.py
|
|
|--------tests/(for testing)
|
app.py
requirements.txt

```
## frontend

```
src
|
|
|---------app(Application routes thought off as application pages)
|
|
|----------components(standalone components)
|
|---------lib(javascript code to use by each component(s))



```

### Application routes
- **auth** login , profile, signout,signup
- **book** add,delete/id, upload/id, view/id, update/id

### components
- **auth** login, signup
- **book** add-book, edit-book, upload-book, view-book
- **Header**  Header

### lib
- **book** Addbookeventhandler, uploadbookeventhandler, viewbookeventhandler
