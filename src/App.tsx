import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
import AdminDashboard from './pages/AdminDashboard';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        
        <main className="flex-grow">
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
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>

        <Footer />
        <EmergencyNotice />
      </div>
    </Router>
  );
}

export default App;
