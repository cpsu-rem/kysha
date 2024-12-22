import { NavLink } from "react-router"
const Header = () => {
    return (
        <div className="w-full h-28 bg-gray-400 fixed top-0 shadow-md z-10 ">

      
      <section className="bg-transparent w-screen p-4 rounded flex items-center justify-between px-8">
       
        <div className="flex items-center">
          <img
            src="/kysha.png"
            alt="Crisiah Shop Logo"
            className="w-24 h-24 mr-4"
          />
         
        </div>

        
        <nav className="flex space-x-6 gap-4 p-4 text-black">
          <NavLink
            to="/"
            className="text-lg  hover:text-blue-500 transition font-semibold"
          >
            Home
          </NavLink>
          <NavLink
            to="/users"
            className="text-lg  hover:text-blue-500 transition font-semibold"
          >
           Clients
          </NavLink>
          
          <NavLink
            to="/products"
            className="text-lg  hover:text-blue-500 transition font-semibold"
          >
            Products
          </NavLink>
          <NavLink
            to="/quotes"
            className="text-lg  hover:text-blue-500 transition font-semibold"
          >
            Quotes
          </NavLink>
         
        </nav>
      </section>

        </div>
    )
}

export default Header
