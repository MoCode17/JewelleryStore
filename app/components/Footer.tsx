import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  /* Footer */
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Lumina & Stone</h3>
            <p className="text-gray-400 text-sm">
              Modern jewelry for the contemporary individual. Crafted with care,
              designed for life.
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  All Jewelry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Rings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Necklaces
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Earrings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Bracelets
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">About</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Craftsmanship
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Materials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              123 Artisan Lane
              <br />
              New York, NY 10001
              <br />
              contact@luminaandstone.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Lumina & Stone. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300">
              Shipping & Returns
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
