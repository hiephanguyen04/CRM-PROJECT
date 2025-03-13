// src/App.tsx
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

// Pages
import Contacts from "./pages/Contacts/Contacts";
import Login from "./pages/Login/Login";
import Opportunities from "./pages/Opportunities/Opportunities";

// Styles
import "./app.css";
import Layout from "./components/layout/Layout";
import Tasks from "./pages/Task/Tasks";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Routes publiques */}
      <Route path="/login" element={<Login />} />

      {/* Routes privées */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Navigate to="/contacts" replace />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="opportunities" element={<Opportunities />} />
      </Route>

      {/* Redirection pour les routes inconnues */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const App: React.FC = () => {
  // Replace with your actual Google Client ID
  const googleClientId =
    "961266011690-rnbeo8r9od4mmitjhq5k709qoeja3snf.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
