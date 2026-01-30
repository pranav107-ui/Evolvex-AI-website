import React from 'react';
import { Link } from 'react-router-dom';
import { LinkPreview } from "@/components/ui/link-preview";

const Footer = () => {
    return (
        <footer className="bg-white mt-24">

            {/* Top Divider */}
            <div className="border-t border-[#F2F4F7]"></div>

            {/* Brand Section */}
            <div className="py-16 flex items-center justify-center">
                <div className="font-bold text-[26px] uppercase tracking-widest text-[#0b1220]">
                    EVOLVEX AI
                </div>
            </div>

            <div className="border-t border-[#F2F4F7]"></div>

            {/* Main Footer Content */}
            <div className="max-w-[1100px] mx-auto px-6 pt-20 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-10 lg:gap-x-16">

                    {/* Contact */}
                    <div className="flex flex-col gap-7">
                        <h3 className="font-semibold text-[20px] text-[#0b1220]">Contact Information</h3>
                        <ul className="space-y-4 text-[#475467] text-[16px] leading-relaxed">
                            <li>support@evolvex.ai</li>
                            <li>+91 123 654 7890</li>
                        </ul>

                        <div className="flex items-center gap-4 pt-2">
                            {/* Instagram */}
                            <LinkPreview url="https://instagram.com" className="group w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-md transition-all duration-300">
                                <img src="/assets/svg/instagram-.svg" alt="Instagram" className="w-5 h-5 opacity-80 group-hover:opacity-100 transition" />
                            </LinkPreview>

                            {/* LinkedIn */}
                            <LinkPreview url="https://linkedin.com" className="group w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-md transition-all duration-300">
                                <img src="/assets/svg/Linked_in.svg" alt="LinkedIn" className="w-5 h-5 opacity-80 group-hover:opacity-100 transition" />
                            </LinkPreview>

                            {/* Facebook */}
                            <LinkPreview url="https://facebook.com" className="group w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-md transition-all duration-300">
                                <img src="/assets/svg/Facebook.svg" alt="Facebook" className="w-5 h-5 opacity-80 group-hover:opacity-100 transition" />
                            </LinkPreview>

                            {/* X / Twitter */}
                            <LinkPreview url="https://twitter.com" className="group w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-md transition-all duration-300">
                                <img src="/assets/svg/X-Twitter.svg" alt="Twitter" className="w-4 h-4 opacity-80 group-hover:opacity-100 transition" />
                            </LinkPreview>
                        </div>
                    </div>

                    {/* Blog */}
                    <div className="flex flex-col gap-7">
                        <h3 className="font-semibold text-[20px] text-[#0b1220]">Blog</h3>
                        <ul className="space-y-4 text-[#475467] text-[16px] leading-relaxed">
                            <li>
                                <Link to="/careers" className="hover:text-[#6C4CF0] transition-colors inline-flex items-center">
                                    Careers
                                    <span className="hiring-badge ml-2 px-3 py-1 text-xs font-semibold text-white rounded-md relative overflow-hidden">
                                        We’re hiring!
                                    </span>
                                </Link>

                            </li>
                            <li>
                                <Link to="/our-team" className="hover:text-[#6C4CF0] transition-colors">
                                    Our Team
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* About */}
                    <div className="flex flex-col gap-7">
                        <h3 className="font-semibold text-[20px] text-[#0b1220]">About</h3>
                        <ul className="space-y-4 text-[#475467] text-[16px] leading-relaxed">
                            <li><Link to="/contact" className="hover:text-[#6C4CF0] transition-colors">Contacts</Link></li>
                            <li><Link to="/about" className="hover:text-[#6C4CF0] transition-colors">About us</Link></li>
                            <li><Link to="/faq" className="hover:text-[#6C4CF0] transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Product */}
                    <div className="flex flex-col gap-7">
                        <h3 className="font-semibold text-[20px] text-[#0b1220]">Product</h3>
                        <ul className="space-y-4 text-[#475467] text-[16px] leading-relaxed">
                            <li><Link to="/terms-of-use" className="hover:text-[#6C4CF0] transition-colors">Terms of use</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-[#6C4CF0] transition-colors">Privacy policy</Link></li>
                            <li><Link to="/terms-of-service" className="hover:text-[#6C4CF0] transition-colors">Terms of service</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#F2F4F7] py-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Evolvex AI. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
