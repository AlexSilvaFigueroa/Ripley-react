import React from 'react';
import './assets/css/App.css';

// COMPONENTES

import Header from './components/Header';
import Specs from './components/Specs';
import Foto from './components/Foto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      </header>
        <Specs />
      <main>
        <Foto />
      </main>
    </div>
  );
}

export default App;
