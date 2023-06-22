import React from 'react';
import './App.css';
import Data from './components/data';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Main } from './components/main';
import { Nav } from './components/nav';

function App() {
  const appName = Data().name;
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main name={appName} />
      <Footer />
    </div>
  );
}

export default App;
