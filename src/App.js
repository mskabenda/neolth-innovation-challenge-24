import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import MeetTwo from "./pages/Meettwo";
import Scenerio1 from "./pages/Scenerio1";
import Scenerio2 from "./pages/Scenerio2";
import Scenerio3 from "./pages/Scenerio3";
import Scenerio4 from "./pages/Scenerio4";
import Scenerio5 from "./pages/Scenerio5";
import Updates from "./pages/Updates";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meet_two" element={<MeetTwo />} />
          <Route path="/Scenerio01" element={<Scenerio1 />} />
          <Route path="/Scenerio02" element={<Scenerio2 />} />
          <Route path="/Scenerio03" element={<Scenerio3 />} />
          <Route path="/Scenerio04" element={<Scenerio4 />} />
          <Route path="/Scenerio05" element={<Scenerio5 />} />
          <Route path="/Updates" element={<Updates />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App

