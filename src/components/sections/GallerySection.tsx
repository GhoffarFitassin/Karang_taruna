import { galleryImages } from "@/img/gallery";

const galleryItems = [
  {
    img: galleryImages.image1,
    title: "Pagentan Holiday Festival 1",
    span: false,
  },
  {
    img: galleryImages.image2,
    title: "Pagentan Holiday Festival 2",
    span: false,
  },
  {
    img: galleryImages.image3,
    title: "Pagentan Holiday Festival 2",
    span: false,
  },
  {
    img: galleryImages.image4,
    title: "Pagentan Holiday Festival 3",
    span: true,
  },
  {
    img: galleryImages.image5,
    title: "Pasar Malam",
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
