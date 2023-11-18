Certainly! Here's a README for your TypeScript Express app with MongoDB, featuring an API for managing apartments:

---

# Express TypeScript MongoDB App - Apartments API

This TypeScript Express app provides a RESTful API for managing apartments, including functionalities to list all apartments, add new apartments, and get details of a specific apartment.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [How to Run](#how-to-run)
- [API Endpoints](#api-endpoints)
- [Dependencies](#dependencies)
- [Development](#development)
- [License](#license)

## Getting Started

### Prerequisites
Make sure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/backend.git
   ```

2. Change directory:
   ```bash
   cd backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables
Create a `.env` file in the root directory and configure the following variables:

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with the connection string for your MongoDB instance.

### How to Run
To run the app locally, use the following commands:

- **Development Mode:**
  ```bash
  npm run dev
  ```
  The app will be available at [http://localhost:3000](http://localhost:3000).

- **Build and Start:**
  ```bash
  npm run build
  npm start
  ```
  The app will be available at [http://localhost:3000](http://localhost:3000).

## API Endpoints

### 1. List All Apartments
- **Endpoint:** `/apartments`
- **Method:** GET
- **Description:** Get a list of all apartments.

### 2. Add New Apartment
- **Endpoint:** `/apartments`
- **Method:** POST
- **Description:** Add a new apartment.
- **Request Body:**
  ```json
  {
  "title": "Luxury Penthouse with Skyline View",
  "description": "A luxurious penthouse offering breathtaking views of the city skyline",
  "zone": "City Center",
  "price": 8000000,
  "bedrooms": 3,
  "bathrooms": 4,
  "floor": 20,
  "deliveryYear": 2023,
  "compound": "Skyline Towers",
  "developer": "Luxury Living Developers",
  "saleType": "For Sale",
  "size": 3000
}

  ```

### 3. Get Apartment Details
- **Endpoint:** `/apartments/:id`
- **Method:** GET
- **Description:** Get details of a specific apartment by providing its ID.

## Dependencies
- `@types/express`: TypeScript types for Express.
- `@types/node`: TypeScript types for Node.js.
- `nodemon`: Utility to monitor for changes and automatically restart your server.
- `ts-node`: TypeScript execution and REPL for Node.js.
- `typescript`: TypeScript language server.

## Development
This app uses TypeScript with Express and MongoDB to manage apartment data. Feel free to explore and contribute to the development.

## License
This project is licensed under the [ISC License](LICENSE).

---

Replace "your-username" in the git clone URL with your actual GitHub username. Adjust the content based on your specific app features and details.
