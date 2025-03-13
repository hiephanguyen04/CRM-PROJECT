// src/pages/Login/Login.tsx
import { useGoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Login.css";

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
            <svg
              className="google-icon"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908C16.658 14.2 17.64 11.9 17.64 9.2z"
                fill="#4285F4"
              />
              <path
                d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
                fill="#34A853"
              />
              <path
                d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                fill="#FBBC05"
              />
              <path
                d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>

          <button type="button" className="btn-facebook">
            <svg
              className="facebook-icon"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M18 9a9 9 0 1 0-10.406 8.89v-6.288H5.309V9h2.285V7.017c0-2.255 1.343-3.501 3.4-3.501.984 0 2.014.175 2.014.175v2.215h-1.135c-1.118 0-1.467.694-1.467 1.406V9h2.496l-.399 2.602h-2.097v6.288A9.002 9.002 0 0 0 18 9z"
                fill="#1877F2"
              />
            </svg>
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
