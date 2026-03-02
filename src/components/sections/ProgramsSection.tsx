const programsData = [
  {
    icon: "ph-plant",
    title: "Penghijauan Desa",
    desc: "Program rutin penanaman pohon dan pengelolaan bank sampah mandiri untuk menjaga kelestarian lingkungan dan menciptakan desa yang bersih.",
  },
  {
    icon: "ph-storefront",
    title: "Bazaar UMKM Pemuda",
    desc: "Wadah bagi para pemuda untuk mengembangkan jiwa wirausaha dengan memasarkan produk lokal hasil karya mandiri masyarakat.",
  },
  {
    icon: "ph-books",
    title: "Bimbingan Belajar Gratis",
    desc: "Fasilitas belajar tambahan bagi anak-anak usia sekolah dasar di lingkungan desa yang dibimbing langsung oleh anggota muda-mudi terpelajar.",
  },
];

const ProgramsSection = () => (
  <section id="program" className="py-[100px] bg-[#f8f9fa]">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="text-center mb-16 flex flex-col items-center">
        <h2 className="text-3xl mb-4 text-[#033051]">Program Unggulan</h2>
        <div className="w-[60px] h-[3px] bg-[#f3b448] mb-6"></div>
        <p className="max-w-2xl mx-auto text-[#555555]">
          Inisiatif dan kegiatan rutin yang kami jalankan untuk memberdayakan
          masyarakat dan pemuda di lingkungan sekitar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programsData.map((prog, idx) => (
          <div
            key={idx}
            className="bg-[#ffffff] rounded-[12px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-[#f8f9fa] rounded-full flex items-center justify-center mb-6">
              <i className={`ph ${prog.icon} text-2xl text-[#0e63ad]`}></i>
            </div>
            <h3 className="text-xl mb-3 text-[#033051]">{prog.title}</h3>
            <p className="text-[#555555] text-sm">{prog.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsSection;
