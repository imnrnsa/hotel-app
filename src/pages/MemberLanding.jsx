import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaCrown, FaAward, FaGift, FaCoins, FaTicketAlt, 
  FaQrcode, FaArrowRight, FaCheckCircle, FaPercentage, FaSignOutAlt, FaInfoCircle
} from "react-icons/fa";
import { getAuthSession, isAuthenticated } from "../lib/utils";

const AVAILABLE_VOUCHERS = [
  { id: "v1", title: "Free Breakfast Buffet", pointsCost: 200, category: "F&B", desc: "Nikmati sarapan hidangan internasional gratis untuk 2 orang.", tagColor: "bg-orange-50 text-orange-700 border-orange-100" },
  { id: "v2", title: "Diskon Kamar Rp 150.000", pointsCost: 450, category: "Kamar", desc: "Potongan langsung tanpa minimum transaksi reservasi.", tagColor: "bg-blue-50 text-blue-700 border-blue-100" },
  { id: "v3", title: "Free Spa Treatment 60 Mins", pointsCost: 700, category: "Fasilitas", desc: "Perawatan tubuh & relaksasi premium di Grand Zuri Spa.", tagColor: "bg-purple-50 text-purple-700 border-purple-100" },
];

export default function MemberDashboard() {
  const session = getAuthSession();
  const navigate = useNavigate();

  const [userPoints, setUserPoints] = useState(1250); 
  const [redeemCode, setRedeemCode] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [myVouchers, setMyVouchers] = useState([
    { id: "init-1", name: "Voucher Welcome Guest", type: "Sistem" }
  ]);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    }
  }, [navigate]);
  
  const getTierDetails = (points) => {
    if (points <= 1000) {
      return {
        name: "Bronze",
        color: "from-[#b57c43] via-[#cd955a] to-[#a0662e]",
        badgeBg: "bg-amber-500/10 text-amber-700",
        bgLight: "bg-gradient-to-br from-[#fffaf5] to-[#fbf4eb]",
        textColor: "text-amber-900",
        borderColor: "border-amber-200/60",
        discount: 5,
        nextTier: "Silver",
        pointsNeeded: 1001 - points,
        maxPoints: 1000,
        minPoints: 0,
        perks: ["Diskon kamar eksklusif 5%", "Akses Standard WiFi Berkecepatan Tinggi", "Kumpulkan poin dasar dari setiap transaksi"]
      };
    } else if (points <= 2000) {
      return {
        name: "Silver",
        color: "from-[#9ca3af] via-[#e5e7eb] to-[#4b5563]",
        badgeBg: "bg-slate-500/10 text-slate-700",
        bgLight: "bg-gradient-to-br from-slate-50 via-[#f8fafc] to-slate-100/50",
        textColor: "text-slate-900",
        borderColor: "border-slate-300/50",
        discount: 15,
        nextTier: "Gold",
        pointsNeeded: 2001 - points,
        maxPoints: 2000,
        minPoints: 1001,
        perks: ["Diskon kamar eksklusif 15%", "Prioritas Antrean Check-in & Check-out", "Welcome Drink premium saat kedatangan", "Bonus Poin Akumulasi Frekuensi 1.2x"]
      };
    } else {
      return {
        name: "Gold",
        color: "from-[#d4af37] via-[#f3e5ab] to-[#aa7c11]",
        badgeBg: "bg-yellow-500/10 text-yellow-700",
        bgLight: "bg-gradient-to-br from-[#fffdf5] via-[#fefch] to-[#fbf7e3]",
        textColor: "text-yellow-900",
        borderColor: "border-yellow-300/40",
        discount: 30,
        nextTier: "Maksimal",
        pointsNeeded: 0,
        maxPoints: 3000,
        minPoints: 2001,
        perks: ["Diskon kamar eksklusif 30%", "Late Check-out dijamin s/d jam 15.00", "Free Room Upgrade otomatis (jika tersedia)", "Layanan Prioritas Butler & Tamu VIP", "Bonus Poin Akumulasi Frekuensi 1.5x"]
      };
    }
  };

  const tier = getTierDetails(userPoints);
  const progressPercent = Math.min(((userPoints - tier.minPoints) / (tier.maxPoints - tier.minPoints)) * 100, 100);

  const handleExchangeVoucher = (voucher) => {
    if (userPoints < voucher.pointsCost) {
      setErrorMessage(`Poin tidak mencukupi untuk mengklaim ${voucher.title}`);
      setTimeout(() => setErrorMessage(""), 4000);
      return;
    }
    setUserPoints(prev => prev - voucher.pointsCost);
    setMyVouchers(prev => [...prev, { id: Date.now().toString(), name: voucher.title, type: voucher.category }]);
    setSuccessMessage(`Sukses menukar! ${voucher.title} telah masuk ke dompet Anda.`);
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  const handleRedeemCodeSubmit = (e) => {
    preventDefault();
    if (!redeemCode.trim()) return;

    if (redeemCode.toUpperCase() === "ZURISTAY") {
      setUserPoints(prev => prev + 300);
      setSuccessMessage("Selamat! Kode 'ZURISTAY' berhasil diklaim. +300 Poin ditambahkan.");
      setRedeemCode("");
    } else {
      setErrorMessage("Kode promo tidak valid atau kuota telah habis.");
    }
    setTimeout(() => { setSuccessMessage(""); setErrorMessage(""); }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF7] pb-24 pt-8 font-sans antialiased text-[#2E251B]">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        
        {/* --- HEADER DASHBOARD --- */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#A0825B]">Premium Privilege</span>
            <h1 className="mt-1 text-3xl font-black tracking-tight text-[#1A1410] md:text-4xl">Ruang Member Eksklusif</h1>
            <p className="text-sm text-stone-500 mt-1">
              Selamat datang kembali, Tuan/Nyonya <span className="font-bold text-[#8D6B45]">{session?.name || "Member Grand Zuri"}</span>
            </p>
          </div>
          
          {/* Widget Poin Ringkas */}
          <div className="flex items-center gap-4 rounded-2xl border border-[#EAD6B8]/80 bg-white p-4 shadow-sm backdrop-blur-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#b98d49] to-[#855f32] text-white shadow-md">
              <FaCoins className="text-xl animate-pulse" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Saldo Poin Anda</p>
              <p className="text-2xl font-black tracking-tight text-stone-800">{userPoints.toLocaleString()} <span className="text-xs font-medium text-stone-500">Pts</span></p>
            </div>
          </div>
        </div>

        {/* Notifikasi Pop Up Alerts */}
        {successMessage && (
          <div className="mb-6 rounded-2xl bg-emerald-50 border border-emerald-200/70 p-4 text-sm font-semibold text-emerald-800 flex items-center gap-3 shadow-sm animate-fade-in">
            <FaCheckCircle className="text-emerald-500 text-lg flex-shrink-0" /> {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mb-6 rounded-2xl bg-rose-50 border border-rose-200/70 p-4 text-sm font-semibold text-rose-800 flex items-center gap-3 shadow-sm">
            <FaInfoCircle className="text-rose-500 text-lg flex-shrink-0" /> {errorMessage}
          </div>
        )}

        {/* --- GRID UTAMA --- */}
        <div className="grid gap-8 lg:grid-cols-3">
          
          {/* KOLOM KIRI (LEBAR): KARTU LOYALITAS & PENAWARAN */}
          <div className="space-y-8 lg:col-span-2">
            
            {/* KARTU MEMBER UTAMA */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#EAD6B8] bg-white p-6 shadow-md md:p-8">
              {/* Dekorasi Aksen Pola Latar Belakang */}
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-[#b98d49]/10 to-transparent blur-2xl" />
              
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between relative z-10">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8D6B45]">Status Tingkat Akun</p>
                  <div className="mt-2 flex items-center gap-3">
                    <span className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${tier.color} px-5 py-2 text-base font-black text-white shadow-md transform hover:scale-[1.02] transition-all`}>
                      <FaCrown className="drop-shadow" /> Member {tier.name}
                    </span>
                  </div>
                </div>
                
                {/* Aturan Transaksi Cepat */}
                <div className="rounded-2xl bg-[#F6F9F9] border border-stone-200/60 p-3.5 text-xs text-stone-600 max-w-xs shadow-inner">
                  <span className="font-bold text-stone-800 block mb-1">⚡ Loyalitas Frekuensi Kunjungan:</span> 
                  Reservasi kembali dalam 30 hari untuk melipatgandakan perolehan poin dasar hingga <span className="font-bold text-[#8D6B45]">1.5x lipat</span>!
                </div>
              </div>

              {/* SLICER PROGRESS POIN */}
              <div className="mt-10 relative z-10">
                <div className="mb-2.5 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-stone-400">Kemajuan Kualifikasi Level</span>
                  <span className="text-stone-800 bg-stone-100 px-2.5 py-1 rounded-full">{userPoints} / {tier.maxPoints} Pts</span>
                </div>
                <div className="h-3 w-full rounded-full bg-stone-100 p-0.5 shadow-inner">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${tier.color} transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) shadow-sm`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="mt-3.5 flex justify-between text-xs font-semibold">
                  <span className="text-stone-400">Tingkat {tier.name}</span>
                  {tier.pointsNeeded > 0 ? (
                    <span className="text-[#8D6B45] bg-[#FFF9F2] px-3 py-1 rounded-full border border-[#F3E2CC]/60 shadow-sm">
                      Butuh <span className="font-bold">{tier.pointsNeeded}</span> poin lagi menuju tier <span className="font-bold">{tier.nextTier}</span>
                    </span>
                  ) : (
                    <span className="text-yellow-600 font-bold bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200/50 shadow-sm animate-bounce">
                      Elite Tier Tertinggi Tercapai! 👑
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* PRIVILEGE TERSEDIA */}
            <div className={`rounded-[2.5rem] border ${tier.borderColor} ${tier.bgLight} p-6 shadow-sm md:p-8 transition-all`}>
              <div className="flex items-center justify-between border-b border-stone-200/60 pb-5">
                <div>
                  <h2 className={`text-xl font-black ${tier.textColor}`}>Keuntungan Eksklusif {tier.name}</h2>
                  <p className="text-xs text-stone-500 mt-0.5">Fasilitas khusus yang otomatis melekat pada profil Anda</p>
                </div>
                <div className="flex items-center gap-1 rounded-2xl bg-white border border-stone-200/60 px-4 py-2 font-black text-rose-600 shadow-sm">
                  <FaPercentage className="text-sm" /> <span className="text-xl tracking-tight">{tier.discount}% Diskon</span>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {tier.perks.map((perk, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-2xl bg-white p-4 border border-stone-200/40 shadow-sm transition hover:shadow-md">
                    <FaCheckCircle className="mt-0.5 text-emerald-600 flex-shrink-0 text-base" />
                    <span className="text-xs font-bold text-stone-700 leading-relaxed">{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* REWARD EXCHANGER */}
            <div>
              <div className="mb-4">
                <h2 className="text-xl font-black tracking-tight text-[#1A1410]">Tukarkan Reward Poin</h2>
                <p className="text-xs text-stone-400">Pilih dari katalog voucer layanan premium hotel di bawah ini</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {AVAILABLE_VOUCHERS.map((voucher) => (
                  <div key={voucher.id} className="flex flex-col justify-between rounded-2xl border border-[#EAD6B8]/70 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#8D6B45]/40 group">
                    <div>
                      <span className={`inline-block rounded-lg px-2.5 py-1 text-[10px] font-bold uppercase border tracking-wider ${voucher.tagColor}`}>{voucher.category}</span>
                      <h3 className="mt-3 font-black text-stone-800 text-sm leading-snug group-hover:text-[#8D6B45] transition-colors">{voucher.title}</h3>
                      <p className="mt-1.5 text-xs text-stone-400 leading-normal line-clamp-2">{voucher.desc}</p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-stone-100">
                      <div className="mb-3 flex items-center justify-between text-xs">
                        <span className="text-stone-400 font-medium">Biaya Penukaran:</span>
                        <span className="font-black text-amber-600">{voucher.pointsCost} Pts</span>
                      </div>
                      <button
                        onClick={() => handleExchangeVoucher(voucher)}
                        className="w-full rounded-xl bg-gradient-to-r from-[#b98d49] to-[#855f32] py-2.5 text-center text-xs font-bold text-white transition shadow-sm hover:brightness-110 active:scale-[0.98]"
                      >
                        Tukarkan Sekarang
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* KOLOM KANAN (KECIL): UTILITIES */}
          <div className="space-y-8">
            
            {/* KODE REDEEM HADIAH */}
            <div className="rounded-[2.5rem] border border-[#EAD6B8] bg-white p-6 shadow-md relative overflow-hidden">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-[#8D6B45] border border-amber-100">
                  <FaQrcode className="text-xl" />
                </div>
                <div>
                  <h3 className="font-black tracking-tight text-stone-800">Klaim Kode Promo</h3>
                  <p className="text-xs text-stone-400">Punya voucer? Klaim poin Anda disini</p>
                </div>
              </div>
              
              <form onSubmit={handleRedeemCodeSubmit} className="mt-6 space-y-3">
                <input
                  type="text"
                  placeholder="Contoh: ZURISTAY"
                  value={redeemCode}
                  onChange={(e) => setRedeemCode(e.target.value)}
                  className="w-full rounded-xl border border-stone-200 px-4 py-3 text-center text-sm font-black uppercase tracking-widest text-stone-700 placeholder-stone-300 focus:border-[#8D6B45] focus:outline-none focus:ring-4 focus:ring-[#8D6B45]/10 transition-all bg-stone-50/50"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-stone-900 py-3 text-center text-xs font-bold text-white transition hover:bg-stone-800 shadow-sm active:scale-[0.98]"
                >
                  Klaim Bonus Poin
                </button>
              </form>
            </div>

            {/* DOMPET VOUCHER AKUN */}
            <div className="rounded-[2.5rem] border border-[#EAD6B8] bg-white p-6 shadow-md">
              <div className="flex items-center gap-4 border-b border-stone-100 pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 border border-orange-100">
                  <FaTicketAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="font-black tracking-tight text-stone-800">Dompet Voucer</h3>
                  <p className="text-xs text-stone-400">Daftar voucer aktif milik Anda</p>
                </div>
              </div>

              <div className="mt-4 space-y-2.5 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin">
                {myVouchers.map((voucher) => (
                  <div key={voucher.id} className="flex items-center justify-between gap-3 rounded-xl border border-dashed border-stone-200 bg-stone-50/70 p-3.5 transition hover:bg-stone-50">
                    <div className="flex items-center gap-2.5">
                      <div className="h-2 w-2 rounded-full bg-[#8D6B45] shadow-sm animate-pulse" />
                      <span className="text-xs font-bold text-stone-700">{voucher.name}</span>
                    </div>
                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-white border border-stone-200 text-stone-400 uppercase tracking-wide">{voucher.type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* NAVIGATION ACTIONS CONTAINER */}
            <div className="space-y-3">
              <Link 
                to="/"
                className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-stone-800 to-stone-950 p-4 font-bold text-white shadow-md transition-all duration-300 hover:translate-x-1 hover:shadow-lg"
              >
                <span className="text-xs tracking-wide">Kembali ke Beranda Utama</span>
                <FaArrowRight className="text-xs text-amber-400" />
              </Link>
              
              <Link 
                to="/login"
                className="flex items-center justify-between rounded-2xl bg-white border border-rose-100 p-4 font-bold text-rose-700 shadow-sm transition-all duration-300 hover:bg-rose-50/50"
              >
                <span className="text-xs tracking-wide">Keluar dari Sesi Member</span>
                <FaSignOutAlt className="text-xs text-rose-400" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}