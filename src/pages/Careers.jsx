import WhyJoinUs from '@/components/WhyJoinUs';
import React, { useEffect } from 'react';

const Careers = () => {
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
            {/* Careers Hero Section */}
            {/* New Full Screen Hero Section */}
            <section className="relative w-full min-h-screen flex items-center bg-gradient-to-b from-violet-100 to-[#FFE8E9] overflow-hidden">
                <style>{`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
    * { font-family: "Poppins", sans-serif; }
  `}</style>

                {/* Decorative Background Blur */}
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-300/30 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

                {/* Desktop Hero Image (Edge-to-Edge Breakout) */}
                <div className="hidden lg:block absolute right-[-20px] top-[63%] -translate-y-1/2 w-[50vw] h-[60vh] z-0">
                    <img
                        className="w-full h-full object-cover object-center rounded-l-[20px] shadow-2xl"
                        src="/assets/images/Join-our-team1.png"
                        alt="Team meeting"
                    />
                </div>

                <div className="w-full max-w-7xl mx-auto px-5 md:px-10 relative z-10 pointer-events-none lg:pointer-events-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center h-full w-full">

                        {/* Left Column: Content */}
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 pb-10 lg:pb-0 w-full pointer-events-auto">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-gray-900 leading-[1.15] tracking-tight">
                                Join Our Team <br className="hidden lg:block" />
                                <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
                                    Shaping the future.
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-700 mt-6 max-w-lg leading-relaxed">
                                At Evolvex, our engineers and designers build intelligent digital products and AI-powered solutions that help businesses grow faster, work smarter, and scale with confidence.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto justify-center lg:justify-start">
                                <a href="/open-roles" className="px-8 py-4 rounded-full text-base font-medium text-white bg-gray-900 hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer min-w-[160px] inline-flex justify-center items-center">
                                    Join our team
                                </a>

                                <a href="/open-roles" className="px-8 py-4 rounded-full text-base font-medium text-gray-800 bg-white/60 border border-white/60 hover:bg-white hover:border-white transition-all shadow-sm hover:shadow-md cursor-pointer min-w-[160px] inline-flex justify-center items-center">
                                    Explore Opportunities
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Hero Image (Mobile Only) */}
                        <div className="block lg:hidden order-1 flex justify-center items-center w-full pointer-events-auto">
                            <div className="w-full max-w-[520px] sm:max-w-[640px]">
                                <img
                                    className="
              w-full
              h-[320px] sm:h-[420px] md:h-[480px]
              object-cover object-center
              rounded-3xl
              drop-shadow-2xl
            "
                                    src="/assets/images/Join-our-team1.png"
                                    alt="Team meeting"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* Old Hero Section (Commented Out)
            <section className="relative py-[80px] lg:py-[140px] bg-white overflow-hidden" data-animate="fade-up">

                <div
                    className="absolute inset-0 bg-[radial-gradient(900px_400px_at_0%_0%,rgba(143,133,255,0.15),transparent_60%),radial-gradient(900px_400px_at_100%_0%,rgba(255,192,203,0.15),transparent_60%)] pointer-events-none">
                </div>

                <div
                    className="w-full max-w-[1200px] mx-auto px-5 relative mt-[180px] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[60px] lg:gap-[80px] items-center text-center lg:text-left">

                    <div className="mx-auto lg:mx-0">
                        <h1 className="text-[40px] lg:text-[64px] font-bold leading-[1.1] text-[#111] mb-[24px]">
                            Join Our Team
                        </h1>

                        <p className="text-[16px] lg:text-[18px] leading-[1.6] text-[#555] mb-[40px] max-w-[580px] mx-auto lg:mx-0">
                            Work with a team that values innovation, collaboration, and excellence.
                            Shape the future of our platform while growing your career.
                        </p>

                        <div className="flex flex-wrap gap-[20px] justify-center lg:justify-start">
                            <a href="/open-roles"
                                className="inline-flex px-[48px] py-[14px] lg:px-[56px] lg:py-[16px] rounded-[12px] bg-gradient-to-r from-[#B455F3] to-[#3937F3] text-white text-[15px] font-semibold">
                                Apply Now
                            </a>

                            <a href="/open-roles"
                                className="group relative inline-flex p-[1.2px] rounded-[12px] bg-gradient-to-r from-[#B455F3] to-[#3937F3]">
                                <span className="block w-full h-full bg-white rounded-[10.5px] px-[30px] py-[12.5px] lg:px-[34px] lg:py-[14.5px]">
                                    <span className="bg-gradient-to-r from-[#B455F3] to-[#3937F3] bg-clip-text text-transparent text-[15px] font-semibold">
                                        Explore Opportunities
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <img src="/assets/images/Join-Our-Team.png" alt="Careers illustration showing job opportunities"
                            className="max-w-full w-[480px] lg:w-[540px] h-auto object-contain drop-shadow-lg" />
                    </div>

                </div>
            </section>
            */}

            {/* About Working With Us */}
            <section className="py-[90px] lg:py-[120px] pb-[110px] lg:pb-[140px] bg-white" id="working-with-us"
                data-animate="fade-up">
                <div className="w-full px-5">

                    <h2 className="text-center text-[28px] lg:text-[36px] font-bold text-[#111] mb-[40px] lg:mb-[56px]">
                        About Working With Us
                    </h2>

                    <div
                        className="relative max-w-[1148px] mx-auto py-[48px] px-[20px] lg:px-[0px] bg-[#f7f5ff] rounded-[22px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden flex items-center justify-center min-h-[172px]">
                        <p
                            className="text-[16px] lg:text-[20px] leading-[1.8] lg:leading-[36px] tracking-[-0.01em] text-[#4A4A4A] text-center max-w-[1067px] mx-auto relative z-10">
                            We believe in empowering every team member to create meaningful impact. Our culture encourages innovation, continuous learning, and supportive collaboration across all departments. With a strong focus on growth and well-being, we ensure every individual has the platform and environment to thrive.
                        </p>

                        {/* Decorative circle (CSS only) */}
                        <span
                            className="absolute w-[90px] h-[90px] lg:w-[120px] lg:h-[120px] top-1/2 right-[-30px] lg:right-[-40px] -translate-y-1/2 bg-gradient-to-br from-[#E6DEFF] to-[#6C4CF4] rounded-full shadow-[0_12px_32px_rgba(111,90,247,0.35)] opacity-100"
                            aria-hidden="true"></span>
                    </div>

                </div>
            </section>

            {/* Life at Evolvex */}
            <section className="py-[95px] lg:py-[130px] bg-white relative overflow-hidden" id="life-at-evolvex" data-animate="fade-up">

                <div className="w-full max-w-[1200px] mx-auto px-5">

                    {/* Section Header */}
                    <div className="text-center mb-[50px]">
                        <span className="block text-[12px] tracking-[0.35em] text-[#7b4dff] font-semibold mb-[12px] uppercase">
                            CULTURE
                        </span>
                        <h2 className="text-[30px] lg:text-[44px] font-extrabold text-[#111] mb-[16px]">
                            Life at Evolvex
                        </h2>
                        <p className="text-[15px] lg:text-[16px] leading-[1.85] text-[#555] max-w-[720px] mx-auto">
                            A workplace built on growth, ownership, and creativity.
                        </p>
                    </div>

                    {/* 2x2 Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] lg:gap-[28px]">
                        {/* Card 1 */}
                        <div className="group relative bg-white border border-[#ecebff] rounded-[22px] p-[26px] lg:p-[32px] shadow-[0_22px_60px_rgba(17,17,17,0.08)] hover:-translate-y-[4px] hover:shadow-[0_30px_70px_rgba(17,17,17,0.12)] transition-all duration-300 overflow-hidden h-full">
                            {/* Decorative Glow */}
                            <div className="absolute -top-[90px] -right-[90px] w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(176,132,255,0.55),rgba(123,77,255,0.10),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="w-[52px] h-[52px] rounded-full bg-[#efe9ff] flex items-center justify-center mb-[24px] group-hover:scale-110 transition-transform duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7b4dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <h3 className="text-[20px] font-bold text-[#111] mb-[10px]">Innovative Projects</h3>
                                <p className="text-[15px] leading-[1.6] text-[#555]">
                                    Work on impactful real-world products powered by modern technology.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative bg-white border border-[#ecebff] rounded-[22px] p-[26px] lg:p-[32px] shadow-[0_22px_60px_rgba(17,17,17,0.08)] hover:-translate-y-[4px] hover:shadow-[0_30px_70px_rgba(17,17,17,0.12)] transition-all duration-300 overflow-hidden h-full">
                            {/* Decorative Glow */}
                            <div className="absolute -top-[90px] -right-[90px] w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(176,132,255,0.55),rgba(123,77,255,0.10),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="w-[52px] h-[52px] rounded-full bg-[#efe9ff] flex items-center justify-center mb-[24px] group-hover:scale-110 transition-transform duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7b4dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M23 6l-9.5 9.5-5-5L1 18" />
                                        <path d="M17 6h6v6" />
                                    </svg>
                                </div>
                                <h3 className="text-[20px] font-bold text-[#111] mb-[10px]">Growth-Focused Culture</h3>
                                <p className="text-[15px] leading-[1.6] text-[#555]">
                                    Continuous learning, mentorship and upskilling opportunities.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative bg-white border border-[#ecebff] rounded-[22px] p-[26px] lg:p-[32px] shadow-[0_22px_60px_rgba(17,17,17,0.08)] hover:-translate-y-[4px] hover:shadow-[0_30px_70px_rgba(17,17,17,0.12)] transition-all duration-300 overflow-hidden h-full">
                            {/* Decorative Glow */}
                            <div className="absolute -top-[90px] -right-[90px] w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(176,132,255,0.55),rgba(123,77,255,0.10),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="w-[52px] h-[52px] rounded-full bg-[#efe9ff] flex items-center justify-center mb-[24px] group-hover:scale-110 transition-transform duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7b4dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 6v6l4 2" />
                                    </svg>
                                </div>
                                <h3 className="text-[20px] font-bold text-[#111] mb-[10px]">Flexible &amp; Supportive Environment</h3>
                                <p className="text-[15px] leading-[1.6] text-[#555]">
                                    Balanced work culture that respects your time and creativity.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="group relative bg-white border border-[#ecebff] rounded-[22px] p-[26px] lg:p-[32px] shadow-[0_22px_60px_rgba(17,17,17,0.08)] hover:-translate-y-[4px] hover:shadow-[0_30px_70px_rgba(17,17,17,0.12)] transition-all duration-300 overflow-hidden h-full">
                            {/* Decorative Glow */}
                            <div className="absolute -top-[90px] -right-[90px] w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(176,132,255,0.55),rgba(123,77,255,0.10),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="w-[52px] h-[52px] rounded-full bg-[#efe9ff] flex items-center justify-center mb-[24px] group-hover:scale-110 transition-transform duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7b4dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-[20px] font-bold text-[#111] mb-[10px]">Opportunities to Lead</h3>
                                <p className="text-[15px] leading-[1.6] text-[#555]">
                                    Ownership-driven environment where you can grow into leadership roles.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-[100px] lg:py-[140px] pb-[120px] lg:pb-[160px] bg-white relative overflow-hidden"
                id="why-join-us" data-animate="fade-up">
                <div className="w-full px-5">

                    <div className="relative text-center max-w-[920px] mx-auto">

                        {/* Background Text */}
                        <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2
            font-black tracking-widest
            bg-gradient-to-r from-[#B2EBF2] via-[#D1C4E9] to-[#F8BBD0]
            bg-clip-text text-transparent
            opacity-50
            whitespace-nowrap select-none pointer-events-none z-0"
                            style={{ fontSize: 'clamp(60px, 15vw, 180px)', lineHeight: 1 }}>
                            WHY JOIN US?
                        </span>


                        <div className="relative z-20 flex flex-col items-center text-center px-4">

                            <h1 className="text-[38.4px] md:text-[48px] lg:text-[64px]
              font-extrabold text-[#1a1a1a] mt-[12px]
              leading-[1.15] tracking-[0.2%]">
                                Why Join Us?
                            </h1>

                            <div className="flex justify-center mt-[32px]">
                                <svg width="96" height="12" viewBox="0 0 96 12" fill="none">
                                    <circle cx="6" cy="6" r="6" fill="url(#grad-dot)" />
                                    <rect x="22" y="0" width="74" height="12" rx="6" fill="url(#grad-pill)" />
                                    <defs>
                                        <linearGradient id="grad-dot" x1="0" x2="1">
                                            <stop offset="0" stopColor="#B2EBF2" />
                                            <stop offset="0.85" stopColor="#D1C4E9" />
                                            <stop offset="1" stopColor="#F8BBD0" />
                                        </linearGradient>
                                        <linearGradient id="grad-pill" x1="0" x2="1">
                                            <stop offset="0" stopColor="#84FFFF" />
                                            <stop offset="0.65" stopColor="#D1C4E9" />
                                            <stop offset="1" stopColor="#F8BBD0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <p
                                className="text-[20px] lg:text-[20px] leading-[1.8] text-[#555] mt-[20px] text-center max-w-[780px] mx-auto relative z-10">
                                We believe in empowering talented individuals to reach their full potential. <br></br> At Evolvex, you will find opportunities to learn, lead, and make a lasting impact.
                            </p>

                        </div>
                    </div>
                </div>
                {/* Why Join Us – Feature Cards */}
                <WhyJoinUs>
                </WhyJoinUs>
            </section>



            {/* Careers CTA */}
            <section className="py-[100px]" id="careers-cta" data-animate="fade-up">
                <div className="w-full px-5">

                    <div className="relative bg-[#6f5cf6] rounded-[24px] overflow-hidden max-w-[1300px] mx-auto min-h-[360px] flex items-center justify-center">

                        {/* Decorative shapes */}
                        <div className="absolute inset-0 pointer-events-none">
                            {/* Left Large Circle */}
                            <div className="absolute w-[330px] h-[330px] bg-white opacity-10 rounded-full top-1/2 -translate-y-1/2 left-[-165px]"></div>

                            {/* Right Geometric Cluster */}
                            {/* Square 1 - Middle Right */}
                            <div className="absolute w-[150px] h-[150px] bg-white opacity-10 rounded-[20px] top-[15%] right-[18%] rotate-[15deg]"></div>

                            {/* Circle - Bottom Right */}
                            <div className="absolute w-[220px] h-[220px] bg-white opacity-[0.05] rounded-full bottom-[-60px] right-[8%]"></div>

                            {/* Square 2 - Far Right Edge */}
                            <div className="absolute w-[180px] h-[180px] bg-white opacity-20 rounded-[24px] top-[50%] right-[-50px] -translate-y-1/2 rotate-[-5deg]"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 max-w-[800px] text-center px-6 py-12 md:py-0">
                            <h2 className="text-[30px] md:text-[42px] font-bold text-white mb-[16px] leading-[1.2]">
                                Discover Your Next Role with Us
                            </h2>
                            <p className="text-[16px] md:text-[18px] leading-[1.6] text-white/90 mb-[36px] max-w-[540px] mx-auto">
                                Browse our current openings and take the next step in your
                                <br></br>career with Evolvex.
                            </p>

                            <a href="/open-roles"
                                className="inline-block bg-white text-[#6f5cf6] px-[36px] py-[16px] rounded-full text-[16px] font-bold transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                                Discover Roles at Evolvex
                            </a>
                        </div>

                    </div>

                </div>
            </section>

            {/* Apply Now */}
            <section className="py-[120px] relative" id="apply-now" data-animate="fade-up">
                <div className="w-full px-5">

                    {/* Section Heading */}
                    <div className="relative text-center max-w-[920px] mx-auto">

                        {/* Background Text */}
                        <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2
            font-black tracking-widest
            bg-gradient-to-r from-[#B2EBF2] via-[#D1C4E9] to-[#F8BBD0]
            bg-clip-text text-transparent
            opacity-50
            whitespace-nowrap select-none pointer-events-none z-0"
                            style={{ fontSize: 'clamp(50px, 12vw, 140px)', lineHeight: 1 }}>
                            APPLY NOW
                        </span>


                        <div className="relative z-20 flex flex-col items-center text-center px-4">

                            <h1 className="text-[34px] md:text-[48px] lg:text-[64px]
              font-extrabold text-[#1a1a1a] mb-[12px] mt-[-5px]
              leading-[1.15] tracking-[0.4%]">
                                Apply Now
                            </h1>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-[64px] mt-[60px] items-center">

                        {/* Illustration */}
                        <div className="flex justify-center lg:justify-end lg:-translate-x-[60px] lg:-translate-y-[60px]">
                            <img src="/assets/images/apply-now-illustration.png" alt="Job application illustration"
                                className="w-full max-w-[800px] block drop-shadow-lg" />
                        </div>

                        {/* Application Form */}
                        <form className="max-w-[440px] w-full mx-auto md:mx-0" noValidate>

                            <div className="mb-[24px]">
                                <label htmlFor="fullName" className="block text-[14px] font-bold text-[#111] mb-[8px]">Full Name</label>
                                <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required
                                    className="w-full p-[14px_16px] text-[15px] rounded-[10px] border-[1.5px] border-[#cfc7ff]/60 outline-none transition-all duration-300 font-inherit hover:border-[#6f5cf6] focus:border-[#6f5cf6] focus:shadow-[0_0_0_4px_rgba(111,92,246,0.1)] placeholder:text-[#999]" />
                            </div>

                            <div className="mb-[24px]">
                                <label htmlFor="email" className="block text-[14px] font-bold text-[#111] mb-[8px]">Email</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email address" required
                                    className="w-full p-[14px_16px] text-[15px] rounded-[10px] border-[1.5px] border-[#cfc7ff]/60 outline-none transition-all duration-300 font-inherit hover:border-[#6f5cf6] focus:border-[#6f5cf6] focus:shadow-[0_0_0_4px_rgba(111,92,246,0.1)] placeholder:text-[#999]" />
                            </div>

                            <div className="mb-[24px]">
                                <label htmlFor="phone" className="block text-[14px] font-bold text-[#111] mb-[8px]">Phone Number</label>
                                <input type="tel" id="phone" name="phone" placeholder="Your contact number"
                                    className="w-full p-[14px_16px] text-[15px] rounded-[10px] border-[1.5px] border-[#cfc7ff]/60 outline-none transition-all duration-300 font-inherit hover:border-[#6f5cf6] focus:border-[#6f5cf6] focus:shadow-[0_0_0_4px_rgba(111,92,246,0.1)] placeholder:text-[#999]" />
                            </div>

                            <div className="mb-[24px]">
                                <label htmlFor="interest" className="block text-[14px] font-bold text-[#111] mb-[8px]">Area of Interest</label>
                                <input type="text" id="interest" name="interest" placeholder="e.g. Backend Developer"
                                    className="w-full p-[14px_16px] text-[15px] rounded-[10px] border-[1.5px] border-[#cfc7ff]/60 outline-none transition-all duration-300 font-inherit hover:border-[#6f5cf6] focus:border-[#6f5cf6] focus:shadow-[0_0_0_4px_rgba(111,92,246,0.1)] placeholder:text-[#999]" />
                            </div>

                            <div className="mb-[24px]">
                                <label htmlFor="coverLetter" className="block text-[14px] font-bold text-[#111] mb-[8px]">Cover Letter</label>
                                <textarea id="coverLetter" name="coverLetter" rows="4" placeholder="Write your cover letter here"
                                    className="w-full p-[14px_16px] text-[15px] rounded-[10px] border-[1.5px] border-[#cfc7ff]/60 outline-none transition-all duration-300 font-inherit hover:border-[#6f5cf6] focus:border-[#6f5cf6] focus:shadow-[0_0_0_4px_rgba(111,92,246,0.1)] placeholder:text-[#999] resize-none"></textarea>
                            </div>

                            {/* Resume Upload - Styled to match Figma */}
                            <div className="mt-[12px] mb-[32px]">
                                <label
                                    className="group flex items-center w-full p-[14px_16px] rounded-[10px] border-[1.5px] border-[#cfc7ff]/60 cursor-pointer transition-all duration-300 hover:border-[#6C4CF4] hover:bg-[#fcfbff]">
                                    <input type="file" name="resume" accept=".pdf,.doc,.docx" hidden />
                                    <div className="w-[32px] h-[32px] flex items-center justify-center mr-[12px]">
                                        <img src="/assets/svg/attachment.svg" alt="Attachment" className="w-30 h-30" />
                                    </div>
                                    <span className="text-[14px] text-[#000000] font-medium group-hover:text-[#6C4CF4] transition-colors">Upload your resume (PDF/DOC)</span>
                                </label>
                            </div>

                            <button type="submit"
                                className="w-full h-[48px] inline-flex items-center justify-center rounded-[8px] bg-gradient-to-r from-[#B455F3] to-[#393AF3] text-white text-[16px] font-bold shadow-[0_4px_14px_rgba(108,76,244,0.3)] transition-transform duration-200 hover:scale-[1.02]">
                                Submit Application
                            </button>

                        </form>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Careers;
