import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-slate-900">
      <div className=" w-full container mx-auto md:px-0 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white py-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-white">
              Welcome to CarX, your ultimate destination for the latest electric
              cars. Explore cutting-edge technology, sleek designs, and
              unparalleled performance.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white">
                  Models
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-white">
              123 Electric Drive, Auto City, EV 56789
            </p>
            <p className="text-white">Email: info@carx.com</p>
            <p className="text-white">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className=" py-4 text-center text-white text-sm">
        <p>© 2024 | All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
