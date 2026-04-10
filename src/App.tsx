import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoticeTicker from './components/NoticeTicker';
import EmergencyNotice from './components/EmergencyNotice';
import Home from './pages/Home';
import About from './pages/About';
import Academic from './pages/Academic';
import Admission from './pages/Admission';
import Notices from './pages/Notices';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Teachers from './pages/Teachers';
import Staff from './pages/Staff';
import IDGenerator from './pages/IDGenerator';
import Gallery from './pages/Gallery';
import Alumni from './pages/Alumni';
import AlumniRegistration from './pages/AlumniRegistration';
import Results from './pages/Results';
import Blog from './pages/Blog';
import Downloads from './pages/Downloads';
import Students from './pages/Students';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import { 
  AdminDashboard, 
  DashboardOverview, 
  TeachersManager, 
  StudentsManager, 
  NoticesManager, 
  EventsManager, 
  GalleryManager, 
  AlumniManager,
  LinksManager, 
  SettingsManager 
} from './pages/AdminDashboard';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {!isAdminRoute && <Navbar />}
      
      <main className="flex-grow">
        {children}
      </main>

      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <EmergencyNotice />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/id-generator" element={<IDGenerator />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/alumni/register" element={<AlumniRegistration />} />
          <Route path="/results" element={<Results />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/students" element={<Students />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />}>
            <Route index element={<DashboardOverview />} />
            <Route path="teachers" element={<TeachersManager />} />
            <Route path="students" element={<StudentsManager />} />
            <Route path="notices" element={<NoticesManager />} />
            <Route path="events" element={<EventsManager />} />
            <Route path="gallery" element={<GalleryManager />} />
            <Route path="alumni" element={<AlumniManager />} />
            <Route path="links" element={<LinksManager />} />
            <Route path="settings" element={<SettingsManager />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
