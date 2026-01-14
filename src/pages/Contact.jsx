import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section
                className="relative py-[80px] lg:py-[120px] pb-[100px] lg:pb-[140px] bg-[linear-gradient(120deg,#eef7ff_0%,#f6f9ff_40%,#fff2f7_100%)] overflow-hidden"
                data-animate="fade-up">
                <div className="w-full px-5 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center gap-[60px] lg:gap-[80px]">

                    {/* Left Content */}
                    <div className="max-w-[520px] mx-auto lg:mx-0 text-center lg:text-left">
                        <h1 className="text-[36px] lg:text-[48px] font-bold text-[#1f2937] mb-[18px]">Get in Touch</h1>
                        <p className="text-[16px] lg:text-[18px] leading-[1.7] text-[#6b7280]">
                            We are here to assist you with any enquiries related to our
                            services or collaborations. Share your message with us
                            and we will respond promptly.
                        </p>
                    </div>

                    {/* Right Visual */}
                    <div className="relative h-[360px] lg:h-[520px] flex items-center justify-center">
                        {/* Angled purple shape */}
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-[#6c4cf4] to-[#7b5cff] rounded-[24px] lg:[clip-path:polygon(22%_0%,100%_0%,100%_100%,42%_100%)] z-10 lg:rounded-[24px]">
                        </div>

                        {/* Circular shape */}
                        <div
                            className="absolute w-[180px] h-[180px] lg:w-[220px] lg:h-[220px] rounded-full bg-gradient-to-br from-[#7dd3fc] to-[#8b5cf6] top-[20px] lg:top-[40px] left-[20px] lg:left-[-60px] z-20 opacity-85">
                        </div>

                        {/* Image Container */}
                        <div
                            className="relative z-30 w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] rounded-[28px] overflow-hidden bg-white shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
                            <img src="/assets/images/Contact Us.png" alt="Team discussing project requirements"
                                className="w-full h-full object-cover" />
                        </div>
                    </div>

                </div>
            </section>

            {/* Contact Details & Form */}
            <section className="py-[80px] lg:py-[120px] bg-white">
                <div className="w-full px-5">

                    {/* Section Header */}
                    <header className="text-center mb-[60px]">
                        <h2 className="text-[28px] lg:text-[36px] font-bold text-[#111] mb-[12px]">Our Contact Details</h2>
                        <p className="text-[15px] lg:text-[16px] leading-[1.6] text-[#6b7280] max-w-[600px] mx-auto">
                            We are here to provide prompt assistance. Reach out to us for any business or service-related queries.
                        </p>
                    </header>

                    {/* Card Wrapper */}
                    <div
                        className="relative grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-[60px] lg:gap-[72px] p-[40px] lg:p-[72px_80px] bg-white rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] overflow-hidden">

                        {/* Left Content: Contact Info */}
                        <div className="flex flex-col justify-center relative z-10">

                            <h3 className="text-[24px] lg:text-[28px] font-bold leading-[1.35] text-[#111] mb-[36px]">
                                Let’s build something <span className="text-[#6c4cf4]">remarkable</span> together
                            </h3>

                            <ul className="space-y-[18px] mb-[40px]">
                                <li className="flex items-center gap-[12px]">
                                    {/* Email Icon */}
                                    <div className="w-[20px] h-[20px] flex items-center justify-center text-[#6c4cf4]">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                            <polyline points="22,6 12,13 2,6"></polyline>
                                        </svg>
                                    </div>
                                    <a href="mailto:support@evolvex.ai"
                                        className="text-[15px] text-[#4b5563] hover:text-[#6c4cf4] transition-colors">support@evolvex.ai</a>
                                </li>

                                <li className="flex items-center gap-[12px]">
                                    {/* Phone Icon */}
                                    <div className="w-[20px] h-[20px] flex items-center justify-center text-[#6c4cf4]">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path
                                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                            </path>
                                        </svg>
                                    </div>
                                    <a href="tel:+919876543210"
                                        className="text-[15px] text-[#4b5563] hover:text-[#6c4cf4] transition-colors">+91 9876543210</a>
                                </li>

                                <li className="flex items-start gap-[12px]">
                                    {/* Location Icon */}
                                    <div className="w-[20px] h-[20px] flex items-center justify-center text-[#6c4cf4] mt-[2px]">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                    </div>
                                    <span className="text-[15px] text-[#4b5563] leading-[1.6]">
                                        Evolvex AI Solutions Pvt. Ltd,<br />
                                        Pollachi – 642001
                                    </span>
                                </li>
                            </ul>

                            {/* Social Icons */}
                            <div className="flex gap-[16px]">
                                <a href="#" aria-label="Instagram"
                                    className="w-[36px] h-[36px] rounded-full bg-[#f3f4f6] flex items-center justify-center text-[#6b7280] hover:bg-[#6c4cf4] hover:text-white transition-all">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"></line>
                                    </svg>
                                </a>
                                <a href="#" aria-label="LinkedIn"
                                    className="w-[36px] h-[36px] rounded-full bg-[#f3f4f6] flex items-center justify-center text-[#6b7280] hover:bg-[#6c4cf4] hover:text-white transition-all">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                                            strokeWidth="2"></path>
                                        <rect x="2" y="9" width="4" height="12" strokeWidth="2"></rect>
                                        <circle cx="4" cy="4" r="2" strokeWidth="2"></circle>
                                    </svg>
                                </a>
                                <a href="#" aria-label="Facebook"
                                    className="w-[36px] h-[36px] rounded-full bg-[#f3f4f6] flex items-center justify-center text-[#6b7280] hover:bg-[#6c4cf4] hover:text-white transition-all">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h2z" strokeWidth="2"></path>
                                    </svg>
                                </a>
                                <a href="#" aria-label="Twitter"
                                    className="w-[36px] h-[36px] rounded-full bg-[#f3f4f6] flex items-center justify-center text-[#6b7280] hover:bg-[#6c4cf4] hover:text-white transition-all">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                                            strokeWidth="2"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="w-full relative z-10">
                            <form className="w-full" noValidate>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[48px] gap-y-[28px] items-start mb-[12px]">
                                    <label className="block">
                                        <span className="block text-[14px] font-medium text-[#111827] mb-[6px]">First Name</span>
                                        <input type="text" name="first_name"
                                            className="w-full h-[44px] border-b border-[#e5e7eb] px-0 text-[14px] focus:outline-none focus:border-[#6c4cf4] transition-colors bg-transparent placeholder-gray-400" />
                                    </label>

                                    <label className="block">
                                        <span className="block text-[14px] font-medium text-[#111827] mb-[6px]">Last Name</span>
                                        <input type="text" name="last_name"
                                            className="w-full h-[44px] border-b border-[#e5e7eb] px-0 text-[14px] focus:outline-none focus:border-[#6c4cf4] transition-colors bg-transparent placeholder-gray-400" />
                                    </label>

                                    <label className="block">
                                        <span className="block text-[14px] font-medium text-[#111827] mb-[6px]">Email</span>
                                        <input type="email" name="email"
                                            className="w-full h-[44px] border-b border-[#e5e7eb] px-0 text-[14px] focus:outline-none focus:border-[#6c4cf4] transition-colors bg-transparent placeholder-gray-400" />
                                    </label>

                                    <label className="block">
                                        <span className="block text-[14px] font-medium text-[#111827] mb-[6px]">Phone Number</span>
                                        <input type="tel" name="phone"
                                            className="w-full h-[44px] border-b border-[#e5e7eb] px-0 text-[14px] focus:outline-none focus:border-[#6c4cf4] transition-colors bg-transparent placeholder-gray-400" />
                                    </label>
                                </div>

                                {/* Subject Selection */}
                                <fieldset className="mt-[24px] mb-[28px]">
                                    <legend className="block text-[14px] font-medium text-[#111827] mb-[16px]">Select Subject?</legend>
                                    <div className="flex flex-wrap gap-[32px]">
                                        <label className="flex items-center gap-[8px] text-[14px] cursor-pointer">
                                            <input type="radio" name="subject" defaultChecked className="accent-[#6c4cf4]" />
                                            <span className="text-[#4b5563]">General Inquiry</span>
                                        </label>

                                        <label className="flex items-center gap-[8px] text-[14px] cursor-pointer">
                                            <input type="radio" name="subject" className="accent-[#6c4cf4]" />
                                            <span className="text-[#4b5563]">Project Requirement</span>
                                        </label>

                                        <label className="flex items-center gap-[8px] text-[14px] cursor-pointer">
                                            <input type="radio" name="subject" className="accent-[#6c4cf4]" />
                                            <span className="text-[#4b5563]">Career Inquiry</span>
                                        </label>
                                    </div>
                                </fieldset>

                                {/* Message */}
                                <label className="block mb-[28px]">
                                    <span className="block text-[14px] font-medium text-[#111827] mb-[6px]">Message</span>
                                    <textarea rows="4" placeholder="Write your message.."
                                        className="w-full h-[64px] border-b border-[#e5e7eb] px-0 text-[14px] focus:outline-none focus:border-[#6c4cf4] transition-colors bg-transparent placeholder-gray-400 resize-none"></textarea>
                                </label>

                                {/* Submit */}
                                <div className="flex justify-end mt-[28px]">
                                    <button type="submit"
                                        className="px-[32px] py-[14px] rounded-[10px] text-[15px] font-medium text-white bg-gradient-to-br from-[#6c4cf4] to-[#8b5cf6] shadow-[0_12px_28px_rgba(108,76,244,0.35)] transition-transform hover:-translate-y-[2px]">
                                        Send Message
                                    </button>
                                </div>

                            </form>
                        </div>

                        {/* Decorative Gradient Circle */}
                        <span
                            className="absolute right-[-90px] top-[110px] w-[220px] h-[220px] rounded-full bg-gradient-to-br from-[#7dd3fc] to-[#8b5cf6] z-0 opacity-80 pointer-events-none"></span>

                    </div>
                </div>
            </section>

            {/* Locate Us Section */}
            <section className="py-[96px] lg:py-[120px] bg-white" data-animate="fade-up">
                <div className="w-full px-5">

                    {/* Section Header */}
                    <div className="text-center mb-[48px]">
                        <h2 className="text-[36px] font-bold text-[#1f1f1f] mb-[12px]">
                            Locate <span className="text-[#6c4cf4]">Us</span>
                        </h2>
                        <p className="text-[16px] leading-[1.6] text-[#6b7280]">
                            Visit our office or reach out anytime. We are available<br class="hidden md:block" />
                            for support and consultations.
                        </p>
                    </div>

                    {/* Map Wrapper */}
                    <div
                        className="relative w-full h-[520px] lg:h-[460px] rounded-[16px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.08)] bg-[#f5f5f5]">

                        {/* Floating Address Card */}
                        <div
                            className="absolute left-[16px] md:left-[32px] bottom-[16px] md:bottom-[32px] right-[16px] md:right-auto w-auto md:w-[320px] bg-white rounded-[14px] p-[24px_24px_26px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-10">
                            <div className="flex items-center gap-[10px] mb-[12px]">
                                <span className="text-[18px]">📍</span>
                                <h4 className="text-[18px] font-semibold text-[#1f1f1f]">Office Address</h4>
                            </div>

                            <p className="text-[14.5px] leading-[1.6] text-[#4b5563] mb-[20px]">
                                Evolvex AI Solutions Pvt. Ltd,<br />
                                Pollachi, Coimbatore,<br />
                                Tamil Nadu – 642001
                            </p>

                            <a href="https://www.google.com/maps?q=Pollachi+Tamil+Nadu" target="_blank"
                                className="flex items-center justify-center w-full h-[42px] text-[14px] font-medium text-white rounded-[8px] bg-gradient-to-br from-[#6c4cf4] to-[#8b5cf6] shadow-[0_4px_12px_rgba(108,76,244,0.25)] transition-transform hover:-translate-y-[1px]">
                                Get Directions
                            </a>
                        </div>

                        {/* Google Map Embed */}
                        <div className="w-full h-full">
                            <iframe src="https://www.google.com/maps?q=Pollachi+Tamil+Nadu&output=embed" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" aria-label="Office Location Map"
                                className="w-full h-full border-0"></iframe>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
