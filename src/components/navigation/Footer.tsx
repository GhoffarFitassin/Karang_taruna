const Footer = () => (
  <footer className="bg-primary text-white">
    <div className="max-w-container mx-auto px-6 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <a href="#beranda" className="inline-flex items-center gap-2 mb-4">
            <i className="ph-fill ph-users-three text-3xl text-accent"></i>
            <span className="font-heading text-2xl text-white">
              Karang Taruna
            </span>
          </a>
          <p className="text-white/80 max-w-lg">
            Wadah pemuda untuk bergerak bersama, berkarya untuk masyarakat, dan
            membangun desa yang lebih berdaya melalui aksi sosial, edukasi, dan
            pemberdayaan komunitas.
          </p>
        </div>

        <div>
          <h3 className="text-white text-lg mb-4">Navigasi</h3>
          <ul className="space-y-3 text-white/80">
            {[
              { label: "Beranda", target: "beranda" },
              { label: "Tentang Kami", target: "tentang-kami" },
              { label: "Program", target: "program" },
              { label: "Galeri", target: "galeri" },
              { label: "Kontak", target: "kontak" },
            ].map((item) => (
              <li key={item.target}>
                <a
                  href={`#${item.target}`}
                  className="hover:text-accent transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg mb-4">Terhubung</h3>
          <ul className="space-y-3 text-white/80 mb-6">
            <li className="flex items-center gap-3">
              <i className="ph ph-map-pin text-xl text-accent"></i>
              <span className="text-sm">Balai Desa Lantai 2</span>
            </li>
            <li className="flex items-center gap-3">
              <i className="ph ph-whatsapp-logo text-xl text-accent"></i>
              <span className="text-sm">+62 812 3456 7890</span>
            </li>
          </ul>

          <div className="flex gap-3">
            {[
              {
                href: "https://instagram.com",
                icon: "ph-instagram-logo",
                label: "Instagram",
              },
              {
                href: "https://facebook.com",
                icon: "ph-facebook-logo",
                label: "Facebook",
              },
              {
                href: "https://youtube.com",
                icon: "ph-youtube-logo",
                label: "YouTube",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent text-white hover:text-primary flex items-center justify-center transition-colors duration-300"
              >
                <i className={`ph ${item.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-white/15">
      <div className="max-w-container mx-auto px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <p className="text-sm text-white/70">
          © 2026 Karang Taruna. Seluruh hak cipta dilindungi.
        </p>
        <a
          href="#beranda"
          className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors duration-300"
        >
          <i className="ph ph-arrow-up"></i> Kembali ke atas
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
