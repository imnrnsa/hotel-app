import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    const success = login(username, password);

    if (success) {
      navigate("/");
    } else {
      alert("Login gagal! Periksa kembali username dan password Anda.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Please enter your details to sign in.</p>
        
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <input
              type="text"
              placeholder="Username"
              style={styles.input}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              style={styles.input}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" style={styles.button}>
            Sign In
          </button>
        </form>
        
        <p style={styles.footerText}>
          Don't have an account? <span style={styles.link}>Sign up</span>
        </p>
      </div>
    </div>
  );
};

// Objek Styles untuk mempercantik tampilan
const styles = {
  container: {
    height: "100 vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Background Gradient
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    background: "rgba(255, 255, 255, 0.15)", // Efek Glassmorphism
    backdropFilter: "blur(10px)",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    width: "350px",
    textAlign: "center",
    color: "#fff",
  },
  title: {
    margin: "0 0 10px 0",
    fontSize: "28px",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: "14px",
    marginBottom: "30px",
    opacity: "0.8",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  input: {
    width: "100%",
    padding: "12px 15px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    background: "rgba(255, 255, 255, 0.2)",
    color: "#fff",
    fontSize: "16px",
    boxSizing: "border-box",
    transition: "0.3s ease",
  },
  button: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#fff",
    color: "#764ba2",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
    marginTop: "10px",
  },
  footerText: {
    marginTop: "20px",
    fontSize: "13px",
    opacity: "0.7",
  },
  link: {
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "underline",
  }
};

export default Login;