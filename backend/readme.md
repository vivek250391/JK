# lumina lib library

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



