import { FaHome, FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 animate-fadeIn">
            <div className="text-center p-8 max-w-md">
                {/* Animasi Icon */}
                <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-yellow-100 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <FaExclamationTriangle className="text-8xl text-yellow-500 animate-bounce" />
                    </div>
                </div>

                {/* Teks 404 */}
                <h1 className="text-9xl font-bold text-gray-800 mb-4 animate-slideInLeft">
                    4
                    <span className="text-yellow-500 inline-block animate-pulse">0</span>
                    4
                </h1>
                
                {/* Pesan Error */}
                <h2 className="text-2xl font-semibold text-gray-700 mb-3 animate-slideInRight">
                    Oops! Halaman Tidak Ditemukan
                </h2>
                
                <p className="text-gray-500 mb-8 animate-fadeInUp">
                    Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
                    Periksa kembali URL Anda atau kembali ke dashboard.
                </p>

                {/* Tombol Kembali */}
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slideInUp"
                >
                    <FaHome className="text-xl" />
                    Kembali ke Dashboard
                </Link>

                {/* Footer Kecil */}
                <p className="mt-8 text-xs text-gray-400 animate-fadeInUp animation-delay-500">
                    Hotel Grand Zuri Admin Dashboard © 2025
                </p>
            </div>
        </div>
    );
}