import { useState, useEffect } from "react";

const NavbarExercice = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    console.log("useEffect lance");

    const handleScroll = () => {
      console.log("Scroll detecte Position:", window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      console.log("Nettoyage");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("Rendu isScrolled =", isScrolled);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "white",
        padding: "20px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        zIndex: 999,
      }}
    >
      Ma Navbar
      <p>Menu ouvert ? {isMenuOpen ? "Oui" : "Non"}</p>
      <p>A scrolle ? {isScrolled ? "Oui" : "Non"}</p>
    </div>
  );
};

export default NavbarExercice;