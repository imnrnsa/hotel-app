import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaBed, FaStar, FaMapMarkerAlt, FaPhone, FaArrowRight, 
  FaWifi, FaUtensils, FaSwimmingPool, FaUsers, FaArrowUp, FaCheckCircle 
} from "react-icons/fa";

const roomTypes = [
  {
    id: 1,
    name: "Standard Room",
    price: "Rp 450.000",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=600&q=80",
    tag: "Pilihan Hemat",
    features: ["2 Single Bed nyaman", "Kamar Mandi Pribadi", "AC & Smart TV", "WiFi Kecepatan Tinggi"],
  },
  {
    id: 2,
    name: "Deluxe Room",
    price: "Rp 750.000",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
    tag: "Paling Populer",
    features: ["King Size Bed", "Balkon Pemandangan Kota", "Mini Bar Terisi", "Shower Mewah & Bathrobe"],
  },
  {
    id: 3,
    name: "Suite Room",
    price: "Rp 1.200.000",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80",
    tag: "Kemewahan Ekstra",
    features: ["Living Area Luas", "2 Kamar Tidur Terpisah", "Private Jacuzzi", "24/7 Butler Service"],
  },
  {
    id: 4,
    name: "Presidential Suite",
    price: "Rp 2.500.000",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80",
    tag: "Kemewahan Tertinggi",
    features: ["Panoramic View 360°", "Private Rooftop Pool", "Chef Kitchen Pribadi", "VIP Concierge 24/7"],
  },
];

const amenities = [
  { icon: FaWifi, name: "WiFi Ultra Cepat", desc: "Koneksi internet tanpa putus di seluruh area hotel." },
  { icon: FaUtensils, name: "Restoran 5 Bintang", desc: "Sajian kuliner mahakarya dari koki internasional." },
  { icon: FaSwimmingPool, name: "Infinity Pool", desc: "Kolam renang ukuran olimpiade di atas atap langit." },
  { icon: FaBed, name: "Layanan Kamar 24/7", desc: "Pemesanan hidangan dan kebutuhan kapan saja." },
];

export default function GuestLanding() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] font-sans antialiased text-[#2A221A] selection:bg-[#8d6b45] selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF9] via-[#FAF3E8] to-[#EFE2CE]/50 px-4 py-20 lg:py-32">
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#8d6b45]/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-amber-200/10 blur-[100px]" />
        
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#EAD6B8] bg-white/70 px-4 py-1.5 shadow-sm backdrop-blur-md animate-fade-in">
                <span className="text-sm">✨</span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8d6b45]">Oasis Kemewahan Modern</span>
              </div>
              <h1 className="text-4xl font-black leading-[1.15] tracking-tight text-[#1A1410] md:text-6xl">
                Simfoni Kenyamanan <br />
                <span className="bg-gradient-to-r from-[#8d6b45] to-[#B59469] bg-clip-text text-transparent">Yang Sempurna</span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-stone-600 md:text-lg">
                Hotel Grand Zuri memadukan keramahan kultur lokal dengan layanan standar internasional. Rasakan keanggunan desain interior premium dan ketenangan menginap yang tak tertandingi.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/login"
                  className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#8d6b45] to-[#735432] px-7 py-4 font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl active:scale-95"
                >
                  Pesan Kamar Sekarang 
                  <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                </Link>
                <button 
                  onClick={() => scrollToSection('kamar')}
                  className="rounded-2xl border-2 border-[#D9C5A3] bg-white px-7 py-4 font-bold text-[#735432] transition-all hover:bg-[#F9F4EB] hover:border-[#8d6b45]"
                >
                  Jelajahi Room Menu
                </button>
              </div>
            </div>
            
            {/* Hero Image Container */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                <div className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-[2.5rem] border-2 border-[#EAD6B8]/60" />
                <div className="relative h-[480px] overflow-hidden rounded-[2.5rem] shadow-2xl transition duration-700 hover:scale-[1.01]">
                  <img 
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80" 
                    alt="Hotel Grand Zuri Premium Lobby" 
                    className="h-full w-full object-cover transition duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md">
                    <p className="text-xs font-semibold tracking-wider uppercase opacity-80">Dumai, Riau</p>
                    <p className="text-lg font-black tracking-tight">★★★★★ Penghargaan Hotel Terbaik 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- AMENITIES SECTION --- */}
      <section id="fasilitas" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center space-y-2">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8d6b45]">Fasilitas Unggulan Resort</p>
            <h2 className="text-3xl font-black tracking-tight text-[#1A1410] md:text-4xl">Didesain Untuk Kenyamanan Mutlak</h2>
            <div className="mx-auto h-1 w-12 bg-[#8d6b45] mt-4 rounded-full" />
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {amenities.map((amenity) => (
              <div key={amenity.name} className="group rounded-3xl border border-[#EAD6B8]/60 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#8d6b45]/30">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FAF5EC] text-2xl text-[#8d6b45] transition duration-300 group-hover:bg-[#8d6b45] group-hover:text-white shadow-inner">
                  <amenity.icon />
                </div>
                <h3 className="text-lg font-bold text-[#1A1410] transition group-hover:text-[#8d6b45]">{amenity.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ROOM TYPES SECTION --- */}
      <section id="kamar" className="bg-gradient-to-b from-[#F7F2E7] to-[#FDFCF9] px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center space-y-2">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8d6b45]">Katalog Kamar Eksklusif</p>
            <h2 className="text-3xl font-black tracking-tight text-[#1A1410] md:text-4xl">Kamar Tematik Sentuhan Estetik</h2>
            <div className="mx-auto h-1 w-12 bg-[#8d6b45] mt-4 rounded-full" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {roomTypes.map((room) => (
              <div
                key={room.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#EAD6B8]/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#8d6b45]/30"
              >
                <div className="h-52 overflow-hidden relative">
                  <span className="absolute left-4 top-4 z-10 rounded-xl bg-white/90 border border-amber-100 px-3 py-1 text-[10px] font-black uppercase text-[#8d6b45] shadow-sm backdrop-blur-sm">
                    {room.tag}
                  </span>
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
                
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black tracking-tight text-[#1A1410] group-hover:text-[#8d6b45] transition-colors">{room.name}</h3>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="text-xl font-black text-[#8d6b45]">{room.price}</span>
                      <span className="text-[10px] text-stone-400 font-semibold uppercase">/ Malam</span>
                    </div>
                    <ul className="mt-5 space-y-2.5 border-t border-stone-100 pt-4 text-xs font-medium text-stone-500">
                      {room.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="text-[#8d6b45] text-xs">✔</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to="/login" 
                    className="block text-center mt-6 w-full rounded-xl bg-stone-900 py-3 text-xs font-bold text-white transition-all hover:bg-stone-800 shadow-sm group-hover:bg-[#8d6b45] active:scale-[0.98]"
                  >
                    Booking Sekarang
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROMO SECTION --- */}
      <section id="promo" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center space-y-2">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8d6b45]">Waktu Terbatas</p>
            <h2 className="text-3xl font-black tracking-tight text-[#1A1410] md:text-4xl">Penawaran Spesial Musim Ini</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#EAD6B8] bg-gradient-to-br from-[#FFFBF4] to-[#FAF2E5] p-8 transition-all hover:shadow-xl group">
              <div className="absolute right-0 bottom-0 text-9xl text-amber-900/5 font-black select-none translate-x-4 translate-y-4">20%</div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-xl text-white shadow-md">
                🎁
              </div>
              <h3 className="text-2xl font-black tracking-tight text-[#1A1410]">Early Bird Privileges</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-500 max-w-sm">Rencanakan liburan mewah Anda lebih awal. Dapatkan potongan harga 20% otomatis untuk pemesanan minimal 60 hari sebelum check-in.</p>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-700 bg-orange-50 px-3 py-1.5 rounded-xl w-max border border-orange-100">
                📅 Berlaku s/d 31 Juli 2026
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#EAD6B8] bg-gradient-to-br from-[#FFFBF4] to-[#FAF2E5] p-8 transition-all hover:shadow-xl group">
              <div className="absolute right-0 bottom-0 text-9xl text-amber-900/5 font-black select-none translate-x-4 translate-y-4">VIP</div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8d6b45] to-[#594025] text-xl text-white shadow-md">
                👑
              </div>
              <h3 className="text-2xl font-black tracking-tight text-[#1A1410]">Member Loyalty Rewards</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-500 max-w-sm">Dapatkan poin reward loyalitas yang melimpah dari setiap transaksi reservasi langsung Anda dan tukarkan dengan komplimen istimewa.</p>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8d6b45] bg-[#FAF5EB] px-3 py-1.5 rounded-xl w-max border border-[#EAD6B8]/60">
                💎 Eksklusif Aplikasi Member
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MEMBER SECTION --- */}
      <section id="member" className="bg-[#FAF6EE] px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#1A1410] to-[#362A1F] p-8 md:p-16 shadow-2xl text-white">
            <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-[#8d6b45]/20 blur-[80px]" />
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-amber-500/10 blur-[80px]" />
            
            <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="space-y-6 lg:col-span-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#b59469] to-[#8d6b45] text-2xl text-white shadow-lg">
                  <FaUsers />
                </div>
                <h2 className="text-3xl font-black tracking-tight md:text-4xl leading-tight">Bergabung Menjadi Member Privilege</h2>
                <p className="text-sm leading-relaxed text-stone-300 max-w-lg">
                  Buka pintu gerbang menuju fasilitas VIP, diskon harga kamar sepanjang tahun, serta layanan eksklusif tanpa biaya tambahan di setiap jaringan hotel kami.
                </p>
                
                {/* Tier Perks Badges */}
                <div className="grid gap-3 pt-2 text-xs font-bold sm:grid-cols-3">
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-sm">
                    <FaStar className="text-amber-500 text-sm flex-shrink-0" />
                    <span>Bronze: Diskon 5%</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-sm">
                    <FaStar className="text-slate-300 text-sm flex-shrink-0" />
                    <span>Silver: Diskon 15%</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-sm">
                    <FaStar className="text-yellow-400 text-sm flex-shrink-0" />
                    <span>Gold: Diskon 30%</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/login"
                    className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#b59469] to-[#8d6b45] px-7 py-4 font-bold text-white transition-all hover:brightness-110 shadow-lg"
                  >
                    Akses Dashboard Member 
                    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              
              <div className="lg:col-span-5 hidden lg:block">
                <div className="h-80 overflow-hidden rounded-[2rem] shadow-xl border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" 
                    alt="Grand Zuri Luxury Executive Lounge" 
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-[#EAD6B8]/60 bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5 space-y-4">
              <h3 className="text-xl font-black tracking-tight text-[#1A1410]">Hotel Grand Zuri</h3>
              <p className="text-xs leading-relaxed text-stone-500 max-w-sm">Mewujudkan esensi kenyamanan sejati dengan keselarasan desain modern premium dan kehangatan layanan bintang lima otentik.</p>
            </div>
            
            <div className="md:col-span-4 space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-400">Hubungi Kami</p>
              <div className="space-y-2.5 text-xs font-semibold text-stone-600">
                <p className="flex items-center gap-3">
                  <FaPhone className="text-[#8d6b45]" /> +62 812-3456-7890
                </p>
                <p className="flex items-start gap-3 leading-relaxed">
                  <FaMapMarkerAlt className="text-[#8d6b45] mt-0.5 flex-shrink-0" /> 
                  <span>Jl. Jendral Sudirman No. 31, <br />Kota Dumai, Riau, Indonesia</span>
                </p>
              </div>
            </div>
            
            <div className="md:col-span-3 space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-400">Navigasi Cepat</p>
              <div className="flex flex-col gap-2.5 text-xs font-bold text-stone-500">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-left hover:text-[#8d6b45] transition-colors">↑ Kembali Ke Atas</button>
                <button onClick={() => scrollToSection('kamar')} className="text-left hover:text-[#8d6b45] transition-colors">Pesan Pilihan Kamar</button>
                <button onClick={() => scrollToSection('member')} className="text-left hover:text-[#8d6b45] transition-colors">Program Akses VIP</button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 border-t border-stone-100 pt-8 text-center text-xs font-medium text-stone-400">
            <p>© 2026 Hotel Grand Zuri. Seluruh Hak Cipta Dilindungi Undang-Undang.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}