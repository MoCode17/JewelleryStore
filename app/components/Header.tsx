import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button className="md-hidden text-gray-700" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-serif tracking-wider text-gray-900">
                LUMINA & STONE
              </h1>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex space-x-4">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-light"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-light"
              >
                Shop
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-light"
              >
                Collections
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-light"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-light"
              >
                Contact
              </a>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-8">
              <button className="text-gray-700 hove:text-gray-900">
                <Search size={24} />
              </button>
              <button className="text-gray-700 hover:text-gray-900">
                <User size={20} />
              </button>
              <button className="text-gray-700 hover:text-gray-900 relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation - Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-3">
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 py-2 border-b border-gray-100"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 py-2 border-b border-gray-100"
                >
                  Shop
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 py-2 border-b border-gray-100"
                >
                  Collections
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 py-2 border-b border-gray-100"
                >
                  About
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 py-2">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
