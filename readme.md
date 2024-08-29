# 📚 Bookstore API

This project involves creating a REST API using MongoDB as the database. The API is designed for a bookstore, chosen for the variety of information that can be accessed in a bookstore catalog. I used Express to make my API more robust and to further develop my skills with this framework, and MongoDB to explore non-relational databases.

## 📂 Project Structure

- **src**: Contains all the source code.
- **config**: Database connection configuration using environment variables.
- **controllers**: Define how requests interact with the database.
- **errors**: Custom error handling for routes.
- **middlewares**: Process requests before sending responses.
- **models**: Define the structure of MongoDB collections.
- **routes**: List all HTTP request routes, organized by collection.
- **app.js**: Main application file.
- **server.js**: Sets up the local server.
- **test.py**: Optional Python script for testing API requests. It's recommended to use Postman or Insomnia for a more user-friendly experience.

## 🚀 Getting Started

### Prerequisites

- Node.js
- MongoDB
- Python (for testing with `test.py`)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Lucas-I-Marciano/api-rest_library-store
   cd bookstore-api
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:
   ```sh
   cp .env.example .env
   # Edit .env to include your MongoDB connection string
   ```

### Running the Application

1. Start the server:

   ```sh
   npm run dev
   ```

2. The API will be running at `http://localhost:3000`.

### Testing

1. Run the Python test script:
   ```sh
   python test.py
   ```

## 🤝 Contributing

Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.

## 📬 Contact

- Email: lucas.marciano99@outlook.com
- LinkedIn:
  https://www.linkedin.com/in/lucas-ioran-marciano/
