import { useState } from "react";
import HomePage from "./Home"
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";


const VendorRegistration = () => {
  return (
    <div>
    <nav className="flex justify-between items-center p-6 bg-white text-black shadow-md">
        <h1 className="text-3xl font-bold">MediFinder</h1>
        <div className="flex items-center gap-6">
          <button
            className="border px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
          >
      <Link to="/">Switch to user</Link>
      </button>
          <FaUserCircle
            size={40}
            className="cursor-pointer hover:text-gray-600 transition"
          />
        </div>
      </nav>
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-500 text-white flex flex-col items-center py-12 px-6">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-8">Vendor Registration</h2>
      
      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-2xl">
        {/* Personal Details */}
        <h3 className="text-2xl font-semibold mb-4">Personal Details</h3>
        <div className="grid grid-cols-1 gap-4">
          <input type="text" placeholder="Full Name" className="p-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" placeholder="Phone Number" className="p-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Email Address" className="p-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" placeholder="Your Location" className="p-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        
        {/* Medical Shop Details */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">Medical Shop Details</h3>
        <div className="grid grid-cols-1 gap-4">
          <input type="text" placeholder="Shop Name" className="p-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" placeholder="Shop Location" className="p-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" placeholder="Shop Contact Number" className="p-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        
        {/* Submit Button */}
        <button className="bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-blue-700 shadow-md mt-6 w-full">
          Register
        </button>
      </div>
    </div>
    </div>
  );
}

export default VendorRegistration