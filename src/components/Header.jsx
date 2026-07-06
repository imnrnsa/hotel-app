import { FaBell, FaSearch } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-4 bg-white rounded-2xl border border-[#efe1c8]/60 shadow-[0_8px_30px_rgb(154,128,90,0.04)] mb-6">
              {/* --- BAGIAN KIRI: SEARCH INPUT FIELD --- */}
            <div className="relative w-full max-w-md group">
                <input
                    type="text"
                    placeholder="Search here..."
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className="w-full rounded-xl border border-[#ede1c6] bg-[#fffaf4] px-4 py-2.5 pl-11 pr-24 text-xs text-[#4c432f] outline-none transition duration-300 focus:border-[#c2a373] focus:bg-white focus:ring-1 focus:ring-[#c2a373]"
                />
                <FaSearch className={`absolute left-4 top-1/2 -translate-y-1/2 text-sm transition-colors duration-300 ${isSearchFocused ? 'text-[#a68456]' : 'text-[#b6a17b]'}`} />
                
                {/* Tombol Cari Internal Eksklusif */}
                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#8c5638] hover:bg-[#734327] text-white text-[11px] font-medium px-4 py-1.5 rounded-lg transition-colors duration-200">
                    Cari
                </button>
            </div>

            {/* --- BAGIAN KANAN: UTILITY BUTTONS & USER PROFILE --- */}
            <div className="flex items-center justify-end gap-4 flex-wrap">
                
                {/* Kelompok Tombol Menu Aksi */}
                <div className="flex items-center gap-2">
                    
                    {/* 1. Tombol Notifikasi (Dengan Badge Angka) */}
                    <button className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[#fffaf4] border border-[#f0e2cc] text-[#8c5638] transition hover:bg-[#fcefdc]">
                        <FaBell className="text-sm" />
                        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#c2784f] text-[9px] font-bold text-white ring-2 ring-white">
                            3
                        </span>
                    </button>

                    {/* 2. Tombol Analitik / Grafik */}
                    <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fffaf4] border border-[#f0e2cc] text-[#8c5638] transition hover:bg-[#fcefdc]">
                        <GoGraph className="text-sm" />
                    </button>

                    {/* 3. Tombol Pengaturan */}
                    <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fffaf4] border border-[#f0e2cc] text-[#8c5638] transition hover:bg-[#fcefdc]">
                        <IoSettingsOutline className="text-sm stroke-[2]" />
                    </button>
                    
                </div>

                {/* Pembatas Vertikal Ringan */}
                <div className="hidden xs:block h-6 w-[1px] bg-[#eadecc]" />

                {/* Informasi Identitas Pengguna */}
                <div className="flex items-center gap-2.5 bg-[#fffaf4] border border-[#f0e2cc] py-1 pl-3 pr-1.5 rounded-xl">
                    <div className="text-left hidden sm:block">
                        <p className="text-[11px] font-bold text-[#4c432f] leading-tight">Annisa</p>
                        <p className="text-[9px] text-[#9c8a70] leading-none">Annisa@gmail.com</p>
                    </div>
                    
                    {/* Avatar Berinisial Bulat */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c2784f] text-white text-xs font-bold shadow-inner">
                        AU
                    </div>
                </div>

            </div>
        </div>
    );
}