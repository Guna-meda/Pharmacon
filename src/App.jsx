import React from 'react'
import HomePage from './components/molecules/Home'
import { HashRouter,BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VendorRegistration from './components/molecules/vendor-registration';


const App = () => {
  return (
    <Router >
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/vendor-registration" element={<VendorRegistration />} />
    </Routes>
  </Router>
  )
}

export default App