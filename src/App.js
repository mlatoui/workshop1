import React from 'react';
import './App.css';
import Data from './components/data';
import { Profiles } from './Profiles';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Main } from './components/main';
import { Nav } from './components/nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './pages/about';
import { Contact } from './pages/contact';

function App() {
  const appName = Data().name;
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Nav />
          <Routes>
            <Route
              path="/"
              element={<Main name={appName} profiles={Profiles} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
