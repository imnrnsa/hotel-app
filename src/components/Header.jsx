import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";
import { useState } from "react";

export default function Header() {
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    return (
        <div className="flex flex-col gap-5 p-5 rounded-[2rem] bg-white border border-[#f2e0c8] shadow-[0_25px_80px_rgba(154,128,90,0.12)] mb-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="relative w-full max-w-xl group">
                    <div className={`absolute inset-0 rounded-[1.5rem] bg-gradient-to-r from-[#d7b580] to-[#c4995a] opacity-0 transition-opacity duration-500 ${isSearchFocused ? 'opacity-15' : 'group-hover:opacity-10'}`} />
                    <input
                        type="text"
                        placeholder="Search rooms, bookings, customers..."
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                        className="w-full rounded-[1.5rem] border border-[#ede1c6] bg-[#fffaf4] px-5 py-4 pr-14 text-sm text-[#4c432f] shadow-sm outline-none transition duration-300 focus:border-[#d0b281] focus:bg-white focus:shadow-md"
                    />
                    <FaSearch className={`absolute right-5 top-1/2 -translate-y-1/2 text-lg transition duration-300 ${isSearchFocused ? 'text-[#9f7b51]' : 'text-[#b6a17b]'}`} />
                </div>

                <div className="flex items-center gap-3 flex-wrap justify-end">
                    <button className="inline-flex items-center justify-center rounded-2xl border border-[#efe1c8] bg-[#f9f2e4] px-4 py-3 text-sm font-semibold text-[#705b3a] shadow-sm transition hover:bg-[#f0e1c7] hover:text-[#604e34]">
                        <span className="mr-2">+</span> Add Room
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#f0e5d4] bg-[#fffaf2] p-4 shadow-sm transition hover:shadow-lg">
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-[#f8d9b1] to-[#d7b37a] opacity-40 blur-3xl" />
                    <div className="relative flex items-center justify-between gap-4">
                        <div>
                            <p className="text-sm uppercase tracking-[0.25em] text-[#a68456]">Daily Bookings</p>
                            <h3 className="mt-2 text-2xl font-semibold text-[#3f3527]">52</h3>
                        </div>
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#f2e5cd] text-[#8c6f44] shadow-inner">
                            <FaBell className="text-lg" />
                        </div>
                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#f0e5d4] bg-[#fffaf2] p-4 shadow-sm transition hover:shadow-lg">
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-[#d7c4a3] to-[#b08a5a] opacity-40 blur-3xl" />
                    <div className="relative flex items-center justify-between gap-4">
                        <div>
                            <p className="text-sm uppercase tracking-[0.25em] text-[#a68456]">Revenue</p>
                            <h3 className="mt-2 text-2xl font-semibold text-[#3f3527]">Rp 128.4M</h3>
                        </div>
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#f2e5cd] text-[#8c6f44] shadow-inner">
                            <FcAreaChart className="text-xl" />
                        </div>
                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#f0e5d4] bg-[#fffaf2] p-4 shadow-sm transition hover:shadow-lg">
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-[#e9d4b1] to-[#be9a67] opacity-40 blur-3xl" />
                    <div className="relative flex items-center justify-between gap-4">
                        <div>
                            <p className="text-sm uppercase tracking-[0.25em] text-[#a68456]">Occupancy</p>
                            <h3 className="mt-2 text-2xl font-semibold text-[#3f3527]">89%</h3>
                        </div>
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#f2e5cd] text-[#8c6f44] shadow-inner">
                            <SlSettings className="text-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}