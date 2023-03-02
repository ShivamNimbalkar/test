import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./componants/Navbar";
import MusicPlayer from "./player/MusicPlayer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="main">
        <Navbar />
        <MusicPlayer/>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
