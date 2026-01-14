import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="border-t border-[#F2F4F7]"></div>

            <div className="py-[40px] flex items-center justify-center">
                <div className="font-bold text-[24px] uppercase tracking-wide text-[#0b1220]">EVOLVEX AI</div>
            </div>

            <div className="border-t border-[#F2F4F7]"></div>

            <div className="max-w-[1000px] mx-auto px-5 pt-[64px] pb-[120px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    <div className="flex flex-col items-start gap-6">
                        <h3 className="font-semibold text-[20px] text-[#0b1220]">Contact Information</h3>
                        <ul className="space-y-4 text-[#475467] text-[16px]">
                            <li>support@evolvex.ai</li>
                            <li>+91 123 654 7890</li>
                        </ul>
                        <div className="flex items-center gap-3 mt-2">
                            <a href="#" className="group w-10 h-10 flex items-center justify-center bg-[#F2F4F7] rounded-[4px] transition-all hover:from-[#fafaff] hover:to-[#f7f9ff]">
                                <img src="/assets/svg/instagram.svg" alt="Instagram" className="w-5 h-5 object-contain transition-all group-hover:brightness-0 group-hover:invert" />
                            </a>
                            <a href="#" className="group w-10 h-10 flex items-center justify-center bg-[#F2F4F7] rounded-[4px] transition-all hover:from-[#fafaff] hover:to-[#f7f9ff]">
                                <img src="/assets/svg/linked_in.svg" alt="LinkedIn" className="w-5 h-5 object-contain transition-all group-hover:brightness-0 group-hover:invert" />
                            </a>
                            <a href="#" className="group w-10 h-10 flex items-center justify-center bg-[#F2F4F7] rounded-[4px] transition-all hover:from-[#fafaff] hover:to-[#f7f9ff]">
                                <img src="/assets/svg/f.svg" alt="Facebook" className="w-5 h-5 object-contain transition-all group-hover:brightness-0 group-hover:invert" />
                            </a>
                            <a href="#" className="group w-10 h-10 flex items-center justify-center bg-[#F2F4F7] rounded-[4px] transition-all hover:from-[#fafaff] hover:to-[#f7f9ff]">
                                <img src="/assets/svg/twitter.svg" alt="Twitter" className="w-5 h-5 object-contain transition-all group-hover:brightness-0 group-hover:invert" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-6">
                        <h3 className="font-semibold text-[20px] text-[#0b1220]">Blog</h3>
                        <ul className="space-y-4 text-[#475467] text-[16px]">
                            <li><a href="#" className="hover:text-[#6C4CF0] transition-colors">Career</a></li>
                            <li><a href="#" className="hover:text-[#6C4CF0] transition-colors">Our Team</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start gap-6">
                        <h3 className="font-semibold text-[20px] text-[#0b1220]">About</h3>
                        <ul className="space-y-4 text-[#475467] text-[16px]">
                            <li><a href="#" className="hover:text-[#6C4CF0] transition-colors">Contacts</a></li>
                            <li><a href="#" className="hover:text-[#6C4CF0] transition-colors">About us</a></li>
                            <li><a href="#" className="hover:text-[#6C4CF0] transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start gap-6">
                        <h3 className="font-semibold text-[20px] text-[#0b1220]">Product</h3>
                        <ul className="space-y-4 text-[#475467] text-[16px]">
                            <li><a href="#" className="hover:text-[#6C4CF0] transition-colors">Terms of use</a></li>
                            <li><a href="#" className="hover:text-[#6C4CF0] transition-colors">Privacy policy</a></li>
                            <li><a href="#" className="hover:text-[#6C4CF0] transition-colors">Terms of service</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
