import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../atoms/Navbar";
import Footer from "../atoms/Footer";
import medicalStores from "../../Data/data";


export default function HomePage() {

  const alternativeMedicines = {
    "Dolo 650": ["Crocin", "Calpol", "Paracetmol"],
    "Paracetmol": ["Dolo 650", "Crocin", "Calpol"],
    "Crocin": ["Dolo 650", "Paracetmol", "Calpol"],
    "Calpol": ["Crocin", "Paracetmol", "Dolo 650"],
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("User's Location:", position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const [searched , setSearched] = useState("");
  const [results, setResults] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const afterSearch = () => {
    if (!searched.trim()) return ;

    let foundStores=[];
    let alternateStores = false;

    for (let store of medicalStores) {
      let medicine = store.stock.find(
        (med) => med.name.toLowerCase() === searched.toLowerCase() && med.quantity > 0
      );   
    
      if (medicine) {
        foundStores.push({
          store: store.name,
          contact: store.contact,
          location: store.location,
          medicine: medicine.name,
          quantity: medicine.quantity,
        });
      }

    }

    if (foundStores.length > 0) {
      setResults(foundStores);
      setNotFound(false);
    }

  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-500 text-white">
      <Navbar/>

      <section className="flex flex-col items-center justify-center text-center py-40 px-4">
        <h2 className="text-5xl font-bold mb-6">Find Medicines Instantly</h2>
        <p className="text-xl mb-8">
          Search for medicines in nearby stores with real-time availability.
        </p>
        <div className="w-full max-w-xl relative ">
          <input
            type="text"
            placeholder="Search for medicine..."
            className="w-full p-4 text-lg rounded-lg text-black border-2 border-gray-300 focus:border-blue-500 focus:outline-none shadow-md"
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-6 py-3 mt-4 rounded-lg font-medium hover:bg-blue-700"
            onClick={afterSearch}
          >
            Search
          </button>
        </div>

      </section>

      <section className="bg-white text-black text-center py-16 px-10">
        {results.length > 0 ? (
          <div>
            <h3 className="text-3xl font-bold mb-4">Available in:</h3>
            {results.map((res, index) => (
              <div key={index} className="p-4 border-b">
                <h4 className="text-2xl font-semibold">{res.store}</h4>
                <p className="text-lg">Medicine: {res.medicine}</p>
                <p className="text-lg">Quantity: {res.quantity}</p>
                <p className="text-lg">Contact: {res.contact}</p>
              </div>
            ))}
          </div>
        ) : notFound ? (
          <p className="text-xl font-semibold">No stores have this medicine or alternatives.</p>
        ) : null}
      </section>

      <section className="bg-white text-black text-center py-28">
        <h3 className="text-4xl font-bold mb-6">Are You a Vendor?</h3>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join our platform to showcase real-time inventory and reach more
          customers.
        </p>
        <button
          className="bg-blue-600 text-white px-8 py-4 text-lg rounded-lg font-medium hover:bg-blue-700 transition shadow-lg"
        >
      <Link to="/vendor-registration">Switch to Vendor</Link>
      </button>
      </section>

      <section className="text-center py-28 px-6">
        <h3 className="text-4xl font-bold mb-6">About MediFinder</h3>
        <p className="max-w-3xl mx-auto text-xl leading-relaxed">
          MediFinder helps users find medicines in real-time by connecting with
          medical stores. Stock updates happen through billing integration or
          manual entry. We also track expiry dates for reliability.
        </p>
      </section>

     <Footer></Footer>
    </div>
  );
}
