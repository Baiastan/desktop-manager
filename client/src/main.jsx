import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import "../tailwind.css";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./store";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { api } from "./store/api";
const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDedault) => getDedault().concat(api.middleware),
});
setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
