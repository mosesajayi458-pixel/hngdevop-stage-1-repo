# HNG DevOps Stage 1 – Personal API

## 📌 Description

This project is a simple Personal API built with Node.js (Express) and deployed on a Linux VPS.
It exposes three endpoints and is served publicly using **Nginx as a reverse proxy**.

The application is managed with **PM2** to ensure it stays running.

---

## ⚙️ How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/mosesajayi458-pixel/hngdevop-stage-1-repo.git
cd hngdevop-stage-1-repo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the application

```bash
node index.js
```

The app will run on:

```bash
http://localhost:8000
```

---

## 🚀 Live Deployment

Base URL:

```bash
http://98.94.12.184
```

---

## 📡 API Endpoints

### 1. GET /

**Response:**

```json
{
  "message": "API is running"
}
```

---

### 2. GET /health

**Response:**

```json
{
  "message": "healthy"
}
```

---

### 3. GET /me

**Response:**

```json
{
  "name": "Olowookere Damilola",
  "email": "mosesajayi458@gmail.com",
  "github": "https://github.com/mosesajayi458-pixel"
}
```

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* Nginx (Reverse Proxy)
* PM2 (Process Manager)
* Ubuntu Linux (VPS)

---

## ⚡ Deployment Details

* Application runs on **port 8000**
* Nginx listens on **port 80** and forwards requests to the app
* PM2 ensures the app runs continuously and restarts on failure

---

## 📂 Project Structure

```
my-api/
├── index.js
├── package.json
└── README.md
```

---

## 👤 Author

* Name: Olowookere Damilola
* Email: Mosesajayi458@gmail.com
* GitHub: https://github.com/mosesajayi458-pixel
