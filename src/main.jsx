import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import AIHub from "./pages/AIHub.jsx";


const path = window.location.pathname;

const Page = path === "/ai-hub" ? AIHub : App;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Page />
  </StrictMode>
);