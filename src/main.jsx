import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
// import 'primereact/resources/themes/lara-dark-indigo/theme.css'; //theme
// import 'primeicons/primeicons.css'; //icons
// import 'primeflex/primeflex.css'; // flex
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PrimeReactProvider } from "primereact/api";
import { persistor, store } from "./Redux/Store.js";
import { PersistGate } from "redux-persist/integration/react";
import MyProvider from "./Context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyProvider>
      <Provider store={store}>
        <PrimeReactProvider>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <App />
              <Toaster />
            </BrowserRouter>
          </PersistGate>
        </PrimeReactProvider>
      </Provider>
    </MyProvider>
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js")
    .then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch((err) => {
      console.error("Service Worker registration failed:", err);
    });
}
