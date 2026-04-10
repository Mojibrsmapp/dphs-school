# Dechua Palong High School (DPHS) - Full Stack Web Application
Official Repository: [https://github.com/Mojibrsmapp/dphs-school](https://github.com/Mojibrsmapp/dphs-school)

This is a production-ready full-stack web application for Dhechua Palong High School, featuring a powerful Admin Panel and dynamic content management.

## 🚀 VPS Hosting Guide (Step-by-Step)

Follow these steps to host the site on your VPS (Ubuntu/Debian recommended).

### 1. Prerequisites
- **Node.js**: v18 or higher
- **MySQL**: Installed and running
- **Git**: Installed

### 2. Clone the Repository
```bash
git clone https://github.com/Mojibrsmapp/dphs-school.git
cd dphs-school
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Database Setup (MySQL)
Create a database in your MySQL server:
```sql
CREATE DATABASE dphs_db;
```

### 5. Environment Configuration
Create a `.env` file in the project root:
```bash
nano .env
```
Paste the following (update with your credentials):
```env
# Database Connection
DATABASE_URL="mysql://YOUR_MYSQL_USER:YOUR_MYSQL_PASSWORD@localhost:3306/dphs_db"

# Security
JWT_SECRET="choose_a_long_random_string"

# Server Configuration
PORT=3003
NODE_ENV="production"
```

### 6. Initialize Database & Prisma
```bash
npx prisma generate
npx prisma db push
```

### 7. Build for Production
```bash
npm run build
```

### 8. Start the Application
For production, always use the `start` script with `NODE_ENV=production`:
```bash
NODE_ENV=production npm start
```

### 9. PM2 (Keep it running 24/7)
```bash
npm install -g pm2
NODE_ENV=production pm2 start server.ts --name dphs-app --interpreter tsx
pm2 save
pm2 startup
```

---

## 🔐 Admin Panel Setup
1. Visit `http://your-vps-ip:3003/admin/login`
2. Click **"প্রথমবার? অ্যাডমিন তৈরি করুন"** (Seed) button.
3. This will create the admin account and add **Demo Data** (Teachers, Notices, Events).
4. **Login Credentials:**
   - **Email:** `admin@dphs.edu`
   - **Password:** `admin123`
5. *Important:* Change your password immediately after logging in.

## 🛠 Troubleshooting
- **Port Conflict:** If port 3003 is busy, change `PORT` in `.env`.
- **WebSocket Error:** If you run in `dev` mode and see port 24678 errors, it's because another app is using it. **Solution:** Always use `NODE_ENV=production npm start` for VPS.
- **Database Error:** Ensure MySQL is running and the `DATABASE_URL` is correct.
- **Malformed Database (SQLite):** If you see "database disk image is malformed", run these commands to reset the SQLite database:
  ```bash
  rm prisma/dev.db
  npx prisma db push
  ```
  *Note:* This will delete all current data. It's highly recommended to use **MySQL** for production to avoid this.

---
Developed by AI Studio Build.
Footer Credit: © ২০২৫ ধেছুয়াপালং উচ্চ বিদ্যালয় | সর্বস্বত্ব সংরক্ষিত | কারিগরি সহায়তায়: [মুজিব আরএসএম](https://mojib.me/)
