import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
    const location = useLocation();

    // Close overlay on route change
    useEffect(() => {
        setIsOverlayOpen(false);
        setFormStatus('idle');
    }, [location.pathname]);

    // Lock body scroll when overlay is open
    useEffect(() => {
        if (isOverlayOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOverlayOpen]);

    const openOverlay = () => setIsOverlayOpen(true);
    const closeOverlay = () => {
        setIsOverlayOpen(false);
        setTimeout(() => setFormStatus('idle'), 300);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        // Simulate API call and "System Processing"
        setTimeout(() => {
            setFormStatus('success');
            setTimeout(() => {
                closeOverlay();
            }, 2000);
        }, 2000);
    };

    // Old closeOverlay for backup reference
    const closeOverlayOld = (e) => {
        if (e.target.id === 'enquireOverlay') {
            document.getElementById('enquireOverlay').style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    return (
        <div className="font-sans antialiased text-[#0b1220] bg-white">
            <Navbar onOpenOverlay={openOverlay} />
            <main>
                <Outlet />
            </main>
            <Footer />

            {/* ===== NEW ENQUIRE OVERLAY (FLOATING ENGINEERING CARD) ===== */}
            <AnimatePresence>
                {isOverlayOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-['Inter',sans-serif]">
                        {/* High-End Tech Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeOverlay}
                            className="absolute inset-0 bg-black/10 backdrop-blur-[2px] transition-all duration-500"
                        />

                        {/* Ambient Light Animation (Behind Card) */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                            <div className="absolute w-[800px] h-[800px] bg-[#6C4CF4]/10 blur-[140px] rounded-full top-[-200px] left-[-200px] animate-slowFloat" />
                            <div className="absolute w-[700px] h-[700px] bg-blue-400/10 blur-[160px] rounded-full bottom-[-200px] right-[-200px] animate-slowFloat2" />
                        </div>

                        {/* Glass System Panel */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: 15 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-[1050px] bg-white rounded-[24px] shadow-[0_40px_120px_rgba(100,100,150,0.15)] overflow-hidden flex flex-col md:flex-row max-h-[95vh] md:min-h-[700px] transition-all duration-500 hover:shadow-[0_60px_160px_rgba(80,80,140,0.2)] hover:-translate-y-1"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Top System Bar */}
                            <div className="absolute top-0 left-0 w-full h-[44px] flex items-center justify-between px-6 border-b border-black/5 bg-white/40 z-20 pointer-events-none">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-sm"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-sm"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-sm"></div>
                                </div>
                                <div className="text-[10px] font-bold tracking-[0.2em] text-black/30">PROJECT INQUIRY PORTAL</div>
                            </div>

                            {/* Main Grid Content */}
                            <div className="flex flex-col md:flex-row w-full mt-[44px]">

                                {/* LEFT SIDE (Brand Voice) */}
                                <div className="w-full md:w-[38%] p-8 md:p-14 flex flex-col justify-center relative">
                                    <div className="relative z-10">
                                        <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3 leading-tight tracking-tight font-['Montserrat',sans-serif]">
                                            Start Your<br />
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C4CF4] to-[#3937F3]">Project Conversation</span>
                                        </h2>
                                        <p className="text-[#5F6368] text-sm leading-relaxed mb-8">
                                            Share your requirements. Our engineering team will analyze your needs and architect the right solution.
                                        </p>

                                        {/* Minimal decorative line */}
                                        <div className="hidden md:block w-12 h-1 bg-[#6C4CF4]/20 rounded-full"></div>
                                    </div>

                                    {/* Subtle sheen decoration */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8),transparent_70%)] pointer-events-none opacity-50"></div>
                                </div>

                                {/* Vertical Gradient Divider */}
                                <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-[#e6e9ff] to-transparent self-stretch mx-0"></div>

                                {/* RIGHT SIDE (Form) */}
                                <div className="w-full md:w-[62%] p-8 md:p-14 bg-white flex flex-col">
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1 justify-center">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-1.5 group">
                                                <label className="text-[10px] font-bold text-[#8A8D96] uppercase tracking-wider ml-1 group-focus-within:text-[#6C4CF4] transition-colors">Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full bg-white border border-[#e5e7ff] rounded-xl px-4 py-3 text-[#1a1a1a] text-sm font-medium outline-none transition-all duration-300 placeholder:text-black/20 hover:border-[#6C4CF4] hover:shadow-[0_0_0_4px_rgba(108,76,244,0.06)] focus:border-[#6C4CF4] focus:shadow-[0_0_0_4px_rgba(108,76,244,0.12)]"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            <div className="space-y-1.5 group">
                                                <label className="text-[10px] font-bold text-[#8A8D96] uppercase tracking-wider ml-1 group-focus-within:text-[#6C4CF4] transition-colors">Email</label>
                                                <input
                                                    type="email"
                                                    required
                                                    className="w-full bg-white border border-[#e5e7ff] rounded-xl px-4 py-3 text-[#1a1a1a] text-sm font-medium outline-none transition-all duration-300 placeholder:text-black/20 hover:border-[#6C4CF4] hover:shadow-[0_0_0_4px_rgba(108,76,244,0.06)] focus:border-[#6C4CF4] focus:shadow-[0_0_0_4px_rgba(108,76,244,0.12)]"
                                                    placeholder="email@company.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-1.5 group">
                                                <label className="text-[10px] font-bold text-[#8A8D96] uppercase tracking-wider ml-1 group-focus-within:text-[#6C4CF4] transition-colors">Phone</label>
                                                <input
                                                    type="tel"
                                                    className="w-full bg-white border border-[#e5e7ff] rounded-xl px-4 py-3 text-[#1a1a1a] text-sm font-medium outline-none transition-all duration-300 placeholder:text-black/20 hover:border-[#6C4CF4] hover:shadow-[0_0_0_4px_rgba(108,76,244,0.06)] focus:border-[#6C4CF4] focus:shadow-[0_0_0_4px_rgba(108,76,244,0.12)]"
                                                    placeholder="+1 (555) 000-0000"
                                                />
                                            </div>
                                            <div className="space-y-1.5 group">
                                                <label className="text-[10px] font-bold text-[#8A8D96] uppercase tracking-wider ml-1 group-focus-within:text-[#6C4CF4] transition-colors">Service</label>
                                                <input
                                                    type="text"
                                                    className="w-full bg-white border border-[#e5e7ff] rounded-xl px-4 py-3 text-[#1a1a1a] text-sm font-medium outline-none transition-all duration-300 placeholder:text-black/20 hover:border-[#6C4CF4] hover:shadow-[0_0_0_4px_rgba(108,76,244,0.06)] focus:border-[#6C4CF4] focus:shadow-[0_0_0_4px_rgba(108,76,244,0.12)]"
                                                    placeholder="Product Engineering"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5 group flex-1">
                                            <label className="text-[10px] font-bold text-[#8A8D96] uppercase tracking-wider ml-1 group-focus-within:text-[#6C4CF4] transition-colors">Project Summary</label>
                                            <textarea
                                                className="w-full min-h-[120px] bg-[#FAFBFF] border border-[#e5e7ff] rounded-xl px-4 py-3 text-[#1a1a1a] text-sm font-medium outline-none transition-all duration-300 placeholder:text-black/20 resize-none leading-relaxed hover:border-[#6C4CF4] hover:shadow-[0_0_0_4px_rgba(108,76,244,0.06)] focus:border-[#6C4CF4] focus:shadow-[0_0_0_4px_rgba(108,76,244,0.12)]"
                                                placeholder="Briefly describe your goals, timeline, and technical needs..."
                                            ></textarea>
                                        </div>

                                        <div className="pt-2 flex justify-end">
                                            <button
                                                disabled={formStatus !== 'idle'}
                                                className={`
                                                    relative overflow-hidden rounded-xl px-8 py-3 font-semibold transition-all duration-300 ease-out
                                                    ${formStatus === 'success'
                                                        ? 'bg-[#22c55e] shadow-[0_10px_25px_rgba(34,197,94,0.25)] text-white'
                                                        : 'bg-[#6C4CF4] text-white shadow-[0_10px_25px_rgba(108,76,244,0.25)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(108,76,244,0.35)] active:scale-95'
                                                    }
                                                    
                                                    /* Energy Charge Light Sweep */
                                                    before:absolute before:inset-0 
                                                    before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent 
                                                    before:-translate-x-full hover:before:translate-x-full 
                                                    before:transition-transform before:duration-700
                                                    
                                                    /* Button Glow */
                                                    after:absolute after:inset-0 after:rounded-xl after:bg-[#6C4CF4]/20 after:blur-xl after:-z-10
                                                `}
                                            >
                                                <span className="relative z-10 flex items-center gap-2">
                                                    {formStatus === 'idle' && (
                                                        <>
                                                            Submit a Message
                                                        </>
                                                    )}

                                                    {formStatus === 'submitting' && (
                                                        <>
                                                            <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
                                                            Initializing...
                                                        </>
                                                    )}

                                                    {formStatus === 'success' && (
                                                        <motion.div
                                                            initial={{ scale: 0.5, opacity: 0 }}
                                                            animate={{ scale: 1, opacity: 1 }}
                                                            className="flex items-center gap-2"
                                                        >
                                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            Request Sent
                                                        </motion.div>
                                                    )}
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* ===== OLD ENQUIRE OVERLAY BACKUP (DARK VERSION) ===== */
                /*
                <AnimatePresence>
                    {isOverlayOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                            {/* Backdrop * /}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={closeOverlay}
                                className="absolute inset-0 bg-[#050505]/60 backdrop-blur-xl transition-all duration-300"
                            />
    
                            {/* Modal Container * /}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="relative w-full max-w-[900px] bg-[#0A0A0A] rounded-2xl sm:rounded-3xl border border-white/10 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:h-[600px]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Mac-Style Header (Absolute top) * /}
                                <div className="absolute top-0 left-0 w-full h-12 flex items-center px-5 gap-2 z-20 pointer-events-none">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-80"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27C93F] opacity-80"></div>
                                </div>
    
                                {/* LEFT PANEL: Context / Intelligence * /}
                                <div className="relative w-full md:w-[40%] bg-[#111111]/80 p-8 pt-16 md:p-10 md:pt-16 flex flex-col justify-between overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
                                    {/* Decorative elements * /}
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-900/20 blur-[100px] rounded-full"></div>
    
                                    <div className="relative z-10">
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-['Montserrat',sans-serif] leading-tight">
                                            Start an Engineering Conversation
                                        </h2>
                                        <p className="text-white/60 text-sm leading-relaxed mb-8">
                                            Tell us what you are building. We will help you architect it.
                                        </p>
    
                                        {/* Highlights * /}
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 group">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
                                                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">Product Engineering</span>
                                            </div>
                                            <div className="flex items-center gap-3 group">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                                                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">Custom Software</span>
                                            </div>
                                            <div className="flex items-center gap-3 group">
                                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
                                                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">Mobile & AI Systems</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Bottom Animated Divider Line * /}
                                    <div className="relative w-full h-[1px] bg-white/10 mt-8 md:mt-0 overflow-hidden">
                                         <div className="absolute top-0 left-0 h-full w-[50%] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-shimmer" style={{ animationDuration: '3s' }}></div>
                                    </div>
                                </div>
    
                                {/* RIGHT PANEL: Smart Form * /}
                                <div className="relative w-full md:w-[60%] bg-[#0A0A0A] p-8 md:p-10 pt-8 md:pt-16 flex flex-col">
                                    <form className="flex-1 flex flex-col gap-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] uppercase tracking-wider font-semibold text-white/40 ml-1">Name</label>
                                                <input 
                                                    type="text" 
                                                    className="w-full bg-[#161616] border border-white/5 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all font-['Inter',sans-serif] text-sm"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] uppercase tracking-wider font-semibold text-white/40 ml-1">Work Email</label>
                                                <input 
                                                    type="email" 
                                                    className="w-full bg-[#161616] border border-white/5 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all font-['Inter',sans-serif] text-sm"
                                                    placeholder="john@company.com"
                                                />
                                            </div>
                                        </div>
    
                                        <div className="space-y-1.5">
                                            <label className="text-[11px] uppercase tracking-wider font-semibold text-white/40 ml-1">Company <span className="normal-case opacity-50">(Optional)</span></label>
                                            <input 
                                                type="text" 
                                                className="w-full bg-[#161616] border border-white/5 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all font-['Inter',sans-serif] text-sm"
                                                placeholder="Company Name"
                                            />
                                        </div>
    
                                        <div className="space-y-1.5 flex-1 flex flex-col">
                                            <label className="text-[11px] uppercase tracking-wider font-semibold text-white/40 ml-1">What are you building?</label>
                                            <textarea 
                                                className="w-full flex-1 bg-[#161616] border border-white/5 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none font-['Inter',sans-serif] text-sm leading-relaxed min-h-[100px]"
                                                placeholder="Tell us about your project goals, technical requirements, or timeline..."
                                            ></textarea>
                                        </div>
    
                                        <div className="pt-2">
                                            <button className="group w-full relative bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] hover:from-[#6d28d9] hover:to-[#4c1d95] text-white font-medium py-3.5 rounded-xl shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)] transition-all duration-300 transform active:scale-[0.99] overflow-hidden">
                                                <span className="relative z-10 flex items-center justify-center gap-2">
                                                    Initiate Consultation
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                                </span>
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
                                            </button>
                                            <p className="text-center text-white/30 text-[11px] mt-3">
                                                Our engineering team will respond within 24 hours
                                            </p>
                                        </div>
                                    </form>
    
                                    {/* Trust Signal (Bottom Right) * /}
                                    <div className="hidden md:block absolute bottom-4 right-6 pointer-events-none">
                                        <span className="text-[10px] uppercase tracking-widest text-white/20 font-medium">Engineering-led. AI-powered.</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
                */
            }

            {/* ===== ENQUIRE OVERLAY (OLD VERSION – BACKUP) ===== */
                /*
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 transition-opacity duration-300 hidden"
                    id="enquireOverlay"
                    onClick={closeOverlayOld}>
    
                    {/* Main Modal Frame - 1110px x 800px from Figma * /}
                    <div
                        className="relative bg-white rounded-[32px] shadow-2xl overflow-hidden w-[1110px] h-[800px] max-w-[95vw] max-h-[95vh] scale-[0.6] sm:scale-[0.8] md:scale-90 lg:scale-100 transition-transform origin-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Background SVGs * /}
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
    
                        {/* Right Side Image Layer * /}
                        {/* Width: 500px, Height: 715px, Left: 485px, Top: 115px (Approx based on Figma CSS) * /}
                        <div className="absolute left-[400px] lg:left-[485px] top-[50px] lg:top-[115px] w-[500px] h-[680px] z-10 hidden md:block">
                            <div className="relative w-full h-full">
                                <img
                                    src="/assets/images/enquire.png"
                                    alt="Team"
                                    className="w-[500px] h-[600px] object-cover rounded-[60px] shadow-lg"
                                />
    
                            </div>
                        </div>
    
                        {/* Contact Card (Left Side) * /}
                        {/* Width: 500px, Height: 600px, Left: 106px, Top: 195px * /}
                        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:left-[50px] lg:left-[106px] md:top-[100px] lg:top-[150px] z-20 w-full max-w-[500px]">
                            {/* Styles: background: rgba(255, 255, 255, 0.5); backdrop-filter: blur(13.6px); border-radius: 60px; box-shadow... * /}
                            <div className="relative w-[340px] sm:w-[450px] lg:w-[500px] bg-white/50 backdrop-blur-[14px] rounded-[40px] lg:rounded-[60px] p-6 lg:p-10 shadow-[0px_3px_49px_9px_rgba(0,0,0,0.06)] border border-white/40 flex flex-col items-center">
    
                                {/* Title Section * /}
                                <div className="flex flex-col items-center gap-2 mb-6 lg:mb-10 w-full">
                                    <h2 className="font-['Montserrat',sans-serif] font-bold text-[24px] lg:text-[32px] text-center text-black/90 leading-tight">
                                        Contact Us
                                    </h2>
                                    <p className="font-['Montserrat',sans-serif] font-semibold text-[12px] text-center text-black/60">
                                        Tell us about your project requirements.
                                    </p>
                                </div>
    
                                {/* Form Forms * /}
                                <form className="w-full flex flex-col gap-3 lg:gap-5">
                                    {/* Name Input * /}
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full h-[40px] px-4 rounded-[8px] border border-black/40 bg-white/70 font-['Montserrat',sans-serif] text-[14px] outline-none focus:border-[#6C4CF0] focus:ring-1 focus:ring-[#6C4CF0] placeholder:text-black/50 transition-all"
                                    />
    
                                    {/* Email Input * /}
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full h-[40px] px-4 rounded-[8px] border border-black/40 bg-white/70 font-['Montserrat',sans-serif] text-[14px] outline-none focus:border-[#6C4CF0] focus:ring-1 focus:ring-[#6C4CF0] placeholder:text-black/50 transition-all"
                                    />
    
                                    {/* Phone Input * /}
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        className="w-full h-[40px] px-4 rounded-[8px] border border-black/40 bg-white/70 font-['Montserrat',sans-serif] text-[14px] outline-none focus:border-[#6C4CF0] focus:ring-1 focus:ring-[#6C4CF0] placeholder:text-black/50 transition-all"
                                    />
    
                                    {/* Service Input * /}
                                    <input
                                        type="text"
                                        placeholder="Service"
                                        className="w-full h-[40px] px-4 rounded-[8px] border border-black/40 bg-white/70 font-['Montserrat',sans-serif] text-[14px] outline-none focus:border-[#6C4CF0] focus:ring-1 focus:ring-[#6C4CF0] placeholder:text-black/50 transition-all"
                                    />
    
                                    {/* Message Textarea * /}
                                    <textarea
                                        rows="3"
                                        placeholder="Short project summary"
                                        className="w-full h-[80px] px-4 py-2 rounded-[8px] border border-black/40 bg-white/90 font-['Montserrat',sans-serif] text-[14px] outline-none focus:border-[#6C4CF0] focus:ring-1 focus:ring-[#6C4CF0] placeholder:text-black/40 resize-none transition-all"
                                    ></textarea>
    
                                    {/* Submit Button * /}
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
                */
            }
        </div>
    );
};

export default Layout;
