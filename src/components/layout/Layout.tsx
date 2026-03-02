import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  activeSection: string;
  isMobileMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

const Layout = ({
  children,
  activeSection,
  isMobileMenuOpen,
  toggleMenu,
  closeMenu,
}: LayoutProps) => (
  <div className="relative">
    <Navbar
      activeSection={activeSection}
      isMobileMenuOpen={isMobileMenuOpen}
      toggleMenu={toggleMenu}
      closeMenu={closeMenu}
    />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
