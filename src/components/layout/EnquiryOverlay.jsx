import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnquiryOverlay = ({ isOpen, onClose }) => {
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

    // Reset status when overlay opens
    useEffect(() => {
        if (isOpen) {
            setFormStatus('idle');
        }
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        // Simulate API call and "System Processing"
        setTimeout(() => {
            setFormStatus('success');
            setTimeout(() => {
                onClose();
            }, 2000);
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-['Inter',sans-serif]">
                    {/* High-End Tech Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
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
    );
};

export default EnquiryOverlay;
