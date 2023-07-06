import React, { useEffect, useState } from 'react';
import './App.css';
import Data from './components/data';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Main } from './components/main';
import { Nav } from './components/nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import BusinessCardDetailed from './components/BusinessCardDetailed';

function App() {
  const appName = Data().name;
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/profiles')
      .then((response) => response.json())
      .then((data) => setProfiles(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Nav />
          <Routes>
            <Route
              path="/"
              element={<Main name={appName} profiles={profiles} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/profile/:id"
              element={<BusinessCardDetailed profiles={profiles} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
