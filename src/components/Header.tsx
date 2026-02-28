import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import amplliaLogo from "@/assets/ampllia-logo.png";

const WA_LINK = "https://wa.me/5500000000000";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <a href="#">
          <img src={amplliaLogo} alt="Ampllia" className="h-8 md:h-10 brightness-0 invert" />
        </a>

        {/* Desktop CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition"
        >
          Fale com a Ampllia
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-text-on-navy"
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy border-t border-navy-light px-5 pb-5">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Fale com a Ampllia
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
