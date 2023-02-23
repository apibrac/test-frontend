import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./logo-pass-culture.svg";
import News from "./components/News";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<News />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
