import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    const closeOverlay = (e) => {
        if (e.target.id === 'enquireOverlay') {
            document.getElementById('enquireOverlay').style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    return (
        <div className="font-sans antialiased text-[#0b1220] bg-white overflow-x-hidden">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            {/* Enquire Overlay */}
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity duration-300 backdrop-blur-sm hidden"
                id="enquireOverlay"
                onClick={closeOverlay}>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex w-full max-w-4xl mx-auto border border-white/20" onClick={(e) => e.stopPropagation()}>
                    <div className="w-full md:w-1/2 p-8 lg:p-12">
                        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                        <p className="text-muted mb-6">Tell us about your project requirements.</p>
                        <form className="space-y-4">
                            <input type="text" placeholder="Name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[#6C4CF0] focus:ring-1 focus:ring-[#6C4CF0]" />
                            <input type="email" placeholder="Email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[#6C4CF0] focus:ring-1 focus:ring-[#6C4CF0]" />
                            <div className="grid grid-cols-2 gap-4">
                                <input type="tel" placeholder="Phone"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[#6C4CF0] focus:ring-1 focus:ring-[#6C4CF0]" />
                                <input type="text" placeholder="Service"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[#6C4CF0] focus:ring-1 focus:ring-[#6C4CF0]" />
                            </div>
                            <textarea rows="3" placeholder="Short project summary"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[#6C4CF0] focus:ring-1 focus:ring-[#6C4CF0]"></textarea>
                            <button className="w-full py-3 bg-[#6C4CF0] text-white font-bold rounded-lg hover:bg-[#5b3ddb]">Submit a
                                Message</button>
                        </form>
                    </div>
                    <div className="hidden md:block w-1/2 relative">
                        <img src="/assets/images/enquire.png" alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
