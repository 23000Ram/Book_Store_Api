# Book API

## Overview
This is a RESTful API for managing books using Node.js, Express, and MongoDB. The API allows users to perform CRUD operations on books, including retrieving all books, fetching a single book, adding a new book, updating an existing book, and deleting a book.

## Features
- Retrieve all books
- Get details of a single book
- Add a new book
- Update an existing book
- Delete a book

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/book-api.git
   cd book-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```sh
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### 1. Get All Books
- **Endpoint:** `GET /api/books`
- **Description:** Fetches all books from the database.
- **Response:**
  ```json
  [
    {
      "_id": "12345",
      "title": "Book Title",
      "author": "Author Name",
      "year": 2022
    }
  ]
  ```

### 2. Get a Single Book
- **Endpoint:** `GET /api/books/:id`
- **Description:** Retrieves details of a single book by its ID.
- **Response:**
  ```json
  {
    "_id": "12345",
    "title": "Book Title",
    "author": "Author Name",
    "year": 2022
  }
  ```

### 3. Add a New Book
- **Endpoint:** `POST /api/books`
- **Description:** Adds a new book to the database.
- **Request Body:**
  ```json
  {
    "title": "New Book",
    "author": "New Author",
    "year": 2023
  }
  ```
- **Example Request:**
  ```json
  {
    "title": "Third book added",
    "author": "Vamsi",
    "year": 2023
  }
  ```
- **Response:**
  ```json
  {
    "message": "Book added successfully",
    "book": {
      "_id": "67890",
      "title": "New Book",
      "author": "New Author",
      "year": 2023
    }
  }
  ```

### 4. Update a Book
- **Endpoint:** `PUT /api/books/:id`
- **Description:** Updates an existing book's details.
- **Request Body:**
  ```json
  {
    "title": "Updated Book Title",
    "author": "Updated Author",
    "year": 2024
  }
  ```
- **Response:**
  ```json
  {
    "message": "Book updated successfully"
  }
  ```

### 5. Delete a Book
- **Endpoint:** `DELETE /api/books/:id`
- **Description:** Deletes a book from the database.
- **Response:**
  ```json
  {
    "message": "Book deleted successfully"
  }
  ```

## License
This project is licensed under Ram Gopal Bandaru, a full-stack developer.

