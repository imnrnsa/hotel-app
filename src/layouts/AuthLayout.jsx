import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div 
            className="min-h-screen bg-gradient-to-br from-[#0a5f7f] via-[#1b8fa8] to-[#2eb8d9] flex items-center justify-center p-4 relative overflow-hidden"
            style={{
                backgroundImage: 'url("/resort-bg.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            {/* Dark Overlay untuk readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#0d7a99] rounded-full blur-3xl opacity-15" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2eb8d9] rounded-full blur-3xl opacity-15" />
            
            {/* Pool Light Effect */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-[#00d4ff] rounded-full blur-2xl opacity-5" />

            <div className="relative z-10 w-full max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Info */}
                    <div className="text-white lg:block hidden">
                        <div className="mb-8">
                            <h1 className="text-5xl font-black mb-4 drop-shadow-lg">
                                Hotel <span className="text-[#00d4ff]">Grand Zuri</span>
                            </h1>
                            <p className="text-xl text-[#b0e0f0] leading-relaxed drop-shadow-md">
                                Rasakan pengalaman menginap mewah dengan pemandangan alam yang menakjubkan dan pelayanan kelas dunia.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 bg-white bg-opacity-5 backdrop-blur-sm p-4 rounded-xl border border-white border-opacity-10">
                                <div className="w-12 h-12 rounded-xl bg-[#00d4ff] bg-opacity-30 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-2xl">🏝️</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 drop-shadow-md">Lokasi Eksotis</h3>
                                    <p className="text-[#b0e0f0] text-sm">Terletak di tepi pantai dengan pemandangan laut yang memukau</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 bg-white bg-opacity-5 backdrop-blur-sm p-4 rounded-xl border border-white border-opacity-10">
                                <div className="w-12 h-12 rounded-xl bg-[#00d4ff] bg-opacity-30 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-2xl">⭐</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 drop-shadow-md">Fasilitas Premium</h3>
                                    <p className="text-[#b0e0f0] text-sm">Kolam renang infinity, spa, restoran bintang lima, dan banyak lagi</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 bg-white bg-opacity-5 backdrop-blur-sm p-4 rounded-xl border border-white border-opacity-10">
                                <div className="w-12 h-12 rounded-xl bg-[#00d4ff] bg-opacity-30 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 drop-shadow-md">Member Loyalty</h3>
                                    <p className="text-[#b0e0f0] text-sm">Kumpulkan poin dan nikmati diskon eksklusif setiap kunjungan</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-white bg-opacity-95 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-[#00d4ff] border-opacity-20">
                        <div className="mb-8">
                            <h2 className="text-3xl font-black text-[#0a5f7f] mb-2">Selamat Datang</h2>
                            <p className="text-[#666] text-sm">Masuk ke akun Anda untuk mulai menginap</p>
                        </div>

                        <Outlet />

                        <p className="text-center text-xs text-[#999] mt-8 pt-6 border-t border-[#e0e0e0]">
                            © 2026 Hotel Grand Zuri. Semua hak dilindungi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
