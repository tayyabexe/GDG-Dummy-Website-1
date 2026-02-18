import React from 'react';
import Navbar from './Navbar';
import ChatWidget from './ChatWidget';

const Layout = ({ children }) => {
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-google-blue selection:text-white">
            <Navbar />
            <main className="pt-24 lg:pt-32">
                {children}
            </main>

            {/* Advanced Tech Footer - Gaming/Nerd Vibe */}
            <footer className="bg-[#0f0f0f] mt-32 relative overflow-hidden group">
                {/* Gradient Border */}
                <div className="h-1 w-full bg-gradient-to-r from-google-blue via-google-red to-google-yellow z-20 relative"></div>

                {/* Geometric Shapes Background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Circle - Blue */}
                    <div className="absolute -top-10 -left-10 w-64 h-64 border-2 border-google-blue/20 rounded-full blur-[2px] animate-[spin_10s_linear_infinite]" />
                    <div className="absolute top-20 left-10 w-20 h-20 bg-google-blue/10 rounded-full blur-xl" />

                    {/* Triangle - Red (CSS Clip Path) */}
                    <div className="absolute top-10 right-20 w-32 h-32 bg-google-red/10 blur-xl clip-path-triangle" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                    <div className="absolute top-0 right-10 w-40 h-40 border-2 border-google-red/20 opacity-30" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />

                    {/* Square - Green */}
                    <div className="absolute bottom-20 left-1/3 w-24 h-24 border-2 border-google-green/20 rotate-12 blur-[1px]" />
                    <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-google-green/5 blur-2xl rounded-xl" />

                    {/* Cross/Plus - Yellow */}
                    <div className="absolute bottom-10 right-10 text-9xl text-google-yellow/5 font-black select-none">+</div>
                </div>

                <div className="container mx-auto px-6 py-16 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        {/* Col 1: Brand */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="text-google-blue">&lt;</span>
                                GDG Wah
                                <span className="text-google-green">/&gt;</span>
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Empowering developers at COMSATS Wah. We are a community of innovators, builders, and dreamers.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-google-blue hover:text-white transition-all">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-google-blue hover:text-white transition-all">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-google-blue hover:text-white transition-all">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a>
                            </div>
                        </div>

                        {/* Col 2: Explore */}
                        <div>
                            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Explore</h3>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><a href="/events" className="hover:text-google-blue transition-colors">Upcoming Events</a></li>
                                <li><a href="/team" className="hover:text-google-blue transition-colors">Our Team</a></li>
                                <li><a href="/resources" className="hover:text-google-blue transition-colors">Learning Resources</a></li>
                                <li><a href="/gallery" className="hover:text-google-blue transition-colors">Photo Gallery</a></li>
                            </ul>
                        </div>

                        {/* Col 3: Legal */}
                        <div>
                            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Community</h3>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-google-blue transition-colors">Code of Conduct</a></li>
                                <li><a href="#" className="hover:text-google-blue transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-google-blue transition-colors">FAQ</a></li>
                                <li><a href="#" className="hover:text-google-blue transition-colors">Sponsorships</a></li>
                            </ul>
                        </div>

                        {/* Col 4: Mini Contact (New) */}
                        <div>
                            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Connect</h3>
                            <p className="text-gray-500 text-xs mb-4">Drop us a line or subscribe to updates.</p>
                            <form className="flex item-center">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="bg-transparent border-b border-white/20 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-google-blue w-full text-sm transition-colors"
                                />
                                <button type="button" className="text-gray-400 hover:text-white ml-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-600">
                        <p>&copy; {new Date().getFullYear()} GDG Wah Campus. Built with React & Tailwind.</p>
                    </div>
                </div>
            </footer>
            <ChatWidget />
        </div>
    );
};

export default Layout;
