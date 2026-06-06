import {FaLinkedin,FaInstagram,FaTwitter,FaYoutube,} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-5 gap-8">
          
          <div>
            <h2 className="text-2xl font-bold text-white-400">Funngro</h2>
            <p className="text-gray-400 mt-4">Empowering students through real-world projects and opportunities.</p>
          </div>

         
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

      
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Projects</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
            </ul>
          </div>

        
          <div>
            <h3 className="font-semibold mb-4"> Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>

        
          <div>
            <h3 className="font-semibold mb-4">Follow Us </h3>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-violet-400 transition"> <FaInstagram size={22} /></a>
              <a href="#" className="hover:text-violet-400 transition"><FaLinkedin size={22} /></a>
              <a href="#" className="hover:text-violet-400 transition"><FaTwitter size={22} /></a>
              <a href="#" className="hover:text-violet-400 transition"><FaYoutube size={22} /></a>
            </div>
          </div>

        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">© 2026 Funngro. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;