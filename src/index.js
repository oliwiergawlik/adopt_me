import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import App from "./App";

// const container = document.getElementById("app");
// const root = ReactDOM.createRoot(container);
// root.render(React.createElement(App));

const root = createRoot(document.getElementById("app"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
