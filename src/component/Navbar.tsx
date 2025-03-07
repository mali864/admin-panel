import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // React Icon for the user


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-blue-100 flex items-center justify-between px-4 py-2 w-full h-[60px]">

        <div className="w-42 ml-4 flex justify-center items-center">
          <span>
            <img src="https://wasteease.co.uk/assests/img/logo.png" alt="WasteEase Logo" height={70} width={70} />
          </span>
          <div className="flex justify-center items-center">
            <span className="text-xl font-bold text-green-500">Waste</span>
            <span className="text-xl font-bold text-blue-400">Ease</span>
          </div>
        </div>

        <div className="relative">
          <button onClick={toggleMenu} className="text-3xl text-green-600">
            <FaUserCircle size={40}/>
          </button>

          
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-lg w-40">
              <ul className="space-y-2 p-3 text-green-500">
                <li><button>Profile</button></li>
                <li><button>Settings</button></li>
                <li><button>Logout</button></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
