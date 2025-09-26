import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Blinkit / Brand + tagline */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Blinkit</h1>
          <p className="mt-2 text-sm text-gray-500">
            #1 instant delivery service in India
          </p>
        </div>

        {/* Column 2: Resources / Links */}
        <div>
          <h2 className="text-gray-700 font-semibold mb-4">Resources</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link to="/about" className="hover:text-gray-800">
                About
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-gray-800">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-800">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/press" className="hover:text-gray-800">
                Press
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-gray-800">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-gray-800">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: For Consumers / Useful Links */}
        <div>
          <h2 className="text-gray-700 font-semibold mb-4">For Consumers</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link to="/mobile" className="hover:text-gray-800">
                Mobile
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-gray-800">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/security" className="hover:text-gray-800">
                Security
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-800">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Follow us / Download app */}
        <div>
          <h2 className="text-gray-700 font-semibold mb-4">Follow us</h2>
          <ul className="flex space-x-4 mb-6">
            <li>
              <a href="https://www.instagram.com/letsblinkit" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram text-2xl text-gray-600 hover:text-gray-800"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/blinkit.india" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook text-2xl text-gray-600 hover:text-gray-800"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/letsblinkit" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-twitter text-2xl text-gray-600 hover:text-gray-800"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/letsblinkit" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin text-2xl text-gray-600 hover:text-gray-800"></i>
              </a>
            </li>
          </ul>

          <h2 className="text-gray-700 font-semibold mb-4">Download App</h2>
          <div className="flex items-center space-x-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.blinkitapp"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://example.com/google-play-badge.png"
                alt="Google Play Store"
                className="w-32"
              />
            </a>
            <a
              href="https://apps.apple.com/in/app/blinkit/id1455972401"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://example.com/app-store-badge.png"
                alt="App Store"
                className="w-32"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-gray-600 text-sm">
          <span>© 2016-2025 Blink Commerce Private Limited</span>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <Link to="/sitemap" className="hover:text-gray-800">
              Sitemap
            </Link>
            <Link to="/privacy" className="hover:text-gray-800">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gray-800">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
