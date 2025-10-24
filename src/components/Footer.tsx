'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import logoSrc from '../../public/images/branding/NOVA Wushu Circle.png'

import {
    NOVA_FB,
    NOVA_INSTA,
    NOVA_YT,
    WUSHU_TOOLKIT,
    APPAREL_STORE
} from '../data/links'

interface FooterLink {
  name: string;
  href: string;
  target?: string;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks: { resources: FooterLink[] } = {
    resources: [
      { name: 'Apparel Store', href: APPAREL_STORE, target: '_blank' },
      { name: 'Wushu Toolkit', href: WUSHU_TOOLKIT, target: '_blank' },
    ],
  };

  const socialLinks = [
    {
      name: 'Facebook',
      href: NOVA_FB,
      icon: Facebook,
      target: '_blank',
    },
    {
      name: 'Instagram',
      href: NOVA_INSTA,
      icon: Instagram,
      target: '_blank',
    },
    {
      name: 'YouTube',
      href: NOVA_YT,
      icon: Youtube,
      target: '_blank',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Academy Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 relative rounded-full overflow-hidden bg-primary flex-shrink-0">
                            <Image
                                src={logoSrc}
                                alt="NOVA Wushu Academy Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
              <span className="text-xl font-bold">NOVA Wushu Academy</span>
            </div>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>
                  <div>14088 G Sullyfield Circle</div>
                  <div>Chantilly, VA 20151</div>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>(703) 953-3115</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>contact@novawushuacademy.com</span>
              </div>
            </div>
          </motion.div>

          {/* Resources & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                    target={link.target || '_self'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-md font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                  aria-label={social.name}
                  target={social.target || '_blank'}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest news about classes, competitions, and events.
            </p>
            <div className="flex gap-2 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white placeholder-gray-400"
              />
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; {currentYear} NOVA Wushu Academy. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
