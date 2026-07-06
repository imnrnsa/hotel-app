import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function PublicHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [activeHash, setActiveHash] = useState("");
  
  // Ref untuk mengunci fungsi scroll saat tombol sedang diklik (mencegah lag/tabrakan)
  const isClickScrolling = useRef(false);

  const navItems = [
    { name: "Home", path: "/", hash: "" },
    { name: "Fasilitas", path: "/", hash: "#fasilitas" },
    { name: "Menu Kamar", path: "/", hash: "#menu" },
    { name: "Promosi", path: "/", hash: "#promo" },
    { name: "Member", path: "/", hash: "#member" },
  ];

  // Sinkronisasi awal dengan URL hash browser
  useEffect(() => {
    setActiveHash(location.hash);
  }, [location.hash]);

  // Deteksi otomatis posisi halaman saat di-scroll manual
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      // Jika halaman sedang digulirkan oleh efek KLIK, abaikan fungsi scroll ini agar tidak lag
      if (isClickScrolling.current) return;

      const scrollPosition = window.scrollY + 140; // Offset cadangan tinggi header

      if (window.scrollY < 150) {
        setActiveHash("");
        return;
      }

      for (const item of navItems) {
        if (item.hash) {
          const id = item.hash.replace("#", "");
          const element = document.getElementById(id);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveHash(item.hash);
              window.history.replaceState(null, "", item.hash);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToHash = (hash) => {
    // 1. Langsung ubah warna menu aktif secara instan (tanpa nunggu scroll selesai)
    setActiveHash(hash);
    
    // 2. Kunci fungsi deteksi scroll manual sementara
    isClickScrolling.current = true;

    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
      setTimeout(() => { isClickScrolling.current = false; }, 800);
      return;
    }

    const id = hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", hash);
      
      // 3. Buka kembali kunci setelah animasi smooth scroll selesai (~800ms)
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    } else {
      isClickScrolling.current = false;
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#ead6b8] bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        
        {/* --- BRANDING LOGO --- */}
        <Link to="/" onClick={() => scrollToHash("")} className="flex items-center gap-3 flex-shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#b98d49] to-[#855f32] shadow-md overflow-hidden">
            <img src="/Logo-Hotel.png" alt="Hotel Logo" className="w-full h-full object-cover" />
          </div>
          <div className="text-left">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.35em] text-[#3f3527] font-semibold">
                Hotel
              </span>
              <h1 className="text-2xl font-black tracking-tight text-[#ad8f67] mt-0.5">
                Grand Zuri
              </h1>
            </div>
          </div>
        </Link>

        {/* --- NAVIGASI UTAMA (OPTIMASI TRANSISI ANTI-LAG) --- */}
        <nav className="hidden gap-1 md:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/60 shadow-inner">
          {navItems.map((item) => {
            const isCurrentActive = activeHash === item.hash && location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={`${item.path}${item.hash}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToHash(item.hash);
                }}
                // Penambahan duration-300 dan transition-all membuat warna meluncur halus saat berpindah
                className={`text-sm font-bold tracking-wide px-5 py-2 rounded-lg transition-all duration-300 ease-in-out transform ${
                  isCurrentActive
                    ? "bg-gradient-to-r from-[#b98d49] to-[#855f32] text-white shadow-md scale-102"
                    : "text-slate-600 hover:text-[#8d6b45] hover:bg-white/60"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* --- AUTH BUTTONS --- */}
        <div className="hidden gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-lg border border-[#d9c5a3] bg-white px-5 py-2 text-sm font-semibold text-[#7a5d39] transition duration-200 hover:bg-[#f8f0e0]"
          >
            Masuk
          </Link>
          <Link
            to="/login"
            className="rounded-lg bg-gradient-to-r from-[#b98d49] to-[#855f32] px-5 py-2 text-sm font-semibold text-white transition duration-200 shadow-sm hover:brightness-110"
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

      {/* --- MOBILE NAVIGATION --- */}
      {mobileMenuOpen && (
        <div className="border-t border-[#ead6b8] bg-white md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => {
              const isCurrentActive = activeHash === item.hash && location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={`${item.path}${item.hash}`}
                  className={`text-sm font-bold py-2.5 px-3 rounded-lg transition-all duration-200 ${
                    isCurrentActive
                      ? "bg-[#f8f0e0] text-[#8d6b45]"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToHash(item.hash);
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}