import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ThirdwebProvider } from "thirdweb/react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Market from "./pages/Market";
import Dashboard from "./pages/Dashboard";
import Buy from "./pages/Buy";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Market" element={<Market />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Buy" element={<Buy />} />
        </Routes>
      </BrowserRouter>
    </ThirdwebProvider>
  </React.StrictMode>
);