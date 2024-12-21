import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Login from "./Login.tsx";
import Signup from "./Signup.tsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { initializeApp } from "firebase/app";
import AuthRoute from "./AuthRoute.tsx";

const firebaseConfig = {
  apiKey: "AIzaSyBx8qNDae8JHhkUHRmn5HKk9donsz4-Yns",
  authDomain: "authentication-d4e03.firebaseapp.com",
  projectId: "authentication-d4e03",
  storageBucket: "authentication-d4e03.firebasestorage.app",
  messagingSenderId: "549674528222",
  appId: "1:549674528222:web:748d09e31678d7f506814f",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <App />
            </AuthRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
