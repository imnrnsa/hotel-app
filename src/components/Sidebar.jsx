import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers, FaPlus, FaClipboardList, FaExclamationTriangle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const [activeMenu, setActiveMenu] = useState("Dashboard");
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4 space-x-2 relative group overflow-hidden transition-all duration-300
        ${isActive ?
            "text-hijau bg-gradient-to-r from-green-50 to-green-100 shadow-md" :
            "text-gray-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:shadow-sm"
        }`

    const menuItems = [
        { name: "Dashboard", icon: MdSpaceDashboard, color: "text-green-600", gradient: "from-green-400 to-green-600", path: "/" },
        { name: "Bookings", icon: FaClipboardList, color: "text-blue-600", gradient: "from-blue-400 to-blue-600", path: "/bookings" },
        { name: "Customers", icon: FaUsers, color: "text-purple-600", gradient: "from-purple-400 to-purple-600", path: "/customers" },
        { name: "Rooms", icon: FaPlus, color: "text-teal-600", gradient: "from-teal-400 to-teal-600", path: "/products" },
        { name: "Error 400", icon: FaExclamationTriangle, color: "text-red-600", gradient: "from-red-400 to-red-600", path: "/error-400" },
        { name: "Error 401", icon: FaExclamationTriangle, color: "text-orange-600", gradient: "from-orange-400 to-orange-600", path: "/error-401" },
        { name: "Error 403", icon: FaExclamationTriangle, color: "text-yellow-600", gradient: "from-yellow-400 to-yellow-600", path: "/error-403" }
    ];

    return (
        <div className="flex min-h-screen w-80 flex-col bg-gradient-to-b from-white via-white to-gray-50 p-8 shadow-2xl animate-slideInLeft relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-20 left-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-500 rounded-full blur-3xl"></div>
            </div>

            {/* Hotel logo dengan efek partikel jatuh */}
<div className="flex flex-col mb-10 group cursor-pointer relative overflow-visible">
    {/* Reduced Glow Effect - Opacity lebih kecil */}
    <div className="absolute -inset-3 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
    
    {/* Falling Particles */}
    <div className="absolute inset-0 pointer-events-none overflow-visible">
        {/* Particle 1 */}
        <div className="absolute w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-60 animate-fall-1"
             style={{ left: '10%', top: '-10px' }}></div>
        {/* Particle 2 */}
        <div className="absolute w-0.5 h-0.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-50 animate-fall-2"
             style={{ left: '25%', top: '-15px' }}></div>
        {/* Particle 3 */}
        <div className="absolute w-1.5 h-1.5 bg-green-300 rounded-full opacity-0 group-hover:opacity-40 animate-fall-3"
             style={{ left: '40%', top: '-5px' }}></div>
        {/* Particle 4 */}
        <div className="absolute w-0.5 h-0.5 bg-green-600 rounded-full opacity-0 group-hover:opacity-45 animate-fall-4"
             style={{ left: '55%', top: '-12px' }}></div>
        {/* Particle 5 */}
        <div className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-50 animate-fall-5"
             style={{ left: '70%', top: '-8px' }}></div>
        {/* Particle 6 */}
        <div className="absolute w-0.5 h-0.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-35 animate-fall-6"
             style={{ left: '85%', top: '-18px' }}></div>
        {/* Particle 7 */}
        <div className="absolute w-1 h-1 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-55 animate-fall-7"
             style={{ left: '15%', top: '-20px' }}></div>
        {/* Particle 8 */}
        <div className="absolute w-0.5 h-0.5 bg-green-400 rounded-full opacity-0 group-hover:opacity-40 animate-fall-8"
             style={{ left: '50%', top: '-25px' }}></div>
        {/* Particle 9 */}
        <div className="absolute w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-45 animate-fall-9"
             style={{ left: '75%', top: '-15px' }}></div>
        {/* Particle 10 */}
        <div className="absolute w-0.5 h-0.5 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-30 animate-fall-10"
             style={{ left: '33%', top: '-22px' }}></div>
        {/* Particle 11 */}
        <div className="absolute w-1 h-1 bg-green-300 rounded-full opacity-0 group-hover:opacity-50 animate-fall-11"
             style={{ left: '62%', top: '-28px' }}></div>
        {/* Particle 12 */}
        <div className="absolute w-0.5 h-0.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-35 animate-fall-12"
             style={{ left: '90%', top: '-10px' }}></div>
    </div>
    
    <div className="relative text-center">
        {/* Main Title */}
        <div className="relative inline-block">
            <span className="font-poppins text-5xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent group-hover:from-green-600/70 group-hover:via-green-500/70 group-hover:to-green-400/70 transition-all duration-500">
                    Hotel
                </span>
                <b className="text-green-500 text-5xl ml-0.5 inline-block group-hover:animate-pulse group-hover:text-green-600/70 transition-all duration-300">
                    .
                </b>
            </span>
            
            {/* Decorative Dot */}
            <div className="absolute -top-1 -right-2">
                <div className="relative">
                    <div className="w-1.5 h-1.5 bg-green-500/60 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-1.5 h-1.5 bg-green-400/40 rounded-full animate-ping"></div>
                </div>
            </div>
        </div>
        
        {/* Elegant Underline */}
        <div className="mt-2 flex justify-center">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-green-500/50 to-transparent rounded-full group-hover:w-24 transition-all duration-500"></div>
        </div>
        
        {/* Subtitle */}
        <div className="mt-2">
            <p className="text-xs font-medium text-gray-400 group-hover:text-green-500/70 transition-all duration-300 tracking-wide">
                ✦ GRAND ZURI DASHBOARD ✦
            </p>
        </div>
    </div>
</div>

            {/* User Profile Card */}
            <div className="relative mb-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-md overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-3">
                    <div className="relative">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIe3VuOA6oMIqC9QIR6mkvfG9stciQXtOZ4A&s" 
                            className="w-12 h-12 rounded-full border-2 border-green-500 shadow-md group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Welcome back,</p>
                        <p className="font-bold text-gray-800 group-hover:text-green-600 transition-colors">Nur Annisa</p>
                        <p className="text-xs text-gray-400">{currentTime.toLocaleTimeString()}</p>
                    </div>
                </div>
            </div>

            {/* List Menu dengan efek lebih baik */}
            <div className="flex-1">
                <p className="text-xs font-bold text-gray-400 mb-4 px-4 tracking-wider">MAIN MENU</p>
                <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                        <li key={item.name} className="relative">
                            <NavLink
                                id={`menu-${index + 1}`}
                                to={item.path}
                                onClick={() => setActiveMenu(item.name)}
                                className={menuClass}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animationFillMode: 'backwards'
                                }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
                                <item.icon className={`text-xl transition-all duration-300 ${activeMenu === item.name ? item.color : 'text-gray-400 group-hover:text-green-500'} group-hover:scale-110`} />
                                <span className="flex-1">{item.name}</span>
                                {activeMenu === item.name && (
                                    <>
                                        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-green-500 to-green-600 rounded-r animate-slideInRight"></div>
                                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                    </>
                                )}
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer dengan efek lebih menarik */}
            <div className="mt-auto animate-fadeInUp animation-delay-500">
                <div className="group relative overflow-hidden bg-gradient-to-br from-green-500 to-green-600 p-5 rounded-2xl shadow-lg mb-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform -skew-x-12 group-hover:translate-x-full"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="relative">
                        <div className="text-white text-sm space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                <span>Please organize your roms!</span>
                            </div>
                            <div className="flex justify-center items-center p-2.5 bg-white/20 rounded-xl space-x-2 transition-all duration-300 hover:bg-white/30 hover:scale-105 active:scale-95 backdrop-blur-sm">
                                <FaPlus className="text-white animate-pulse group-hover:rotate-90 transition-transform duration-300" />
                                <span className="text-white font-semibold">Add rooms</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transition-all duration-300 hover:translate-x-2 text-center">
                    <span className="font-bold bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent block text-sm">
                        Hotel Grand Zuri Admin Dashboard
                    </span>
                    <p className="font-light text-gray-400 text-xs mt-2">
                        &copy; 2025 All Right Reserved
                    </p>
                </div>
            </div>
        </div>
    );
}