import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MusicPlayer from "./player/MusicPlayer";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./componants/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <div className="main">
        <Navbar />
        <App />
      </div> */}
    {/* </BrowserRouter> */}
    <MusicPlayer />
  </React.StrictMode>
);
