import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { saveAuthSession } from "../../lib/utils";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedRole, setSelectedRole] = useState("guest");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!dataForm.email || !dataForm.password) {
      setError("Isi email dan password terlebih dahulu.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await axios.post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      });
    } catch {
      // Fallback demo agar alur tetap berjalan saat API tidak tersedia
    } finally {
      saveAuthSession({
        isLoggedIn: true,
        role: selectedRole,
        name: dataForm.email.split("@")[0] || "Hotel Guest",
        email: dataForm.email,
      });
      navigate(selectedRole === "member" ? "/member" : "/dashboard");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 bg-gradient-to-tr from-[#E8F1F2] via-[#F3F7F6] to-[#F7ECE1]">
      
      {/* Card Login Utama dengan Warna Pastel Solid & Lembut */}
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-lg border border-[#E1EBEB]">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#4A727A] tracking-tight mb-2">
            Selamat Datang
          </h2>
          <p className="text-sm text-[#7A9A9F]">
            Silakan masuk untuk mengakses dashboard Anda
          </p>
        </div>

        {/* Notifikasi Error - Pastel Merah Muda */}
        {error && (
          <div className="bg-[#FDE8E8] mb-5 p-4 text-sm font-semibold text-[#C84B4B] rounded-2xl flex items-center border border-[#FAD2D2]">
            <BsFillExclamationDiamondFill className="text-[#C84B4B] me-3 text-lg flex-shrink-0" />
            {error}
          </div>
        )}

        {/* Notifikasi Loading - Pastel Biru/Teal */}
        {loading && (
          <div className="bg-[#EBF6F7] mb-5 p-4 text-sm font-semibold text-[#3D6971] rounded-2xl flex items-center border border-[#D5EBED]">
            <ImSpinner2 className="me-3 animate-spin flex-shrink-0 text-[#59929B]" />
            Sedang memproses...
          </div>
        )}

        {/* Form Input */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-[#4A727A] tracking-wider uppercase mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 bg-[#F4F8F8] border border-[#D3E4E5] rounded-xl text-gray-700 placeholder-gray-400 focus:border-[#7A9A9F] focus:ring-4 focus:ring-[#7A9A9F]/10 focus:bg-white focus:outline-none transition-all duration-200"
              placeholder="anda@example.com"
              value={dataForm.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#4A727A] tracking-wider uppercase mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 bg-[#F4F8F8] border border-[#D3E4E5] rounded-xl text-gray-700 placeholder-gray-400 focus:border-[#7A9A9F] focus:ring-4 focus:ring-[#7A9A9F]/10 focus:bg-white focus:outline-none transition-all duration-200"
              placeholder="••••••••"
              value={dataForm.password}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#4A727A] tracking-wider uppercase mb-2">
              Masuk Sebagai
            </label>
            <div className="relative">
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full px-4 py-3 bg-[#F4F8F8] border border-[#D3E4E5] rounded-xl text-gray-600 focus:border-[#7A9A9F] focus:ring-4 focus:ring-[#7A9A9F]/10 focus:bg-white focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
                disabled={loading}
              >
                <option value="guest">👤 Guest</option>
                <option value="member">👑 Member Premium</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#4A727A]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Tombol dengan Warna Pastel Teal Muted */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#59929B] hover:bg-[#4A727A] text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all duration-200 mt-4 
              ${loading 
                ? "opacity-60 cursor-not-allowed" 
                : "hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              }`}
          >
            {loading ? "Menghubungkan..." : "Masuk Sekarang"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center border-t border-[#F0F5F5] pt-6">
          <p className="text-sm text-gray-500">
            Belum punya akun?{" "}
            <a href="/register" className="text-[#59929B] font-semibold hover:text-[#4A727A] hover:underline transition-all duration-200">
              Daftar di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}