// src/pages/Login/Login.tsx
import { useGoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Login.css";
import { FacebookIcon, GoogleIcon } from "../../assets/icons";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { login, loginWithGoogle, isAuthenticated } = useAuth();

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // Pass the correct token
        await loginWithGoogle(tokenResponse.access_token);
      } catch (error) {
        console.log(error);
        setError("Google authentication failed. Please try again.");
      }
    },
    // Add these configurations
    flow: "implicit",
    scope: "email profile",
    onError: () => {
      setError("Google authentication failed. Please try again.");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = await login(email, password);
    if (!result.success && result.message) {
      setError(result.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1 className="logo">OGMA</h1>
          <h2 className="title">Connexion</h2>
          <p className="subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="forgot-password">
            <a href="#forgot">Mot de passe oublié?</a>
          </div>

          <button type="submit" className="btn-login">
            Connexion
          </button>

          <div className="divider">
            <span>Or</span>
          </div>

          <button
            type="button"
            className="btn-google"
            onClick={() => googleLogin()}
          >
            <GoogleIcon />
            Continue with Google
          </button>

          <button type="button" className="btn-facebook">
            <FacebookIcon />
            Continue with Facebook
          </button>
        </form>

        <div className="signup-prompt">
          Not a member? <a href="/signup">Inscription</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
