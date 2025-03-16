import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // React Icon for the user

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-100 flex items-center justify-between px-4 py-2 w-full h-[60px]">
      <div className="w-48 ml-4 flex justify-center items-center">
        <span>
          <img src="https://wasteease.co.uk/assests/img/logo.png" alt="WasteEase Logo" height={70} width={70} />
        </span>
        <div className="flex justify-center items-center">
          <span className="text-xl font-bold text-green-500">Waste</span>
          <span className="text-xl font-bold text-blue-400">Ease</span>
        </div>
      </div>

      <div className="relative">
        <button onClick={toggleMenu} className="text-3xl w-16 text-green-600">
          <FaUserCircle size={40} />
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 bg-white mt-2 h-28 w-38 text-black shadow-lg rounded-lg ">
            <ul className="text-green-500 p-3 flex flex-col gap-2 ">
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
