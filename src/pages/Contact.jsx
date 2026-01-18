import React, { useEffect } from 'react';
import TrustedBy from '../components/TrustedBy';

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
                className="relative py-[80px] lg:py-[120px] pb-[200px] lg:pb-[280px] bg-[linear-gradient(120deg,#eef7ff_0%,#f6f9ff_40%,#fff2f7_100%)] overflow-hidden"
                data-animate="fade-up">
                <div className="w-full px-5 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center gap-[60px] lg:gap-[80px]">

                    {/* Left Content */}
                    <div className="max-w-[520px] text-center lg:text-left ml-[200px]">
                        <h1 className="text-[36px] lg:text-[48px] font-bold text-[#1f2937] mb-[18px]">Get in Touch</h1>
                        <p className="text-[16px] lg:text-[18px] leading-[1.7] text-[#4a4a4a]">
                            We are here to assist you with any enquiries related to our
                            services or collaborations. Share your message with us
                            and we will respond promptly.
                        </p>
                    </div>

                    {/* Right Visual */}
                    <div className="relative h-[360px] lg:h-[520px] flex items-center justify-center">
                        {/* Angled purple shape */}
                        {/* Angled purple shape */}
                        <img
                            src="/assets/svg/Rectangle.svg"
                            alt=""
                            className="absolute right-[-140px] w-[160%] max-w-none h-[1400px] z-10 pointer-events-none select-none lg:right-[-280px] lg:w-[155%]"
                        />

                        {/* Circular shape */}
                        {/* Decorative Gradient Circle */}
                        <div className="absolute top-[-60px] left-[-80px] z-20 pointer-events-none">
                            <img src="/assets/svg/Ellipse Circle.svg" alt="" className="w-[240px] h-[240px]" />
                        </div>


                        {/* Image Container */}
                        <div
                            className="relative z-30 w-[600px] h-[600px] lg:w-[600px] lg:h-[600px] rounded-[50px] overflow-hidden right-[120px] mt-[100px] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
                            <img src="/assets/images/enquire.png" alt="Team discussing project requirements"
                                className="w-full h-full object-cover" />
                        </div>

                    </div>

                </div>
            </section>

            {/* Trusted By - To build trust before contact */}
            <TrustedBy />

            {/* Contact Details & Form */}
            <section className="py-[80px] lg:py-[120px] bg-white">
                <div className="w-full px-5">

                    {/* Section Header */}
                    <header className="text-center mb-[60px]">
                        <h2 className="text-[28px] lg:text-[36px] font-bold text-[#111] mb-[12px]">Our Contact Details</h2>
                        <p className="text-[20px] leading-[1.5] text-[#666666]">
                            We are here to provide prompt assistance. Reach out <br></br>to us for any business or service-related queries.
                        </p>
                    </header>



                    {/* Card Wrapper */}
                    <div className="relative max-w-[1120px] mx-auto">
                        {/* Decorative Gradient Circle - Outside Top Right */}
                        <img src="/assets/svg/Ellipse Circle.svg" alt="" className="absolute -top-[90px] -right-[230px] w-[500px] h-[200px] rounded-full z-0 pointer-events-none" />

                        <div
                            className="relative z-10 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-[60px] lg:gap-[72px] p-[40px] lg:p-[72px_80px] bg-white/50 backdrop-blur-[40px] border border-white/60 rounded-[48px] lg:rounded-[60px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] overflow-hidden">

                            {/* Left Content: Contact Info */}
                            <div className="flex flex-col justify-center relative z-10">

                                <h3 className="text-[24px] lg:text-[28px] font-bold leading-[1.35] text-[#111] mb-[36px]">
                                    Let’s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BCD4] to-[#6C4CF4]">remarkable</span> together
                                </h3>

                                <ul className="space-y-[18px] mb-[40px]">
                                    <li className="flex items-center gap-[12px]">
                                        {/* Email Icon */}
                                        <div className="w-[20px] h-[20px] flex items-center justify-center text-[#6c4cf4]">
                                            <img src="/assets/svg/Mail-.svg" alt="" />
                                        </div>
                                        <a href="mailto:support@evolvex.ai"
                                            className="text-[15px] text-[#4b5563] hover:text-[#6c4cf4] transition-colors">support@evolvex.ai</a>
                                    </li>

                                    <li className="flex items-center gap-[12px]">
                                        {/* Phone Icon */}
                                        <div className="w-[18px] h-[18px] flex items-center justify-center text-[#6c4cf4]">
                                            <img src="/assets/svg/Call.svg" alt="" />
                                        </div>
                                        <a href="tel:+919876543210"
                                            className="text-[15px] text-[#4b5563] hover:text-[#6c4cf4] transition-colors">+91 9876543210</a>
                                    </li>

                                    <li className="flex items-start gap-[12px]">
                                        {/* Location Icon */}
                                        <div className="w-[16px] h-[16px] flex items-center justify-center text-[#6c4cf4] mt-[2px]">
                                            <img src="/assets/svg/Location-.svg" alt="" />
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
                                        className="w-[36px] h-[36px] rounded-full flex items-center justify-center text-[#6b7280] hover:text-white transition-all">
                                        <img src="/assets/svg/instagram-.svg" alt="" />
                                    </a>
                                    <a href="#" aria-label="LinkedIn"
                                        className="w-[36px] h-[36px] rounded-full flex items-center justify-center text-[#6b7280] hover:text-white transition-all">
                                        <img src="/assets/svg/Linked_in.svg" alt="" />
                                    </a>
                                    <a href="#" aria-label="Facebook"
                                        className="w-[36px] h-[36px] rounded-full flex items-center justify-center text-[#6b7280] hover:text-white transition-all">
                                        <img src="/assets/svg/Facebook.svg" alt="" />
                                    </a>
                                    <a href="#" aria-label="Twitter"
                                        className="w-[36px] h-[36px] rounded-full flex items-center justify-center text-[#6b7280] hover:text-white transition-all">
                                        <img src="/assets/svg/X-Twitter.svg" alt="" />
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
                                    <div className="flex justify-center mt-[28px]">
                                        <button type="submit"
                                            className="w-[251px] h-[48px] flex items-center justify-center rounded-[12px] text-[15px] font-semibold text-white bg-gradient-to-r from-[#8455F3] to-[#3937F3] shadow-[0_12px_28px_rgba(108,76,244,0.35)] transition-transform hover:-translate-y-[2px]">
                                            Send Message
                                        </button>
                                    </div>

                                </form>
                            </div>

                        </div>
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
                        <p className="text-[20px] leading-[1.5] text-[#666666]">
                            Visit our office or reach out anytime. We are available<br className="hidden md:block" />
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
                                <img src="/assets/svg/Navigation.svg" alt="" />
                                <h4 className="text-[18px] font-semibold text-[#1f1f1f]">Office Address</h4>
                            </div>

                            <p className="text-[14.5px] leading-[1.6] text-[#4b5563] mb-[20px]">
                                Evolvex AI Solutions Pvt. Ltd,<br />
                                Pollachi, Coimbatore,<br />
                                Tamil Nadu – 642001
                            </p>

                            <a href="https://www.google.com/maps?q=Pollachi+Tamil+Nadu" target="_blank"
                                className="flex items-center justify-center w-full h-[42px] text-[14px] font-medium text-white rounded-[8px] bg-gradient-to-r from-[#8455F3] to-[#3937F3] shadow-[0_4px_12px_rgba(108,76,244,0.25)] transition-transform hover:-translate-y-[1px]">
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
