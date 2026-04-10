import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, Users, GraduationCap, FileText, 
  Image as ImageIcon, Calendar, Link as LinkIcon, 
  Settings, LogOut, Plus, Trash2, Edit, Save, X, Upload
} from 'lucide-react';
import { api } from '../services/api';

export const AdminDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("admin_user");
    if (!storedUser) {
      navigate("/admin/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_user");
    navigate("/admin/login");
  };

  const tabs = [
    { id: "dashboard", path: "/admin/dashboard", name: "ড্যাশবোর্ড", icon: <LayoutDashboard size={20} /> },
    { id: "teachers", path: "/admin/dashboard/teachers", name: "শিক্ষকবৃন্দ", icon: <Users size={20} /> },
    { id: "students", path: "/admin/dashboard/students", name: "শিক্ষার্থী", icon: <GraduationCap size={20} /> },
    { id: "notices", path: "/admin/dashboard/notices", name: "নোটিশ", icon: <FileText size={20} /> },
    { id: "events", path: "/admin/dashboard/events", name: "ইভেন্টস", icon: <Calendar size={20} /> },
    { id: "gallery", path: "/admin/dashboard/gallery", name: "গ্যালারি", icon: <ImageIcon size={20} /> },
    { id: "alumni", path: "/admin/dashboard/alumni", name: "প্রাক্তন ছাত্র", icon: <Users size={20} /> },
    { id: "links", path: "/admin/dashboard/links", name: "লিঙ্কস", icon: <LinkIcon size={20} /> },
    { id: "settings", path: "/admin/dashboard/settings", name: "সেটিংস", icon: <Settings size={20} /> },
  ];

  const currentPath = location.pathname;

  return (
    <div className="min-h-screen bg-gray-50 flex pt-24 lg:pt-0">
      {/* Sidebar */}
      <div className="w-72 bg-gray-900 text-white flex flex-col fixed lg:relative h-screen z-40">
        <div className="p-8 border-b border-white/10">
          <h1 className="text-2xl font-black text-school-secondary">DPHS Admin</h1>
          <p className="text-xs text-gray-400 mt-1">স্বাগতম, {user?.name}</p>
        </div>
        
        <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              to={tab.path}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
                currentPath === tab.path ? 'bg-school-primary text-white shadow-lg' : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {tab.icon}
              {tab.name}
            </Link>
          ))}
        </nav>
        
        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-red-400 hover:bg-red-400/10 transition-all"
          >
            <LogOut size={20} />
            লগআউট
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow overflow-y-auto h-screen p-6 lg:p-10">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

// Sub-components for each tab
export const DashboardOverview = () => {
  const [stats, setStats] = useState({ teachers: 0, students: 0, notices: 0, events: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const [t, s, n, e] = await Promise.all([
        api.get("/teachers"),
        api.get("/students"),
        api.get("/notices"),
        api.get("/events")
      ]);
      setStats({ teachers: t.length, students: s.length, notices: n.length, events: e.length });
    };
    fetchStats();
  }, []);

  return (
    <div className="space-y-10">
      <h2 className="text-4xl font-black text-gray-900">ড্যাশবোর্ড ওভারভিউ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: "মোট শিক্ষক", value: stats.teachers, color: "bg-blue-500", icon: <Users /> },
          { label: "মোট শিক্ষার্থী", value: stats.students, color: "bg-green-500", icon: <GraduationCap /> },
          { label: "মোট নোটিশ", value: stats.notices, color: "bg-purple-500", icon: <FileText /> },
          { label: "মোট ইভেন্ট", value: stats.events, color: "bg-amber-500", icon: <Calendar /> },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-6">
            <div className={`${stat.color} text-white p-4 rounded-2xl shadow-lg`}>{stat.icon}</div>
            <div>
              <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">{stat.label}</p>
              <p className="text-3xl font-black text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TeachersManager = () => {
  const [teachers, setTeachers] = useState<any[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({ name: "", role: "", phone: "", email: "", image: "" });

  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchTeachers = async () => {
    const data = await api.get("/teachers");
    setTeachers(data);
  };

  useEffect(() => { fetchTeachers(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      await api.put(`/teachers/${editingId}`, formData);
    } else {
      await api.post("/teachers", formData);
    }
    setIsAdding(false);
    setEditingId(null);
    setFormData({ name: "", role: "", phone: "", email: "", image: "" });
    fetchTeachers();
  };

  const handleEdit = (teacher: any) => {
    setFormData({
      name: teacher.name,
      role: teacher.role,
      phone: teacher.phone || "",
      email: teacher.email || "",
      image: teacher.image || ""
    });
    setEditingId(teacher.id);
    setIsAdding(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("আপনি কি নিশ্চিত?")) {
      await api.delete(`/teachers/${id}`);
      fetchTeachers();
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-black text-gray-900">শিক্ষকবৃন্দ ব্যবস্থাপনা</h2>
        <button 
          onClick={() => {
            setIsAdding(true);
            setEditingId(null);
            setFormData({ name: "", role: "", phone: "", email: "", image: "" });
          }}
          className="bg-school-primary text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
        >
          <Plus size={24} /> নতুন শিক্ষক যোগ করুন
        </button>
      </div>

      {isAdding && (
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">{editingId ? "শিক্ষক তথ্য পরিবর্তন" : "নতুন শিক্ষক তথ্য"}</h3>
            <button onClick={() => { setIsAdding(false); setEditingId(null); }}><X /></button>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            <input 
              placeholder="নাম" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.name} 
              onChange={e => setFormData({...formData, name: e.target.value})}
              required
            />
            <input 
              placeholder="পদবী" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.role} 
              onChange={e => setFormData({...formData, role: e.target.value})}
              required
            />
            <input 
              placeholder="ফোন" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.phone} 
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
            <input 
              placeholder="ইমেইল" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.email} 
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
            <button type="submit" className="col-span-2 bg-school-secondary text-white py-4 rounded-xl font-black">
              {editingId ? "আপডেট করুন" : "সংরক্ষণ করুন"}
            </button>
          </form>
        </div>
      )}

      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-6 font-bold">নাম</th>
              <th className="p-6 font-bold">পদবী</th>
              <th className="p-6 font-bold">ফোন</th>
              <th className="p-6 font-bold text-right">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((t) => (
              <tr key={t.id} className="border-b hover:bg-gray-50">
                <td className="p-6 font-bold">{t.name}</td>
                <td className="p-6">{t.role}</td>
                <td className="p-6">{t.phone}</td>
                <td className="p-6 text-right space-x-4">
                  <button onClick={() => handleEdit(t)} className="text-blue-500"><Edit size={20} /></button>
                  <button onClick={() => handleDelete(t.id)} className="text-red-500"><Trash2 size={20} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Placeholder for other managers - they follow similar patterns
export const StudentsManager = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({ name: "", studentId: "", roll: "", class: "", phone: "" });

  const fetchStudents = async () => {
    const data = await api.get("/students");
    setStudents(data);
  };

  useEffect(() => { fetchStudents(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/students", formData);
      setIsAdding(false);
      setFormData({ name: "", studentId: "", roll: "", class: "", phone: "" });
      fetchStudents();
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("আপনি কি নিশ্চিত?")) {
      await api.delete(`/students/${id}`);
      fetchStudents();
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-black text-gray-900">শিক্ষার্থী ব্যবস্থাপনা</h2>
        <button 
          onClick={() => setIsAdding(true)}
          className="bg-school-primary text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
        >
          <Plus size={24} /> নতুন শিক্ষার্থী যোগ করুন
        </button>
      </div>

      {isAdding && (
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">নতুন শিক্ষার্থী তথ্য</h3>
            <button onClick={() => setIsAdding(false)}><X /></button>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            <input 
              placeholder="নাম" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.name} 
              onChange={e => setFormData({...formData, name: e.target.value})}
              required
            />
            <input 
              placeholder="স্টুডেন্ট আইডি" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.studentId} 
              onChange={e => setFormData({...formData, studentId: e.target.value})}
              required
            />
            <input 
              placeholder="রোল" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.roll} 
              onChange={e => setFormData({...formData, roll: e.target.value})}
              required
            />
            <select 
              className="p-4 bg-gray-50 rounded-xl outline-none"
              value={formData.class}
              onChange={e => setFormData({...formData, class: e.target.value})}
              required
            >
              <option value="">শ্রেণী নির্বাচন করুন</option>
              <option value="৬ষ্ঠ">৬ষ্ঠ</option>
              <option value="৭ম">৭ম</option>
              <option value="৮ম">৮ম</option>
              <option value="৯ম">৯ম</option>
              <option value="১০ম">১০ম</option>
            </select>
            <input 
              placeholder="ফোন" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.phone} 
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
            <button type="submit" className="col-span-2 bg-school-secondary text-white py-4 rounded-xl font-black">সংরক্ষণ করুন</button>
          </form>
        </div>
      )}

      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-6 font-bold">নাম</th>
              <th className="p-6 font-bold">আইডি</th>
              <th className="p-6 font-bold">শ্রেণী</th>
              <th className="p-6 font-bold text-right">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-b hover:bg-gray-50">
                <td className="p-6 font-bold">{s.name}</td>
                <td className="p-6">{s.studentId}</td>
                <td className="p-6">{s.class} (রোল: {s.roll})</td>
                <td className="p-6 text-right space-x-4">
                  <button onClick={() => handleDelete(s.id)} className="text-red-500"><Trash2 size={20} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const NoticesManager = () => {
  const [notices, setNotices] = useState<any[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({ title: "", content: "", isEmergency: false });

  const fetchNotices = async () => {
    const data = await api.get("/notices");
    setNotices(data);
  };

  useEffect(() => { fetchNotices(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post("/notices", formData);
    setIsAdding(false);
    setFormData({ title: "", content: "", isEmergency: false });
    fetchNotices();
  };

  const handleDelete = async (id: string) => {
    if (confirm("আপনি কি নিশ্চিত?")) {
      await api.delete(`/notices/${id}`);
      fetchNotices();
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-black text-gray-900">নোটিশ ব্যবস্থাপনা</h2>
        <button 
          onClick={() => setIsAdding(true)}
          className="bg-school-primary text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
        >
          <Plus size={24} /> নতুন নোটিশ যোগ করুন
        </button>
      </div>

      {isAdding && (
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">নতুন নোটিশ</h3>
            <button onClick={() => setIsAdding(false)}><X /></button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input 
              placeholder="নোটিশের শিরোনাম" 
              className="w-full p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.title} 
              onChange={e => setFormData({...formData, title: e.target.value})}
              required
            />
            <textarea 
              placeholder="বিস্তারিত বিবরণ" 
              className="w-full p-4 bg-gray-50 rounded-xl outline-none h-32" 
              value={formData.content} 
              onChange={e => setFormData({...formData, content: e.target.value})}
            />
            <label className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={formData.isEmergency} 
                onChange={e => setFormData({...formData, isEmergency: e.target.checked})}
                className="w-5 h-5 accent-school-primary"
              />
              <span className="font-bold text-red-500">জরুরী নোটিশ হিসেবে দেখান</span>
            </label>
            <button type="submit" className="w-full bg-school-secondary text-white py-4 rounded-xl font-black">সংরক্ষণ করুন</button>
          </form>
        </div>
      )}

      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-6 font-bold">শিরোনাম</th>
              <th className="p-6 font-bold">তারিখ</th>
              <th className="p-6 font-bold">ধরণ</th>
              <th className="p-6 font-bold text-right">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((n) => (
              <tr key={n.id} className="border-b hover:bg-gray-50">
                <td className="p-6 font-bold">{n.title}</td>
                <td className="p-6">{new Date(n.date).toLocaleDateString('bn-BD')}</td>
                <td className="p-6">
                  {n.isEmergency ? (
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold">জরুরী</span>
                  ) : (
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">সাধারণ</span>
                  )}
                </td>
                <td className="p-6 text-right space-x-4">
                  <button onClick={() => handleDelete(n.id)} className="text-red-500"><Trash2 size={20} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export const EventsManager = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({ title: "", date: "", location: "", description: "" });

  const fetchEvents = async () => {
    const data = await api.get("/events");
    setEvents(data);
  };

  useEffect(() => { fetchEvents(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post("/events", formData);
    setIsAdding(false);
    setFormData({ title: "", date: "", location: "", description: "" });
    fetchEvents();
  };

  const handleDelete = async (id: string) => {
    if (confirm("আপনি কি নিশ্চিত?")) {
      await api.delete(`/events/${id}`);
      fetchEvents();
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-black text-gray-900">ইভেন্ট ব্যবস্থাপনা</h2>
        <button 
          onClick={() => setIsAdding(true)}
          className="bg-school-primary text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
        >
          <Plus size={24} /> নতুন ইভেন্ট যোগ করুন
        </button>
      </div>

      {isAdding && (
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">নতুন ইভেন্ট তথ্য</h3>
            <button onClick={() => setIsAdding(false)}><X /></button>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            <input 
              placeholder="ইভেন্টের নাম" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.title} 
              onChange={e => setFormData({...formData, title: e.target.value})}
              required
            />
            <input 
              placeholder="তারিখ (উদা: ২৫শে এপ্রিল, ২০২৬)" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.date} 
              onChange={e => setFormData({...formData, date: e.target.value})}
              required
            />
            <input 
              placeholder="স্থান" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.location} 
              onChange={e => setFormData({...formData, location: e.target.value})}
            />
            <textarea 
              placeholder="বিবরণ" 
              className="col-span-2 p-4 bg-gray-50 rounded-xl outline-none h-24" 
              value={formData.description} 
              onChange={e => setFormData({...formData, description: e.target.value})}
            />
            <button type="submit" className="col-span-2 bg-school-secondary text-white py-4 rounded-xl font-black">সংরক্ষণ করুন</button>
          </form>
        </div>
      )}

      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-6 font-bold">ইভেন্ট</th>
              <th className="p-6 font-bold">তারিখ</th>
              <th className="p-6 font-bold">স্থান</th>
              <th className="p-6 font-bold text-right">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody>
            {events.map((e) => (
              <tr key={e.id} className="border-b hover:bg-gray-50">
                <td className="p-6 font-bold">{e.title}</td>
                <td className="p-6">{e.date}</td>
                <td className="p-6">{e.location}</td>
                <td className="p-6 text-right space-x-4">
                  <button onClick={() => handleDelete(e.id)} className="text-red-500"><Trash2 size={20} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const GalleryManager = () => {
  const [images, setImages] = useState<any[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({ url: "", caption: "", category: "" });

  const fetchImages = async () => {
    const data = await api.get("/gallery");
    setImages(data);
  };

  useEffect(() => { fetchImages(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post("/gallery", formData);
    setIsAdding(false);
    setFormData({ url: "", caption: "", category: "" });
    fetchImages();
  };

  const handleDelete = async (id: string) => {
    if (confirm("আপনি কি নিশ্চিত?")) {
      await api.delete(`/gallery/${id}`);
      fetchImages();
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-black text-gray-900">গ্যালারি ব্যবস্থাপনা</h2>
        <button 
          onClick={() => setIsAdding(true)}
          className="bg-school-primary text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
        >
          <Plus size={24} /> নতুন ছবি যোগ করুন
        </button>
      </div>

      {isAdding && (
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">নতুন ছবি তথ্য</h3>
            <button onClick={() => setIsAdding(false)}><X /></button>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            <input 
              placeholder="ছবির ইউআরএল (URL)" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.url} 
              onChange={e => setFormData({...formData, url: e.target.value})}
              required
            />
            <input 
              placeholder="ক্যাপশন" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.caption} 
              onChange={e => setFormData({...formData, caption: e.target.value})}
            />
            <input 
              placeholder="ক্যাটাগরি (উদা: ক্যাম্পাস, ইভেন্ট)" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.category} 
              onChange={e => setFormData({...formData, category: e.target.value})}
            />
            <button type="submit" className="col-span-2 bg-school-secondary text-white py-4 rounded-xl font-black">সংরক্ষণ করুন</button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <div key={img.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group relative">
            <img 
              src={img.url} 
              alt={img.caption} 
              className="w-full h-48 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-4">
              <p className="font-bold text-sm truncate">{img.caption || "কোন ক্যাপশন নেই"}</p>
              <p className="text-xs text-gray-500">{img.category}</p>
            </div>
            <button 
              onClick={() => handleDelete(img.id)}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export const AlumniManager = () => {
  const [alumni, setAlumni] = useState<any[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({ name: "", batch: "", designation: "", message: "", image: "" });

  const fetchAlumni = async () => {
    const data = await api.get("/alumni");
    setAlumni(data);
  };

  useEffect(() => { fetchAlumni(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post("/alumni", formData);
    setIsAdding(false);
    setFormData({ name: "", batch: "", designation: "", message: "", image: "" });
    fetchAlumni();
  };

  const handleDelete = async (id: string) => {
    if (confirm("আপনি কি নিশ্চিত?")) {
      await api.delete(`/alumni/${id}`);
      fetchAlumni();
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-black text-gray-900">প্রাক্তন ছাত্র-ছাত্রী ব্যবস্থাপনা</h2>
        <button 
          onClick={() => setIsAdding(true)}
          className="bg-school-primary text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
        >
          <Plus size={24} /> নতুন প্রাক্তন ছাত্র যোগ করুন
        </button>
      </div>

      {isAdding && (
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">নতুন প্রাক্তন ছাত্র তথ্য</h3>
            <button onClick={() => setIsAdding(false)}><X /></button>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            <input 
              placeholder="নাম" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.name} 
              onChange={e => setFormData({...formData, name: e.target.value})}
              required
            />
            <input 
              placeholder="ব্যাচ (উদা: ২০০০)" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.batch} 
              onChange={e => setFormData({...formData, batch: e.target.value})}
              required
            />
            <input 
              placeholder="বর্তমান পদবী/পেশা" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.designation} 
              onChange={e => setFormData({...formData, designation: e.target.value})}
            />
            <input 
              placeholder="ছবির ইউআরএল" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.image} 
              onChange={e => setFormData({...formData, image: e.target.value})}
            />
            <textarea 
              placeholder="বার্তা" 
              className="col-span-2 p-4 bg-gray-50 rounded-xl outline-none h-24" 
              value={formData.message} 
              onChange={e => setFormData({...formData, message: e.target.value})}
            />
            <button type="submit" className="col-span-2 bg-school-secondary text-white py-4 rounded-xl font-black">সংরক্ষণ করুন</button>
          </form>
        </div>
      )}

      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-6 font-bold">নাম</th>
              <th className="p-6 font-bold">ব্যাচ</th>
              <th className="p-6 font-bold">পদবী</th>
              <th className="p-6 font-bold text-right">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody>
            {alumni.map((a) => (
              <tr key={a.id} className="border-b hover:bg-gray-50">
                <td className="p-6 font-bold">{a.name}</td>
                <td className="p-6">{a.batch}</td>
                <td className="p-6">{a.designation}</td>
                <td className="p-6 text-right space-x-4">
                  <button onClick={() => handleDelete(a.id)} className="text-red-500"><Trash2 size={20} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const LinksManager = () => {
  const [links, setLinks] = useState<any[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({ name: "", url: "", order: 0 });

  const fetchLinks = async () => {
    const data = await api.get("/links");
    setLinks(data);
  };

  useEffect(() => { fetchLinks(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post("/links", formData);
    setIsAdding(false);
    setFormData({ name: "", url: "", order: 0 });
    fetchLinks();
  };

  const handleDelete = async (id: string) => {
    if (confirm("আপনি কি নিশ্চিত?")) {
      await api.delete(`/links/${id}`);
      fetchLinks();
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-black text-gray-900">গুরুত্বপূর্ণ লিঙ্কস ব্যবস্থাপনা</h2>
        <button 
          onClick={() => setIsAdding(true)}
          className="bg-school-primary text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
        >
          <Plus size={24} /> নতুন লিঙ্ক যোগ করুন
        </button>
      </div>

      {isAdding && (
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">নতুন লিঙ্ক তথ্য</h3>
            <button onClick={() => setIsAdding(false)}><X /></button>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            <input 
              placeholder="লিঙ্কের নাম" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.name} 
              onChange={e => setFormData({...formData, name: e.target.value})}
              required
            />
            <input 
              placeholder="ইউআরএল (URL)" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.url} 
              onChange={e => setFormData({...formData, url: e.target.value})}
              required
            />
            <input 
              type="number"
              placeholder="ক্রম (Order)" 
              className="p-4 bg-gray-50 rounded-xl outline-none" 
              value={formData.order} 
              onChange={e => setFormData({...formData, order: parseInt(e.target.value)})}
            />
            <button type="submit" className="col-span-2 bg-school-secondary text-white py-4 rounded-xl font-black">সংরক্ষণ করুন</button>
          </form>
        </div>
      )}

      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-6 font-bold">নাম</th>
              <th className="p-6 font-bold">ইউআরএল</th>
              <th className="p-6 font-bold">ক্রম</th>
              <th className="p-6 font-bold text-right">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody>
            {links.map((l) => (
              <tr key={l.id} className="border-b hover:bg-gray-50">
                <td className="p-6 font-bold">{l.name}</td>
                <td className="p-6 text-blue-500 underline">{l.url}</td>
                <td className="p-6">{l.order}</td>
                <td className="p-6 text-right space-x-4">
                  <button onClick={() => handleDelete(l.id)} className="text-red-500"><Trash2 size={20} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const SettingsManager = () => {
  const [config, setConfig] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const fetchConfig = async () => {
    const data = await api.get("/config");
    setConfig(data);
  };

  useEffect(() => { fetchConfig(); }, []);

  const handleUpdate = async (key: string, value: string) => {
    setLoading(true);
    await api.post("/config", { key, value });
    fetchConfig();
    setLoading(false);
  };

  const settings = [
    { key: "school_name", label: "বিদ্যালয়ের নাম", placeholder: "ধেছুয়াপালং উচ্চ বিদ্যালয়" },
    { key: "school_address", label: "ঠিকানা", placeholder: "রাবেতা-৪৭০০, রামু, কক্সবাজার" },
    { key: "school_phone", label: "ফোন নম্বর", placeholder: "01601519007" },
    { key: "school_email", label: "ইমেইল", placeholder: "mojibrsm@gmail.com" },
    { key: "footer_credit", label: "ফুটার ক্রেডিট", placeholder: "© ২০২৫ ধেছুয়াপালং উচ্চ বিদ্যালয়" },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-black text-gray-900">সাইট সেটিংস</h2>
      
      <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 space-y-10">
        {settings.map((s) => (
          <div key={s.key} className="space-y-4">
            <label className="block font-bold text-gray-700">{s.label}</label>
            <div className="flex gap-4">
              <input 
                className="flex-grow p-4 bg-gray-50 rounded-xl outline-none border border-transparent focus:border-school-primary transition-all"
                value={config[s.key] || ""}
                placeholder={s.placeholder}
                onChange={(e) => setConfig({ ...config, [s.key]: e.target.value })}
              />
              <button 
                onClick={() => handleUpdate(s.key, config[s.key])}
                disabled={loading}
                className="bg-school-primary text-white px-8 py-4 rounded-xl font-black flex items-center gap-2 hover:scale-105 transition-all disabled:opacity-50"
              >
                <Save size={20} /> আপডেট
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
