# lumina lib library

## run the application

```bash
python -m venv luminalibenv
.\luminalib\scripts\activate.ps1
pip install -r requirements.txt
fastapi dev app.py

```

## Technology stack

- **Framework:**  Fast APi
- **Python Version** 3.13+
- **ORM Framework** SqlModel
- **DatabaseDriver** Psycopg
- **Database** Postgres18+(containerized)
- **Authentication** PythonJwt
- **ModelValidation** Pydantic
- **APIDocumentation** OpenAPI

## Api Endpoints(base address /api)

- **/auth/signup** POST new user signup
- **/auth/login** POST gets jwt access token
- **/upload** POST uploads a file
- **/books** GET lists book
- **/books/{id}** PUT updates book
- **/books/{id}** DELETE deletes book
- **/books/{id}/borrow** POST User borrows a book.
- **/books/{id}/return** POST User returns a book
- **/book/{id}/reviews** POST User submits a review
- **/books/return** GET VIew all the books to be returned
- **/api/books/{user}/{bookIssueId}/isbookissued** GET is book by book issue id is issued to the user

## environment variables used(for use in .env file)
- HOST_TO_ALLOW
- DATABASE_USER
- DATABASE_PASSWORD
- DATABASE_HOST
- DATABASE_PORT
- DATABASE_NAME
- MINIO_URL
- MINIO_ACCESS_KEY
- MINIO_SECRET_KEY
- MINIO_SECURE_CONNECTION
- MINIO_BUCKET_NAME
- JWT_SECRET_KEY
- JWT_ALGORITHM
- AI_MODEL



