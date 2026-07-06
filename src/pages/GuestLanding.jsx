import { Link } from "react-router-dom";
import { FaBed, FaStar, FaMapMarkerAlt, FaPhone, FaArrowRight, FaWifi, FaUtensils, FaSwimmingPool, FaUsers } from "react-icons/fa";

const roomTypes = [
  {
    id: 1,
    name: "Standard Room",
    price: "Rp 450.000",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=600&q=80",
    features: ["2 Tempat Tidur", "Kamar Mandi Pribadi", "AC", "WiFi Gratis"],
  },
  {
    id: 2,
    name: "Deluxe Room",
    price: "Rp 750.000",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
    features: ["King Size Bed", "Balkon", "Mini Bar", "Shower Mewah"],
  },
  {
    id: 3,
    name: "Suite Room",
    price: "Rp 1.200.000",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80",
    features: ["Living Area", "2 Kamar Tidur", "Jacuzzi", "Butler Service"],
  },
  {
    id: 4,
    name: "Presidential Suite",
    price: "Rp 2.500.000",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80",
    features: ["Panoramic View", "Private Pool", "Chef Kitchen", "Concierge 24/7"],
  },
];

const amenities = [
  { icon: FaWifi, name: "WiFi Gratis", desc: "Akses internet cepat di seluruh hotel" },
  { icon: FaUtensils, name: "Restoran 5 Bintang", desc: "Hidangan internasional dan lokal" },
  { icon: FaSwimmingPool, name: "Kolam Renang", desc: "Olympic-sized pool dengan pemandangan" },
  { icon: FaBed, name: "Layanan Kamar 24 Jam", desc: "Pesan makanan kapan saja" },
];

export default function GuestLanding() {
  // Fungsi untuk smooth scroll ke section target
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen scroll-smooth bg-[#fffdfa]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#fff7ed] via-[#fef3e2] to-[#f8e8d0] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#fff4e6] px-4 py-2">
                <span className="text-lg">⭐</span>
                <span className="text-sm font-semibold text-[#8d6b45]">Kemewahan di Setiap Sudut</span>
              </div>
              <h1 className="mt-4 text-4xl font-black leading-tight text-[#1a1410] md:text-6xl">
                Pengalaman Menginap yang Tak Terlupakan
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#5f5f5f]">
                Hotel Grand Zuri menawarkan kemewahan kelas dunia dengan pelayanan terbaik. Nikmati kenyamanan premium dan pengalaman menginap yang berkesan bersama kami.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#8d6b45] px-6 py-4 font-semibold text-white transition hover:bg-[#7a5d39] shadow-md hover:shadow-lg"
                >
                  Pesan Sekarang <FaArrowRight />
                </Link>
                <button 
                  onClick={() => scrollToSection('kamar')}
                  className="rounded-lg border-2 border-[#d9c5a3] bg-white px-6 py-4 font-semibold text-[#7a5d39] transition hover:bg-[#f8f0e0]"
                >
                  Lihat Kamar
                </button>
              </div>
            </div>
            {/* Main Hotel Image Hero */}
            <div className="relative h-[450px] overflow-hidden rounded-3xl shadow-2xl transition duration-500 hover:scale-[1.01]">
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80" 
                alt="Hotel Grand Zuri Exterior" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="fasilitas" className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8d6b45]">Fasilitas Unggulan</p>
            <h2 className="mt-3 text-4xl font-black text-[#1a1410]">Nikmati Kemudahan Tanpa Batas</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {amenities.map((amenity) => (
              <div key={amenity.name} className="rounded-2xl border border-[#ead6b8] bg-[#fffaf3] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5e8d6] text-2xl text-[#8d6b45]">
                  <amenity.icon />
                </div>
                <h3 className="font-bold text-[#1a1410]">{amenity.name}</h3>
                <p className="mt-2 text-sm text-[#5f5f5f]">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section id="menu" className="bg-[#f8f1de] px-4 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8d6b45]">Menu Kamar</p>
            <h2 className="mt-3 text-4xl font-black text-[#1a1410]">Kamar-Kamar Kami yang Elegan</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {roomTypes.map((room) => (
              <div
                key={room.id}
                className="group overflow-hidden rounded-2xl border border-[#ead6b8] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Room Image */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1a1410]">{room.name}</h3>
                  <p className="mt-2 text-2xl font-black text-[#8d6b45]">{room.price}</p>
                  <ul className="mt-4 space-y-2 text-sm text-[#5f5f5f]">
                    {room.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="text-[#c99c5e]">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/login" className="block text-center mt-5 w-full rounded-lg bg-[#ff9f43] py-2.5 font-semibold text-white transition hover:bg-[#ff8800]">
                    Pesan Kamar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section id="promo" className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8d6b45]">Penawaran Spesial</p>
            <h2 className="mt-3 text-4xl font-black text-[#1a1410]">Promo Terbatas untuk Anda</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#ead6b8] bg-gradient-to-br from-[#fff7ed] to-[#f8e8d0] p-8 transition hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff9f43] text-2xl text-white">
                🎁
              </div>
              <h3 className="text-2xl font-bold text-[#1a1410]">Early Bird Discount</h3>
              <p className="mt-2 text-[#5f5f5f]">Dapatkan diskon 20% untuk pemesanan 2 bulan sebelumnya.</p>
              <p className="mt-4 text-lg font-black text-[#8d6b45]">Berlaku hingga 31 Juli 2026</p>
            </div>
            <div className="rounded-2xl border border-[#ead6b8] bg-gradient-to-br from-[#fff7ed] to-[#f8e8d0] p-8 transition hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c99c5e] text-2xl text-white">
                👑
              </div>
              <h3 className="text-2xl font-bold text-[#1a1410]">Member Loyalty Program</h3>
              <p className="mt-2 text-[#5f5f5f]">Jadilah member dan dapatkan poin setiap pemesanan.</p>
              <p className="mt-4 text-lg font-black text-[#8d6b45]">Tukarkan dengan voucher menarik</p>
            </div>
          </div>
        </div>
      </section>

      {/* Member Section */}
      <section id="member" className="bg-[#f8f1de] px-4 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-gradient-to-br from-[#fff7ed] to-[#f5e0cb] p-8 md:p-16 shadow-inner">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8d6b45] text-2xl text-white">
                  <FaUsers />
                </div>
                <h2 className="text-4xl font-black text-[#1a1410]">Bergabunglah dengan Program Member</h2>
                <p className="mt-4 text-lg text-[#5f5f5f]">
                  Dapatkan keuntungan eksklusif, diskon khusus, dan akses priority setiap kali Anda menginap.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <FaStar className="text-[#ff9f43]" />
                    <span className="text-[#5f5f5f]">Bronze: Diskon 5% untuk setiap pemesanan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaStar className="text-[#c0c0c0]" />
                    <span className="text-[#5f5f5f]">Silver: Diskon 15% + late checkout</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaStar className="text-[#ffd700]" />
                    <span className="text-[#5f5f5f]">Gold: Diskon 30% + free breakfast</span>
                  </div>
                </div>
                <Link
                  to="/login"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#8d6b45] px-6 py-4 font-semibold text-white transition hover:bg-[#7a5d39]"
                >
                  Daftar Member Sekarang <FaArrowRight />
                </Link>
              </div>
              {/* Member Section Image */}
              <div className="relative h-80 overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" 
                  alt="Grand Zuri Luxury Lounge" 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#ead6b8] bg-white px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-bold text-[#1a1410]">Hotel Grand Zuri</h3>
              <p className="mt-2 text-sm text-[#5f5f5f]">Kemewahan dan kenyamanan di setiap kunjungan Anda.</p>
            </div>
            <div>
              <p className="font-bold text-[#1a1410]">Kontak</p>
              <div className="mt-2 space-y-2 text-sm text-[#5f5f5f]">
                <p className="flex items-center gap-2">
                  <FaPhone /> +62 812-3456-7890
                </p>
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt /> Jl. Kemewahan No. 123, Jakarta
                </p>
              </div>
            </div>
            <div>
              <p className="font-bold text-[#1a1410]">Link Cepat</p>
              <div className="mt-2 flex flex-col gap-1 text-sm text-[#5f5f5f]">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-left hover:text-[#8d6b45] transition">Beranda</button>
                <button onClick={() => scrollToSection('menu')} className="text-left hover:text-[#8d6b45] transition">Pesan Kamar</button>
                <button onClick={() => scrollToSection('member')} className="text-left hover:text-[#8d6b45] transition">Program Member</button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-[#ead6b8] pt-8 text-center text-sm text-[#5f5f5f]">
            <p>© 2026 Hotel Grand Zuri. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}