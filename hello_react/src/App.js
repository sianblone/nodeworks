import React from "react";
import logo from "./logo.svg";
import "./App.css";
// 컴포넌트를 사용하기 위해서 import하기
import RCC from "./component/RCC";
import RSC from "./component/RSC";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>아무단어</p>
        <RCC />
        <RSC />
      </header>
    </div>
  );
}

export default App;
