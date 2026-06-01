const products = [
    {
        id: 1,
        category: 'Premium',
        title: 'Suite Room',
        description: 'Kamar suite mewah dengan pemandangan spektakuler, furnitur premium, dan fasilitas lengkap untuk kenyamanan maksimal.',
        price: 'Rp 1.500.000',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 2,
        category: 'Standard',
        title: 'Deluxe Room',
        description: 'Kamar deluxe nyaman dengan desain modern, tempat tidur empuk, dan kamar mandi mewah yang sempurna untuk menginap.',
        price: 'Rp 800.000',
        image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80'
    }
];

const tableRows = [
    { id: 1, name: 'Deluxe Room', category: 'Standard', price: 'Rp 800.000' },
    { id: 2, name: 'Suite Room', category: 'Premium', price: 'Rp 1.500.000' },
    { id: 3, name: 'Ocean View Room', category: 'Luxury', price: 'Rp 2.500.000' }
];

export default function Component() {
    return (
        <div className="space-y-8">
            <div className="rounded-3xl bg-[#f8eed1] border border-[#e6cdb5] p-8 shadow-sm">
                <div className="flex flex-col gap-3">
                    <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-[#7c5b43] mb-1">Components</p>
                        <h1 className="text-3xl font-bold text-[#5d3f27]">Ini Halaman Components</h1>
                    </div>
                    <p className="max-w-2xl text-[#6f533f]">Ini adalah halaman component</p>
                </div>
            </div>

            <div className="rounded-3xl bg-white border border-[#e6cdb5] p-8 shadow-sm">
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-[#6c4325]">1. Basic Components</h2>
                    <p className="text-sm text-[#7c5b43] mt-2">Contoh tombol, badge, dan avatar yang dapat digunakan dalam tampilan hotel.</p>
                </div>

                <div className="space-y-6">
                    <div className="rounded-2xl bg-[#fbf3e8] border border-[#e9d7bc] p-6">
                        <h3 className="text-base font-semibold text-[#5e3f25] mb-4">Button Component</h3>
                        <div className="flex flex-wrap gap-3">
                            <button className="px-5 py-2 rounded-full bg-[#8c5e3e] text-white shadow-sm hover:bg-[#7a4f32] transition">Primary</button>
                            <button className="px-5 py-2 rounded-full bg-[#5e4a3c] text-white shadow-sm hover:bg-[#4d3e32] transition">Secondary</button>
                            <button className="px-5 py-2 rounded-full bg-[#4a7a37] text-white shadow-sm hover:bg-[#3f6630] transition">Simpan</button>
                            <button className="px-5 py-2 rounded-full bg-[#d94b4b] text-white shadow-sm hover:bg-[#b43f3f] transition">Hapus</button>
                            <button className="px-5 py-2 rounded-full bg-[#d4a024] text-white shadow-sm hover:bg-[#b78720] transition">Warning</button>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-[#fbf3e8] border border-[#e9d7bc] p-6">
                        <h3 className="text-base font-semibold text-[#5e3f25] mb-4">Badge Component</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-full bg-[#2d6ef7] text-white text-xs font-semibold">Aktif</span>
                            <span className="px-3 py-1 rounded-full bg-[#4b5563] text-white text-xs font-semibold">Pending</span>
                            <span className="px-3 py-1 rounded-full bg-[#16a34a] text-white text-xs font-semibold">Selesai</span>
                            <span className="px-3 py-1 rounded-full bg-[#dc2626] text-white text-xs font-semibold">Ditolak</span>
                            <span className="px-3 py-1 rounded-full bg-[#f59e0b] text-white text-xs font-semibold">Baru</span>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-[#fbf3e8] border border-[#e9d7bc] p-6">
                        <h3 className="text-base font-semibold text-[#5e3f25] mb-4">Avatar Component</h3>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#dcc5a0] grid place-items-center text-[#7b5f46] font-semibold">B</div>
                            <div className="w-10 h-10 rounded-full bg-[#dcc5a0] grid place-items-center text-[#7b5f46] font-semibold">S</div>
                            <div className="w-10 h-10 rounded-full bg-[#dcc5a0] grid place-items-center text-[#7b5f46] font-semibold">F</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-3xl bg-white border border-[#e6cdb5] p-8 shadow-sm">
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-[#6c4325]">2. Data Display Components</h2>
                </div>

                <div className="space-y-6">
                    <div className="rounded-2xl bg-[#fbf3e8] border border-[#e9d7bc] p-6">
                        <h3 className="text-base font-semibold text-[#5e3f25] mb-4">Card Component</h3>
                        <div className="rounded-3xl bg-white border border-[#e5d5bc] p-6 shadow-sm">
                            <h4 className="text-xl font-semibold text-[#6c4325] mb-2">Judul Card</h4>
                            <p className="text-sm text-[#6f533f]">Ini adalah isi konten standar dari komponen Card.</p>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-[#fbf3e8] border border-[#e9d7bc] p-6">
                        <h3 className="text-base font-semibold text-[#5e3f25] mb-4">Product Card Component</h3>
                        <div className="grid gap-5 lg:grid-cols-2">
                            {products.map((product) => (
                                <div key={product.id} className="rounded-3xl overflow-hidden border border-[#e5d5bc] shadow-sm bg-[#fff8ef]">
                                    <div className="h-52 overflow-hidden">
                                        <img src={product.image} alt={product.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                                    </div>
                                    <div className="p-6">
                                        <span className="inline-block px-3 py-1 rounded-full bg-[#e7c8a7] text-[#7b5234] text-xs font-semibold uppercase tracking-[0.12em] mb-3">{product.category}</span>
                                        <h4 className="text-2xl font-semibold text-[#5d3f27] mb-2">{product.title}</h4>
                                        <p className="text-sm text-[#6f533f] mb-6 leading-7">{product.description}</p>
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="text-xl font-bold text-[#8c5e3e]">{product.price}</span>
                                            <button className="px-5 py-2 rounded-full bg-[#8c5e3e] text-white shadow-sm hover:bg-[#7b4f37] transition">Detail</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl bg-[#fbf3e8] border border-[#e9d7bc] p-6">
                        <h3 className="text-base font-semibold text-[#5e3f25] mb-4">Table Component</h3>
                        <div className="overflow-x-auto rounded-3xl border border-[#e5d5bc] bg-white">
                            <table className="min-w-full text-left divide-y divide-[#eee4d9]">
                                <thead className="bg-[#f7eadb] text-[#6c4325]">
                                    <tr>
                                        <th className="px-6 py-4 text-sm font-semibold">No</th>
                                        <th className="px-6 py-4 text-sm font-semibold">Nama Room</th>
                                        <th className="px-6 py-4 text-sm font-semibold">Tipe Kamar</th>
                                        <th className="px-6 py-4 text-sm font-semibold">Harga</th>
                                        <th className="px-6 py-4 text-sm font-semibold">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#eee4d9] bg-white">
                                    {tableRows.map((row, index) => (
                                        <tr key={row.id} className="hover:bg-[#fbf3e8] transition-colors">
                                            <td className="px-6 py-4 text-sm text-[#7c5b43]">{index + 1}</td>
                                            <td className="px-6 py-4 text-sm text-[#5d3f27]">{row.name}</td>
                                            <td className="px-6 py-4 text-sm text-[#6f533f]">{row.category}</td>
                                            <td className="px-6 py-4 text-sm text-[#8c5e3e]">{row.price}</td>
                                            <td className="px-6 py-4">
                                                <button className="px-4 py-2 rounded-full bg-[#8c5e3e] text-white text-sm shadow-sm hover:bg-[#7b4f37] transition">Detail</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-3xl bg-white border border-[#e6cdb5] p-8 shadow-sm">
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-[#6c4325]">3. Layout Footer Component</h2>
                </div>
                <div className="rounded-3xl bg-[#2a2832] text-white p-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-lg font-bold">Hotel</p>
                        <p className="text-sm text-[#d9c9b0] mt-2">Aplikasi sederhana berbasis React.</p>
                        <div className="mt-6 flex flex-wrap justify-center gap-5 text-sm text-[#d9c9b0]">
                            <span className="hover:text-white transition">Home</span>
                            <span className="hover:text-white transition">Produk</span>
                            <span className="hover:text-white transition">Kontak</span>
                        </div>
                        <p className="text-[13px] text-[#b8a98a] mt-5">© 2026 Hotel. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
