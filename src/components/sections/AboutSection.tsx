const AboutSection = () => (
  <section
    id="tentang-kami"
    className="py-[100px] bg-[#ffffff] border-t border-gray-100"
  >
    <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-3xl mb-4 text-[#033051]">Tentang Kami</h2>
        <div className="w-[60px] h-[3px] bg-[#f3b448] mb-6"></div>

        <p className="mb-6 text-[#555555]">
          Berdiri sejak tahun 1990, Karang Taruna kami telah menjadi pionir
          dalam membina generasi muda untuk aktif dalam kegiatan sosial,
          ekonomi, dan budaya di lingkungan masyarakat. Kami percaya bahwa
          pemuda adalah kunci perubahan masa depan.
        </p>

        <h3 className="text-xl mb-4 mt-8 text-[#033051]">Visi & Misi</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-4">
            <i className="ph-fill ph-target text-2xl text-[#0e63ad] mt-1"></i>
            <div>
              <strong className="text-[#033051] block font-medium">Visi</strong>
              <span className="text-[#555555]">
                Mewujudkan pemuda yang mandiri, inovatif, dan berjiwa sosial
                tinggi demi kemajuan kesejahteraan sosial masyarakat.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <i className="ph-fill ph-rocket-launch text-2xl text-[#0e63ad] mt-1"></i>
            <div>
              <strong className="text-[#033051] block font-medium">Misi</strong>
              <span className="text-[#555555]">
                Mengembangkan potensi generasi muda, membina wirausaha sosial,
                dan mengadakan kegiatan positif yang menjauhkan pemuda dari
                perilaku destruktif.
              </span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <i className="ph-fill ph-handshake text-2xl text-[#0e63ad] mt-1"></i>
            <div>
              <strong className="text-[#033051] block font-medium">
                Nilai Organisasi
              </strong>
              <span className="text-[#555555]">
                Gotong royong, integritas, solidaritas, dan kepedulian terhadap
                lingkungan sekitar.
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div className="relative rounded-[12px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?auto=format&fit=crop&q=80&w=1000"
          alt="Kegiatan Karang Taruna"
          loading="lazy"
          className="w-full h-auto object-cover rounded-[12px]"
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
