import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        
        <h1 className="text-3xl font-bold text-[#5B5BD6]">Funngro</h1>

        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li className="cursor-pointer hover:text-indigo-600">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-violet-600 font-semibold" : ""}>
             Home
           </NavLink>
            </li>
          
          <li className="cursor-pointer hover:text-indigo-600">Projects</li>
          
          <li className="cursor-pointer hover:text-indigo-600">
         <NavLink to="/teen" className={({ isActive }) =>isActive ? "text-violet-600 font-semibold" : ""}>
           Teenlancers
         </NavLink>
            </li>
         
          <li className="cursor-pointer hover:text-indigo-600">About</li>
        </ul>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;