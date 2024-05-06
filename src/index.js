import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18n from "i18next";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import translations_en from "./locales/en/translations.json";
import translations_ru from "./locales/ru/translations.json";
import { I18nextProvider } from "react-i18next";
const root = ReactDOM.createRoot(document.getElementById("root"));

i18n.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // Default language
  resources: {
    en: {
      translation: translations_en,
    },
    ru: {
      translation: translations_ru,
    },
  },
});

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
serviceWorkerRegistration.register();
reportWebVitals();
