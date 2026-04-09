# Dechua Palong High School (DPHS) - Full Stack Web Application

This is a full-stack web application built with React (Vite), Express, and Prisma (MySQL/SQLite).

## Features
- **Admin Panel**: Control all site content (Teachers, Students, Notices, Events, Gallery, Blog, etc.)
- **Role-based Access**: Admin, Teacher, Student, Moderator roles.
- **Dynamic Content**: All pages update automatically when data is changed in the admin panel.
- **Responsive Design**: Mobile-friendly UI with modern animations.

## Tech Stack
- **Frontend**: React 19, Tailwind CSS, Framer Motion, Lucide Icons.
- **Backend**: Node.js, Express, JWT Authentication.
- **Database**: Prisma ORM (configured for MySQL, currently using SQLite for preview).

## VPS Hosting Instructions

### 1. Prerequisites
- A VPS running Ubuntu 20.04+ or similar.
- Node.js (v18+) and npm installed.
- MySQL Server installed and running.

### 2. Setup Database
Create a MySQL database for the app:
```sql
CREATE DATABASE dphs_db;
CREATE USER 'dphs_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON dphs_db.* TO 'dphs_user'@'localhost';
FLUSH PRIVILEGES;
```

### 3. Clone and Install
```bash
git clone <your-repo-url>
cd dphs-app
npm install
```

### 4. Configure Environment
Create a `.env` file in the root directory:
```env
DATABASE_URL="mysql://dphs_user:your_password@localhost:3306/dphs_db"
JWT_SECRET="your_random_secret_key"
NODE_ENV="production"
```

### 5. Initialize Database
```bash
npx prisma generate
npx prisma db push
```

### 6. Build and Start
```bash
npm run build
npm start
```

### 7. PM2 (Recommended for Production)
To keep the app running in the background:
```bash
npm install -g pm2
pm2 start server.ts --name dphs-app --interpreter tsx
pm2 save
pm2 startup
```

## Admin Credentials
After hosting, visit `/admin/login` and click "প্রথমবার? অ্যাডমিন তৈরি করুন" to seed the initial admin account.
- **Email**: `admin@dphs.edu`
- **Password**: `admin123`

## Port Configuration
The app runs on port **3000** by default. You can change this in `server.ts`.
To access it via port 80/443, use Nginx as a reverse proxy.

---
Developed by AI Studio Build.
