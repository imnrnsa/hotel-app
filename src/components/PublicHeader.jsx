import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function PublicHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu Kamar", path: "/#menu" },
    { name: "Promosi", path: "/#promo" },
    { name: "Member", path: "/#member" },
  ];

  const isActive = (path) => location.pathname === path || location.hash === path.split("#")[1];

  return (
    <header className="sticky top-0 z-50 border-b border-[#ead6b8] bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#b98d49] to-[#855f32] text-xl font-bold text-white">
            H
          </div>
          <span className="text-2xl font-bold text-[#3f3527]">
            Hotel <span className="text-[#c99c5e]">Grand Zuri</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-semibold transition ${
                isActive(item.path) ? "text-[#8d6b45]" : "text-[#5f5f5f] hover:text-[#8d6b45]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons - Desktop */}
        <div className="hidden gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-lg border border-[#d9c5a3] bg-white px-5 py-2 text-sm font-semibold text-[#7a5d39] transition hover:bg-[#f8f0e0]"
          >
            Masuk
          </Link>
          <Link
            to="/login"
            className="rounded-lg bg-[#ff9f43] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#ff8800]"
          >
            Daftar
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#5f5f5f]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="border-t border-[#ead6b8] bg-white md:hidden">
          <nav className="flex flex-col gap-4 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm font-semibold text-[#5f5f5f] hover:text-[#8d6b45]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="space-y-2 border-t border-[#ead6b8] pt-4">
              <Link
                to="/login"
                className="block rounded-lg border border-[#d9c5a3] bg-white px-4 py-2 text-center text-sm font-semibold text-[#7a5d39]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Masuk
              </Link>
              <Link
                to="/login"
                className="block rounded-lg bg-[#ff9f43] px-4 py-2 text-center text-sm font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Daftar
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
