// src/layouts/AuthLayout.jsx
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
      background: "#ecf0f1"
    }}>
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "10px",
        width: "300px"
      }}>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;