import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Twitter, Linkedin, Github } from 'lucide-react';
import { leadership } from '../data/mockData';
import Partners from '../components/Partners';

const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <div className="overflow-x-hidden bg-[#0a0a0a] text-white">
            {/* Hero Section - The Identity Style */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Abstract Tech Background */}
                <div className="absolute inset-0 w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-google-blue/20 via-[#0a0a0a] to-[#0a0a0a] opacity-50"></div>
                    <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-google-blue/10 rounded-full blur-[100px] mix-blend-screen animate-pulse"></motion.div>
                    <motion.div style={{ y: y2 }} className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-google-red/10 rounded-full blur-[80px] mix-blend-screen"></motion.div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-7xl md:text-9xl font-black tracking-tighter mb-4 leading-none select-none"
                    >
                        <span className="text-google-blue inline-block hover:scale-105 transition-transform cursor-default">Hello,</span>
                        <br className="md:hidden" />
                        <span className="text-white inline-block hover:scale-105 transition-transform cursor-default ml-4 md:ml-8">Wah</span>
                        <span className="text-google-red inline-block align-top ml-2 animate-[blink_1s_infinite] text-6xl md:text-8xl">|</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-xl md:text-2xl font-light text-gray-400 max-w-2xl mx-auto mb-10 tracking-wide"
                    >
                        <span className="font-bold text-white">Google Developer Group</span>: The student chapter for innovators.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <a href="#join" className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-google-blue text-google-blue font-bold tracking-wider hover:text-white transition-colors">
                            <span className="absolute inset-0 w-full h-full bg-google-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                            <span className="relative flex items-center gap-3">
                                Become a Member <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs tracking-widest uppercase"
                >
                    <span>Scroll to Explore</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-google-blue to-transparent"></div>
                </motion.div>
            </section>

            {/* Quote Section - Redesigned */}
            <section className="py-32 bg-[#050505] relative">
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <p className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-400 to-gray-600 leading-tight mb-8">
                            "The best way to predict the future is to <span className="text-white border-b-2 border-google-blue">invent it</span>."
                        </p>
                        <p className="text-lg text-google-blue uppercase tracking-widest font-bold">— Alan Kay</p>
                    </motion.div>
                </div>
            </section>

            {/* Leadership Section - Dark Mode with Google Background */}
            <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-google-blue/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-google-red/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-google-yellow/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8"
                    >
                        <div>
                            <span className="text-google-green font-mono text-sm tracking-wider mb-2 block">01. THE TEAM</span>
                            <h2 className="text-5xl font-bold text-white tracking-tight">Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-google-blue to-google-green">Architects</span></h2>
                        </div>
                        <p className="text-gray-400 max-w-md mt-6 md:mt-0">
                            The passionate individuals leading the charge at GDG Wah Campus.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {leadership.map((leader, index) => (
                            <motion.div
                                key={index}
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 50 }}
                                transition={{ delay: index * 0.1 }}
                                className={`group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-2 hover:${leader.color.replace('text', 'border')} hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
                            >
                                <div className="aspect-[4/5] relative overflow-hidden">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <span className="inline-block bg-google-blue/20 text-google-blue text-xs font-bold px-2 py-1 rounded mb-2 backdrop-blur-sm border border-google-blue/30">
                                                {leader.role}
                                            </span>
                                            <h3 className="text-xl font-bold text-white mb-1 leading-tight">{leader.name}</h3>
                                            <p className={`text-sm font-bold uppercase tracking-wide ${leader.color}`}>{leader.title}</p>
                                            <p className="text-gray-500 text-xs uppercase tracking-wide mt-1">{leader.dept}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <Partners />
        </div>
    );
};

export default Home;
