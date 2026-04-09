import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, Users, GraduationCap, FileText, 
  Image as ImageIcon, Calendar, Link as LinkIcon, 
  Settings, LogOut, Plus, Trash2, Edit, Save, X, Upload
} from 'lucide-react';
import { api } from '../services/api';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

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
    { id: "dashboard", name: "ড্যাশবোর্ড", icon: <LayoutDashboard size={20} /> },
    { id: "teachers", name: "শিক্ষকবৃন্দ", icon: <Users size={20} /> },
    { id: "students", name: "শিক্ষার্থী", icon: <GraduationCap size={20} /> },
    { id: "notices", name: "নোটিশ", icon: <FileText size={20} /> },
    { id: "events", name: "ইভেন্টস", icon: <Calendar size={20} /> },
    { id: "gallery", name: "গ্যালারি", icon: <ImageIcon size={20} /> },
    { id: "links", name: "লিঙ্কস", icon: <LinkIcon size={20} /> },
    { id: "settings", name: "সেটিংস", icon: <Settings size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-72 bg-gray-900 text-white flex flex-col">
        <div className="p-8 border-b border-white/10">
          <h1 className="text-2xl font-black text-school-secondary">DPHS Admin</h1>
          <p className="text-xs text-gray-400 mt-1">স্বাগতম, {user?.name}</p>
        </div>
        
        <nav className="flex-grow p-4 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
                activeTab === tab.id ? 'bg-school-primary text-white shadow-lg' : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
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
      <div className="flex-grow overflow-y-auto h-screen p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "dashboard" && <DashboardOverview />}
            {activeTab === "teachers" && <TeachersManager />}
            {activeTab === "students" && <StudentsManager />}
            {activeTab === "notices" && <NoticesManager />}
            {activeTab === "events" && <EventsManager />}
            {activeTab === "gallery" && <GalleryManager />}
            {activeTab === "links" && <LinksManager />}
            {activeTab === "settings" && <SettingsManager />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// Sub-components for each tab
const DashboardOverview = () => {
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

const TeachersManager = () => {
  const [teachers, setTeachers] = useState<any[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({ name: "", role: "", phone: "", email: "", image: "" });

  const fetchTeachers = async () => {
    const data = await api.get("/teachers");
    setTeachers(data);
  };

  useEffect(() => { fetchTeachers(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post("/teachers", formData);
    setIsAdding(false);
    setFormData({ name: "", role: "", phone: "", email: "", image: "" });
    fetchTeachers();
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
          onClick={() => setIsAdding(true)}
          className="bg-school-primary text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
        >
          <Plus size={24} /> নতুন শিক্ষক যোগ করুন
        </button>
      </div>

      {isAdding && (
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">নতুন শিক্ষক তথ্য</h3>
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
            <button type="submit" className="col-span-2 bg-school-secondary text-white py-4 rounded-xl font-black">সংরক্ষণ করুন</button>
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
                  <button className="text-blue-500"><Edit size={20} /></button>
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
const StudentsManager = () => <div className="p-20 text-center text-gray-400">শিক্ষার্থী ব্যবস্থাপনা শীঘ্রই আসছে...</div>;
const NoticesManager = () => <div className="p-20 text-center text-gray-400">নোটিশ ব্যবস্থাপনা শীঘ্রই আসছে...</div>;
const EventsManager = () => <div className="p-20 text-center text-gray-400">ইভেন্ট ব্যবস্থাপনা শীঘ্রই আসছে...</div>;
const GalleryManager = () => <div className="p-20 text-center text-gray-400">গ্যালারি ব্যবস্থাপনা শীঘ্রই আসছে...</div>;
const LinksManager = () => <div className="p-20 text-center text-gray-400">লিঙ্কস ব্যবস্থাপনা শীঘ্রই আসছে...</div>;
const SettingsManager = () => <div className="p-20 text-center text-gray-400">সেটিংস ব্যবস্থাপনা শীঘ্রই আসছে...</div>;

export default AdminDashboard;
