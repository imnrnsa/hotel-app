import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-[#052e3c]"
      style={{
        backgroundImage: 'url("/resort-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Premium Dark Gradient Overlay untuk kedalaman visual & keterbacaan teks */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#041e26]/95 via-[#0a4255]/70 to-black/40" />
      
      {/* Backdrop Glass Overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />
      
      {/* Modern Glowing Geometric Elements */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#00d4ff] to-[#1b8fa8] rounded-full blur-[140px] opacity-20 animate-pulse duration-[8000ms]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#2eb8d9] to-transparent rounded-full blur-[120px] opacity-15" />

      <div className="relative z-10 w-full max-w-6xl my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side - Luxury Brand Showcase */}
          <div className="text-white lg:col-span-7 lg:block hidden pr-8">
            <div className="mb-10 space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#00d4ff] bg-[#00d4ff]/10 px-4 py-1.5 rounded-full inline-block border border-[#00d4ff]/20">
                Luxury Hotel & Resort
              </span>
              <h1 className="text-6xl font-black tracking-tight leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                Grand Zuri
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-[#00d4ff] to-transparent rounded-full mt-4" />
              <p className="text-lg text-slate-200/90 leading-relaxed pt-2 max-w-xl drop-shadow-sm">
                Temukan harmoni sempurna antara kemewahan modern, keindahan alam yang spektakuler, dan pelayanan tulus langsung dari hati.
              </p>
            </div>

            {/* Feature Cards with Glassmorphism */}
            <div className="space-y-4 max-w-xl">
              {[
                { icon: "🏝️", title: "Destinasi Eksotis", desc: "Terletak strategis di kawasan prima dengan akses pemandangan alam memukau." },
                { icon: "✨", title: "Fasilitas Kelas Dunia", desc: "Nikmati infinity pool, fine dining restoran, dan layanan spa eksklusif." },
                { icon: "👑", title: "Privilese Istimewa", desc: "Akses keuntungan khusus, peningkatan kamar, dan poin reward loyalitas." }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-5 bg-white/[0.04] backdrop-blur-md p-4 rounded-2xl border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.07] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#1b8fa8]/10 flex items-center justify-center flex-shrink-0 border border-[#00d4ff]/30 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white tracking-wide">{item.title}</h3>
                    <p className="text-slate-300/80 text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Interactive Authentication Card */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto">
            <div className="bg-white/[0.97] backdrop-blur-xl p-8 lg:p-10 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-white/20 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
              
              {/* Subtle accent line on top of card */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0a5f7f] via-[#00d4ff] to-[#2eb8d9]" />
              
              <div>
                {/* Header inside the form */}
                <div className="mb-8">
                  {/* Small brand element for mobile view */}
                  <span className="lg:hidden text-xs font-bold uppercase tracking-[0.2em] text-[#1b8fa8] block mb-1">
                    Hotel Grand Zuri
                  </span>
                  <h2 className="text-3xl font-black text-[#052e3c] tracking-tight">Selamat Datang</h2>
                  <p className="text-slate-500 text-sm mt-1 font-medium">Masuk untuk mengakses layanan akomodasi Anda</p>
                </div>

                {/* Sub-routes content container */}
                <div className="py-2">
                  <Outlet />
                </div>
              </div>

              {/* Sophisticated Footer */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-medium text-slate-400">
                <span>© 2026 Hotel Grand Zuri</span>
                <div className="flex gap-3">
                  <a href="#" className="hover:text-[#1b8fa8] transition-colors">Bantuan</a>
                  <span>•</span>
                  <a href="#" className="hover:text-[#1b8fa8] transition-colors">Privasi</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}