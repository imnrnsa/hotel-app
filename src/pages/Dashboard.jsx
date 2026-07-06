import { FaCalendarCheck, FaTruck, FaBan, FaDollarSign, FaArrowUp, FaArrowDown, FaRegCalendarAlt } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { useState, useEffect } from "react";
import productsData from "../data/productsData.json";

// Komponen Reusable untuk Stat Card (Sesuai Layout Gambar 1, Tema Warna Konsep Anda)
const StatCard = ({ title, value, icon: Icon, color, delay, trend, isCurrency }) => {
    const colors = {
        green: "from-[#d8c4a3] to-[#b98c58] shadow-[#e1c7a3]",
        blue: "from-[#c2a17a] to-[#8b6a43] shadow-[#d4b0a1]",
        red: "from-[#cf9a74] to-[#a66b48] shadow-[#d7b0a2]",
        yellow: "from-[#e1c596] to-[#c6945d] shadow-[#ead6a7]",
    };

    return (
        <div className={`group relative overflow-hidden rounded-2xl border border-[#f3e3cc] bg-white p-6 shadow-[0_10px_30px_rgba(134,100,62,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${delay}`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${colors[color]} shadow-md`}>
                        <Icon className="text-2xl text-white" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-extrabold text-[#3c3328]">
                            {isCurrency && "Rp "}
                            {value.toLocaleString('id-ID')}
                        </h3>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#8f7a5d] mt-1">
                            {title}
                        </p>
                    </div>
                </div>
                <div className="text-right">
                    <div className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold ${trend > 0 ? 'bg-[#f8eee0] text-[#8b5a34]' : 'bg-[#f8e5dc] text-[#8a5d3e]'}`}>
                        {trend > 0 ? <FaArrowUp className="text-[10px]" /> : <FaArrowDown className="text-[10px]" />}
                        <span>{Math.abs(trend)}%</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1">(30 days)</p>
                </div>
            </div>
        </div>
    );
};

export default function Dashboard() {
    const [counts, setCounts] = useState({
        bookings: 0,
        delivered: 0,
        revenue: 0,
        products: 0
    });

    useEffect(() => {
        const targets = {
            bookings: 75,
            delivered: 175,
            revenue: 128000000,
            products: productsData.length
        };

        const animate = (key, target) => {
            let start = 0;
            const duration = 1500;
            const step = (target / duration) * 20;
            const timer = setInterval(() => {
                start += step;
                if (start >= target) {
                    setCounts((prev) => ({ ...prev, [key]: target }));
                    clearInterval(timer);
                } else {
                    setCounts((prev) => ({ ...prev, [key]: Math.floor(start) }));
                }
            }, 20);

            return timer;
        };

        const timers = Object.keys(targets).map((key) => animate(key, targets[key]));
        return () => timers.forEach(clearInterval);
    }, []);

    return (
        <div className="min-h-screen bg-[#fbf8f0] p-4 md:p-8 antialiased">
            
            {/* --- TOP BANNER COMPONENT: BERGAYA ELEGAN & MEWAH (SESUAI GAMBAR BARU) --- */}
            <div className="relative overflow-hidden w-full rounded-3xl border border-[#eedfc9] bg-gradient-to-r from-[#fffbf7] via-[#fbf3e7] to-[#f4e6d4] p-6 md:p-8 shadow-[0_15px_40px_rgba(154,128,90,0.06)] mb-6 transition-all duration-300">
                {/* Dekorasi Efek Pencahayaan Gradien di Sudut */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-[#f3dec2] to-[#dfc49f] opacity-30 blur-2xl pointer-events-none" />
                
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between relative z-10">
                    {/* Sisi Kiri: Teks Salam & Deskripsi Operasional */}
                    <div className="space-y-1 md:space-y-2">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] text-[#a68456] uppercase">
                            <span className="text-xs">✦</span> Admin Dashboard
                        </div>
                        <h1 className="text-2xl md:text-3xl font-black text-[#362b1d] tracking-tight flex items-center gap-2">
                            Selamat datang, Admin <span className="animate-bounce inline-block">👋</span>
                        </h1>
                        <p className="text-xs font-medium text-[#7c6a52] max-w-xl leading-relaxed">
                            Berikut ringkasan aktivitas catering hari ini untuk kelancaran operasional bisnis Anda.
                        </p>
                    </div>

                    {/* Sisi Kanan: Widget Penunjuk Tanggal Real-Time yang Estetik */}
                    <div className="flex items-center gap-3 self-start sm:self-center bg-white border border-[#ebdcc5] rounded-xl px-4 py-2.5 shadow-xs transition hover:shadow-sm">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fcf6ed] text-[#9c7546]">
                            <FaRegCalendarAlt className="text-sm" />
                        </div>
                        <div className="text-left">
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Tanggal Sekarang</p>
                            <p className="text-xs font-bold text-[#3c3328]">28 Mei 2026</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- BARIS 1: 4 KARTU STATISTIK UTAMA (GRID 4 KOLOM) --- */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard title="Total Bookings" value={counts.bookings} icon={FaCalendarCheck} color="green" trend={12.5} />
                <StatCard title="Check-ins" value={counts.delivered} icon={FaTruck} color="blue" delay="animation-delay-100" trend={8.2} />
                <StatCard title="Total Revenue" value={counts.revenue} icon={FaDollarSign} color="yellow" delay="animation-delay-300" isCurrency trend={14.1} />
                <StatCard title="Total Rooms" value={counts.products} icon={FaBox} color="blue" delay="animation-delay-400" trend={5.3} />
            </div>

            {/* --- BARIS 2: MIDDLE SECTION CHARTS (PIE CHART & CHART ORDER) --- */}
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                
                {/* 3 Donut Pie Charts Berjejer Sesuai Gambar 1 */}
                <div className="rounded-2xl border border-[#f3e4d0] bg-white p-6 shadow-sm lg:col-span-1">
                    <div className="flex items-center justify-between border-b border-slate-50 pb-3 mb-6">
                        <h3 className="font-bold text-[#3d3528] text-base">Pie Chart Status</h3>
                        <div className="flex items-center gap-2 text-xs font-medium text-[#8c6b44]">
                            <span className="h-2 w-2 rounded-full bg-[#c99c5e]" /> Active Status
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-center items-center justify-center">
                        {/* Donut 1 - Checked In */}
                        <div className="flex flex-col items-center">
                            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[conic-gradient(from_0deg,_#c99c5e_0deg_144deg,_#f3ede2_144deg_360deg)] shadow-inner">
                                <div className="absolute inset-2.5 rounded-full bg-white flex items-center justify-center text-xs font-black text-slate-700">40%</div>
                            </div>
                            <span className="mt-3 text-[11px] font-bold text-slate-600 block truncate w-full">Checked In</span>
                        </div>
                        {/* Donut 2 - Booked */}
                        <div className="flex flex-col items-center">
                            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[conic-gradient(from_0deg,_#8b5a31_0deg_108deg,_#f3ede2_108deg_360deg)] shadow-inner">
                                <div className="absolute inset-2.5 rounded-full bg-white flex items-center justify-center text-xs font-black text-slate-700">30%</div>
                            </div>
                            <span className="mt-3 text-[11px] font-bold text-slate-600 block truncate w-full">Booked</span>
                        </div>
                        {/* Donut 3 - Completed */}
                        <div className="flex flex-col items-center">
                            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[conic-gradient(from_0deg,_#462b15_0deg_72deg,_#f3ede2_72deg_360deg)] shadow-inner">
                                <div className="absolute inset-2.5 rounded-full bg-white flex items-center justify-center text-xs font-black text-slate-700">20%</div>
                            </div>
                            <span className="mt-3 text-[11px] font-bold text-slate-600 block truncate w-full">Check Out</span>
                        </div>
                    </div>
                    <div className="mt-5 text-center text-xs font-semibold text-slate-400">Total Hari Ini: <span className="text-[#8b5a3d]">42 Kamar</span></div>
                </div>

                {/* Chart Order - Line Chart Area Mengikuti Gambar 1 */}
                <div className="rounded-2xl border border-[#f3e4d0] bg-white p-6 shadow-sm lg:col-span-2">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <h3 className="font-bold text-[#3d3528] text-base">Chart Order</h3>
                            <p className="text-xs text-slate-400">Ringkasan aktivitas pemesanan akomodasi mingguan</p>
                        </div>
                        <button className="text-xs font-bold text-[#8b6a43] border border-[#f3e4d0] bg-[#fffbf4] px-3 py-1.5 rounded-lg hover:bg-[#fbf5eb]">
                            Save Report
                        </button>
                    </div>
                    {/* SVG Curve Line Chart Effect */}
                    <div className="relative h-40 w-full mt-4 flex items-end justify-between border-b border-l border-slate-100 px-2 pb-1">
                        <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                            <path d="M0,25 Q15,5 30,18 T60,8 T90,20 T100,12" fill="none" stroke="#b98c58" strokeWidth="2" />
                            <path d="M0,25 Q15,5 30,18 T60,8 T90,20 T100,12 L100,30 L0,30 Z" fill="url(#gradient-area)" opacity="0.15" />
                            <defs>
                                <linearGradient id="gradient-area" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#b98c58" />
                                    <stop offset="100%" stopColor="#ffffff" />
                                </linearGradient>
                            </defs>
                        </svg>
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                            <span key={day} className="text-[10px] text-slate-400 font-semibold">{day}</span>
                        ))}
                    </div>
                </div>

            </div>

            {/* --- BARIS 3: BOTTOM SECTION (TOTAL REVENUE WIDE CHART & CUSTOMER MAP) --- */}
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                
                {/* Total Revenue Double Line Chart (Di kiri bawah, porsi 2/3 kolam sesuai Gambar 1) */}
                <div className="rounded-2xl border border-[#f3e4d0] bg-white p-6 shadow-sm lg:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-[#3d3528] text-base">Total Revenue Comparison</h3>
                        <div className="flex items-center gap-4 text-xs font-semibold">
                            <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#c99c5e]"/> <span className="text-slate-500">Kamar Terpopuler</span></div>
                            <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#8b5a31]"/> <span className="text-slate-500">Kategori Lain</span></div>
                        </div>
                    </div>
                    
                    {/* List Box Akomodasi Kamar Populer Anda */}
                    <div className="grid gap-3 sm:grid-cols-3 mb-4">
                        {[
                            { rank: 1, name: 'Deluxe Executive', sold: 128 },
                            { rank: 2, name: 'Superior Balcony', sold: 112 },
                            { rank: 3, name: 'Presidential Suite', sold: 98 },
                        ].map((item) => (
                            <div key={item.rank} className="flex items-center justify-between rounded-xl border border-[#f2e7d5] bg-[#fdf7ef] p-3 shadow-2xs">
                                <div>
                                    <h4 className="font-bold text-xs text-[#3b3227]">{item.name}</h4>
                                    <p className="text-[11px] font-medium text-slate-400 mt-0.5">{item.sold}x dipesan</p>
                                </div>
                                <span className="text-xs font-bold text-[#8b5a3d]">#{item.rank}</span>
                            </div>
                        ))}
                    </div>

                    {/* Mini Curve Diagram Tracker */}
                    <div className="relative h-28 w-full flex items-end justify-between border-b border-l border-slate-100 px-2 pb-1">
                        <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                            <path d="M0,20 Q25,5 50,22 T100,10" fill="none" stroke="#c99c5e" strokeWidth="1.5" />
                            <path d="M0,15 Q20,25 60,8 T100,18" fill="none" stroke="#8b5a31" strokeWidth="1.5" />
                        </svg>
                        {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov', 'Dec'].map((month) => (
                            <span key={month} className="text-[9px] text-slate-400 font-medium">{month}</span>
                        ))}
                    </div>
                </div>

                {/* Customer Map / Loyal Guests Bar Chart (Di kanan bawah, porsi 1/3 kolam sesuai Gambar 1) */}
                <div className="rounded-2xl border border-[#f3e4d0] bg-white p-6 shadow-sm lg:col-span-1">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-[#3d3528] text-base">Customer Loyalty Map</h3>
                        <span className="text-xs font-semibold text-[#8c6b44] bg-[#f5ecdc] px-2 py-0.5 rounded-md">Weekly</span>
                    </div>

                    <div className="space-y-4">
                        {[
                            { name: 'Ahmad Subarjo', tier: 'Gold Member', stays: '18 Stays', pct: 'w-[90%]', color: 'bg-[#b98c58]' },
                            { name: 'Budi Santoso', tier: 'Silver Member', stays: '12 Stays', pct: 'w-[65%]', color: 'bg-[#c2a17a]' },
                            { name: 'Citra Dewi', tier: 'Bronze Member', stays: '9 Stays', pct: 'w-[45%]', color: 'bg-[#cf9a74]' },
                        ].map((customer) => (
                            <div key={customer.name} className="space-y-1.5">
                                <div className="flex items-center justify-between text-xs">
                                    <div>
                                        <p className="font-bold text-[#3b3227]">{customer.name}</p>
                                        <p className="text-[10px] text-slate-400">{customer.tier}</p>
                                    </div>
                                    <span className="font-bold text-[#8b5a3d]">{customer.stays}</span>
                                </div>
                                <div className="h-2.5 w-full bg-[#fbf6ee] rounded-full overflow-hidden border border-[#f5ecd8]">
                                    <div className={`h-full rounded-full transition-all duration-1000 ${customer.color} ${customer.pct}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
}