import React from 'react'
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white text-black shadow-md">
        <h1 className="text-3xl font-bold">MediFinder</h1>
        <div className="flex items-center gap-6">
          <button
            className="border px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
          >
      <Link to="/vendor-registration">Switch to Vendor</Link>
      </button>
          <FaUserCircle
            size={40}
            className="cursor-pointer hover:text-gray-600 transition"
          />
        </div>
      </nav>
  )
}

export default Navbar