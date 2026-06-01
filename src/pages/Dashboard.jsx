import { FaCalendarCheck, FaTruck, FaBan, FaDollarSign, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import { useState, useEffect } from "react";
import productsData from "../data/productsData.json";

// Komponen Reusable untuk Stat Card
const StatCard = ({ title, value, icon: Icon, color, delay, trend, isCurrency }) => {
    const colors = {
        green: "from-[#c7a27d] to-[#9f7a61] shadow-[#ddc8b4]",
        blue: "from-[#b5886f] to-[#8f5a3e] shadow-[#d3b2a0]",
        red: "from-[#a66a4b] to-[#8c4f38] shadow-[#d3b0a0]",
        yellow: "from-[#d1a26e] to-[#a6693c] shadow-[#ead0b0]",
    };

    return (
        <div className={`group relative bg-[#fbf1dc] border border-[#f2e3c8] rounded-3xl shadow-sm p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-slideInUp ${delay}`}>
            
            <div className={`absolute -right-4 -top-4 w-24 h-24 bg-linear-to-br ${colors[color]} opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>

            <div className="flex items-start justify-between">
                <div className="space-y-4">

                    <div className={`w-14 h-14 flex items-center justify-center bg-linear-to-br ${colors[color]} rounded-2xl shadow-lg transform transition-transform duration-500 group-hover:rotate-10 group-hover:scale-110`}>
                        <Icon className="text-2xl text-white" />
                    </div>

                    <div>
                        <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                            {title}
                        </p>

                        <h3 className="text-3xl font-extrabold text-gray-800 mt-1 italic tracking-tight">
                            {isCurrency && "Rp "}
                            {value.toLocaleString('id-ID')}
                        </h3>
                    </div>
                </div>

                <div className={`flex items-center space-x-1 text-xs font-bold px-2 py-1 rounded-full ${
                    trend > 0
                        ? 'bg-[#f6e7d2] text-[#8b5e3e]'
                        : 'bg-[#f5e0d0] text-[#8c5e3e]'
                }`}>
                    {trend > 0 ? <FaArrowUp /> : <FaArrowDown />}
                    <span>{Math.abs(trend)}%</span>
                </div>
            </div>

            <div className="mt-6 w-full bg-[#f4e7d1] h-1.5 rounded-full overflow-hidden">
                <div
                    className={`h-full bg-linear-to-r ${colors[color]} transition-all duration-1000 ease-out`}
                    style={{ width: '70%' }}
                ></div>
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

                    setCounts(prev => ({
                        ...prev,
                        [key]: target
                    }));

                    clearInterval(timer);

                } else {

                    setCounts(prev => ({
                        ...prev,
                        [key]: Math.floor(start)
                    }));
                }

            }, 20);
        };

        Object.keys(targets).forEach(key => animate(key, targets[key]));

    }, []);

    return (
        <div className="min-h-screen bg-[#faf0d8] p-4 md:p-8 animate-fadeIn">

            <PageHeader
                title="Hotel Overview"
                breadcrumb={[{ name: "Dashboard", path: "/" }]}
            />

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

                <StatCard
                    title="Total Bookings"
                    value={counts.bookings}
                    icon={FaCalendarCheck}
                    color="green"
                    trend={12.5}
                />

                <StatCard
                    title="Check-ins"
                    value={counts.delivered}
                    icon={FaTruck}
                    color="blue"
                    delay="animation-delay-100"
                    trend={8.2}
                />

                <StatCard
                    title="Cancellations"
                    value={counts.canceled}
                    icon={FaBan}
                    color="red"
                    delay="animation-delay-200"
                    trend={-2.4}
                />

                <StatCard
                    title="Total Revenue"
                    value={counts.revenue}
                    icon={FaDollarSign}
                    color="yellow"
                    delay="animation-delay-300"
                    isCurrency
                    trend={14.1}
                />

                <StatCard
                    title="Total Rooms"
                    value={counts.products}
                    icon={FaBox}
                    color="blue"
                    delay="animation-delay-400"
                    trend={5.3}
                />
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div className="lg:col-span-2 bg-[#f6eadb] p-8 rounded-3xl shadow-sm border border-[#e6cdb5]">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6">Weekly Booking Chart</h3>
                    
                    <div className="flex items-end justify-around h-64 gap-2">
                        {[
                            { day: 'Mon', bookings: 45, maxHeight: 200 },
                            { day: 'Tue', bookings: 62, maxHeight: 200 },
                            { day: 'Wed', bookings: 55, maxHeight: 200 },
                            { day: 'Thu', bookings: 78, maxHeight: 200 },
                            { day: 'Fri', bookings: 89, maxHeight: 200 },
                            { day: 'Sat', bookings: 92, maxHeight: 200 },
                            { day: 'Sun', bookings: 68, maxHeight: 200 }
                        ].map((bar) => (
                            <div key={bar.day} className="flex flex-col items-center gap-2 flex-1">
                                <div className="relative w-full h-48 flex items-end justify-center">
                                    <div 
                                        className="w-full bg-gradient-to-t from-[#b8926f] to-[#d4b89e] rounded-t-lg hover:from-[#a67c55] hover:to-[#c2976f] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                                        style={{ height: `${(bar.bookings / 92) * 100}%` }}
                                    >
                                        <div className="flex items-center justify-center h-full">
                                            <span className="text-white font-bold text-sm">{bar.bookings}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm font-medium text-gray-700">{bar.day}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-6 flex justify-between text-xs text-gray-600">
                        <span>Total: 489 bookings</span>
                        <span>Avg: 70 bookings/day</span>
                    </div>
                </div>

                <div className="bg-[#f6eadb] p-6 rounded-3xl shadow-sm border border-[#e6cdb5]">

                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Recent Rooms
                    </h3>

                    <div className="space-y-3 max-h-48 overflow-y-auto">

                        {productsData.slice(0, 5).map((product) => (

                            <div
                                key={product.id}
                                className="flex items-center justify-between p-3 bg-[#fbf3ea] rounded-lg"
                            >

                                <div>
                                    <p className="font-medium text-gray-800">
                                        {product.name}
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        {product.category}
                                    </p>
                                </div>

                                <div className="text-right">

                                    <p className="font-semibold text-gray-800">
                                        Rp {product.price.toLocaleString('id-ID')}
                                    </p>

                                    <span className={`text-xs px-2 py-1 rounded-full ${
                                        product.status === 'Available'
                                            ? 'bg-[#f3e0d0] text-[#8c5e3e]'
                                            : product.status === 'Low Stock'
                                            ? 'bg-[#efd0b4] text-[#8c5e3e]'
                                            : 'bg-[#e6c4ac] text-[#7c4c31]'
                                    }`}>
                                        {product.status}
                                    </span>

                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}