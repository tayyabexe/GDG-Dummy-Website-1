import React from 'react';
import { motion } from 'framer-motion';

// Importing partner images
import gdscAir from '../assets/partners/Air University.png';
import gdscCui from '../assets/partners/GDGoC CUI Chapter Logo.png';
import datacamp from '../assets/partners/datacamp.png';
import github from '../assets/partners/github.png';

const Partners = () => {
    // Using local imports
    const partners = [
        {
            name: "GDSC Air University",
            logo: gdscAir
        },
        {
            name: "GDGoC CUI Chapter",
            logo: gdscCui
        },
        {
            name: "DataCamp",
            logo: datacamp
        },
        {
            name: "GitHub",
            logo: github
        }
    ];

    return (
        <section className="py-20 bg-[#080808] border-t border-white/5 relative overflow-hidden">
            {/* Tech Pattern Background */}
            <div className="absolute inset-0 w-full h-full bg-[#080808] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_-20%,#000_70%,transparent_100%)] z-0"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-2xl md:text-3xl font-bold text-white mb-12 tracking-tight"
                >
                    A Huge Thanks to Our <span className="text-google-blue">Outreach Partners</span>
                </motion.h2>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col items-center gap-4 cursor-pointer"
                        >
                            <div className="h-16 md:h-20 w-auto group-hover:scale-110 transition-all duration-500 ease-out transform">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                            <span className="text-gray-500 font-medium text-sm group-hover:text-google-blue transition-colors duration-300">
                                {partner.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Partners;
