import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";
import { Link } from 'react-router-dom';
import { runAntigravity } from '../scripts/antigravity.js';
import WhyWorkWithUs from '../components/WhyWorkWithUs';
import { StickyScroll } from '../components/ui/sticky-scroll-reveal';
import Testimonials from '../components/Testimonials';
import TrustedBy from '../components/TrustedBy';

const servicesContent = [
    {
        title: "Product Engineering",
        description:
            "End-to-end development of scalable and robust digital products: architecture, development, testing, and deployment.",
        content: (
            <div className="h-full w-full flex items-center justify-center bg-white">
                <img
                    src="/assets/images/product-engineering.png"
                    width={550}
                    height={430}
                    className="h-full w-full object-cover"
                    alt="Product Engineering" />
            </div>
        ),
    },
    {
        title: "Custom Software Development",
        description:
            "Tailored software solutions built to solve specific business challenges with long-term scalability and maintainability.",
        content: (
            <div className="h-full w-full flex items-center justify-center bg-white">
                <img
                    src="/assets/images/software-development.png"
                    width={550}
                    height={430}
                    className="h-full w-full object-cover"
                    alt="Custom Software Development" />
            </div>
        ),
    },
    {
        title: "Mobile App Development",
        description:
            "Design and development of secure, fast, and intuitive native and cross-platform mobile applications.",
        content: (
            <div className="h-full w-full flex items-center justify-center bg-white">
                <img
                    src="/assets/images/mobile-development.png"
                    width={550}
                    height={430}
                    className="h-full w-full object-cover"
                    alt="Mobile App Development" />
            </div>
        ),
    },
    {
        title: "Artificial Intelligence & Automation",
        description: (
            <>
                <p>AI-driven solutions including ML models, computer vision, predictive analytics, and automation frameworks.</p>
                <div className="mt-4">
                    <Link to="/services"
                        className="inline-flex min-w-[150px] h-[40px] px-[28px] items-center justify-center rounded-[8px] bg-white text-[#000000] font-semibold text-[15px] shadow-sm transition-transform duration-200 hover:scale-[1.02] hover:bg-gray-50">Explore
                        Services</Link>
                </div>
            </>
        ),
        content: (
            <div className="h-full w-full flex items-center justify-center bg-white">
                <img
                    src="/assets/images/service-ai-automation.png"
                    width={550}
                    height={430}
                    className="h-full w-full object-cover"
                    alt="Artificial Intelligence & Automation" />
            </div>
        ),
    },
];

const Home = () => {
    // Reset key for circles when section leaves view
    const [circleResetKey, setCircleResetKey] = useState(0);
    const circleSectionRef = useRef(null);
    const isCircleSectionInView = useInView(circleSectionRef, { margin: "-20% 0px -20% 0px" });

    useEffect(() => {
        if (!isCircleSectionInView) {
            setCircleResetKey(prev => prev + 1);
        }
    }, [isCircleSectionInView]);

    useEffect(() => {
        const el = document.getElementById("hero-title-anim");
        if (!el) return;

        // Add in-view once on page load
        const t = setTimeout(() => {
            el.classList.add("in-view");
        }, 250);

        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        // Hero Animation
        runAntigravity('hero-canvas-container', {
            count: 300,
            magnetRadius: 6,
            ringRadius: 7,
            waveSpeed: 0.4,
            waveAmplitude: 1,
            particleSize: 1.5,
            lerpSpeed: 0.05,
            color: '#6C4CF4',
            particleShape: 'sphere',
            autoAnimate: true,
            particleVariance: 1
        });



        // General Scroll Animations
        const animateElements = document.querySelectorAll('[data-animate]');
        const animateObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    animateObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        animateElements.forEach(el => animateObserver.observe(el));

        // Service Scroll Animation
        // Service Scroll Animation - REMOVED (Replaced with StickyScroll)
        /*
        const textBlocks = document.querySelectorAll(".service-text");
        const images = document.querySelectorAll(".service-img");
        const serviceObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    textBlocks.forEach(t => t.classList.remove("active"));
                    entry.target.classList.add("active");
                    const targetId = entry.target.getAttribute("data-target");
                    images.forEach((img) => {
                        img.classList.remove("active");
                        if (img.id === targetId) {
                            img.classList.add("active");
                        }
                    });
                }
            });
        }, { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" });
        textBlocks.forEach((block) => serviceObserver.observe(block));
        */

    }, []);

    return (
        <>
            {/* Hero */}
            <section
                className="relative min-h-[calc(100vh-80px)] py-[120px] pb-[80px] overflow-hidden bg-[radial-gradient(420px_420px_at_75%_45%,rgba(96,165,250,0.35),transparent_60%),linear-gradient(120deg,#eef4ff_0%,#f7fbff_35%,#fff4f7_100%)] flex items-center"
                aria-label="Hero">

                <div id="hero-canvas-container" className="absolute inset-0 z-0"></div>

                <div
                    className="w-full px-5 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-[64px] items-center text-center lg:text-left relative z-10">
                    <div className="hero-content" data-animate="fade-up">
                        <h1
                            className="text-[38px] md:text-[58px] lg:text-[63px] leading-[1.08] font-bold tracking-[-0.04em] text-[#1a1a1a] mb-[24px]">

                            <span className="block lg:whitespace-nowrap">Innovation. Intelligence.</span>

                            <span id="hero-title-anim" className="relative inline-block text-[#6C4CF4] px-[8px] mt-2 leading-none">

                                <span className="relative z-10">Evolvex</span>

                                <span
                                    className="anim-rect absolute top-0 left-0 border border-[#1a1a1a] dark:border-white pointer-events-none box-border z-0"></span>

                                <span className="anim-pointer absolute top-0 left-0 z-20 text-blue-500 pointer-events-none opacity-0">
                                    <svg stroke="#6C4CF4" fill="#6C4CF4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                                        viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 -rotate-90">
                                        <path
                                            d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z">
                                        </path>
                                    </svg>
                                </span>



                            </span>
                        </h1>
                        <p className="text-[16px] leading-[1.65] text-gray-600 max-w-none mb-[36px] mx-0 lg:mx-0">Building intelligent
                            digital solutions that transform brands into future-ready, high-performing powerhouses.</p>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-[18px]">
                            <Link to="/services"
                                className="inline-flex min-w-[160px] h-[48px] px-[28px] items-center justify-center rounded-[8px] bg-gradient-to-r from-[#B455F3] to-[#393AF3] text-white text-white font-semibold text-[15px] shadow-[0_4px_14px_rgba(108,76,244,0.3)] transition-transform duration-200 hover:scale-[1.02] hover:bg-[#5b3ddb]">Get
                                Started</Link>
                            <Link to="/services"
                                className="inline-flex min-w-[170px] h-[48px] px-[28px] items-center justify-center rounded-[8px] bg-white border border-[#6C4CF4] text-[#6C4CF4] font-semibold text-[15px] shadow-sm transition-transform duration-200 hover:scale-[1.02] hover:bg-gray-50">Explore
                                Services</Link>
                        </div>
                    </div>

                    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center" data-animate="fade-left">
                        <div className="absolute w-[300px] h-[300px] bg-[#8AB4F8] rounded-full blur-[90px] opacity-40 animate-pulse-slow">
                        </div>

                        <div className="relative w-[300px] h-[300px]">
                            <div className="absolute top-[10%] right-[10%] w-2.5 h-2.5 bg-[#4285F4] rounded-full opacity-80"></div>
                            <div className="absolute top-[40%] left-[10%] w-2 h-2 bg-[#4285F4] rounded-full opacity-60"></div>
                            <div className="absolute bottom-[20%] right-[20%] w-2 h-2 bg-[#4285F4] rounded-full opacity-70"></div>
                            <div className="absolute top-[20%] left-[40%] w-1.5 h-1.5 bg-[#4285F4] rounded-full opacity-40"></div>
                            <div className="absolute bottom-[40%] left-[20%] w-1 h-1 bg-[#4285F4] rounded-full opacity-50"></div>
                            <div className="absolute top-[60%] right-[5%] w-1.5 h-1.5 bg-[#4285F4] rounded-full opacity-60"></div>
                            <div className="absolute bottom-[10%] left-[50%] w-1 h-1 bg-[#4285F4] rounded-full opacity-30"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Expertise */}
            <section className="py-[48px] bg-gradient-to-b from-[#fafaff] to-[#f7f9ff]" id="services">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6">

                    <h2
                        className="font-bold text-[42px] md:text-[64px] lg:text-[52px] leading-[1.1] text-center mb-[24px] text-[#0b1220]">
                        Our Services
                    </h2>
                    <p className="text-[18px] leading-[27px] text-gray-600 text-center mb-[30px] max-w-2xl mx-auto text-gray-500">
                        Everything you need to design, build, and scale your digital products.
                    </p>

                    <div className="w-full">
                        <StickyScroll content={servicesContent} />
                    </div>
                </div>
            </section>
            {/* Trusted By */}
            <TrustedBy />

            {/* Who We Are */}
            <section className="relative bg-white py-24 current-folder" id="about">

                {/* Decorative Circles */}
                <div ref={circleSectionRef} className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Circle 1 */}
                    <motion.div
                        key={`c1-${circleResetKey}`}
                        initial={{ y: 0 }}
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                        className="absolute top-0 right-[10%] pointer-events-auto"
                    >
                        <motion.div drag dragMomentum={false} whileHover={{ scale: 1.05 }} className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#E6DEFF] to-[#6C4CF4] cursor-grab active:cursor-grabbing" />
                    </motion.div>

                    {/* Circle 2 */}
                    <motion.div
                        key={`c2-${circleResetKey}`}
                        initial={{ y: 0 }}
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute top-[170px] left-[15%] pointer-events-auto"
                    >
                        <motion.div drag dragMomentum={false} whileHover={{ scale: 1.05 }} className="w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#E6DEFF] to-[#6C4CF4] cursor-grab active:cursor-grabbing" />
                    </motion.div>

                    {/* Circle 3 */}
                    <motion.div
                        key={`c3-${circleResetKey}`}
                        initial={{ y: 0 }}
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-[320px] right-[20%] pointer-events-auto"
                    >
                        <motion.div drag dragMomentum={false} whileHover={{ scale: 1.05 }} className="w-[58px] h-[58px] rounded-full bg-gradient-to-br from-[#E6DEFF] to-[#6C4CF4] cursor-grab active:cursor-grabbing" />
                    </motion.div>

                    {/* Circle 4 */}
                    <motion.div
                        key={`c4-${circleResetKey}`}
                        initial={{ y: 0 }}
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                        className="absolute bottom-[20%] left-[15%] pointer-events-auto"
                    >
                        <motion.div drag dragMomentum={false} whileHover={{ scale: 1.05 }} className="w-[90px] h-[90px] rounded-full bg-gradient-to-br from-[#E6DEFF] to-[#6C4CF4] cursor-grab active:cursor-grabbing" />
                    </motion.div>

                    {/* Circle 5 */}
                    <motion.div
                        key={`c5-${circleResetKey}`}
                        initial={{ y: 0 }}
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                        className="absolute bottom-[10%] right-[20%] pointer-events-auto"
                    >
                        <motion.div drag dragMomentum={false} whileHover={{ scale: 1.05 }} className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#E6DEFF] to-[#6C4CF4] cursor-grab active:cursor-grabbing" />
                    </motion.div>
                </div>

                <div className="max-w-[1200px] mx-auto px-6 relative z-10">

                    <div className="text-center mb-24 pt-20">
                        <h2 className="text-[52px] font-bold text-[#1A1A1A] leading-[60px] tracking-[0.1px]">
                            Crafting Intelligent Digital Experiences
                        </h2>

                        <p className="mt-4 max-w-[640px] mx-auto text-[18px] text-[#6B7280] leading-[150%]">
                            We are a technology-first team that turns ideas into scalable digital products powered by engineering and
                            AI.
                        </p>

                        <a href="#" className="inline-block mt-8 px-7 py-3 text-[14px] font-medium text-white
                bg-[#6C4CF4] rounded-[10px] transition hover:opacity-90">
                            Start Your Project
                        </a>
                    </div>

                    <div className="relative py-20">

                        <div className="relative inline-block">
                            <span className="absolute -top-10 left-0 text-[96px] font-extrabold tracking-[0.12em]
                bg-gradient-to-r from-[#B2EBF2] via-[#D1C4E9] to-[#F8BBD0]
                bg-clip-text text-transparent opacity-60 pointer-events-none">
                                COMPANY
                            </span>
                            <h2 className="relative z-10 text-[32px] md:text-[38px] bottom-[40px] text-center font-bold text-[#1a1a1a] mt-12 left-[64%]">
                                Who We Are
                            </h2>
                        </div>

                        <div className="relative z-10 grid lg:grid-cols-2 items-center -mt-[100px]">
                            <div className="w-full flex justify-center lg:justify-start">
                                <div className="bg-[#D1C4E9]/20 rounded-[20px] p-8 w-fit shadow-sm">
                                    <p className="text-[16px] md:text-[17px] text-[#1a1a1a] leading-[1.6] font-normal">
                                        We are Evolvex AI Solutions, a digital engineering company <br className="hidden md:block" />
                                        focused on building modern, scalable, and intelligent products. <br className="hidden md:block" />
                                        Our core strength lies in combining innovation, design, and<br className="hidden md:block" />
                                        deep technology to deliver impactful solutions for businesses.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full flex justify-center lg:justify-end mb-24">
                                <img src="/assets/images/abstract.png" alt="Abstract 3D Shape"
                                    className="w-[280px] md:w-[320px] object-contain drop-shadow-2xl" />
                            </div>

                        </div>

                        {/* MISSION & VISION */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-[920px] mx-auto relative">

                            <div className="w-[300px] min-h-[150px] bg-[#FFFFFF] border border-[#EAEAEA]
                  rounded-[20px] p-6 flex flex-col z-10">
                                <h4 className="text-[16px] font-semibold text-[#1A1A1A] mb-2">
                                    Our Mission
                                </h4>
                                <p className="text-[14px] text-[#6B7280] leading-[150%] top-2">
                                    Our mission is to help brands innovate faster through intelligent product engineering
                                    and AI-driven solutions.
                                </p>
                            </div>

                            {/* Spring Connector */}
                            <div className="hidden md:flex flex-shrink-0 -mx-12 z-0">
                                <div className="relative w-[160px]">
                                    <img src="/assets/svg/spring.svg" alt="" className="w-full h-auto object-contain" />
                                    <div className="absolute inset-0 bg-[#8000FF]" style={{
                                        mixBlendMode: 'overlay',
                                        maskImage: 'url("/assets/svg/spring.svg")',
                                        maskSize: 'contain',
                                        maskRepeat: 'no-repeat',
                                        maskPosition: 'center',
                                        WebkitMaskImage: 'url("/assets/svg/spring.svg")',
                                        WebkitMaskSize: 'contain',
                                        WebkitMaskRepeat: 'no-repeat',
                                        WebkitMaskPosition: 'center'
                                    }}></div>
                                </div>
                            </div>

                            <div className="w-[300px] min-h-[150px] bg-[#FFFFFF] border border-[#EAEAEA]
                  rounded-[20px] p-6 flex flex-col z-10">
                                <h4 className="text-[16px] font-semibold text-[#1A1A1A] mb-2">
                                    Our Vision
                                </h4>
                                <p className="text-[14px] text-[#6B7280] leading-[150%]">
                                    To build world-class digital experiences that empower companies to scale confidently.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

            </section>

            {/* Why Brands Choose Evolvex Section */}
            <section className="section flex flex-col items-center" id="why-brands" aria-labelledby="why-brands-title">

                <div className="text-center mb-[56px]" data-animate="fade-up">
                    <h2 id="why-brands-title"
                        className="text-[35.2px] md:text-[41.6px] font-bold text-[#0b1220] mb-2 leading-tight">
                        Why Brands Choose Evolvex
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px] justify-center mx-auto mb-[30px]">

                    <article
                        className="w-[320px] h-[400px] rounded-[16px] p-[32px] relative overflow-hidden group flex flex-col items-center text-center justify-start pt-[64px] hover:scale-105 transition-transform duration-300"
                        style={{ backgroundColor: '#E6DEFF' }} data-animate="card-pop">

                        <div className="relative z-20 flex flex-col gap-4 items-center">
                            <h3 className="font-semibold text-[22.4px] leading-[1.2] text-[#0b1220]">
                                Engineering-Driven Execution
                            </h3>
                            <p className="m-0 text-[#0b1220] opacity-75 text-[15.2px] leading-[1.5]">
                                Our processes are built on strong engineering foundations, ensuring every product is structured,
                                optimized, and technically sound.
                            </p>
                        </div>

                        <div className="absolute left-0 bottom-[-20px] w-[200px] h-[200px] pointer-events-none z-10">
                            <img src="/assets/images/deco-purple-1.png" alt="" className="w-full h-full object-contain object-left-bottom" />
                        </div>
                    </article>

                    <article
                        className="w-[320px] h-[400px] rounded-[16px] p-[32px] relative overflow-hidden group flex flex-col items-center text-center justify-start pt-[64px] hover:scale-105 transition-transform duration-300"
                        style={{ backgroundColor: '#E6DEFF' }} data-animate="card-pop">

                        <div className="relative z-20 flex flex-col gap-4 items-center">
                            <h3 className="font-semibold text-[22.4px] leading-[1.2] text-[#0b1220]">
                                AI-Focused Development
                            </h3>
                            <p className="m-0 text-[#0b1220] opacity-75 text-[15.2px] leading-[1.5]">
                                We integrate intelligence across the entire product lifecycle, from data-driven insights to automation
                                and predictive capabilities.
                            </p>
                        </div>

                        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] w-[200px] h-[200px] pointer-events-none z-10">
                            <img src="/assets/images/deco-purple-2.png" alt="" className="w-full h-full object-contain object-bottom" />
                        </div>
                    </article>

                    <article
                        className="w-[320px] h-[400px] rounded-[16px] p-[32px] relative overflow-hidden group flex flex-col items-center text-center justify-start pt-[64px] hover:scale-105 transition-transform duration-300"
                        style={{ backgroundColor: '#E6DEFF' }} data-animate="card-pop">

                        <div className="relative z-20 flex flex-col gap-4 items-center">
                            <h3 className="font-semibold text-[22.4px] leading-[1.2] text-[#0b1220]">
                                Transparent Collaboration
                            </h3>
                            <p className="m-0 text-[#0b1220] opacity-75 text-[15.2px] leading-[1.5]">
                                We believe in clarity, open communication, and a smooth development workflow that keeps clients informed
                                and empowered.
                            </p>
                        </div>

                        <div className="absolute right-0 bottom-[-20px] w-[200px] h-[200px] pointer-events-none z-10">
                            <img src="/assets/images/deco-purple-3.png" alt=""
                                className="w-full h-full object-contain object-right-bottom" />
                        </div>
                    </article>

                </div>

                <div
                    className="w-full max-w-[1100px] h-[220px] rounded-[20px] top-0 relative overflow-hidden flex items-center justify-center text-center mx-auto"
                    style={{ background: 'linear-gradient(90deg, #E6DEFF 0%, #FFFFFF 50%, #E6DEFF 100%)' }} data-animate="fade-up">

                    <div className="absolute left-0 top-0 w-[180px] h-[180px] pointer-events-none z-0">
                        <img src="/assets/images/deco-purple-4.png" alt="" className="w-full h-full object-contain object-left-top" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
                        <h3 className="text-[17.6px] font-bold text-[#0b1220] leading-tight mb-3">
                            Let’s Build Something Meaningful Together
                        </h3>
                        <p className="m-0 text-[#0b1220] opacity-70 text-[17.6px]">
                            Our team is ready to help you shape products that are innovative, scalable, and intelligently engineered.
                        </p>
                    </div>
                </div>
            </section>
            {/* Testimonials */}
            <Testimonials />

            {/* Careers Intro */}
            <section className="relative w-screen ml-[calc(50%-50vw)] pt-[90px] pb-[250px] overflow-hidden bg-white">

                <span className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2
            font-black tracking-widest
            bg-gradient-to-r from-[#B2EBF2] via-[#D1C4E9] to-[#F8BBD0]
            bg-clip-text text-transparent
            opacity-50
            whitespace-nowrap select-none pointer-events-none z-0"
                    style={{ fontSize: 'clamp(80px, 22vw, 260px)', lineHeight: 1 }}>
                    CAREERS
                </span>

                <div
                    className="hidden lg:block absolute top-[20%] -translate-y-1/2 z-10 w-[300px] pointer-events-none animate-float-bob">
                    <img src="/assets/images/decorative-cone.png" alt="" className="w-full h-auto " />
                </div>

                <div className="relative z-20 top-[180px] flex flex-col items-center text-center px-4">

                    <h1 className="text-[38.4px] md:text-[48px] lg:text-[64px]
              font-extrabold text-[#1a1a1a]
              leading-[1.15] tracking-tight mb-6">
                        Be a Part of Our Journey
                    </h1>

                    <div className="flex justify-center mb-8">
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

                    <div className="relative z-20  top-8 flex-col items-center text-center px-4">
                        <p className="text-[19.2px] md:text-[20px]
              text-gray-600 top-8 max-w-[820px]
              leading-[1.75]">
                            We are committed to creating an environment where talent flourishes and ideas <br />
                            shape future innovations. Our organisation values creativity, integrity, and excellence,<br />
                            and we encourage individuals to explore impactful opportunities with us.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <WhyWorkWithUs />

            {/* Life at Our Company Section */}
            <section className="py-[96px] bg-white relative overflow-hidden" id="life" aria-labelledby="life-heading">
                <div className="w-full max-w-[1200px] mx-auto px-5 relative z-10">
                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 font-black tracking-widest bg-gradient-to-r from-[#B2EBF2] via-[#D1C4E9] to-[#F8BBD0] bg-clip-text text-transparent opacity-50 whitespace-nowrap select-none pointer-events-none z-0"
                        style={{ fontSize: 'clamp(80px, 22vw, 260px)', lineHeight: 1 }}>
                        CULTURE
                    </div>

                    <div className="text-center relative z-10" data-animate="fade-up">
                        <h2 id="life-heading" className="text-[38.4px] md:text-[48px] lg:text-[64px] font-extrabold text-[#1a1a1a] leading-[1.15] tracking-tight mb-12">
                            Life at Our Company
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-start mt-[110px]">
                        {/* Collage */}
                        <div className="relative w-full h-[450px] flex items-center justify-center lg:justify-start mt-[80px]" data-animate="fade-up">

                            {/* Col 1: Lounge + Outdoor */}
                            <div className="absolute left-0 lg:-left-[60px] top-[100px] w-[150px] flex flex-col gap-4 z-10">
                                <img src="/assets/images/life-office-1.png" alt="Office Life" className="w-full h-[120px] object-cover rounded-[16px] shadow-md hover:scale-105 transition-transform duration-300" />
                                <img src="/assets/images/life-outdoor.png" alt="Outdoor" className="w-full h-[120px] object-cover rounded-[16px] shadow-md hover:scale-105 transition-transform duration-300" />
                            </div>

                            {/* Col 2: Foosball + Building */}
                            <div className="absolute left-[165px] lg:left-[110px] top-[30px] w-[180px] flex flex-col gap-4 z-20">
                                <img src="/assets/images/life-game-room.png" alt="Game Room" className="w-full h-[300px] object-cover rounded-[20px] shadow-lg hover:scale-105 transition-transform duration-300" />
                                <img src="/assets/images/life-building.png" alt="Building" className="w-full h-[130px] object-cover rounded-[16px] shadow-md hover:scale-105 transition-transform duration-300" />
                            </div>

                            {/* Col 3: Hero + Post-its */}
                            <div className="absolute left-[360px] lg:left-[310px] top-0 w-[280px] flex flex-col gap-4 z-30">
                                <img src="/assets/images/life-hero-person.png" alt="Team Hero" className="w-full h-[360px] object-cover rounded-[28px] shadow-xl hover:scale-105 transition-transform duration-300" />
                                <img src="/assets/images/life-office-2.png" alt="Office Life" className="w-full h-[160px] object-cover rounded-[20px] shadow-lg hover:scale-105 transition-transform duration-300" />
                            </div>

                        </div>

                        {/* Content */}
                        <div className="space-y-4 mt-[200px] lg:pl-[60px]" data-animate="fade-left">
                            <h3 className="text-[25.6px] font-bold text-[#0b1220]">People and Environment</h3>
                            <p className="text-[19.2px] md:text-[20px] text-gray-600 top-12 max-w-[820px] leading-[1.70]">
                                Our culture is built on collaboration, integrity, and mutual respect. We celebrate achievements, encourage open communication, and provide opportunities for personal and professional growth. With a balanced work environment and supportive teams, we ensure a fulfilling experience for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Join Banner */}
            {/* <section className="py-[100px]" id="services-cta">
                <div className="w-full px-5 max-w-[1248px] mx-auto">

                    <div
                        className="relative bg-gradient-to-br from-[#6f5af7] to-[#7b61ff] rounded-[28px] p-[60px_28px] md:p-[80px_64px] overflow-hidden text-center"
                        data-animate="fade-up">

                        <div
                            className="absolute w-[260px] h-[260px] bg-white/10 rounded-full top-[-90px] left-[-90px] pointer-events-none">
                        </div>
                        <div
                            className="absolute w-[320px] h-[320px] bg-white/10 rounded-[40px] rotate-45 right-[-140px] top-[-80px] pointer-events-none">
                        </div>

                        <div className="relative z-10 max-w-[720px] mx-auto text-white">

                            <h2 className="text-[30px] md:text-[40px] font-bold mb-[16px] tracking-tight">
                                Ready to Build the Future With Us?
                            </h2>

                            <p className="text-[14px] md:text-[16px] font-normal leading-[1.7] text-white/90 mb-[36px]">
                                We are always looking for passionate individuals who are eager to learn, innovate, and make a meaningful impact.
                            </p>

                            <a href="/contact"
                                className="inline-block px-[36px] py-[14px] bg-gradient-to-r from-[#B455F3] to-[#393AF3] text-white text-[14px] font-semibold rounded-[10px] transition-all duration-250 hover:-translate-y-[2px]">
                                Join Our Team
                            </a>

                        </div>

                    </div>

                </div>
            </section> */}

            <section className="py-[100px]" id="services-cta-new">
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                `}</style>
                <div style={{ fontFamily: "'Poppins', sans-serif" }} className="max-w-5xl py-16 md:w-full mx-2 md:mx-auto flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#5524B7] to-[#380B60] rounded-2xl p-10 text-white">
                    <div className="flex flex-wrap items-center justify-center p-1 rounded-full bg-purple-600/10 backdrop-blur border border-purple-500/40 text-sm">
                        <div className="flex items-center">
                            <img className="size-6 md:size-7 rounded-full border-3 border-white"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="userImage1" />
                            <img className="size-6 md:size-7 rounded-full border-3 border-white -translate-x-2"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="userImage2" />
                            <img className="size-6 md:size-7 rounded-full border-3 border-white -translate-x-4"
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                                alt="userImage3" />
                        </div>
                        <p className="-translate-x-2 font-medium">Join the Evolvex talent network </p>
                    </div>
                    <h1 className="text-4xl md:text-5xl md:leading-[60px] font-semibold max-w-xl mt-5 bg-gradient-to-r from-white to-[#CAABFF] text-transparent bg-clip-text">Unlock Your Next Big Opportunity.</h1>
                    <button className="px-8 py-3 text-white bg-violet-600 hover:bg-violet-700 transition-all rounded-full uppercase text-sm mt-8">
                        Explore Careers
                    </button>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-[96px] bg-white relative overflow-hidden" aria-labelledby="contact-heading">
                {/* ... Reuse contact section code as it appears identical in both files ... */}
                {/* Since the user asked to convert each page, I should include the contact section here too if it's inservices.html, which it is. */}
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
                                        <img src="/assets/svg/Location-.svg" alt="Location" className="w-6 h-6 object-contain" />
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
                                className="pointer-events-none absolute w-[480px] md:w-[600px] h-[300px] top-1/2 -right-[60px] lg:-right-[35px] z-10 hidden md:block mt-8"
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
export default Home;
