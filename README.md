# 🍽️ Restaurant Management REST API

A scalable and secure RESTful backend built with **Node.js**, **Express.js**, and **MongoDB** for managing restaurants, food items, categories, users, and orders. The project follows industry-standard backend architecture with JWT authentication, modular code organization, and RESTful API design.

---

## 🚀 Features

- 🔐 JWT-based Authentication & Authorization
- 🔒 Password Hashing using bcrypt
- 👤 User Registration & Login
- 🏪 Restaurant Management
- 🍕 Food Management
- 📂 Category Management
- 🛒 Order Management
- 🛡️ Protected Routes using Authentication Middleware
- 🌍 Environment Variable Configuration
- 📦 Modular Project Structure
- ⚡ RESTful API Design
- ❌ Centralized Error Handling
- 📄 JSON-based API Responses

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcrypt

### Development Tools
- Nodemon
- dotenv
- cookie-parser

---

## 📁 Project Structure

```
Restaurant-Management-API
│
├── config/
│   └── db.js
│   └── env.js
│
├── controllers/
│
├── middleware/
│
├── models/
│
├── routes/
│
├── server.js
│
├── .env
│
├── package.json
│
└── README.md
```

---

## 📌 API Endpoints

### 🔐 Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/auth/register` | Register User |
| POST | `/api/v1/auth/login` | Login User |
| POST | `/api/v1/auth/logout` | Logout User |

---

### 👤 User

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/v1/user/profile` | Get Logged-in User |
| PUT | `/api/v1/user/profile` | Update User |
| POST | `/api/v1/user/password` | Update Password |
| POST | `/api/v1/user/reset-password` | Reset Password |
| DELETE | `/api/v1/user/profile` | Delete Account |

---

### 🏪 Restaurants

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/restaurants` | Create Restaurant |
| GET | `/api/v1/restaurants` | Get All Restaurants |
| GET | `/api/v1/restaurants/:id` | Get Restaurant by ID |
| DELETE | `/api/v1/restaurants/:id` | Delete Restaurant |

---

### 📂 Categories

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/categories` | Create Category |
| GET | `/api/v1/categories` | Get All Categories |
| PUT | `/api/v1/categories/:id` | Update Category |
| DELETE | `/api/v1/categories/:id` | Delete Category |

---

### 🍕 Foods

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/foods` | Create Food |
| GET | `/api/v1/foods` | Get All Foods |
| GET | `/api/v1/foods/:id` | Get Food by ID |
| GET | `/api/v1/foods/restaurant/:id` | Get Foods by Restaurant |
| PUT | `/api/v1/foods/:id` | Update Food |
| DELETE | `/api/v1/foods/:id` | Delete Food |

---

### 🛒 Orders

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/orders` | Place Order |
| PATCH | `/api/v1/orders/:id` | Update Order Status |

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/Sudhanshu-Singh-Parmar/restaurant-management-api.git
```

### Navigate to Project

```bash
cd restaurant-management-api
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=8000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Run Development Server

```bash
npm run dev
```

Server will start at

```
http://localhost:8000
```

---

## 🔒 Authentication

Protected APIs require a valid JWT.

Example Authorization Header

```
Authorization: Bearer <your_token>
```

> If using **HTTP-only Cookies**, the browser automatically sends the authentication cookie with each request.

---

## 📦 API Response Format

### Success Response

```json
{
    "success": true,
    "message": "Operation completed successfully",
    "data": {}
}
```

### Error Response

```json
{
    "success": false,
    "message": "Something went wrong"
}
```

---

## 📈 Future Improvements

- Refresh Token Authentication
- Role-Based Access Control (Admin, Restaurant Owner, Customer)
- Image Upload (Cloudinary)
- Pagination & Filtering
- Search Functionality
- Swagger/OpenAPI Documentation
- Rate Limiting
- Email Verification
- Forgot Password via Email
- Unit & Integration Testing
- Docker Support
- CI/CD Pipeline
- Redis Caching