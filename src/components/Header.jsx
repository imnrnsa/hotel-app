import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";
import { useState } from "react";

export default function Header() {
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    return (
        <div className="flex justify-between items-center p-5 bg-white shadow-xl rounded-2xl mb-6 animate-slideInDown border border-gray-50">
            {/* Search Bar - Lebih menarik */}
            <div className="relative w-full max-w-lg group">
                <div className={`absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl opacity-0 transition-opacity duration-500 ${isSearchFocused ? 'opacity-20' : 'group-hover:opacity-10'}`}></div>
                <input
                    className="border-2 border-gray-100 p-3.5 pr-12 bg-gray-50 w-full max-w-lg rounded-xl outline-none transition-all duration-300 focus:border-green-500 focus:shadow-lg focus:bg-white relative"
                    type="text"
                    placeholder="Search rooms, bookings, customers..."
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                />
                <FaSearch className={`absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer transition-all duration-300 ${isSearchFocused ? 'text-green-500 scale-110' : 'text-gray-400 group-hover:text-green-500 group-hover:scale-110'}`} />
                
                {/* Search Shortcut Hint */}
                <div className="absolute right-14 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded hidden md:block">
                    ⌘K
                </div>
            </div>

            {/* Icon & Profile Section */}
            <div className="flex items-center space-x-3">
                {/* Notification Icon dengan badge animasi */}
                <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                    <div className="relative p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl text-blue-600 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg group-hover:from-blue-500 group-hover:to-blue-600 group-hover:text-white">
                        <FaBell className="transition-all duration-300 group-hover:animate-pulse" />
                        <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full px-1.5 py-0.5 text-[10px] text-white font-bold animate-pulse shadow-lg">
                            50
                        </span>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-800 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap">
                        Notifications
                    </div>
                </div>

                {/* Chart Icon dengan efek rotasi */}
                <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                    <div className="relative p-3 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg group-hover:from-green-500 group-hover:to-green-600">
                        <FcAreaChart className="text-xl transition-all duration-300 group-hover:text-white" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-800 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap">
                        Analytics
                    </div>
                </div>

                {/* Settings Icon dengan efek rotasi negatif */}
                <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                    <div className="relative p-3 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl text-red-500 cursor-pointer transition-all duration-300 hover:scale-110 hover:-rotate-12 hover:shadow-lg group-hover:from-red-500 group-hover:to-red-600 group-hover:text-white">
                        <SlSettings className="transition-all duration-300 group-hover:animate-spin" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-800 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap">
                        Settings
                    </div>
                </div>

                {/* Profile Section dengan efek lebih mewah */}
                <div className="group relative">
                    <div className="flex items-center space-x-3 border-l pl-4 border-gray-200 cursor-pointer">
                        <div className="text-right">
                            <p className="text-xs text-gray-400">Welcome back,</p>
                            <span className="text-sm text-gray-700 font-medium group-hover:text-green-600 transition-colors duration-300">
                                Nur Annisa<b className="text-green-600"></b>
                            </span>
                            <p className="text-[10px] text-gray-400">Administrator</p>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIe3VuOA6oMIqC9QIR6mkvfG9stciQXtOZ4A&s"
                                className="w-12 h-12 rounded-full border-3 border-green-500 cursor-pointer transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl relative"
                            />
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                        </div>
                    </div>
                    
                    {/* Dropdown Menu (Hidden by default, muncul saat hover) */}
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 z-50">
                        <div className="p-2">
                            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors">
                                👤 My Profile
                            </button>
                            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors">
                                ⚙️ Account Settings
                            </button>
                            <hr className="my-1" />
                            <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                🚪 Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}