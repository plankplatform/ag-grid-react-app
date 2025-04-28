import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n";
import { AuthProvider } from "./context/AuthContext"

const rootId = window.REACT_APP_ROOT_ID || 'root';
createRoot(document.getElementById(rootId)).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
