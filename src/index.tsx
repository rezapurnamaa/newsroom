import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { AuthProvider } from "./auth/AuthContext";

// Get the root element by its ID
const rootElement = document.getElementById("root");

// Check if the root element exists before rendering
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </StrictMode>
  );
} else {
  console.error("Root element with ID 'root' not found.");
}
