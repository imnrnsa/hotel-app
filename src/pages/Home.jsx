import React from "react";

const Home = () => {
  const heroStyle = {
    textAlign: "center",
    padding: "60px 20px",
    background: "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
  };

  const btnPrimary = {
    marginTop: "20px",
    padding: "12px 30px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "25px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(52, 152, 219, 0.3)"
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <section style={heroStyle}>
        <h1 style={{ fontSize: "2.5rem", color: "#2c3e50", marginBottom: "10px" }}>
          Nikmati Pengalaman Menginap Tak Terlupakan
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#7f8c8d", maxWidth: "600px", margin: "0 auto" }}>
          Temukan harmoni antara kemewahan modern dan kenyamanan rumah di jantung kota.
        </p>
        <button style={btnPrimary}>Lihat Kamar Kami</button>
      </section>

      <section style={{ marginTop: "50px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        {/* Contoh Card Info Singkat */}
        {['Kamar Mewah', 'Kolam Renang', 'Restoran 5 Bintang'].map((feature) => (
          <div key={feature} style={{ padding: "20px", border: "1px solid #eee", borderRadius: "10px", textAlign: "center" }}>
            <h3 style={{ color: "#2c3e50" }}>{feature}</h3>
            <p style={{ color: "#95a5a6", fontSize: "0.9rem" }}>Layanan terbaik yang kami sediakan khusus untuk kepuasan Anda.</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;