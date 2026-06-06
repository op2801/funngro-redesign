import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-[#5B5BD6]">
          Funngro
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-violet-600 font-semibold" : "hover:text-indigo-600"
              }
            >
              Home
            </NavLink>
          </li>

          <li className="hover:text-indigo-600 cursor-pointer">
            Projects
          </li>

          <li>
            <NavLink
              to="/teen"
              className={({ isActive }) =>
                isActive ? "text-violet-600 font-semibold" : "hover:text-indigo-600"
              }
            >
              Teenlancers
            </NavLink>
          </li>

          <li className="hover:text-indigo-600 cursor-pointer">
            About
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col p-4 gap-4 text-gray-700">
            <li>
              <NavLink to="/" onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </li>

            <li>Projects</li>

            <li>
              <NavLink to="/teen" onClick={() => setIsOpen(false)}>
                Teenlancers
              </NavLink>
            </li>

            <li>About</li>

            <button className="bg-indigo-600 text-white py-2 rounded-lg">
              Get Started
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;