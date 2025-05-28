# 🎟️ Event Booking System (Backend)

A secure and role-based backend system for managing events, built using **Node.js**, **Express**, **Sequelize**, and **JWT Authentication**.

---

## ✅ Completed Features

### 🔐 Authentication & Authorization
- JWT-based authentication.
- Middleware to restrict access based on user roles (`admin`, `user`).

### 📅 Event Management (Admin-only)
- Create, update, and delete events with proper authentication and authorization.

---

## 🔧 Technologies Used

- Node.js
- Express.js
- Sequelize (with PostgreSQL)
- JWT for authentication

---

## 🚀 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/mehtashish/Event-Booking-System.git
cd Event-Booking-System
```

```bash
# Install dependencies
npm install

# Configure environment variables
touch .env

# .env file sample:
PORT=5000
db_name=your_database
db_user=your_user
db_password=your_password
JWT_SECRET=your_jwt_secret

# Run the server
node .\index.js
```

---

### 📁 Event API Endpoints

| Method | Endpoint             | Description        | Access     |
| ------ | -------------------- | ------------------ | ---------- |
| GET    | `/events/`           | Get all events     | Public     |
| POST   | `/events/add`        | Add a new event    | Admin only |
| PATCH  | `/events/update/:id` | Update event by ID | Admin only |
| DELETE | `/events/delete/:id` | Delete event by ID | Admin only |

---

### 📆 Booking System (To Be Developed)

| Task                             | Status             |
| -------------------------------- | ------------------ |
| Book an event (by user)          | ❌ Work in progress |
| Cancel a booking                 | ❌ Work in progress |
| View user bookings               | ❌ Work in progress |
| Reduce availableSeats on booking | ❌ Work in progress |
| Prevent overbooking              | ❌ Work in progress |



