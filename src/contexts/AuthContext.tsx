// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { users } from "../config/mockData";
import { User } from "../models/types";

interface GoogleUserInfo {
  email: string;
  name: string;
  picture: string;
  sub: string;
}

interface AuthContextType {
  currentUser: User | null;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; message?: string }>;
  loginWithGoogle: (
    accessToken: string
  ) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  console.log(currentUser);
  useEffect(() => {
    // Check for stored user in localStorage on mount
    const storedUser = localStorage.getItem("metaforma_user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call
    if (!email || !password) {
      return { success: false, message: "Veuillez remplir tous les champs" };
    }

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      const { password: _, ...userWithoutPassword } = user;
      setCurrentUser(userWithoutPassword);
      setIsAuthenticated(true);
      localStorage.setItem(
        "metaforma_user",
        JSON.stringify(userWithoutPassword)
      );
      return { success: true };
    }

    return { success: false, message: "Email ou mot de passe incorrect" };
  };

  const loginWithGoogle = async (accessToken: string) => {
    try {
      // First, use the access token to fetch the ID token
      const response = await fetch(
        `https://oauth2.googleapis.com/tokeninfo?access_token=${accessToken}`
      );
      const data = await response.json();
      console.log(data);
      // Now create a user based on this data
      const user = {
        id: data.sub || data.user_id,
        email: data.email,
        fullName: data.name || data.email.split("@")[0],
        role: "user",
        avatar: data.picture,
        position: "Google User",
      };

      setCurrentUser(user);
      setIsAuthenticated(true);
      localStorage.setItem("metaforma_user", JSON.stringify(user));

      return { success: true };
    } catch (error) {
      console.error("Google login error:", error);
      return { success: false, message: "Failed to authenticate with Google" };
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("metaforma_user");
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, login, loginWithGoogle, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
