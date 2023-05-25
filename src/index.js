import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import Books from './routes/books';
import Users from './routes/users';
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from './config/Keycloak';
import PrivateRoute from "./helpers/PrivateRoute";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <ReactKeycloakProvider authClient={keycloak}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path="routes/books" element={<Books />} />
          <Route path="routes/users" element={<Users />} />
        </Route>
      </Routes>

      {/* <React.StrictMode>
        <App />
      </React.StrictMode> */}
    </BrowserRouter>
  </ReactKeycloakProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
