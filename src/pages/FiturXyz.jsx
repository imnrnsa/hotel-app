import { useEffect, useRef, useState } from "react";

export default function FiturXyz() {
  const [hotelName, setHotelName] = useState("Hotel App");
  const [roomCount, setRoomCount] = useState(0);
  const [showNote, setShowNote] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [savedText, setSavedText] = useState("");

  const inputRef = useRef(null);
  const prevRoomCountRef = useRef(roomCount);
  const renderCountRef = useRef(0);

  renderCountRef.current += 1;

  useEffect(() => {
    document.title = `Room count: ${roomCount}`;
  }, [roomCount]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((value) => value + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    prevRoomCountRef.current = roomCount;
  }, [roomCount]);

  function handleFocusInput() {
    inputRef.current?.focus();
  }

  function handleSaveText() {
    setSavedText(inputRef.current?.value || "");
  }

  return (
    <div className="p-8 bg-[#faf1e2] rounded-3xl shadow-sm border border-[#e6cdb5] min-h-[calc(100vh-4rem)]">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="rounded-3xl bg-white border border-[#e6cdb5] p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.24em] text-[#7c5b43] mb-3">Fitur XYZ</p>
          <h1 className="text-3xl font-semibold text-[#5f4228] mb-4">Demo React Hooks: useState, useEffect, useRef</h1>
          <p className="text-[#6f533f] text-base leading-7">
            Halaman ini menampilkan contoh penggunaan hook React sesuai tugas 5W + 1H: useState, useEffect, dan useRef.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <section className="rounded-3xl bg-[#f8eed1] border border-[#e6cdb5] p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#6c4325] mb-4">A. useState</h2>
            <ul className="space-y-2 text-[#5f472c] text-sm leading-6">
              <li><strong>What:</strong> Menyimpan data yang dapat berubah seperti nama hotel, jumlah kamar, dan tampilan catatan.</li>
              <li><strong>Why:</strong> Agar perubahan data segera terlihat pada tampilan aplikasi.</li>
              <li><strong>Who:</strong> Pengguna yang menekan tombol atau mengetik di input.</li>
              <li><strong>When:</strong> Saat pengguna mengetik nama hotel, menambah/kurangi kamar, atau menyembunyikan catatan.</li>
              <li><strong>Where:</strong> Di dalam komponen <code>FiturXyz</code>, pada state lokal komponen.</li>
              <li><strong>How:</strong> Dengan <code>const [state, setState] = useState(initialValue)</code> dan memanggil <code>setState()</code> saat event terjadi.</li>
            </ul>
            <div className="mt-6 rounded-3xl bg-white border border-[#e6cdb5] p-4">
              <p className="text-sm font-medium text-[#6c4325] mb-3">Contoh interaksi:</p>
              <p className="text-[#5f472c] mb-3">Nama: {hotelName}</p>
              <div className="flex flex-col gap-3">
                <input
                  value={hotelName}
                  onChange={(event) => setHotelName(event.target.value)}
                  className="rounded-xl border border-[#d6c2a1] p-3 text-sm"
                  placeholder="Ubah nama hotel"
                />
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setRoomCount((value) => value + 1)}
                    className="rounded-full bg-[#8c5e3e] px-4 py-2 text-white text-sm hover:bg-[#7b4f37] transition"
                  >Tambah Kamar</button>
                  <button
                    onClick={() => setRoomCount((value) => Math.max(value - 1, 0))}
                    className="rounded-full bg-[#d4a024] px-4 py-2 text-white text-sm hover:bg-[#b78720] transition"
                  >Kurangi Kamar</button>
                </div>
                <p className="text-sm text-[#5f472c]">Jumlah kamar saat ini: {roomCount}</p>
                <button
                  onClick={() => setShowNote((value) => !value)}
                  className="rounded-full border border-[#8c5e3e] px-4 py-2 text-[#6c4325] text-sm hover:bg-[#f1e5d4] transition"
                >{showNote ? "Sembunyikan" : "Tampilkan"} Catatan</button>
                {showNote && <p className="text-sm text-[#4f3824]">useState membantu menjaga apakah catatan ini terlihat atau tidak.</p>}
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-[#e9f7f1] border border-[#b8d9c4] p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#37684f] mb-4">B. useEffect</h2>
            <ul className="space-y-2 text-[#2f5241] text-sm leading-6">
              <li><strong>What:</strong> Menjalankan kode tambahan setelah komponen selesai dirender.</li>
              <li><strong>Why:</strong> Untuk memperbarui judul dokumen dan menjalankan timer tanpa memblokir UI.</li>
              <li><strong>Who:</strong> Komponen <code>FiturXyz</code> yang memerlukan efek samping.</li>
              <li><strong>When:</strong> Saat komponen pertama kali tampil dan setiap kali <code>roomCount</code> berubah.</li>
              <li><strong>Where:</strong> Di dalam komponen, tepat setelah render selesai.</li>
              <li><strong>How:</strong> Gunakan <code>{`useEffect(() => { ... }, [dependencies])`}</code> untuk menjalankan efek terkontrol.</li>
            </ul>
            <div className="mt-6 rounded-3xl bg-white border border-[#cfe6d9] p-4">
              <p className="text-sm font-medium text-[#37684f] mb-3">Contoh efek:</p>
              <p className="text-[#2f5241] mb-3">Detik sejak halaman dibuka: {seconds}</p>
              <p className="text-sm text-[#2f5241]">Judul dokumen berubah ketika jumlah kamar berubah.</p>
              <p className="mt-3 text-sm text-[#375d47]">(Coba tekan tombol Tambah/Kurangi di bagian useState.)</p>
            </div>
          </section>

          <section className="rounded-3xl bg-[#fff4d9] border border-[#e6d4a8] p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#7d5d2f] mb-4">C. useRef</h2>
            <ul className="space-y-2 text-[#6f533f] text-sm leading-6">
              <li><strong>What:</strong> Menyimpan referensi ke elemen atau nilai tetap antar render.</li>
              <li><strong>Why:</strong> Karena nilai ini tidak boleh menyebabkan render ulang.</li>
              <li><strong>Who:</strong> Developer yang ingin fokuskan input atau membaca nilai DOM langsung.</li>
              <li><strong>When:</strong> Saat tombol fokus ditekan dan saat teks disimpan dari input.</li>
              <li><strong>Where:</strong> Pada elemen input dan variabel referensi di komponen <code>FiturXyz</code>.</li>
              <li><strong>How:</strong> Buat <code>const inputRef = useRef(null)</code>, lalu akses <code>inputRef.current</code> untuk fokus dan baca nilai.</li>
            </ul>
            <div className="mt-6 rounded-3xl bg-white border border-[#e6d4a8] p-4">
              <p className="text-sm font-medium text-[#7d5d2f] mb-3">Contoh interaksi:</p>
              <input
                ref={inputRef}
                placeholder="Tulis dan tekan Simpan"
                className="w-full rounded-xl border border-[#d8c7a5] p-3 text-sm"
              />
              <div className="mt-3 flex flex-wrap gap-3">
                <button
                  onClick={handleFocusInput}
                  className="rounded-full bg-[#8c5e3e] px-4 py-2 text-white text-sm hover:bg-[#7b4f37] transition"
                >Fokus Input</button>
                <button
                  onClick={handleSaveText}
                  className="rounded-full bg-[#d4a024] px-4 py-2 text-white text-sm hover:bg-[#b78720] transition"
                >Simpan ke State</button>
              </div>
              <p className="mt-3 text-sm text-[#5f472c]">Teks terakhir disimpan: {savedText || "(belum disimpan)"}</p>
              <p className="mt-2 text-sm text-[#5f472c]">Render komponen: {renderCountRef.current}</p>
              <p className="mt-2 text-sm text-[#5f472c]">Nilai kamar sebelumnya: {prevRoomCountRef.current}</p>
            </div>
          </section>
        </div>

        <div className="rounded-3xl bg-white border border-[#e6cdb5] p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#5f4228] mb-4">Ringkasan Tugas</h2>
          <p className="text-[#6f533f] leading-7">
            Setiap hook pada halaman ini dituliskan dengan format 5W + 1H:
          </p>
          <ul className="mt-4 space-y-2 text-[#5f472c] text-sm leading-7">
            <li><strong>What:</strong> Apa yang dilakukan hook.</li>
            <li><strong>Why:</strong> Mengapa hook digunakan pada fitur tersebut.</li>
            <li><strong>Who:</strong> Siapa yang mendapatkan manfaat dari hook.</li>
            <li><strong>When:</strong> Kapan hook berjalan atau digunakan.</li>
            <li><strong>Where:</strong> Di bagian mana dalam komponen hook diterapkan.</li>
            <li><strong>How:</strong> Bagaimana hook diimplementasikan secara teknis.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
