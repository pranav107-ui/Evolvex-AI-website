import React from 'react';
import { motion } from 'framer-motion';
import OurStorySection from '../components/OurStorySection';
import WhyBusinessesChoose from '../components/WhyBusinessesChoose';
import { FollowerPointerCard } from '../components/ui/following-pointer';
import { CardSpotlight } from '../components/ui/card-spotlight';
import Testimonials from '../components/Testimonials';
import ScrollReveal from '../components/ui/ScrollReveal';
import { StatefulButton } from '../components/ui/stateful-button';

const About = () => {
    // IntersectionObserver removed - animations handled by ScrollReveal

    return (
        <>
            {/* About Hero */}
            <section className="py-20 lg:py-[120px] pb-16 lg:pb-[100px] bg-white mt-8 md:mt-12">
                <div
                    className="w-full px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[60px] lg:gap-[80px] items-center text-center lg:text-left">

                    {/* Left Content */}
                    <ScrollReveal variant="featureLeft" className="mx-auto">
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
                    </ScrollReveal>

                    {/* Right Visual */}
                    <ScrollReveal variant="featureRight" className="flex justify-center items-center">
                        <img src="/assets/images/abstract.png" alt="Abstract digital innovation visual" loading="eager"
                            className="w-full max-w-[480px] h-auto drop-shadow-2xl" />
                    </ScrollReveal>

                </div>
            </section>

            {/* Our Story Section - Redesigned Narrative */}
            {/* Our Story Section - Premium Corporate Version */}
            <OurStorySection />

            {/* Mission & Vision Section */}
            <section className="relative py-28 bg-white overflow-hidden" id="mission-vision">
                {/* 2. Floating Light Background */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px]
                    bg-gradient-to-r from-[#5B8CFF]/10 via-[#7C5CFF]/10 to-[#B84CFF]/10 blur-[140px] rounded-full"/>
                </div>

                <div className="max-w-6xl mx-auto px-6">
                    {/* 1. Soft Gradient Divider Line */}
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#7C5CFF]/40 to-transparent mb-16" />

                    {/* Header */}
                    <div className="text-center mb-20 relative z-10">
                        <p className="text-center text-sm md:text-base tracking-[0.25em] font-semibold 
text-[#7C5CFF] mb-8 uppercase">
                            OUR DIRECTION
                        </p>
                        {/* 5. Headline Underline Accent */}
                        <h2 className="relative inline-block text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Mission and Vision
                            <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-gradient-to-r from-[#5B8CFF] via-[#7C5CFF] to-[#B84CFF] rounded-full" />
                        </h2>
                        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
                            Clear direction. Strong execution. Long-term impact.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full relative z-10">
                        {/* Mission Card - Slide Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 w-full md:flex-1 relative z-10"
                        >
                            {/* 6. Micro Glow on Title */}
                            <p className="text-xs tracking-[0.3em] font-semibold text-[#7C5CFF] uppercase mb-3">
                                MISSION
                            </p>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-5">
                                Delivering Technology That Drives Business Forward
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                We exist to help organizations move faster, operate smarter, and grow stronger through dependable digital solutions. Our focus is on building systems that improve performance, simplify complexity, and create measurable business value.
                            </p>
                        </motion.div>

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

                        {/* Vision Card - Slide Right */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 w-full md:flex-1 relative z-10"
                        >
                            {/* 6. Micro Glow on Title */}
                            <p className="text-xs tracking-[0.3em] font-semibold text-[#7C5CFF] uppercase mb-3">
                                VISION
                            </p>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-5">
                                Becoming a Trusted Force in Digital Transformation
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                We aim to shape the future of modern enterprises by setting high standards in technology delivery, strategic thinking, and execution excellence. Our ambition is to be the partner businesses rely on when progress matters most.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Testimonials Section */}
            <Testimonials />

            {/* Our Values Section */}
            <section
                className="py-[100px] lg:py-[130px] bg-[#f5f6fa]"
                id="our-values"
            >
                <div className="text-center mb-[60px] lg:mb-[80px]">
                    <ScrollReveal variant="heading">
                        <h2 className="text-[32px] lg:text-[44px] font-extrabold text-[#111]">
                            Our Values
                        </h2>
                    </ScrollReveal>
                </div>
                <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
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
            {/* About Page CTA */}
            {/* <section className="py-[90px] lg:py-[120px] pb-[140px] bg-white" id="about-cta" data-animate="fade-up">
                <div className="w-full px-5">

                    <div className="relative bg-[#6f5af7] rounded-[28px] p-[48px_28px] lg:p-[72px_80px] overflow-hidden">

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
            </section> */}

            <section className='flex items-center justify-center p-4 py-20'>
                <style>{`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
                        
                    * {
                        font-family: "Poppins", sans-serif;
                    }
                `}</style>
                <div className='relative w-full max-w-5xl bg-gradient-to-bl from-indigo-600 to-indigo-900 rounded-2xl border border-indigo-500 px-6 py-16 pb-18 flex flex-col items-center text-center'>
                    <div className='inline-block bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-6'>
                        <span className='text-slate-200 text-xs'>Let’s ship something great</span>
                    </div>

                    <h1 className='text-3xl md:text-[40px]/13 font-medium text-white mb-8 max-w-2xl leading-tight'>
                        Bring your next product idea to <br className="hidden md:block" />life with Evolvex AI.
                    </h1>

                    <div className='flex flex-col sm:flex-row items-center gap-4'>
                        <a href="/contact" className='bg-white text-gray-900 rounded-full px-6 py-3.5 text-sm flex items-center gap-2 hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer'>
                            Kickstart the build
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth='2' stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>

                        <button className='bg-white rounded-full p-1.5 pr-8 flex items-center gap-3 hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer'>
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="Avatar" className='size-9 rounded-full object-cover' />
                            <div className="text-left flex flex-col justify-center gap-0.5">
                                <span className="text-xs text-gray-900 leading-tight">Quick 15-min call</span>
                                <span className="text-xs text-gray-900 font-medium leading-tight flex items-center gap-1">
                                    We’re online<span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block"></span>
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-[96px] bg-white relative overflow-hidden" aria-labelledby="contact-heading">
                <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <ScrollReveal variant="featureLeft">
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
                        </ScrollReveal>
                        <ScrollReveal variant="featureRight" className="relative mt-8 lg:mt-0 lg:h-[600px] flex items-center">
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
                                    <StatefulButton
                                        className="w-full h-[64px] px-6 py-4 rounded-[6px] text-white font-medium text-[17.6px] mt-6 shadow-lg transition-all hover:opacity-90 flex items-center justify-center gap-3 relative overflow-hidden"
                                        style={{ background: 'linear-gradient(90deg, #135AC6 0%, #6C4CF4 100%)' }}
                                        onClick={(e) => { e.preventDefault(); return new Promise(resolve => setTimeout(resolve, 3000)); }}
                                    >
                                        Submit
                                    </StatefulButton>
                                    <img src="/assets/svg/letter_send.svg" alt=""
                                        className="absolute left-1/2 -translate-x-1/2 top-[20px] w-[240px] h-[112px] object-contain pointer-events-none z-50 filter brightness-0 invert" />
                                </div>
                            </form>
                            <div
                                className="pointer-events-none absolute w-[480px] md:w-[600px] h-[300px] top-1/2 -right-[60px] lg:-right-[40px] z-10 hidden md:block mt-8"
                                style={{ transform: 'translate(24%, -50%)' }}>
                                <img src="/assets/images/Contact Us.png" alt="Contact Us 3D Illustration"
                                    className="w-full h-auto object-contain opacity-100" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
