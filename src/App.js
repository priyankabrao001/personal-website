import React from "react"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { createContext } from 'react';
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);


export default function App() {

  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
      <div class = {theme} style = {{backgroundSize: "cover"}}>
        <div class = "switch">
          <label>{theme === "light" ? "Day Theme" : "Night Theme"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}