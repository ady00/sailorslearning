import "./App.css";
import Main from "./Pages/Main.tsx";

import Sponsors from "./Pages/Sponsors.tsx";
import Staff from "./Pages/Staff.tsx";


import Footer from "./Components/Footer.js";

import { Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(JSON.parse(window.localStorage.getItem("mode")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("mode", dark);
  }, [dark]);

  return (
    <div className={dark ? "dark" : ""}>
      <Routes>
        <Route
          path="/"
          element={<Main dark={dark} setDark={setDark} />}
        ></Route>
        <Route
          path="donate"
          element={<Sponsors dark={dark} setDark={setDark} />}
        ></Route>
        <Route
          path="staff"
          element={<Staff dark={dark} setDark={setDark} />}
        ></Route>


        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
