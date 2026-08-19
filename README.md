# 🚀 Job Portal Platform

A full-stack, modern, and feature-rich Job Portal Application built using the **MERN** stack (**MongoDB, Express.js, React, Node.js**) with **Redux Toolkit**, **Tailwind CSS**, and **Shadcn UI**.

This platform connects job seekers (Students/Applicants) with employers (Recruiters), enabling seamless job discovery, application tracking, company management, and applicant management.

---

## ✨ Features

### 👤 For Job Seekers (Applicants / Students)
- **User Authentication**: Secure registration and login with role-based authorization (Student / Recruiter).
- **Profile Management**: Update profile details, upload profile photo and resume (PDF), and manage skills.
- **Job Discovery & Search**: Browse latest job postings, filter by category, location, and salary, or search by keywords.
- **Job Application**: Apply for jobs with one click and track application status in real time.
- **Interactive UI**: Dark/Light mode theme toggling, sleek animations, and responsive layouts.

### 💼 For Employers (Recruiters)
- **Company Management**: Register, update, and manage company profiles with logos and descriptions.
- **Job Posting**: Create, edit, and post detailed job openings with custom requirements, salaries, and positions.
- **Applicant Tracking**: View applicants for posted jobs, inspect applicant profiles/resumes, and accept or reject applications.

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) & `redux-persist`
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/) (Radix UI primitives)
- **Icons & Animations**: [Lucide React](https://lucide.dev/), [Framer Motion](https://www.framer.com/motion/)
- **Notifications**: `sonner` toast alerts

### **Backend**
- **Runtime & Framework**: [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) via [Mongoose ORM](https://mongoosejs.com/)
- **Authentication**: JSON Web Tokens (JWT) stored in HTTP-Only Cookies & `bcryptjs`
- **File Uploads**: [Cloudinary API](https://cloudinary.com/) with `Multer` & `DataURI`

---

## 📁 Repository Structure

```
Job-Portal/
├── backend/                # Node.js + Express backend API
│   ├── controllers/        # Request handlers for user, job, company, application
│   ├── middlewares/        # Authentication & file upload middlewares
│   ├── models/             # Mongoose schemas (User, Job, Company, Application)
│   ├── routes/             # API routes
│   ├── utils/              # Database connection & Cloudinary setup
│   ├── index.js            # Express server entry point
│   └── package.json
│
├── frontend/               # React + Vite frontend application
│   ├── src/
│   │   ├── components/     # UI Components (Auth, Jobs, Admin Dashboard, Shared)
│   │   ├── hooks/          # Custom data fetching hooks
│   │   ├── redux/          # Redux slices (auth, job, company, application)
│   │   ├── utils/          # API constants & helpers
│   │   ├── App.jsx         # App router & layout setup
│   │   └── main.jsx        # Entry point
│   ├── index.html
│   └── package.json
│
└── README.md
```

---

## ⚡ Getting Started

### **Prerequisites**
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas cluster)
- [Cloudinary Account](https://cloudinary.com/) (for file/image storage)

---

### ⚙️ Installation & Setup

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yashkose014-dotcom/Job-Portal.git
cd Job-Portal
```

#### 2️⃣ Backend Configuration
Navigate to the `backend` directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory with the following variables:
```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

Start the backend server in development mode:
```bash
npm run dev
```
The server will run on `http://localhost:8000`.

---

#### 3️⃣ Frontend Configuration
Open a new terminal, navigate to the `frontend` directory, and install dependencies:
```bash
cd frontend
npm install
```

Start the Vite development server:
```bash
npm run dev
```
The application will open on `http://localhost:5173`.

---

## 📜 API Endpoints Overview

| Module | Method | Endpoint | Description |
| :--- | :--- | :--- | :--- |
| **User** | `POST` | `/api/v1/user/register` | Register a new user |
| **User** | `POST` | `/api/v1/user/login` | Log in user (returns JWT cookie) |
| **User** | `GET` | `/api/v1/user/logout` | Log out user |
| **User** | `POST` | `/api/v1/user/profile/update` | Update user profile & resume |
| **Job** | `POST` | `/api/v1/job/post` | Post a new job (Recruiter) |
| **Job** | `GET` | `/api/v1/job/get` | Get all jobs |
| **Job** | `GET` | `/api/v1/job/get/:id` | Get job details by ID |
| **Company** | `POST` | `/api/v1/company/register` | Register a company |
| **Company** | `GET` | `/api/v1/company/get` | Get recruiter companies |
| **Application** | `GET` | `/api/v1/application/apply/:id` | Apply for a job |
| **Application** | `POST` | `/api/v1/application/status/:id/update` | Update application status |

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:
1. Fork the Repository.
2. Create a Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the [ISC License](backend/package.json).
