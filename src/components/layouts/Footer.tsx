import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-4 w-full bg-gray-800 max-w-[1280px] mx-auto mt-2">
      <div className="w-full px-4 mx-aut">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Contact Information */}
          <div className="w-full mb-4 text-white md:mb-0">
            <h3 className="mb-2 text-lg font-semibold text-white">
              Contact Us
            </h3>
            <p>Email: info@erchain.com</p>
            <p>Phone: +1 452 456-7890</p>
          </div>

          {/* Social Media Links */}
          <div className="w-full mb-4 text-white md:mb-0">
            <h3 className="mb-2 text-lg font-semibold text-white">
              Connect Us
            </h3>
            <div className="flex space-x-2 text-black">
              <a href="#" className="">
                <Facebook className="w-12 h-12 p-2 bg-white rounded-full" />
              </a>
              <a href="#" className="">
                <Twitter className="w-12 h-12 p-2 bg-white rounded-full" />
              </a>
              <a href="#" className="">
                <Instagram className="w-12 h-12 p-2 bg-white rounded-full" />
              </a>
            </div>
          </div>

          {/* Relevant Resources */}
          <div className="w-full">
            <h3 className="mb-2 text-lg font-semibold text-white">Resources</h3>
            <ul>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Emergency Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Medical Facilities
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Disaster Preparedness
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-white">
          &copy; 2024 empowering recovery chain. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
