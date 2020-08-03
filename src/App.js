import React from "react";
import logo from "./logo.svg";
import "./style/App.css";
import FormNum from "./components/FormNum";
import Header from "./common/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <FormNum />
    </div>
  );
}

export default App;
