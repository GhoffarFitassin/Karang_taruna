const galleryItems = [
  {
    img: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800",
    title: "Bakti Sosial",
    span: false,
  },
  {
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
    title: "Musyawarah Pemuda",
    span: false,
  },
  {
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800",
    title: "Peringatan Hari Kemerdekaan",
    span: false,
  },
  {
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1200",
    title: "Program Penghijauan",
    span: true,
  },
  {
    img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800",
    title: "Pelatihan UMKM",
    span: false,
  },
];

const GallerySection = () => (
  <section id="galeri" className="py-[100px] bg-[#ffffff]">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="text-center mb-16 flex flex-col items-center">
        <h2 className="text-3xl mb-4 text-[#033051]">Galeri Kegiatan</h2>
        <div className="w-[60px] h-[3px] bg-[#f3b448] mb-6"></div>
        <p className="max-w-2xl mx-auto text-[#555555]">
          Dokumentasi kegiatan dan momen kebersamaan yang telah kami laksanakan
          bersama masyarakat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-[8px] bg-black aspect-[4/3] group cursor-pointer ${
              item.span ? "lg:col-span-2" : ""
            }`}
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="block w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#033051]/60 opacity-0 transition-opacity duration-300 ease-in-out flex items-center justify-center group-hover:opacity-100">
              <span className="font-['Poppins',_sans-serif] font-medium text-white">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
