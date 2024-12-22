import { NavLink } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  return (
    <div className="pt-28">
     
      <section
        className={`bg-[url('https://wallpaperaccess.com/full/1567666.png')] bg-cover bg-center w-screen h-[650px] flex items-center justify-between p-4`}
      >
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Welcome to the Kysha Site</h1>
            <p className="text-3xl mb-6">I am glad to have you here. Explore and enjoy!</p>
            <NavLink to="/allproducts">
              <button className="w-36 h-12 bg-blue-600 hover:bg-blue-700 transition duration-300 rounded text-white font-semibold shadow-md">
                Explore Now
              </button>
            </NavLink>
          </div>
        </div>
      </section>

    
      <footer className="bg-gray-800 text-white py-8 w-screen">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">&copy; 2024 Crisiah Shop. All Rights Reserved.</p>
          <nav className="flex space-x-6">
            <NavLink to="/about" className="hover:text-blue-500 transition">
              About Us
            </NavLink>
            <NavLink to="/contact" className="hover:text-blue-500 transition">
              Contact
            </NavLink>
            <NavLink to="/faqs" className="hover:text-blue-500 transition">
              FAQs
            </NavLink>
          </nav>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/chennierivera03"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
