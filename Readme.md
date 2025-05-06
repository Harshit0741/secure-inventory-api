
# 📦 Secure Inventory Item Management API

This is a secure RESTful API built with **Node.js**, **Express**, and **Drizzle ORM**, backed by **PostgreSQL**. It allows users to authenticate via OTP-based email verification and manage inventory items specific to their account.

---

## 🌐 Live API

🔗 [https://secure-inventory-api-production.up.railway.app](https://secure-inventory-api-production.up.railway.app)

---

## ⚙️ Features

- ✅ OTP-based email authentication
- 🔒 JWT-based route protection
- 📦 CRUD operations on user-specific inventory items
- 🧼 Input validation using Zod
- 🚨 Consistent error handling
- 🌍 Deployed on Railway (serverless)

---

## 🚀 Getting Started

### 📁 Clone the Repository

```bash
git clone https://github.com/Harshit0741/secure-inventory-api.git
cd secure-inventory-api
```

### 📦 Install Dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory and add the following:

```env

DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

```

You must use an **App Password** if you're using Gmail for `EMAIL_PASS`. Enable 2FA and generate one here:  
👉 [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)

---

## 📬 API Endpoints

All endpoints are prefixed with `/auth` or `/inventory`.

### Authentication

- `POST /auth/request-otp` — Request an OTP to be sent to your email
- `POST /auth/verify-otp` — Verify the OTP and receive a JWT

### Inventory (requires JWT)

- `GET /inventory` — Get all your inventory items
- `POST /inventory` — Add a new item
- `PUT /inventory/:id` — Update an item
- `DELETE /inventory/:id` — Delete an item

---

## 📄 API Docs & Postman

📬 [Postman Collection Link](https://harshit-6003987.postman.co/workspace/harshit's-Workspace~bb3b2062-7320-454a-8fde-febd3854d040/collection/43825972-fd007f8d-adc2-46d0-a629-ea0ce63b0cdb?action=share&creator=43825972) 

---

## 🧪 Development

```bash
npm run dev
```

---

## ☁️ Deployment

This project is deployed on **Railway** using **Nixpacks**.  
To redeploy, just push changes to the `main` branch on GitHub.

---

