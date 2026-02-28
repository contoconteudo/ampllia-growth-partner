import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import amplliaLogoWhite from "@/assets/ampllia-logo-white.png";

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
          <img src={amplliaLogoWhite} alt="Ampllia" className="h-8 md:h-10" />
        </a>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 md:px-6 md:py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-xs md:text-sm hover:brightness-110 transition"
        >
          Fale com a Ampllia
        </a>
      </div>
    </header>
  );
};

export default Header;
