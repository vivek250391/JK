# Run The Application
- clone the repository
- copy .env and put proper values
- run docker compose up command


# project Structure

## backend
```
backend
|
|--------auth
|          |----authapplication.py
|          |----authrepository.py
|          |----router.py
|          |----userEntity.py
|          |----userModel.py
|
|
|
|--------book
|          |-----bookApplication.py
|          |-----bookEntity.py
|          |-----bookModel.py
|          |-----bookobjectstore.py
|          |-----bookRepository.py
|          |-----router.py
|
|
|
|------Infrastructure
|          |----database.py
|          |----objectstore.py
|
|
|
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
