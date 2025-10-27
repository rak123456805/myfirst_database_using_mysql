<<<<<<< HEAD
# 🔐 Serene Auth — React + Node.js + MySQL Authentication System

A simple and modern authentication system built using **React (frontend)**, **Node.js/Express (backend)**, and **MySQL (database)**.  
This project includes user **signup**, **login**, **form validation**, and secure **API integration**.

---

## 📁 Project Structure

sql/
│
├── backend/
│ ├── server.js
│ ├── package.json
│ ├── routes/
│ │ └── auth.js
│ ├── controllers/
│ │ └── authController.js
│ ├── config/
│ │ └── db.js
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Login.js
│ │ │ └── Signup.js
│ │ ├── pages/
│ │ │ └── Dashboard.js
│ │ ├── App.js
│ │ ├── index.js
│ │ └── Auth.css
│ ├── package.json
│ └── public/
│
└── README.md

---

## ⚙️ Features

✅ User **Signup** and **Login**  
✅ Frontend form validation (email format, password match, required fields)  
✅ Backend API endpoints for authentication  
✅ LocalStorage token and user data storage  
✅ Responsive, minimal, and modern UI design  
✅ Easy integration with any backend  

---

## 🧠 Tech Stack

### Frontend
- React.js (Hooks, useState, useNavigate)
- React Router DOM
- CSS3 for styling

### Backend
- Node.js
- Express.js
- MySQL (with mysql2 or Sequelize)
- bcrypt for password hashing
- dotenv for environment variables

---

## 🔑 API Endpoints

| Method | Endpoint        | Description       |
|--------|-----------------|-------------------|
| `POST` | `/signup`       | Register a new user |
| `POST` | `/login`        | Login existing user |

### 🧩 Example Request (Signup)
```bash
POST /signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
👨‍💻 Author

Developed by: Rakshith H N
=======
# myfirst_database_using_mysql
>>>>>>> e0af4d224b4b555c7cf8d557a3e8f7f6013a34ae
