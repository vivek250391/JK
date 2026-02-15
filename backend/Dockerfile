# Set the python version as a build-time argument
ARG PYTHON_VERSION=3.14-slim

# Use an official Python base image
FROM python:${PYTHON_VERSION}

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file into the container's working directory
COPY requirements.txt .

# Install Python packages
RUN pip install --no-cache-dir -r requirements.txt

# Copy your FastAPI app code into the container
COPY . .

# Expose the port that the application will run on
EXPOSE 80

# Command to run the application using Uvicorn (exec form for graceful shutdown)
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
