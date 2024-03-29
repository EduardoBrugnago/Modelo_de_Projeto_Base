import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import StorageProvider from "./contexts/StorageContext";
import { CssBaseline } from "@material-ui/core";
import { Modal, ModalError } from "./components/modals";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StorageProvider>
      <ModalError />
      <Modal />
      <CssBaseline />
      <App />
    </StorageProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
