import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effet au scroll - la navbar change de style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ferme le menu mobile quand on clique sur un lien
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-gradient-to-r from-green-50 to-emerald-50 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-3xl">🌿</div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              YourGarden
            </span>
          </div>

          {/* Liens Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#accueil"
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Accueil
            </a>
            <a
              href="#apropos"
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              À propos
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Contact
            </a>
            {/* Bouton CTA */}
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
              Devis gratuit
            </button>
          </div>

          {/* Burger Menu Button (Mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-green-600 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-green-600 transition-all duration-300 my-1 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-green-600 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pb-4">
            <a
              href="#accueil"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium py-2 px-4 hover:bg-green-50 rounded-lg"
            >
              Accueil
            </a>
            <a
              href="#apropos"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium py-2 px-4 hover:bg-green-50 rounded-lg"
            >
              À propos
            </a>
            <a
              href="#services"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium py-2 px-4 hover:bg-green-50 rounded-lg"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium py-2 px-4 hover:bg-green-50 rounded-lg"
            >
              Contact
            </a>
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all duration-200 w-full">
              Devis gratuit
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;