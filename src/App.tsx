import React from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Contacts />
    </div>
  );
}

export default App;
