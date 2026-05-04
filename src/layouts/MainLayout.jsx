import React from "react";
import { useAuth } from "../context/AuthContext";

const MainLayout = ({ children }) => {
  const { user, logout } = useAuth();

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#1a252f",
    color: "white",
    padding: "1rem 5%",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  };

  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: "#e74c3c",
    border: "none",
    borderRadius: "4px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s"
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header style={headerStyle}>
        <h2 style={{ margin: 0, fontSize: "1.5rem" }}>🏨 <span style={{ color: "#3498db" }}>Hotel</span> Paradise</h2>

        <nav>
          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <span style={{ fontSize: "0.9rem", opacity: 0.9 }}>
                Selamat datang, <strong>{user.username}</strong>
              </span>
              <button 
                onClick={logout} 
                style={buttonStyle}
                onMouseOver={(e) => e.target.style.backgroundColor = "#c0392b"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#e74c3c"}
              >
                Logout
              </button>
            </div>
          ) : (
            <a href="/login" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Login</a>
          )}
        </nav>
      </header>

      <main style={{ flex: 1, padding: "40px 5%" }}>
        {children}
      </main>

      <footer style={{
        background: "#1a252f",
        color: "#bdc3c7",
        padding: "20px",
        textAlign: "center",
        fontSize: "0.8rem",
        borderTop: "1px solid #34495e"
      }}>
        © 2026 <strong>Hotel Paradise</strong>. Luxury & Comfort.
      </footer>
    </div>
  );
};

export default MainLayout;