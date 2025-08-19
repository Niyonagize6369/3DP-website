"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  // { href: "/about", label: "About Us" },
  // { href: "/services", label: "Our Services" },
  // { href: "/data", label: "Data Insights" },
  { href: "/contact", label: "Contact" },
];

const resourceLinks = [
  { href: "/service", label: "Service" },
  { href: "/about", label: "About Us" },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            {/* <Link href="/" className="inline-block mb-4">
              <Image
                src="/3dp.jpg"
                alt="Your Company Logo"
                width={110}
                height={25}
              />
            </Link> */}
            <p className="text-white text-lg font-bold mb-2">
              <span className="text-yellow-500">3Dp</span>.rw
            </p>
            <p className="text-white text-md mb-4">
              Empowering businesses with data-driven insights and innovative
              solutions for better decision-making.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-yellow-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-yellow-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <p className="text-white text-sm mb-4">
              Stay up to date with our latest insights.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-yellow-500 hover:text-yellow-600 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-yellow-500 hover:text-yellow-600 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-yellow-500 hover:text-yellow-600 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-yellow-500 hover:text-yellow-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 flex justify-center">
          <p className="text-white text-sm text-center">
            &copy; {new Date().getFullYear()} 3DP.rw All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
