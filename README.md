# 📋 Task Manager Web Application

A simple full-stack Task Manager application built as a technical assignment for **Restomart**.  
This application allows users to add, edit, delete, and view tasks — with a minimal clean interface and a RESTful backend API.

---

## 📌 Project Overview

**Company:** Restomart  
**Role:** Technical Intern  
**Candidate:** Sai Ravi Teja Vudathala
**Project:** Task Manager (No Auth)

---

## 🛠 Tech Stack

### Backend
- **Node.js**
- **Express.js**
- **UUID** (for unique task IDs)
- **Sqlite3** (local database)
- **fetch API** (for API calls)
- **Deployed on Render**

### Frontend
- **React.js**
- **React Hooks**
- **Fetch API**
- **Plain CSS**
- **Deployed on Vercel**

---

## 🎯 Features & Functionalities

✅ Add New Task  
✅ Edit Existing Task  
✅ Delete Task  
✅ View List of Tasks  

---

## 📂 Repository Structure
   Task Manager Restomart
     backend
     frontend


---

## 🔌 API Endpoints (Backend)

| Method | Endpoint     | Description              |
|:--------|:---------------|:--------------------------|
| GET    | `/tasks`       | List all tasks             |
| POST   | `/tasks`       | Create a new task          |
| PUT    | `/tasks/:id`   | Update a task by ID        |
| DELETE | `/tasks/:id`   | Delete a task by ID        |

---

## 🖥️ Pages (Frontend)

| Page         | URL Path       | Description                              |
|:---------------|:----------------|:------------------------------------------|
| Home          | `/`              | Displays all tasks                        |
| Add Task      | `/add`           | Form to create a new task                 |
| Edit Task     | `/edit/:id`      | Form to update an existing task (reused)  |

---

## 📦 How to Setup & Run

### 🔧 Prerequisites:
- **Node.js** (v18+)
- **NPM**

---

### 📜 Backend Setup (Node.js + Express + Sqlite3)

cd backend

npm install

node app.js

### Frontend Setup (React JS with React Hooks)

cd frontend

npm install

npm start

### 🌐 Live Demo
Backend (Render): [https://taskmanagerbackend-i81j.onrender.com](https://taskmanagerbackend-i81j.onrender.com)

Frontend (Vercel): https://taskmanagerfrontend-pied.vercel.app/

Screen Recording (Google Drive) : https://drive.google.com/file/d/1BNXgcFTMwNkyBzHRLqwnEf6dsnixNMT2/view?usp=sharing

