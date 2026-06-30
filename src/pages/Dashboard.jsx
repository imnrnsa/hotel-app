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
                <div className="lg:col-span-2 rounded-[2rem] border border-[#f3e4d0] bg-white p-8 shadow-[0_24px_70px_rgba(133,104,76,0.08)]">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8c6b44]">Booking performance</p>
                            <h2 className="mt-2 text-2xl font-semibold text-[#3d3528]">Weekly Booking Chart</h2>
                        </div>
                        <div className="rounded-full bg-[#f5ecdc] px-4 py-2 text-sm font-semibold text-[#89693c]">
                            Overview
                        </div>
                    </div>
                    <div className="grid grid-cols-7 gap-3">
                        {[
                            { day: 'Mon', bookings: 45 },
                            { day: 'Tue', bookings: 62 },
                            { day: 'Wed', bookings: 55 },
                            { day: 'Thu', bookings: 78 },
                            { day: 'Fri', bookings: 89 },
                            { day: 'Sat', bookings: 92 },
                            { day: 'Sun', bookings: 68 }
                        ].map((bar) => (
                            <div key={bar.day} className="flex flex-col items-center gap-3">
                                <div className="flex h-52 w-full items-end justify-center">
                                    <div className="w-full rounded-t-3xl bg-gradient-to-t from-[#d8b68a] to-[#f7e3cc] shadow-md transition duration-300 hover:scale-[1.02]" style={{ height: `${(bar.bookings / 92) * 100}%` }}>
                                        <div className="flex h-full items-center justify-center text-sm font-semibold text-white">
                                            {bar.bookings}
                                        </div>
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-[#75624a]">{bar.day}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between text-sm text-[#7a6952]">
                        <span>Total: 489 bookings</span>
                        <span>Avg: 70 bookings/day</span>
                    </div>
                </div>

                <div className="rounded-[2rem] border border-[#f3e4d0] bg-white p-6 shadow-[0_24px_70px_rgba(133,104,76,0.08)]">
                    <div className="mb-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8c6b44]">Rooms Update</p>
                        <h2 className="mt-2 text-2xl font-semibold text-[#3d3528]">Recent Rooms</h2>
                    </div>
                    <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                        {productsData.slice(0, 5).map((product) => (
                            <div key={product.id} className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-[#f2e7d5] bg-[#fdf7ef] px-4 py-4 shadow-sm transition hover:shadow-md">
                                <div>
                                    <p className="font-semibold text-[#3b3227]">{product.name}</p>
                                    <p className="text-sm text-[#7d6c55]">{product.category}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-[#3b3227]">Rp {product.price.toLocaleString('id-ID')}</p>
                                    <span className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                                        product.status === 'Available'
                                            ? 'bg-[#eef3df] text-[#66703f]'
                                            : product.status === 'Low Stock'
                                            ? 'bg-[#f6e2d0] text-[#8c5f40]'
                                            : 'bg-[#f3d8c2] text-[#8a5a3d]'
                                    }`}>{product.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}