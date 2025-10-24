'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import {
    WUSHU_TOOLKIT,
    APPAREL_STORE
} from '../data/links';

import logoSrc from '../../public/images/branding/NOVA Wushu Circle.png'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', href: '/about' },
        { name: 'Coaches', href: '/coaches' },
        { name: 'Schedule', href: '/schedule' },
        { name: 'Hall of Fame', href: '/hall-of-fame' },
        { name: 'Contact', href: '/contact' },
    ];

    const studentResources = [
        { name: 'Apparel Store', href: APPAREL_STORE, description: 'Shop for NOVA Wushu apparel' },
        { name: 'Wushu Toolkit', href: WUSHU_TOOLKIT, description: 'Custom tools for athletes' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        {/* Circle container */}
                        <div className="w-10 h-10 relative rounded-full overflow-hidden bg-primary flex-shrink-0">
                            <Image
                                src={logoSrc}
                                alt="NOVA Wushu Academy Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Site Name */}
                        <span className="text-xl font-bold text-primary">NOVA Wushu Academy</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${pathname === item.href
                                    ? 'text-primary'
                                    : 'text-gray-700 hover:text-primary'
                                    }`}
                            >
                                {item.name}
                                {pathname === item.href && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                        initial={false}
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}

                        {/* Student Resources Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200">
                                <span>Student Resources</span>
                                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <div className="py-2">
                                    {studentResources.map((resource) => (
                                        <a
                                            key={resource.name}
                                            href={resource.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
                                        >
                                            <div className="font-medium">{resource.name}</div>
                                            <div className="text-xs text-gray-500">{resource.description}</div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-200"
                    >
                        <div className="px-4 py-4 space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${pathname === item.href
                                        ? 'text-primary bg-primary/10'
                                        : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navigation;
