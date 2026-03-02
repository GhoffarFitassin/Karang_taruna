const ContactSection = () => (
  <section id="kontak" className="py-[100px] bg-[#f8f9fa]">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="text-center mb-16 flex flex-col items-center">
        <h2 className="text-3xl mb-4 text-[#033051]">Hubungi Kami</h2>
        <div className="w-[60px] h-[3px] bg-[#f3b448] mb-6"></div>
        <p className="max-w-2xl mx-auto text-[#555555]">
          Ingin berkolaborasi, memberikan dukungan, atau bertanya lebih lanjut?
          Silakan hubungi kami melalui kontak di bawah ini.
        </p>
      </div>

      <div className="max-w-2xl mx-auto w-full">
        <div className="bg-[#ffffff] rounded-[12px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <h3 className="text-2xl mb-6 text-[#033051]">Informasi Kontak</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <i className="ph ph-map-pin text-2xl text-[#0e63ad]"></i>
              <div>
                <strong className="text-[#033051] block font-['Inter',_sans-serif] font-medium">
                  Alamat Sekretariat
                </strong>
                <span className="text-sm text-[#555555]">
                  Gedung Balai Desa Lantai 2, Jl. Pemuda No. 10, Kecamatan Maju
                  Jaya, Kota Harapan 12345
                </span>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <i className="ph ph-instagram-logo text-2xl text-[#0e63ad]"></i>
              <div>
                <strong className="text-[#033051] block font-['Inter',_sans-serif] font-medium">
                  Instagram
                </strong>
                <span className="text-sm text-[#555555]">@karangtaruna</span>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <i className="ph ph-whatsapp-logo text-2xl text-[#0e63ad]"></i>
              <div>
                <strong className="text-[#033051] block font-['Inter',_sans-serif] font-medium">
                  Telepon / WhatsApp
                </strong>
                <span className="text-sm text-[#555555]">
                  +62 812 3456 7890
                </span>
              </div>
            </li>
          </ul>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <strong className="text-[#033051] block font-['Inter',_sans-serif] font-medium mb-4">
              Media Sosial
            </strong>
            <div className="flex gap-4">
              {["instagram-logo", "facebook-logo", "youtube-logo"].map(
                (logo) => (
                  <a
                    key={logo}
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center text-[#033051] hover:bg-[#0e63ad] hover:text-white transition-colors duration-300"
                  >
                    <i className={`ph ph-${logo} text-xl`}></i>
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
