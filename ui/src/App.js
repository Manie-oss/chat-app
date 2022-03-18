import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Login/> } />
        <Route path="/signup" element= {<SignUp/> } />
      </Routes>
    </Router>
  );
}

export default App;
