import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { FaEnvelope, FaLock, FaUserShield } from "react-icons/fa";
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
    <div className="w-full space-y-6">
      
      {/* Notifikasi Error - Lebih Halus dan Modern */}
      {error && (
        <div className="bg-rose-500/10 border border-rose-200 text-sm font-semibold text-rose-600 p-4 rounded-xl flex items-center shadow-xs animate-headShake">
          <BsFillExclamationDiamondFill className="text-rose-500 me-3 text-lg flex-shrink-0" />
          {error}
        </div>
      )}

      {/* Notifikasi Loading - Berwarna Teal Premium */}
      {loading && (
        <div className="bg-[#052e3c]/5 border border-[#00d4ff]/30 p-4 text-sm font-semibold text-[#0a5f7f] rounded-xl flex items-center shadow-xs">
          <ImSpinner2 className="me-3 animate-spin flex-shrink-0 text-[#1b8fa8]" />
          Mengotentikasi kredensial Anda...
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Input Email */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-bold text-slate-500 tracking-wider uppercase">
            Email Kredensial
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400 group-focus-within:text-[#1b8fa8] transition-colors duration-200">
              <FaEnvelope className="text-sm" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium placeholder-slate-400 focus:border-[#1b8fa8] focus:ring-4 focus:ring-[#1b8fa8]/10 focus:bg-white focus:outline-none transition-all duration-300"
              placeholder="nama@email.com"
              value={dataForm.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
        </div>

        {/* Input Password */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="block text-[11px] font-bold text-slate-500 tracking-wider uppercase">
              Kata Sandi
            </label>
            <a href="#" className="text-xs font-semibold text-[#1b8fa8] hover:text-[#0a5f7f] hover:underline transition-colors">
              Lupa Sandi?
            </a>
          </div>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400 group-focus-within:text-[#1b8fa8] transition-colors duration-200">
              <FaLock className="text-sm" />
            </div>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium placeholder-slate-400 focus:border-[#1b8fa8] focus:ring-4 focus:ring-[#1b8fa8]/10 focus:bg-white focus:outline-none transition-all duration-300"
              placeholder="••••••••"
              value={dataForm.password}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
        </div>

        {/* Pilihan Hak Akses */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-bold text-slate-500 tracking-wider uppercase">
            Akses Sebagai
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400 group-focus-within:text-[#1b8fa8] transition-colors duration-200">
              <FaUserShield className="text-sm" />
            </div>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-semibold focus:border-[#1b8fa8] focus:ring-4 focus:ring-[#1b8fa8]/10 focus:bg-white focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
              disabled={loading}
            >
              <option value="guest" className="text-slate-800 font-medium">Administrator Hotel</option>
              <option value="member" className="text-slate-800 font-medium">Loyal Member</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Tombol Log In Premium dengan Efek Gradasi Selaras */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-gradient-to-r from-[#0a5f7f] via-[#1b8fa8] to-[#2eb8d9] text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-[#1b8fa8]/20 transition-all duration-300 mt-4
            ${loading 
              ? "opacity-50 cursor-not-allowed" 
              : "hover:shadow-xl hover:shadow-[#1b8fa8]/30 hover:-translate-y-0.5 active:translate-y-0"
            }`}
        >
          {loading ? "Menghubungkan..." : "Masuk ke Dashboard"}
        </button>
      </form>

      {/* Bagian Bawah Keterangan Pendaftaran */}
      <div className="text-center pt-2">
        <p className="text-xs text-slate-400 font-medium">
          Belum terdaftar sebagai mitra?{" "}
          <a href="/register" className="text-[#1b8fa8] font-bold hover:text-[#0a5f7f] hover:underline transition-all duration-200">
            Hubungi Manajemen
          </a>
        </p>
      </div>
    </div>
  );
}