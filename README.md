# E-commerce Store

## Description
This is the back-end for an e-commerce application. It provides a RESTful API for managing categories, products, and tags in a PostgreSQL database. The application is built using **Express.js**, **Sequelize**, and **PostgreSQL**, and allows users to perform CRUD operations for categories, products, and tags.

## Preview
For a preview of how these APIs are being called, please refer to the [img](/img/) folder, which includes all screenshots from the APIs being called.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rennancruz/E-commerce-store.git
   ```

2. Navigate to the project directory:
   ```bash
   cd E-commerce-store
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up the `.env` file in the root directory with the following variables:
   ```env
   DB_NAME=ecommerce_db
   DB_USER=your_postgres_username
   DB_PASSWORD=your_postgres_password
   PORT=3001
   ```

5. Create the database by running the `schema.sql` file in the `db` folder:
   ```bash
   psql -U your_postgres_username -d postgres -f db/schema.sql
   ```

6. Seed the database:
   ```bash
   npm run seed
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```

2. Use a tool like **Insomnia** or **Postman** to interact with the API.

## API Endpoints

### Categories
- `GET /api/categories` - Get all categories.
- `GET /api/categories/:id` - Get a single category by ID.
- `POST /api/categories` - Create a new category.
- `PUT /api/categories/:id` - Update a category by ID.
- `DELETE /api/categories/:id` - Delete a category by ID.

### Products
- `GET /api/products` - Get all products.
- `GET /api/products/:id` - Get a single product by ID.
- `POST /api/products` - Create a new product.
- `PUT /api/products/:id` - Update a product by ID.
- `DELETE /api/products/:id` - Delete a product by ID.

### Tags
- `GET /api/tags` - Get all tags.
- `GET /api/tags/:id` - Get a single tag by ID.
- `POST /api/tags` - Create a new tag.
- `PUT /api/tags/:id` - Update a tag by ID.
- `DELETE /api/tags/:id` - Delete a tag by ID.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **Sequelize**: ORM for interacting with the PostgreSQL database.
- **PostgreSQL**: Relational database management system.
- **dotenv**: For managing environment variables.

## License

This project is licensed under the MIT License.
