import React from "react";
import "./assets/css/App.css";

// COMPONENTES

import Header from "./components/Header";
import Specs from "./components/Specs";
import Foto from "./components/Foto";
import Btn from "./components/Data";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Specs />
      <main>
        <Foto />
        <Btn />
      </main>
    </div>
  );
}

export default App;
