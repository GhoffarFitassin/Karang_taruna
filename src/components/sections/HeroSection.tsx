const HeroSection = () => (
  <section
    id="beranda"
    className="py-[100px] min-h-[90vh] flex flex-col justify-center bg-[#ffffff] mt-10"
  >
    <div className="max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center">
      <h1 className="text-[32px] lg:text-[48px] leading-tight mb-8 max-w-4xl text-[#033051]">
        Bersama Pemuda, Membangun Masyarakat yang Berdaya
      </h1>

      <div className="w-[80px] h-[3px] bg-[#f3b448] mb-8"></div>

      <p className="text-[18px] text-[#555555] max-w-2xl">
        Karang Taruna sebagai wadah penggerak sosial, kepemudaan, dan
        pemberdayaan masyarakat tingkat desa. Mengabdi dengan aksi, berkarya
        untuk negeri.
      </p>
    </div>
  </section>
);

export default HeroSection;
