import React from 'react';
import './assets/css/App.css';

// COMPONENTES

import Header from './components/Header';
import Specs from './components/Specs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      </header>
      <Specs />
    </div>
  );
}

export default App;
