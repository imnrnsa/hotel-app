import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers, FaPlus, FaClipboardList, FaExclamationTriangle, FaLayerGroup, FaCubes, FaUserFriends, FaGift, FaSignOutAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: MdSpaceDashboard, path: "/dashboard" },
    { name: "Bookings", icon: FaClipboardList, path: "/bookings" },
    { name: "Customers", icon: FaUsers, path: "/customers" },
    { name: "Rooms", icon: FaPlus, path: "/products" },
    { name: "Fitur XYZ", icon: FaLayerGroup, path: "/fitur-xyz" },
    { name: "Component", icon: FaCubes, path: "/component" },
  ];

  const handleLogout = () => {
    // Jalankan pembersihan session/token di sini jika ada (misal: localStorage.clear())
    navigate("/");
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-[1.75rem] px-4 py-4 text-sm transition-all duration-300 ${
      isActive
        ? "bg-[#f4e3d1] text-[#6f4e2a] shadow-lg"
        : "text-[#5f5f5f] hover:bg-[#f7efe4] hover:text-[#7c5838]"
    }`; 

  return (
    <aside className="flex min-h-screen w-80 flex-col bg-[#f5ead9] p-5 shadow-[10px_24px_70px_rgba(133,104,76,0.12)] border-r border-[#ead6b8]">
      <div className="mb-10 overflow-hidden rounded-[2rem] border border-[#f3e6d1] bg-[#fffdf7] p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[#b98d49] to-[#855f32] text-white shadow-lg">
            <span className="text-2xl font-black">H</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#ad8f67]">Hotel</p>
            <h1 className="text-xl font-bold text-[#3f3527]">Hotel Grand Zuri</h1>
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-[#6f5f4d]">
        </p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink key={item.name} to={item.path} className={linkClass} end={item.path === "/dashboard"}>
            <item.icon className="text-lg" />
            <span>{item.name}</span>
          </NavLink>
        ))}
        {/* Tombol Logout Tambahan */}
        <button 
          onClick={handleLogout} 
          className="flex w-full items-center gap-3 rounded-[1.75rem] px-4 py-4 text-sm text-red-600 transition-all duration-300 hover:bg-red-50 hover:text-red-700 font-medium"
        >
          <FaSignOutAlt className="text-lg" />
          <span>Logout</span>
        </button>
      </nav>

      <div className="mt-auto rounded-[2rem] bg-[#fffdf7] p-5 shadow-sm ring-1 ring-black/5 border border-[#f3e6d1]">
        <p className="text-xs uppercase tracking-[0.3em] text-[#b68d61]">Quick Report</p>
        <p className="mt-3 text-sm leading-6 text-[#6e5c48]">
          Hotel insights are ready. Generate your guest and occupancy report instantly.
        </p>
        <button className="mt-5 w-full rounded-full bg-[#765434] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#5e452f]">
          Generate report
        </button>
      </div>

      <div className="mt-5 rounded-[1.75rem] border border-[#f2e5d1] bg-[#fff7ed] p-4 text-center text-xs text-[#7b644b] shadow-sm">
        <p className="font-semibold text-[#5f4b36]">Live clock</p>
        <p className="mt-2">{currentTime.toLocaleTimeString()}</p>
      </div>
    </aside>
  );
}