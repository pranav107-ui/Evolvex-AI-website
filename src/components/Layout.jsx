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
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 transition-opacity duration-300 hidden"
                id="enquireOverlay"
                onClick={closeOverlay}>

                {/* Main Modal Frame - 1110px x 800px from Figma */}
                <div
                    className="relative bg-white rounded-[32px] shadow-2xl overflow-hidden w-[1110px] h-[800px] max-w-[95vw] max-h-[95vh] scale-[0.6] sm:scale-[0.8] md:scale-90 lg:scale-100 transition-transform origin-center"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Background SVGs */}
                    <img
                        src="/assets/svg/Left-top.svg"
                        alt=""
                        className="absolute top-[120px] -left-[0px] w-[100px] h-auto object-contain pointer-events-none z-30"
                    />
                    <img
                        src="/assets/svg/Right-bottom.svg"
                        alt=""
                        className="absolute -bottom-[-40px] -right-[-10px] w-[280px] h-auto object-contain pointer-events-none z-30"
                    />

                    {/* Right Side Image Layer */}
                    {/* Width: 500px, Height: 715px, Left: 485px, Top: 115px (Approx based on Figma CSS) */}
                    <div className="absolute left-[400px] lg:left-[485px] top-[50px] lg:top-[115px] w-[500px] h-[680px] z-10 hidden md:block">
                        <div className="relative w-full h-full">
                            <img
                                src="/assets/images/enquire.png"
                                alt="Team"
                                className="w-[500px] h-[600px] object-cover rounded-[60px] shadow-lg"
                            />
                            
                        </div>
                    </div>

                    {/* Contact Card (Left Side) */}
                    {/* Width: 500px, Height: 600px, Left: 106px, Top: 195px */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:left-[50px] lg:left-[106px] md:top-[100px] lg:top-[150px] z-20 w-full max-w-[500px]">
                        {/* Styles: background: rgba(255, 255, 255, 0.5); backdrop-filter: blur(13.6px); border-radius: 60px; box-shadow... */}
                        <div className="relative w-[340px] sm:w-[450px] lg:w-[500px] bg-white/50 backdrop-blur-[14px] rounded-[40px] lg:rounded-[60px] p-6 lg:p-10 shadow-[0px_3px_49px_9px_rgba(0,0,0,0.06)] border border-white/40 flex flex-col items-center">

                            {/* Title Section */}
                            <div className="flex flex-col items-center gap-2 mb-6 lg:mb-10 w-full">
                                <h2 className="font-['Montserrat',sans-serif] font-bold text-[24px] lg:text-[32px] text-center text-black/90 leading-tight">
                                    Contact Us
                                </h2>
                                <p className="font-['Montserrat',sans-serif] font-semibold text-[12px] text-center text-black/60">
                                    Tell us about your project requirements.
                                </p>
                            </div>

                            {/* Form Forms */}
                            <form className="w-full flex flex-col gap-3 lg:gap-5">
                                {/* Name Input */}
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full h-[40px] px-4 rounded-[8px] border border-black/40 bg-white/70 font-['Montserrat',sans-serif] text-[14px] outline-none focus:border-[#6C4CF0] focus:ring-1 focus:ring-[#6C4CF0] placeholder:text-black/50 transition-all"
                                />

                                {/* Email Input */}
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full h-[40px] px-4 rounded-[8px] border border-black/40 bg-white/70 font-['Montserrat',sans-serif] text-[14px] outline-none focus:border-[#6C4CF0] focus:ring-1 focus:ring-[#6C4CF0] placeholder:text-black/50 transition-all"
                                />

                                {/* Phone Input */}
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    className="w-full h-[40px] px-4 rounded-[8px] border border-black/40 bg-white/70 font-['Montserrat',sans-serif] text-[14px] outline-none focus:border-[#6C4CF0] focus:ring-1 focus:ring-[#6C4CF0] placeholder:text-black/50 transition-all"
                                />

                                {/* Service Input */}
                                <input
                                    type="text"
                                    placeholder="Service"
                                    className="w-full h-[40px] px-4 rounded-[8px] border border-black/40 bg-white/70 font-['Montserrat',sans-serif] text-[14px] outline-none focus:border-[#6C4CF0] focus:ring-1 focus:ring-[#6C4CF0] placeholder:text-black/50 transition-all"
                                />

                                {/* Message Textarea */}
                                <textarea
                                    rows="3"
                                    placeholder="Short project summary"
                                    className="w-full h-[80px] px-4 py-2 rounded-[8px] border border-black/40 bg-white/90 font-['Montserrat',sans-serif] text-[14px] outline-none focus:border-[#6C4CF0] focus:ring-1 focus:ring-[#6C4CF0] placeholder:text-black/40 resize-none transition-all"
                                ></textarea>

                                {/* Submit Button */}
                                <div className="flex justify-center mt-2">
                                    <button className="w-[192px] h-[32px] flex items-center justify-center bg-[linear-gradient(118.41deg,rgba(180,85,243,0.86)_35.65%,#3937F3_100%)] text-white font-['Inter',sans-serif] font-semibold text-[13px] rounded-[12px] shadow-md hover:opacity-90 transition-opacity">
                                        Submit a Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
