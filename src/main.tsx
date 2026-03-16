import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App.tsx";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-right" />
    <App />
  </StrictMode>,
);
