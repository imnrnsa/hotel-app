export default function FiturXyz() {
    return (
        <div className="p-8 bg-[#faf1e2] rounded-3xl shadow-sm border border-[#e6cdb5] min-h-[calc(100vh-4rem)]">
            <div className="max-w-4xl mx-auto">
                <div className="rounded-3xl bg-white border border-[#e6cdb5] p-8 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.24em] text-[#7c5b43] mb-3">Fitur XYZ</p>
                    <p className="text-[#6f533f] text-base leading-7 mb-8">ini adalah halaman fitur xyz</p>

                    <div className="grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl bg-[#f8eed1] border border-[#e6cdb5] p-6 shadow-sm">
                            <h2 className="text-xl font-semibold text-[#6c4325] mb-3">Ringkasan Fitur</h2>
                            <p className="text-[#6f533f] leading-7">
                                Fitur XYZ memungkinkan manajemen data tambahan secara visual, menambah nilai operasional bagi pengguna dashboard hotel.
                            </p>
                        </div>
                        <div className="rounded-3xl bg-[#f8eed1] border border-[#e6cdb5] p-6 shadow-sm">
                            <h2 className="text-xl font-semibold text-[#6c4325] mb-3">Aksi Cepat</h2>
                            <div className="space-y-3">
                                <button className="w-full rounded-full bg-[#8c5e3e] px-5 py-3 text-white font-semibold hover:bg-[#7b4f37] transition">Tambah Item XYZ</button>
                                <button className="w-full rounded-full bg-[#d4a024] px-5 py-3 text-white font-semibold hover:bg-[#b78720] transition">Lihat Laporan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
