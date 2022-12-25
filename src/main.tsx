import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./styles/theming";
import "./styles/index.css";
import "./locales/i18n";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <React.Suspense fallback=" ">
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </React.Suspense>
    </React.StrictMode>,
  );
}
