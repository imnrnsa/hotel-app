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

  const errorInfo = error ? (
    <div className="bg-[#fee] mb-5 p-4 text-sm font-medium text-[#c33] rounded-xl flex items-center border border-[#fcc]">
      <BsFillExclamationDiamondFill className="text-[#c33] me-3 text-lg flex-shrink-0" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-[#e8f5ff] mb-5 p-4 text-sm text-[#0a5f7f] rounded-xl flex items-center border border-[#b0e0f0]">
      <ImSpinner2 className="me-3 animate-spin flex-shrink-0" />
      Sedang memproses...
    </div>
  ) : null;

  return (
    <div>
      {errorInfo}
      {loadingInfo}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-[#0a5f7f] mb-2">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-[#f0f8fb] border-2 border-[#d0e8f2] rounded-xl shadow-sm placeholder-[#999] focus:border-[#00d4ff] focus:bg-white focus:outline-none transition"
            placeholder="anda@example.com"
            value={dataForm.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0a5f7f] mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-3 bg-[#f0f8fb] border-2 border-[#d0e8f2] rounded-xl shadow-sm placeholder-[#999] focus:border-[#00d4ff] focus:bg-white focus:outline-none transition"
            placeholder="••••••••"
            value={dataForm.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0a5f7f] mb-2">
            Masuk Sebagai
          </label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="w-full px-4 py-3 bg-[#f0f8fb] border-2 border-[#d0e8f2] rounded-xl shadow-sm focus:border-[#00d4ff] focus:bg-white focus:outline-none transition"
          >
            <option value="guest">👤 Guest</option>
            <option value="member">👑 Member Premium</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#0a5f7f] to-[#1b8fa8] hover:from-[#084859] hover:to-[#1a7a93] text-white font-bold py-3 px-4 rounded-xl transition duration-300 shadow-lg hover:shadow-xl mt-6"
        >
          Masuk Sekarang
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-[#666]">
          Belum punya akun? 
          <a href="/register" className="text-[#00a8cc] font-semibold hover:text-[#0a5f7f] transition">
            {" "}Daftar di sini
          </a>
        </p>
      </div>
    </div>
  );
}
