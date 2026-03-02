type NavbarProps = {
  activeSection: string;
  isMobileMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

const navItems = [
  { id: "beranda", label: "Beranda" },
  { id: "tentang-kami", label: "Tentang Kami" },
  { id: "program", label: "Program" },
  { id: "galeri", label: "Galeri" },
  { id: "kontak", label: "Kontak" },
];

const Navbar = ({
  activeSection,
  isMobileMenuOpen,
  toggleMenu,
  closeMenu,
}: NavbarProps) => (
  <header className="fixed w-full top-0 bg-[#ffffff]/95 backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.05)] z-50 transition-all duration-300">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="flex items-center justify-between h-20">
        <a
          href="#beranda"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
          <i className="ph-fill ph-users-three text-3xl text-[#033051]"></i>
          <span className="font-['Poppins',_sans-serif] text-xl font-semibold text-[#033051]">
            Karang Taruna
          </span>
        </a>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link font-['Inter',_sans-serif] text-sm font-medium ${
                activeSection === item.id ? "active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden text-[#033051] focus:outline-none"
        >
          <i
            className={`ph text-3xl ${isMobileMenuOpen ? "ph-x" : "ph-list"}`}
          ></i>
        </button>
      </div>
    </div>

    <div
      className={`md:hidden bg-[#ffffff] border-t border-gray-100 overflow-hidden transition-all duration-400 ease-in-out ${
        isMobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <nav className="flex flex-col px-6 py-4 space-y-4">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={closeMenu}
            className="text-[#033051] font-medium hover:text-[#0e63ad]"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

export default Navbar;
