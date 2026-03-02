import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import GallerySection from "@/components/sections/GallerySection";
import HeroSection from "@/components/sections/HeroSection";
import ProgramsSection from "@/components/sections/ProgramsSection";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("beranda");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");

    const script = document.createElement("script");
    script.src = "https://unpkg.com/@phosphor-icons/web";
    script.async = true;
    document.body.appendChild(script);

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "beranda";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          const sectionId = section.getAttribute("id");
          if (sectionId) current = sectionId;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.classList.remove("scroll-smooth");
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <Layout
      activeSection={activeSection}
      isMobileMenuOpen={isMobileMenuOpen}
      toggleMenu={toggleMenu}
      closeMenu={closeMenu}
    >
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <GallerySection />
      <ContactSection />
    </Layout>
  );
}
