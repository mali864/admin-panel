import Navbar from './component/Navbar';
import Home from './pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Sidebar from './component/Sidebar';
import ChooseUs from './pages/ChooseUs';
import Footer from './pages/Footer';

function App() {
  const location = useLocation();
  const showSidebar = location.pathname === '/admin-panel';

  return (
    <>
    
      <Navbar />
     {showSidebar && <Sidebar />}
       <div className="flex-1 p-5 mt-[60px] md:ml-[200px]">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/chooseus" element={<ChooseUs />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </div>
      
    </>
  );
}

export default App;
