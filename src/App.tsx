// App.js
import Navbar from './component/Navbar';
import Home from './pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Sidebar from './component/Sidebar';

function App() {
  const location = useLocation();
  const showSidebar = location.pathname !== '/' && location.pathname !== "/forgot";

  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Conditionally render Sidebar */}
        {showSidebar && <Sidebar />}


        {/* Main Content Area Section */}
        <div className="flex-1 p-5">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
