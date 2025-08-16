import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import { UIProvider } from "./components/UIContext.jsx";
createRoot(document.getElementById("root")).render(
  <HashRouter basename="/">
    <UIProvider>
      <App />
    </UIProvider>
  </HashRouter>
);
