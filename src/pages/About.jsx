import React, { useEffect } from 'react';
import { GlobeDemo } from '../components/GlobeDemo';
import WhyBusinessesChoose from '../components/WhyBusinessesChoose';
import { FollowerPointerCard } from '../components/ui/following-pointer';
import { CardSpotlight } from '../components/ui/card-spotlight';

const About = () => {
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
            {/* About Hero */}
            <section className="py-[90px] lg:py-[120px] pb-[70px] lg:pb-[100px] bg-white left-8 mt-12" data-animate="fade-up">
                <div
                    className="w-full px-5 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[60px] lg:gap-[80px] items-center text-center lg:text-left">

                    {/* Left Content */}
                    <div className="mx-auto">
                        <h1 className="text-[56px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1A1A1A] mb-[24px]">
                            Shaping the Future with
                            <br></br>Intelligent Digital Innovation
                        </h1>

                        <p className="text-[20px] leading-[1.7] text-[#4A4A4A] mb-[36px]">
                            We are a technology-driven team dedicated to building scalable,
                            secure, and<br></br> intelligent digital solutions. Our mission is to empower
                            businesses with<br></br> innovation, precision, and long-term value.
                        </p>

                        <a href="/contact"
                            className="inline-block px-[32px] py-[16px] text-[15px] font-semibold text-white rounded-[10px] bg-gradient-to-r from-[#B455F3] to-[#393AF3] shadow-[0_10px_28px_rgba(111,90,247,0.35)] transition-transform duration-200 hover:-translate-y-[2px] hover:shadow-[0_16px_36px_rgba(111,90,247,0.45)]">
                            Start Your Project
                        </a>
                    </div>

                    {/* Right Visual */}
                    <div className="flex justify-center items-center">
                        <img src="/assets/images/abstract.png" alt="Abstract digital innovation visual" loading="eager"
                            className="w-full max-w-[480px] h-auto drop-shadow-2xl" />
                    </div>

                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-[100px] lg:py-[130px] bg-white text-left" id="our-story" data-animate="fade-up">
                <div className="max-w-[1200px] mx-auto px-5 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-[52fr_48fr] gap-[60px] lg:gap-[100px] items-center">

                        {/* Left Content */}
                        <div className="w-full">
                            {/* Label */}
                            <p className="text-[#7b4dff] font-semibold text-[12px] tracking-[0.35em] uppercase mb-[12px]">
                                Foundation
                            </p>

                            {/* Heading */}
                            <h2 className="text-[32px] lg:text-[46px] font-extrabold text-[#111] leading-[1.1] mb-[24px]">
                                Our Story
                            </h2>

                            {/* Intro Paragraph */}
                            <p className="text-[15px] lg:text-[16px] leading-[1.85] text-[#555] max-w-[520px] mb-[40px]">
                                Evolvex AI began with a belief that innovation has the power to reshape industries. We help businesses navigate the digital landscape with intelligence, clarity, and measurable impact.
                            </p>

                            {/* Story Blocks */}
                            <div className="space-y-[28px] mb-[45px]">

                                {/* Block 1: The Beginning */}
                                <div className="group pl-[18px] border-l-[3px] border-[#efe9ff] hover:border-[#7b4dff] transition-colors duration-300">
                                    <p className="text-[12px] tracking-wider text-[#7b4dff]/80 font-semibold mb-[4px] uppercase">
                                        The Beginning
                                    </p>
                                    <p className="text-[15px] leading-[1.7] text-[#4a4a4a]">
                                        We started with one goal: to make advanced technology practical and accessible for real businesses.
                                    </p>
                                </div>

                                {/* Block 2: The Shift */}
                                <div className="group pl-[18px] border-l-[3px] border-[#efe9ff] hover:border-[#7b4dff] transition-colors duration-300">
                                    <p className="text-[12px] tracking-wider text-[#7b4dff]/80 font-semibold mb-[4px] uppercase">
                                        The Shift
                                    </p>
                                    <p className="text-[15px] leading-[1.7] text-[#4a4a4a]">
                                        As we grew, we learned that strong outcomes come from combining strategy, design, and engineering.
                                    </p>
                                </div>

                                {/* Block 3: Today */}
                                <div className="group pl-[18px] border-l-[3px] border-[#efe9ff] hover:border-[#7b4dff] transition-colors duration-300">
                                    <p className="text-[12px] tracking-wider text-[#7b4dff]/80 font-semibold mb-[4px] uppercase">
                                        Today
                                    </p>
                                    <p className="text-[15px] leading-[1.7] text-[#4a4a4a]">
                                        Today, we build scalable digital systems that accelerate growth, improve efficiency, and unlock new opportunities.
                                    </p>
                                </div>

                            </div>

                            {/* Proof Metrics */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
                                {/* Metric 1 */}
                                <div className="bg-[#fff] border border-[#f0f0f0] rounded-[12px] p-[16px] shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <p className="text-[24px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b084ff] to-[#7b4dff] mb-[2px]">
                                        30+
                                    </p>
                                    <p className="text-[13px] text-[#555] font-medium">Projects Delivered</p>
                                </div>

                                {/* Metric 2 */}
                                <div className="bg-[#fff] border border-[#f0f0f0] rounded-[12px] p-[16px] shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <p className="text-[24px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b084ff] to-[#7b4dff] mb-[2px]">
                                        12+
                                    </p>
                                    <p className="text-[13px] text-[#555] font-medium">Industries Served</p>
                                </div>

                                {/* Metric 3 */}
                                <div className="bg-[#fff] border border-[#f0f0f0] rounded-[12px] p-[16px] shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <p className="text-[24px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b084ff] to-[#7b4dff] mb-[2px]">
                                        98%
                                    </p>
                                    <p className="text-[13px] text-[#555] font-medium">Client Satisfaction</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Visual - Premium Brand Orb */}
                        <div className="relative w-full flex justify-center lg:justify-end">
                            {/* Orb Container */}
                            <div className="relative w-[340px] h-[340px] lg:w-[420px] lg:h-[420px] rounded-full flex items-center justify-center">

                                {/* Background Glow (Global) */}
                                <div className="absolute inset-0 bg-[#7b4dff] opacity-[0.08] blur-[80px] rounded-full animate-pulse" />

                                {/* Orbit Arc 1 (Outer) */}
                                <svg className="absolute w-full h-full rotate-[30deg] animate-[spin_60s_linear_infinite]" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="210" cy="210" r="208" stroke="url(#paint0_linear)" strokeWidth="1" strokeDasharray="10 10" strokeOpacity="0.3" />
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="210" y1="0" x2="210" y2="420" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#b084ff" stopOpacity="0" />
                                            <stop offset="0.5" stopColor="#7b4dff" />
                                            <stop offset="1" stopColor="#b084ff" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Orb Base */}
                                <div className="relative w-[80%] h-[80%] rounded-full bg-[#0d061f] overflow-hidden shadow-[0_0_60px_rgba(123,77,255,0.15)] border border-[#7b4dff]/20">
                                    {/* Grid Pattern inside Orb */}
                                    <div className="absolute inset-0 opacity-[0.2]"
                                        style={{
                                            backgroundImage: 'radial-gradient(#8d67ff 1px, transparent 1px)',
                                            backgroundSize: '20px 20px'
                                        }}>
                                    </div>

                                    {/* Inner Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] via-transparent to-[#2e1a5e] opacity-80" />

                                    {/* Central Core Glow */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-[#7b4dff] blur-[60px] opacity-40 animate-pulse" />
                                </div>

                                {/* Floating Glow Nodes */}
                                {/* Node 1: Top Right */}
                                <div className="absolute top-[10%] right-[15%] w-[12px] h-[12px] bg-[#00f0ff] rounded-full blur-[2px] shadow-[0_0_15px_#00f0ff] animate-[bounce_4s_infinite]" />

                                {/* Node 2: Bottom Left */}
                                <div className="absolute bottom-[15%] left-[10%] w-[10px] h-[10px] bg-[#b084ff] rounded-full blur-[2px] shadow-[0_0_15px_#b084ff] animate-[bounce_5s_infinite_reverse]" />

                                {/* Node 3: Center Orbiting */}
                                <div className="absolute top-[50%] left-[0%] w-[8px] h-[8px] bg-[#fff] rounded-full blur-[1px] shadow-[0_0_10px_#fff]" />


                                {/* Orbit Arc 2 (Inner Intersecting) */}
                                <svg className="absolute w-[110%] h-[110%] rotate-[-45deg] opacity-40" viewBox="0 0 460 460" fill="none">
                                    <ellipse cx="230" cy="230" rx="228" ry="100" stroke="#b084ff" strokeWidth="1" strokeDasharray="4 8" />
                                </svg>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section
                className="py-[100px] lg:py-[130px] bg-white"
                id="mission-vision"
                data-animate="fade-up"
            >
                <div className="w-full px-5">
                    <div className="max-w-[1200px] mx-auto">

                        {/* Top Heading */}
                        <div className="text-center mb-[60px] lg:mb-[80px]">
                            <p className="text-[12px] tracking-[0.35em] text-[#7b4dff] font-semibold mb-[12px]">
                                FOUNDATION
                            </p>
                            <h2 className="text-[30px] lg:text-[44px] font-extrabold text-[#111] leading-[1.1]">
                                Mission &amp; Vision
                            </h2>
                            <p className="max-w-[680px] mx-auto text-[15px] lg:text-[16px] leading-[1.85] text-[#555] mt-[14px]">
                                Our mission defines what we build today, and our vision shapes the future we aim to create. Together, they guide every decision at Evolvex AI.
                            </p>
                        </div>

                        {/* New Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[26px] lg:gap-[32px]">

                            {/* Mission */}
                            <div className="relative rounded-[26px] p-[1px] bg-gray-600 overflow-hidden">
                                <div className="absolute -top-[140px] -left-[140px] w-[260px] h-[260px] bg-[#b084ff] opacity-[0.18] blur-[50px]" />
                                <div className="relative bg-white rounded-[26px] p-[28px] lg:p-[34px] shadow-[0_22px_60px_rgba(17,17,17,0.10)] h-full">
                                    <div className="flex items-center gap-[14px] mb-[18px]">
                                        <div className="w-[56px] h-[56px] rounded-full bg-[#efe9ff] flex items-center justify-center">
                                            {/* Target Icon */}
                                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="#7b4dff" strokeWidth="2" />
                                                <path d="M12 16C14.209 16 16 14.209 16 12C16 9.791 14.209 8 12 8C9.791 8 8 9.791 8 12C8 14.209 9.791 16 12 16Z" stroke="#7b4dff" strokeWidth="2" />
                                                <path d="M12 12L20 4" stroke="#7b4dff" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </div>

                                        <div>
                                            <p className="text-[12px] tracking-[0.25em] text-[#7b4dff] font-semibold">
                                                MISSION
                                            </p>
                                            <h3 className="text-[22px] font-extrabold text-[#111] leading-[1.1]">
                                                What We Deliver
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-[15px] leading-[1.9] text-[#555]">
                                        To deliver intelligent, scalable, and human-centred digital solutions that empower businesses to grow with innovation and efficiency.
                                    </p>
                                </div>
                            </div>

                            {/* Vision */}
                            <div className="relative rounded-[26px] p-[1px] bg-gray-600 overflow-hidden">
                                <div className="absolute -bottom-[140px] -right-[140px] w-[280px] h-[280px] bg-[#7b4dff] opacity-[0.16] blur-[60px]" />
                                <div className="relative bg-white rounded-[26px] p-[28px] lg:p-[34px] shadow-[0_22px_60px_rgba(17,17,17,0.10)] h-full">
                                    <div className="flex items-center gap-[14px] mb-[18px]">
                                        <div className="w-[56px] h-[56px] rounded-full bg-[#efe9ff] flex items-center justify-center">
                                            {/* Rocket Icon */}
                                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 9L15 10L21 4L20 3L14 9Z" fill="#7b4dff" />
                                                <path d="M7 14C5 16 4 21 4 21C4 21 9 20 11 18C13 16 12 14 12 14L10 12C10 12 8 12 7 14Z" stroke="#7b4dff" strokeWidth="2" strokeLinejoin="round" />
                                                <path d="M10 12C10 12 10.5 9.5 12.5 7.5C15.5 4.5 21 4 21 4C21 4 20.5 9.5 17.5 12.5C15.5 14.5 13 15 13 15L10 12Z" stroke="#7b4dff" strokeWidth="2" strokeLinejoin="round" />
                                                <path d="M9 15L5 19" stroke="#7b4dff" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </div>

                                        <div>
                                            <p className="text-[12px] tracking-[0.25em] text-[#7b4dff] font-semibold">
                                                VISION
                                            </p>
                                            <h3 className="text-[22px] font-extrabold text-[#111] leading-[1.1]">
                                                Where We Are Going
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-[15px] leading-[1.9] text-[#555]">
                                        To become a global leader in transforming ideas into impactful digital experiences through creativity, technology, and continuous innovation.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section
                className="py-[100px] lg:py-[130px] bg-[#f5f6fa]"
                id="our-values"
                data-animate="fade-up"
            >
                <div className="text-center mb-[60px] lg:mb-[80px]">

                    <h2 className="text-[32px] lg:text-[44px] font-extrabold text-[#111]">
                        Our Values
                    </h2>
                </div>
                <div className="w-full px-5">
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[90px] items-center">


                        {/* LEFT: Cards */}
                        <div className="relative">
                            {/* subtle background blocks like reference */}
                            <div
                                className="hidden lg:block absolute -top-[28px] -left-[28px] w-[180px] h-[180px] bg-[#efe9ff] rounded-[24px]"
                                aria-hidden="true"
                            />
                            <div
                                className="hidden lg:block absolute -bottom-[28px] -right-[28px] w-[220px] h-[220px] bg-[#efe9ff] rounded-[24px]"
                                aria-hidden="true"
                            />

                            <FollowerPointerCard title="Evolvex AI">
                                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-[26px]">
                                    {/* Card 1 */}
                                    {/* Card 1 */}
                                    <CardSpotlight
                                        color="#efe9ff"
                                        className="bg-white border-0 rounded-[18px] shadow-[0_18px_40px_rgba(17,17,17,0.10)] p-[28px] transition-transform duration-300 hover:scale-[1.02]"
                                    >
                                        <div className="w-[52px] h-[52px] rounded-full bg-[#efe9ff] flex items-center justify-center mb-[18px] relative z-20">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12 2V5"
                                                    stroke="#7b4dff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M12 19V22"
                                                    stroke="#7b4dff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M4.22 4.22L6.34 6.34"
                                                    stroke="#7b4dff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M17.66 17.66L19.78 19.78"
                                                    stroke="#7b4dff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M2 12H5"
                                                    stroke="#7b4dff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M19 12H22"
                                                    stroke="#7b4dff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M4.22 19.78L6.34 17.66"
                                                    stroke="#7b4dff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M17.66 6.34L19.78 4.22"
                                                    stroke="#7b4dff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M9 14.2C7.4 13.3 6.5 11.5 7.1 9.5C7.7 7.4 9.7 6 12 6C14.3 6 16.3 7.4 16.9 9.5C17.5 11.5 16.6 13.3 15 14.2V16C15 16.6 14.6 17 14 17H10C9.4 17 9 16.6 9 16V14.2Z"
                                                    stroke="#7b4dff"
                                                    strokeWidth="2"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="text-[18px] font-bold text-[#111] mb-[10px] relative z-20">
                                            Innovation First
                                        </h3>
                                        <p className="text-[14px] leading-[1.8] text-[#555] relative z-20">
                                            We explore new technologies and creative approaches to deliver future-ready digital solutions.
                                        </p>
                                    </CardSpotlight>

                                    {/* Card 2 */}
                                    {/* Card 2 */}
                                    <CardSpotlight
                                        color="#efe9ff"
                                        className="bg-white border-0 rounded-[18px] shadow-[0_18px_40px_rgba(17,17,17,0.10)] p-[28px] transition-transform duration-300 hover:scale-[1.02]"
                                    >
                                        <div className="w-[52px] h-[52px] rounded-full bg-[#efe9ff] flex items-center justify-center mb-[18px] relative z-20">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12 20H21"
                                                    stroke="#7b4dff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M16.5 3.5C17.3 2.7 18.7 2.7 19.5 3.5C20.3 4.3 20.3 5.7 19.5 6.5L8 18L3 19L4 14L16.5 3.5Z"
                                                    stroke="#7b4dff"
                                                    strokeWidth="2"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="text-[18px] font-bold text-[#111] mb-[10px] relative z-20">
                                            Design Excellence
                                        </h3>
                                        <p className="text-[14px] leading-[1.8] text-[#555] relative z-20">
                                            We create modern, clean, and user-focused designs that feel premium and engaging.
                                        </p>
                                    </CardSpotlight>

                                    {/* Card 3 */}
                                    {/* Card 3 */}
                                    <CardSpotlight
                                        color="#efe9ff"
                                        className="bg-white border-0 rounded-[18px] shadow-[0_18px_40px_rgba(17,17,17,0.10)] p-[28px] transition-transform duration-300 hover:scale-[1.02]"
                                    >
                                        <div className="w-[52px] h-[52px] rounded-full bg-[#efe9ff] flex items-center justify-center mb-[18px] relative z-20">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12 2L20 6V12C20 17 16.5 20.5 12 22C7.5 20.5 4 17 4 12V6L12 2Z"
                                                    stroke="#7b4dff"
                                                    strokeWidth="2"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M9 12L11 14L15 10"
                                                    stroke="#7b4dff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="text-[18px] font-bold text-[#111] mb-[10px] relative z-20">
                                            Trust & Reliability
                                        </h3>
                                        <p className="text-[14px] leading-[1.8] text-[#555] relative z-20">
                                            We ensure stable performance, high quality, and transparent delivery in every project.
                                        </p>
                                    </CardSpotlight>

                                    {/* Card 4 */}
                                    {/* Card 4 */}
                                    <CardSpotlight
                                        color="#efe9ff"
                                        className="bg-white border-0 rounded-[18px] shadow-[0_18px_40px_rgba(17,17,17,0.10)] p-[28px] transition-transform duration-300 hover:scale-[1.02]"
                                    >
                                        <div className="w-[52px] h-[52px] rounded-full bg-[#efe9ff] flex items-center justify-center mb-[18px] relative z-20">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3 17L9 11L13 15L21 7"
                                                    stroke="#7b4dff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M17 7H21V11"
                                                    stroke="#7b4dff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="text-[18px] font-bold text-[#111] mb-[10px] relative z-20">
                                            Scalable Growth
                                        </h3>
                                        <p className="text-[14px] leading-[1.8] text-[#555] relative z-20">
                                            We build flexible systems that can expand with your business needs and future plans.
                                        </p>
                                    </CardSpotlight>
                                </div>
                            </FollowerPointerCard>
                        </div>

                        {/* RIGHT: About Content */}
                        <div className="max-w-[520px]">
                            <p className="text-[12px] tracking-[0.35em] text-[#7b4dff] font-semibold mb-[16px]">
                                ABOUT
                            </p>

                            <h2 className="text-[34px] lg:text-[50px] font-extrabold text-[#111] leading-[1.05] mb-[18px]">
                                Need Amazing Design?
                            </h2>

                            <p className="text-[15px] lg:text-[16px] leading-[1.85] text-[#555]">
                                We build modern digital experiences that combine strong design with powerful development. Our focus is to deliver clean, scalable, and business-ready solutions that look premium and perform flawlessly across all devices.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* Why Businesses Choose Evolvex AI */}
            <WhyBusinessesChoose />

            {/* About Page CTA */}
            <section className="py-[90px] lg:py-[120px] pb-[140px] bg-white" id="about-cta" data-animate="fade-up">
                <div className="w-full px-5">

                    <div className="relative bg-[#6f5af7] rounded-[28px] p-[48px_28px] lg:p-[72px_80px] overflow-hidden">

                        {/* Decorative geometric overlays */}
                        <div
                            className="absolute w-[220px] h-[220px] bg-white/12 rounded-full top-[-80px] right-[180px] pointer-events-none">
                        </div>
                        <div
                            className="absolute w-[260px] h-[260px] bg-white/10 rounded-[32px] rotate-45 right-[-120px] top-[-60px] pointer-events-none">
                        </div>
                        <div
                            className="absolute w-[180px] h-[180px] bg-white/10 rounded-full right-[60px] bottom-[-60px] pointer-events-none">
                        </div>

                        <div className="relative z-10 max-w-[620px] text-white">
                            <h2 className="text-[26px] lg:text-[34px] font-bold leading-[1.3] mb-[16px] tracking-[-0.02em]">
                                Ready to Transform Your Vision Into Reality?
                            </h2>

                            <p className="text-[14px] lg:text-[16px] leading-[1.7] text-white/90 mb-[36px] max-w-[480px]">
                                Let us collaborate to build innovative and
                                future-ready solutions.
                            </p>

                            <a href="/contact"
                                className="inline-block px-[36px] py-[14px] bg-white text-[#6f5af7] text-[14px] font-semibold rounded-full shadow-[0_12px_30px_rgba(0,0,0,0.15)] transition-all duration-250 hover:-translate-y-[2px] hover:shadow-[0_18px_42px_rgba(0,0,0,0.22)]">
                                Start Your Project
                            </a>
                        </div>

                    </div>

                </div>
            </section>

            {/* Contact Section - extracted */}
            <section id="contact" className="py-[96px] bg-white relative overflow-hidden" aria-labelledby="contact-heading">
                <div className="w-full max-w-[1200px] mx-auto px-5 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div data-animate="fade-right">
                            <header className="mb-[40px]">
                                <h2 id="contact-heading" className="text-[40px] lg:text-[48px] font-medium text-[#6C4CF0] mb-6 leading-tight">
                                    Contact Us</h2>
                                <p className="text-[#494949] text-[20px] leading-[1.6]">We are here to assist you with services, <br />
                                    collaborations, or general inquiries.Our team <br /> responds within 24 hours.</p>
                            </header>
                            <ul className="space-y-8">
                                <li className="flex items-start" style={{ gap: '45px' }}>
                                    <div className="w-6 h-6 flex items-center justify-center text-[#6C4CF0] shrink-0 mt-1">
                                        <img src="/assets/svg/Mail.svg" alt="Email" className="w-6 h-6 object-contain" />
                                    </div>
                                    <div>
                                        <span className="block text-[#000000] text-[20px] font-regular">contact@evolvex.ai</span>
                                    </div>
                                </li>
                                <li className="flex items-start" style={{ gap: '45px' }}>
                                    <div className="w-6 h-6 flex items-center justify-center text-[#6C4CF0] shrink-0 mt-1">
                                        <img src="/assets/svg/Location.svg" alt="Location" className="w-6 h-6 object-contain" />
                                    </div>
                                    <div>
                                        <span className="block text-[#000000] text-[20px] font-regular">venketasa colony, Pollachi<br />Coimbatore
                                            - 642000</span>
                                    </div>
                                </li>
                                <li className="flex items-start" style={{ gap: '45px' }}>
                                    <div className="w-6 h-6 flex items-center justify-center text-[#6C4CF0] shrink-0 mt-1">
                                        <img src="/assets/svg/Mobile.svg" alt="Phone" className="w-6 h-6 object-contain" />
                                    </div>
                                    <div>
                                        <span className="block text-[#000000] text-[20px] font-regular">+91 123 654 7890</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative mt-8 lg:mt-0 lg:h-[600px] flex items-center" data-animate="fade-left">
                            <form action="#" method="post" className="space-y-5 w-full max-w-[480px] relative z-20">
                                <div>
                                    <input type="text" placeholder="Name"
                                        className="w-full h-[56px] px-6 py-4 rounded-[8px] border border-[#D8D8D8] bg-transparent hover:border-[#6C4CF4] focus:border-[#6C4CF0] focus:ring-4 focus:ring-[#6C4CF0]/10 outline-none transition-all placeholder:text-gray-400 text-[#494949] text-[16px] mt-6"
                                        required />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email"
                                        className="w-full h-[56px] px-6 py-4 rounded-[8px] border border-[#D8D8D8] bg-transparent hover:border-[#6C4CF4] focus:border-[#6C4CF0] focus:ring-4 focus:ring-[#6C4CF0]/10 outline-none transition-all placeholder:text-gray-400 text-[#494949] text-[16px] mt-6"
                                        required />
                                </div>
                                <div>
                                    <input type="tel" placeholder="Phone"
                                        className="w-full h-[56px] px-6 py-4 rounded-[8px] border border-[#D8D8D8] bg-transparent hover:border-[#6C4CF4] focus:border-[#6C4CF0] focus:ring-4 focus:ring-[#6C4CF0]/10 outline-none transition-all placeholder:text-gray-400 text-[#494949] text-[16px] mt-6" />
                                </div>
                                <div>
                                    <textarea rows="4" placeholder="Send Us a Message"
                                        className="w-full px-6 py-4 rounded-[8px] border border-[#D8D8D8] bg-transparent hover:border-[#6C4CF4] focus:border-[#6C4CF0] focus:ring-4 focus:ring-[#6C4CF0]/10 outline-none transition-all placeholder:text-gray-400 text-[#494949] resize-none text-[16px] mt-6"></textarea>
                                </div>
                                <div className="relative">
                                    <button type="submit"
                                        className="w-full h-[64px] px-6 py-4 rounded-[6px] text-white font-medium text-[17.6px] mt-6 shadow-lg transition-all hover:opacity-90 flex items-center justify-center gap-3 relative overflow-hidden"
                                        style={{ background: 'linear-gradient(90deg, #135AC6 0%, #6C4CF4 100%)' }}>
                                        <span className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">Submit</span>
                                    </button>
                                    <img src="/assets/svg/letter_send.svg" alt=""
                                        className="absolute left-1/2 -translate-x-1/2 top-[20px] w-[240px] h-[112px] object-contain pointer-events-none z-50 filter brightness-0 invert" />
                                </div>
                            </form>
                            <div
                                className="pointer-events-none absolute w-[526px] md:w-[800px] h-[398px] top-1/2 -right-[20px] lg:-right-[60px] z-10 hidden md:block mt-8"
                                style={{ transform: 'translate(24%, -50%)' }}>
                                <img src="/assets/images/Contact Us.png" alt="Contact Us 3D Illustration"
                                    className="w-full h-auto object-contain opacity-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
