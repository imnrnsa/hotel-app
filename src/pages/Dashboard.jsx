import { FaCalendarCheck, FaTruck, FaBan, FaDollarSign, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import { useState, useEffect } from "react";
import productsData from "../data/productsData.json";

// Komponen Reusable untuk Stat Card
const StatCard = ({ title, value, icon: Icon, color, delay, trend, isCurrency }) => {
    const colors = {
        green: "from-[#d8c4a3] to-[#b98c58] shadow-[#e1c7a3]",
        blue: "from-[#c2a17a] to-[#8b6a43] shadow-[#d4b0a1]",
        red: "from-[#cf9a74] to-[#a66b48] shadow-[#d7b0a2]",
        yellow: "from-[#e1c596] to-[#c6945d] shadow-[#ead6a7]",
    };

    return (
        <div className={`group relative overflow-hidden rounded-[2rem] border border-[#f3e3cc] bg-white p-6 shadow-[0_18px_50px_rgba(134,100,62,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${delay}`}>
            <div className={`absolute -right-6 -top-6 h-28 w-28 rounded-full bg-linear-to-br ${colors[color]} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />

            <div className="flex items-start justify-between gap-4">
                <div className="space-y-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-3xl bg-linear-to-br ${colors[color]} shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                        <Icon className="text-2xl text-white" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f7a5d]">
                            {title}
                        </p>
                        <h3 className="mt-2 text-3xl font-extrabold text-[#3c3328]">
                            {isCurrency && "Rp "}
                            {value.toLocaleString('id-ID')}
                        </h3>
                    </div>
                </div>
                <div className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold ${trend > 0 ? 'bg-[#f8eee0] text-[#8b5a34]' : 'bg-[#f8e5dc] text-[#8a5d3e]'}`}>
                    {trend > 0 ? <FaArrowUp /> : <FaArrowDown />}
                    <span>{Math.abs(trend)}%</span>
                </div>
            </div>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#f6e8d8]">
                <div className={`h-full bg-linear-to-r ${colors[color]} transition-all duration-1000 ease-out`} style={{ width: '70%' }} />
            </div>
        </div>
    );
};

export default function Dashboard() {
    const [counts, setCounts] = useState({
        bookings: 0,
        delivered: 0,
        canceled: 0,
        revenue: 0,
        products: 0
    });

    useEffect(() => {
        const targets = {
            bookings: 75,
            delivered: 175,
            canceled: 40,
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
        <div className="min-h-screen bg-[#f8f1de] p-4 md:p-8">
            <PageHeader title="Hotel Overview" breadcrumb={[{ name: "Dashboard", path: "/" }]} />

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-5">
                <StatCard title="Total Bookings" value={counts.bookings} icon={FaCalendarCheck} color="green" trend={12.5} />
                <StatCard title="Check-ins" value={counts.delivered} icon={FaTruck} color="blue" delay="animation-delay-100" trend={8.2} />
                <StatCard title="Cancellations" value={counts.canceled} icon={FaBan} color="red" delay="animation-delay-200" trend={-2.4} />
                <StatCard title="Total Revenue" value={counts.revenue} icon={FaDollarSign} color="yellow" delay="animation-delay-300" isCurrency trend={14.1} />
                <StatCard title="Total Rooms" value={counts.products} icon={FaBox} color="blue" delay="animation-delay-400" trend={5.3} />
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-3">
                <div className="rounded-[2rem] border border-[#f3e4d0] bg-white p-8 shadow-[0_24px_70px_rgba(133,104,76,0.08)]">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8c6b44]">Menu Populer</p>
                            <h2 className="mt-2 text-2xl font-semibold text-[#3d3528]">Top 3 Pesanan</h2>
                        </div>
                        <div className="rounded-full bg-[#f5ecdc] px-4 py-2 text-sm font-semibold text-[#89693c]">
                            Popular
                        </div>
                    </div>
                    <div className="space-y-4">
                        {[
                            { rank: 1, name: 'Nasi Box Ayam', sold: 128 },
                            { rank: 2, name: 'Paket Seafood', sold: 112 },
                            { rank: 3, name: 'Paket Vegetarian', sold: 98 },
                        ].map((item) => (
                            <div key={item.rank} className="flex items-center justify-between rounded-[1.75rem] border border-[#f2e7d5] bg-[#fdf7ef] px-5 py-4 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#f4e2d1] text-lg font-bold text-[#8b6231]">
                                        {item.rank}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[#3b3227]">{item.name}</p>
                                        <p className="text-sm text-[#7d6c55]">{item.sold} terjual</p>
                                    </div>
                                </div>
                                <span className="text-sm font-semibold text-[#8b5a3d]">Rp {(item.sold * 25000).toLocaleString('id-ID')}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-[2rem] border border-[#f3e4d0] bg-white p-8 shadow-[0_24px_70px_rgba(133,104,76,0.08)]">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8c6b44]">Top Pelanggan</p>
                            <h2 className="mt-2 text-2xl font-semibold text-[#3d3528]">Loyal Customers</h2>
                        </div>
                        <div className="rounded-full bg-[#f5ecdc] px-4 py-2 text-sm font-semibold text-[#89693c]">
                            Selalu Kembali
                        </div>
                    </div>
                    <div className="space-y-4">
                        {[
                            { name: 'ahmad', amount: 525000 },
                            { name: 'budi.santoso', amount: 425000 },
                            { name: 'citra.dev', amount: 395000 },
                        ].map((customer) => (
                            <div key={customer.name} className="flex items-center justify-between gap-4 rounded-[1.75rem] border border-[#f2e7d5] bg-[#fdf7ef] px-5 py-4 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7b488] text-sm font-bold uppercase text-white">
                                        {customer.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[#3b3227]">{customer.name}</p>
                                        <p className="text-sm text-[#7d6c55]">Pelanggan setia</p>
                                    </div>
                                </div>
                                <p className="font-semibold text-[#8b5a3d]">Rp {customer.amount.toLocaleString('id-ID')}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-[2rem] border border-[#f3e4d0] bg-white p-8 shadow-[0_24px_70px_rgba(133,104,76,0.08)]">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8c6b44]">Distribusi Pesanan</p>
                            <h2 className="mt-2 text-2xl font-semibold text-[#3d3528]">Status Order</h2>
                        </div>
                        <div className="rounded-full bg-[#f5ecdc] px-4 py-2 text-sm font-semibold text-[#89693c]">
                            7 Total
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-[#fdf7ef] shadow-inner">
                            <div className="absolute inset-12 rounded-full bg-white" />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#c99c5e] via-[#8b5a31] to-[#683f23]" style={{ clipPath: 'polygon(50% 0%, 84% 15%, 100% 50%, 84% 85%, 50% 100%, 16% 85%, 0% 50%, 16% 15%)' }} />
                            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,_rgb(201,156,94)_0deg_35deg,_rgb(110,72,39)_35deg_65deg,_rgb(70,45,22)_65deg_85deg,_rgb(244,214,191)_85deg_360deg)]" />
                            <div className="relative z-10 flex flex-col items-center justify-center text-center">
                                <span className="text-5xl font-bold text-[#3d3528]">7</span>
                                <span className="text-sm text-[#7d6c55]">Total</span>
                            </div>
                        </div>
                        <div className="w-full space-y-3">
                            {[
                                { label: 'Diproses', value: '35%', color: '#c99c5e' },
                                { label: 'Selesai', value: '30%', color: '#8b5a31' },
                                { label: 'Dikirim', value: '20%', color: '#462b15' },
                                { label: 'Menunggu', value: '15%', color: '#f4d7bf' },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-[#f2e7d5] bg-[#fdf7ef] px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <span className="inline-block h-3.5 w-3.5 rounded-full" style={{ backgroundColor: item.color }} />
                                        <span className="font-medium text-[#3b3227]">{item.label}</span>
                                    </div>
                                    <span className="text-sm font-semibold text-[#8b5a3d]">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}