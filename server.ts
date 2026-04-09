import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";
import fs from "fs";

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3003;
const JWT_SECRET = process.env.JWT_SECRET || "super-secret-key";

app.use(cors());
app.use(express.json());

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "./uploads";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

app.use("/uploads", express.static("uploads"));

// Middleware to check authentication
const authenticate = (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

// Auth Routes
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: "1d" });
  res.json({ token, user: { id: user.id, email: user.email, name: user.name, role: user.role } });
});

// Seed Admin User and Demo Data
app.post("/api/auth/seed", async (req, res) => {
  const count = await prisma.user.count();
  if (count > 0) return res.status(400).json({ error: "Seed already performed" });

  const hashedPassword = await bcrypt.hash("admin123", 10);
  
  // Create Admin
  const admin = await prisma.user.create({
    data: {
      email: "admin@dphs.edu",
      password: hashedPassword,
      name: "Admin",
      role: "ADMIN",
    },
  });

  // Create Demo Teachers
  await prisma.teacher.createMany({
    data: [
      { name: "MD. OSMAN GANI", role: "প্রধান শিক্ষক", image: "https://image.mojib.me/uploads/school/1775741426_Head%20sir.png", order: 1 },
      { name: "MD. KUTUB UDDIN", role: "সহকারী প্রধান শিক্ষক", image: "https://image.mojib.me/uploads/school/1775741682_Kutub%20Uddin.png", order: 2 },
      { name: "SALEH AHMAD", role: "ইসলাম ধর্ম শিক্ষক", image: "https://static.vecteezy.com/system/resources/previews/051/718/779/non_2x/colorful-3d-cartoon-teacher-education-free-png.png", order: 3 },
    ]
  });

  // Create Demo Notices
  await prisma.notice.createMany({
    data: [
      { title: "বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৬", date: new Date("2026-04-25"), isEmergency: true },
      { title: "বার্ষিক সাংস্কৃতিক অনুষ্ঠান", date: new Date("2026-03-15") },
      { title: "বিজ্ঞান মেলা ও প্রদর্শনী", date: new Date("2026-02-10") },
    ]
  });

  // Create Demo Events
  await prisma.event.createMany({
    data: [
      { title: "বার্ষিক ক্রীড়া প্রতিযোগিতা", date: "২৫শে এপ্রিল, ২০২৬", location: "স্কুল মাঠ" },
    ]
  });

  // Create Demo Links
  await prisma.importantLink.createMany({
    data: [
      { name: "শিক্ষা বোর্ড", url: "http://www.educationboard.gov.bd/", order: 1 },
      { name: "মাউশি", url: "http://www.dshe.gov.bd/", order: 2 },
    ]
  });

  res.json({ message: "Admin and Demo data seeded successfully" });
});

// Generic CRUD helper
const createCrudRoutes = (modelName: string, pathName: string) => {
  const model = (prisma as any)[modelName];

  app.get(`/api/${pathName}`, async (req, res) => {
    const data = await model.findMany({ orderBy: { createdAt: "desc" } });
    res.json(data);
  });

  app.post(`/api/${pathName}`, authenticate, async (req, res) => {
    const data = await model.create({ data: req.body });
    res.json(data);
  });

  app.put(`/api/${pathName}/:id`, authenticate, async (req, res) => {
    const data = await model.update({ where: { id: req.params.id }, data: req.body });
    res.json(data);
  });

  app.delete(`/api/${pathName}/:id`, authenticate, async (req, res) => {
    await model.delete({ where: { id: req.params.id } });
    res.json({ success: true });
  });
};

// Create routes for all models
createCrudRoutes("teacher", "teachers");
createCrudRoutes("student", "students");
createCrudRoutes("notice", "notices");
createCrudRoutes("event", "events");
createCrudRoutes("galleryImage", "gallery");
createCrudRoutes("result", "results");
createCrudRoutes("alumni", "alumni");
createCrudRoutes("blogPost", "blog");
createCrudRoutes("review", "reviews");
createCrudRoutes("governingBodyMember", "governing-body");
createCrudRoutes("importantLink", "links");

// Site Config routes
app.get("/api/config", async (req, res) => {
  const config = await prisma.siteConfig.findMany();
  const configMap = config.reduce((acc: any, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {});
  res.json(configMap);
});

app.post("/api/config", authenticate, async (req, res) => {
  const { key, value } = req.body;
  const config = await prisma.siteConfig.upsert({
    where: { key },
    update: { value },
    create: { key, value },
  });
  res.json(config);
});

// File Upload Route
app.post("/api/upload", authenticate, upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  res.json({ url: `/uploads/${req.file.filename}` });
});

// Vite middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: {
          port: Number(process.env.VMR_PORT || process.env.HMR_PORT) || 24679
        }
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(Number(PORT), "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
