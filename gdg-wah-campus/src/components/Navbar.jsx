import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Events', path: '/events' },
        { name: 'Team', path: '/team' },
        { name: 'Resources', path: '/resources' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <NavLink to="/" className="text-2xl font-bold flex items-center gap-2 group">
                    <span className="text-google-blue group-hover:animate-pulse">&lt;</span>
                    <span className="text-white">GDG</span>
                    <span className="bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent font-extrabold">Wah</span>
                    <span className="text-google-green group-hover:animate-pulse">/&gt;</span>
                </NavLink>

                {/* Desktop Search & Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {/* Search Bar - Techy */}
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-google-blue focus:border-transparent w-48 transition-all group-hover:w-64"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 group-hover:text-google-blue transition-colors" />
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-all relative group ${isActive ? 'text-google-blue' : 'text-gray-400 hover:text-white'
                                    }`
                                }
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-google-blue to-google-green transition-all group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                            </NavLink>
                        ))}
                    </div>

                    {/* Join Button */}
                    <a href="#join" className="relative px-6 py-2 rounded-full font-bold text-sm overflow-hidden group">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-google-blue to-google-green opacity-80 group-hover:opacity-100 transition-opacity"></span>
                        <span className="relative text-white z-10 flex items-center gap-2">
                            Join Chapter
                        </span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#111] border-t border-white/10 absolute w-full left-0 top-full shadow-2xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className="font-medium text-gray-300 hover:text-google-blue transition-colors text-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <a href="#join" className="bg-google-blue text-white px-5 py-3 rounded-lg text-center font-bold hover:bg-blue-600 transition-colors shadow-lg mt-4">
                                Join Chapter
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
