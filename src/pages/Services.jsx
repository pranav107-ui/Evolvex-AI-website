import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FloatingLines from '../components/FloatingLines';
import TiltedCard from '../components/TiltedCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import Testimonials from '../components/Testimonials';
import TrustedBy from '../components/TrustedBy';
import ExpertiseCard from "../components/ExpertiseCard";
import {
    Boxes,
    Code2,
    Cloud,
    Bot,
    Smartphone,

    BriefcaseBusiness,
} from "lucide-react";


// import Robot from "@/assets/svg/robot.svg?react";
import { StatefulButton } from '../components/ui/stateful-button';

const Services = () => {

    // Add Scroll To Section Helper
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    useEffect(() => {
        // Any other side effects
    }, []);

    return (
        <>
            {/* SERVICES HERO */}
            <section className="relative min-h-[88vh] flex items-center bg-white overflow-hidden" aria-label="Services hero">

                {/* gradient background */}
                <div className="absolute inset-0 w-full h-full">
                    <FloatingLines
                        backgroundColor="#FFFFFF"
                        enabledWaves={["middle"]}
                        lineCount={[7]}
                        lineDistance={[16]}
                        linesGradient={["#e945f5", "#6c4cf4", "#e945f5"]}
                        interactive={false}
                        parallax={false}
                        mixBlendMode="normal"
                        styleMode="clean"
                    />
                </div>


                <div className="relative z-10 max-w-[1248px] mx-auto text-center">

                    <ScrollReveal variant="heading">
                        <h1 className="text-[42px] md:text-[52px] lg:text-[64px] leading-[1.1] font-bold text-[#1a1a1a] mb-[24px] tracking-tight">
                            Transforming Ideas into Intelligent<br />
                            Digital Solutions
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal variant="text">
                        <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#6F6C8F] max-w-[600px] mx-auto mb-[40px]">
                            Discover our expertise across engineering, cloud, AI, and business
                            modernization.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal variant="button">
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="/contact"
                                className="inline-flex px-[36px] py-[14px] rounded-[10px] bg-gradient-to-r from-[#B455F3] to-[#393AF3] text-white font-semibold text-[15.2px] shadow-[0_10px_30px_rgba(108,76,240,0.35)] transition-transform duration-200 hover:scale-[1.02]">
                                Get a Consultation
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Explore Our Expertise */}
            <section className="py-[60px] md:py-[80px] bg-white" id="expertise">
                <div className="w-full px-5 max-w-[1248px] mx-auto">

                    <ScrollReveal variant="heading">
                        <h2 className="text-center text-[25.6px] md:text-[32px] font-bold text-[#140a4f] mb-[36px] md:mb-[48px]">
                            Explore Our Expertise
                        </h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]">

                        {/* Card 1: Product Engineering */}
                        <ScrollReveal variant="card" delay={0.1}>
                            <TiltedCard captionText="Product Engineering" showMobileWarning={false} rotateAmplitude={10} scaleOnHover={1.03} containerHeight="100%">
                                <ExpertiseCard
                                    title="Product Engineering"
                                    desc="Build scalable digital products from concept to launch."
                                    accentClass="bg-gradient-to-r from-[#6C4CF4] to-[#FF4FD8]"
                                    icon={<Boxes className="w-5 h-5 text-[#6C4CF4]" />}
                                    onClick={() => scrollToSection('service-product')}
                                />
                            </TiltedCard>
                        </ScrollReveal>

                        {/* Card 2: Custom Software Development */}
                        <ScrollReveal variant="card" delay={0.2}>
                            <TiltedCard captionText="Custom Software Development" showMobileWarning={false} rotateAmplitude={10} scaleOnHover={1.03} containerHeight="100%">
                                <ExpertiseCard
                                    title="Custom Software Development"
                                    desc="Tailored software solutions that streamline operations."
                                    accentClass="bg-gradient-to-r from-[#2F7CFF] to-[#6C4CF4]"
                                    icon={<Code2 className="w-5 h-5 text-[#2F7CFF]" />}
                                    onClick={() => scrollToSection('service-software')}
                                />
                            </TiltedCard>
                        </ScrollReveal>

                        {/* Card 3: Cloud & DevOps */}
                        <ScrollReveal variant="card" delay={0.3}>
                            <TiltedCard captionText="Cloud & DevOps" showMobileWarning={false} rotateAmplitude={10} scaleOnHover={1.03} containerHeight="100%">
                                <ExpertiseCard
                                    title="Cloud & DevOps"
                                    desc="Cloud migration, CI/CD, automation, and infrastructure scaling."
                                    accentClass="bg-gradient-to-r from-[#6C4CF4] to-[#7AE7FF]"
                                    icon={<Cloud className="w-5 h-5 text-[#6C4CF4]" />}
                                    onClick={() => scrollToSection('service-cloud')}
                                />
                            </TiltedCard>
                        </ScrollReveal>

                        {/* Card 4: AI & Automation */}
                        <ScrollReveal variant="card" delay={0.4}>
                            <TiltedCard captionText="AI & Automation" showMobileWarning={false} rotateAmplitude={10} scaleOnHover={1.03} containerHeight="100%">
                                <ExpertiseCard
                                    title="AI & Automation"
                                    desc="Intelligent solutions for automation, predictions, and decision-making."
                                    accentClass="bg-gradient-to-r from-[#FF4FD8] to-[#B44CFF]"
                                    icon={<Bot className="w-5 h-5 text-[#B44CFF]" />}
                                    onClick={() => scrollToSection('service-ai')}
                                />
                            </TiltedCard>
                        </ScrollReveal>

                        {/* Card 5: Mobile App Development */}
                        <ScrollReveal variant="card" delay={0.5}>
                            <TiltedCard captionText="Mobile App Development" showMobileWarning={false} rotateAmplitude={10} scaleOnHover={1.03} containerHeight="100%">
                                <ExpertiseCard
                                    title="Mobile App Development"
                                    desc="Cross-platform and native apps with high performance."
                                    accentClass="bg-gradient-to-r from-[#00C2A8] to-[#6C4CF4]"
                                    icon={<Smartphone className="w-5 h-5 text-[#00A98F]" />}
                                    onClick={() => scrollToSection('service-mobile')}
                                />
                            </TiltedCard>
                        </ScrollReveal>

                        {/* Card 6: IT Consulting & Digital Transformation */}
                        <ScrollReveal variant="card" delay={0.6}>
                            <TiltedCard captionText="IT Consulting & Digital Transformation" showMobileWarning={false} rotateAmplitude={10} scaleOnHover={1.03} containerHeight="100%">
                                <ExpertiseCard
                                    title="IT Consulting & Digital Transformation"
                                    desc="Technology strategy, modernization, and process optimization."
                                    accentClass="bg-gradient-to-r from-[#FF8A34] to-[#FF4FD8]"
                                    icon={<BriefcaseBusiness className="w-5 h-5 text-[#FF8A34]" />}
                                    onClick={() => scrollToSection('service-it')}
                                />
                            </TiltedCard>
                        </ScrollReveal>

                    </div>

                </div>
            </section>

            {/* How We Deliver Excellence */}
            <section className="py-[70px] md:py-[90px] bg-white" id="delivery-excellence">
                <div className="w-full px-5 max-w-[1248px] mx-auto">

                    <div className="text-center mb-[70px]">
                        <ScrollReveal variant="heading">
                           <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-[36px] md:mb-[48px]">
                                <div
                                    className="robot-wrap relative w-[120px] md:w-[150px] h-auto"
                                    onMouseMove={(e) => {
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
                                        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
                                        e.currentTarget.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
                                    }}
                                >
                                    <img
                                        src="/assets/svg/robot.svg"
                                        alt="Robot"
                                        className="robot-svg w-full h-full object-contain"
                                    />
                                </div>

                                <h2 className="text-[27.2px] md:text-[33.6px] font-bold text-[#170F49]">
                                    How We Deliver Excellence
                                </h2>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Item 1: Product Engineering */}
                    <ScrollReveal variant="featureLeft" className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center gap-[30px] md:gap-[40px] mb-[70px] md:mb-[90px]" id="service-product">
                        <div className="w-full">
                            <h3 className="text-[24px] md:text-[32px] font-semibold text-[#140a4f] mb-[12px]">Product Engineering</h3>
                            <p className="text-[18px] md:text-[20px] font-medium text-[#4f4b78] mb-[14px] leading-[1.6]">
                                Transforming ideas into scalable, high-quality digital products with
                                precision and innovation.
                            </p>
                            <ScrollReveal variant="text" className="my-0">
                                <p className="text-[18px] md:text-[20px] text-[#6b678a] leading-[1.7]">
                                    We provide end-to-end product engineering services, covering strategy,
                                    design, development, testing, and deployment. Our approach ensures
                                    that your product delivers real-world value while maintaining long-term
                                    stability and performance.
                                </p>
                            </ScrollReveal>
                        </div>
                        <div className="flex justify-center items-center mt-[30px] md:mt-0">
                            <img src="/assets/images/product-engineering.png" alt="Product Engineering illustration"
                                className="w-full max-w-[320px] md:max-w-[360px] h-auto block" />
                        </div>
                    </ScrollReveal>

                    {/* Item 2: Software Development (Reverse) */}
                    <ScrollReveal variant="featureRight" className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] items-center gap-[30px] md:gap-[40px] mb-[70px] md:mb-[90px]" id="service-software">
                        <div className="w-full order-1 md:order-2">
                            <h3 className="text-[24px] md:text-[32px] font-semibold text-[#140a4f] mb-[12px]">Software Development</h3>
                            <p className="text-[18px] md:text-[20px] font-medium text-[#4f4b78] mb-[14px] leading-[1.6]">
                                Tailored software solutions designed to meet your unique business needs.
                            </p>
                            <ScrollReveal variant="text" className="my-0">
                                <p className="text-[18px] md:text-[20px] text-[#6b678a] leading-[1.7]">
                                    We develop bespoke software applications that align with your workflows
                                    and organizational goals. Our engineering practices focus on
                                    extensibility, reliability, and future-readiness.
                                </p>
                            </ScrollReveal>
                        </div>
                        <div className="flex justify-center items-center mt-[30px] md:mt-0 order-2 md:order-1">
                            <img src="/assets/images/software-development.png" alt="Software Development illustration"
                                className="w-full max-w-[320px] md:max-w-[360px] h-auto block" />
                        </div>
                    </ScrollReveal>

                    {/* Item 3: AI-Powered Automation */}
                    <ScrollReveal variant="featureLeft" className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center gap-[30px] md:gap-[40px] mb-[70px] md:mb-[90px]" id="service-ai">
                        <div className="w-full">
                            <h3 className="text-[24px] md:text-[32px] font-semibold text-[#140a4f] mb-[12px]">AI-Powered Automation
                            </h3>
                            <p className="text-[18px] md:text-[20px] font-medium text-[#4f4b78] mb-[14px] leading-[1.6]">
                                Intelligent automation that reduces manual effort and drives operational excellence.
                            </p>
                            <ScrollReveal variant="text" className="my-0">
                                <p className="text-[18px] md:text-[20px] text-[#6b678a] leading-[1.7]">
                                    We integrate advanced AI models to automate repetitive tasks, analyze
                                    complex datasets, and uncover actionable insights. Our solutions
                                    improve efficiency, reduce costs, and enhance business workflows.
                                </p>
                            </ScrollReveal>
                        </div>
                        <div className="flex justify-center items-center mt-[30px] md:mt-0">
                            <img src="/assets/images/AI-automation.png" alt="AI Powered Automation illustration"
                                className="w-full max-w-[320px] md:max-w-[360px] h-auto block" />
                        </div>
                    </ScrollReveal>

                    {/* Item 4: Cloud & DevOps (Reverse) */}
                    <ScrollReveal variant="featureRight" className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] items-center gap-[30px] md:gap-[40px] mb-[70px] md:mb-[90px]" id="service-cloud">
                        <div className="w-full order-1 md:order-2">
                            <h3 className="text-[24px] md:text-[32px] font-semibold text-[#140a4f] mb-[12px]">Cloud & DevOps</h3>
                            <p className="text-[18px] md:text-[20px] font-medium text-[#4f4b78] mb-[14px] leading-[1.6]">
                                Accelerated delivery and enhanced efficiency through cloud-native solutions.
                            </p>
                            <ScrollReveal variant="text" className="my-0">
                                <p className="text-[18px] md:text-[20px] text-[#6b678a] leading-[1.7]">
                                    Our Cloud & DevOps services streamline development pipelines, automate
                                    deployments, and ensure reliable infrastructure operations. We help
                                    organizations achieve continuous integration and continuous delivery
                                    excellence.
                                </p>
                            </ScrollReveal>
                        </div>
                        <div className="flex justify-center items-center mt-[30px] md:mt-0 order-2 md:order-1">
                            <img src="/assets/images/cloud-devops.png" alt="Cloud and DevOps illustration"
                                className="w-full max-w-[320px] md:max-w-[360px] h-auto block" />
                        </div>
                    </ScrollReveal>

                    {/* Item 5: Mobile App Development */}
                    <ScrollReveal variant="featureLeft" className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center gap-[30px] md:gap-[40px] mb-[70px] md:mb-[90px]" id="service-mobile">
                        <div className="w-full">
                            <h3 className="text-[24px] md:text-[32px] font-semibold text-[#140a4f] mb-[12px]">Mobile App Development
                            </h3>
                            <p className="text-[18px] md:text-[20px] font-medium text-[#4f4b78] mb-[14px] leading-[1.6]">
                                End-to-end mobile solutions that deliver seamless user experiences.
                            </p>
                            <ScrollReveal variant="text" className="my-0">
                                <p className="text-[18px] md:text-[20px] text-[#6b678a] leading-[1.7]">
                                    We build intuitive, high-performance mobile applications for Android
                                    and iOS, focusing on user engagement, scalability, and seamless backend
                                    connectivity.
                                </p>
                            </ScrollReveal>
                        </div>
                        <div className="flex justify-center items-center mt-[30px] md:mt-0">
                            <img src="/assets/images/mobile-development.png" alt="Mobile App Development illustration"
                                className="w-full max-w-[320px] md:max-w-[360px] h-auto block" />
                        </div>
                    </ScrollReveal>

                    {/* Item 6: IT Consulting & Digital Platforms (Reverse) */}
                    <ScrollReveal variant="featureRight" className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] items-center gap-[30px] md:gap-[40px]" id="service-it">
                        <div className="w-full order-1 md:order-2">
                            <h3 className="text-[24px] md:text-[32px] font-semibold text-[#140a4f] mb-[12px]">IT Consulting & Digital
                                Platforms</h3>
                            <p className="text-[18px] md:text-[20px] font-medium text-[#4f4b78] mb-[14px] leading-[1.6]">
                                Strategic guidance and platform development that empower digital transformation.
                            </p>
                            <ScrollReveal variant="text" className="my-0">
                                <p className="text-[18px] md:text-[20px] text-[#6b678a] leading-[1.7]">
                                    We help organizations modernize operations through technology audits,
                                    digital strategy planning, and platform implementation. Our solutions
                                    align business objectives with clear insights and robust systems.
                                </p>
                            </ScrollReveal>
                        </div>
                        <div className="flex justify-center items-center mt-[30px] md:mt-0 order-2 md:order-1">
                            <img src="/assets/images/it-consulting.png" alt="IT Consulting and Digital Platforms illustration"
                                className="w-full max-w-[320px] md:max-w-[360px] h-auto block" />
                        </div>
                    </ScrollReveal>

                </div>
            </section>

            {/* Our Delivery Process */}
            <section className="py-[70px] md:py-[90px] pb-[100px] bg-white" id="delivery-process">
                <div className="w-full px-5 max-w-[1248px] mx-auto">

                    <header className="text-center max-w-[720px] mx-auto mb-[70px]">
                        <ScrollReveal variant="heading">
                            <h2 className="text-[28.8px] md:text-[38.4px] font-bold text-[#2b2b2b] mb-[14px]">
                                Our Delivery Process
                            </h2>
                            <p className="text-[16px] text-regular leading-[24px] text-[#555555]">
                                A structured and transparent workflow that ensures quality, efficiency,
                                and predictable outcomes at every stage of your project.
                            </p>
                        </ScrollReveal>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[90px] lg:gap-[70px]">

                        {/* Step 1 */}
                        <ScrollReveal variant="card" delay={0.1}>
                            <article className="relative pt-[60px]" data-step="1">
                                <div
                                    className="absolute top-0 right-0 text-[120px] lg:text-[204px] font-black text-black opacity-5 leading-[1] tracking-[-0.02em] z-0 select-none">
                                    1</div>

                                <div
                                    className="relative z-10 w-[44px] h-[44px] mb-[16px] rounded-[12px] bg-[#f4f1ff] flex items-center justify-center">
                                    <img src="/assets/svg/Strategy.svg" alt="Strategy" className="w-[24px] h-[24px]" />
                                </div>
                                <h3 className="relative z-10 text-[16px] font-bold text-[#2b2b2b] mb-[10px]">Discovery &
                                    Strategy</h3>
                                <p className="relative z-10 text-[16px] font-medium leading-[24px] tracking-[-0.02em] text-[#757095]">
                                    We begin by understanding your objectives, target users, and business
                                    challenges. This phase lays the foundation for project clarity and
                                    aligns every stakeholder toward a unified vision.
                                </p>
                            </article>
                        </ScrollReveal>

                        {/* Step 2 */}
                        <ScrollReveal variant="card" delay={0.2}>
                            <article className="relative pt-[60px]" data-step="2">
                                <div
                                    className="absolute top-0 right-0 text-[120px] lg:text-[204px] font-black text-black opacity-5 leading-[1] tracking-[-0.02em] z-0 select-none">
                                    2</div>

                                <div
                                    className="relative z-10 w-[44px] h-[44px] mb-[16px] rounded-[12px] bg-[#f4f1ff] flex items-center justify-center">
                                    <img src="/assets/svg/Design.svg" alt="Design" className="w-[24px] h-[24px]" />
                                </div>
                                <h3 className="relative z-10 text-[16px] font-bold text-[#2b2b2b] mb-[10px]">Design and Planning
                                </h3>
                                <p className="relative z-10 text-[16px] font-medium leading-[24px] tracking-[-0.02em] text-[#757095]">
                                    Once the strategy is defined, we structure the architecture and visual
                                    experience. This includes designing intuitive interfaces and planning
                                    a development approach that ensures efficiency and scalability.
                                </p>
                            </article>
                        </ScrollReveal>

                        {/* Step 3 */}
                        <ScrollReveal variant="card" delay={0.3}>
                            <article className="relative pt-[60px]" data-step="3">
                                <div
                                    className="absolute top-0 right-0 text-[120px] lg:text-[204px] font-black text-black opacity-5 leading-[1] tracking-[-0.02em] z-0 select-none">
                                    3</div>

                                <div
                                    className="relative z-10 w-[44px] h-[44px] mb-[16px] rounded-[12px] bg-[#f4f1ff] flex items-center justify-center">
                                    <img src="/assets/svg/Development.svg" alt="Development" className="w-[24px] h-[24px]" />
                                </div>
                                <h3 className="relative z-10 text-[16px] font-bold text-[#2b2b2b] mb-[10px]">Development and QA
                                </h3>
                                <p className="relative z-10 text-[16px] font-medium leading-[24px] tracking-[-0.02em] text-[#757095]">
                                    Our development process follows agile methodologies, ensuring rapid
                                    iteration and continuous feedback. Rigorous testing is performed to
                                    guarantee stability, security, and performance.
                                </p>
                            </article>
                        </ScrollReveal>

                        {/* Step 4 */}
                        <ScrollReveal variant="card" delay={0.4}>
                            <article className="relative pt-[60px]" data-step="4">
                                <div
                                    className="absolute top-0 right-0 text-[120px] lg:text-[204px] font-black text-black opacity-5 leading-[1] tracking-[-0.02em] z-0 select-none">
                                    4</div>

                                <div
                                    className="relative z-10 w-[44px] h-[44px] mb-[16px] rounded-[12px] bg-[#f4f1ff] flex items-center justify-center">
                                    <img src="/assets/svg/Support.svg" alt="Support" className="w-[24px] h-[24px]" />
                                </div>
                                <h3 className="relative z-10 text-[16px] font-bold text-[#2b2b2b] mb-[10px]">Launch and Support
                                </h3>
                                <p className="relative z-10 text-[16px] font-medium leading-[24px] tracking-[-0.02em] text-[#757095]">
                                    We manage the deployment process across preferred platforms and provide
                                    continuous monitoring, improvements, and technical support to ensure
                                    uninterrupted performance.
                                </p>
                            </article>
                        </ScrollReveal>

                    </div>

                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* Trusted By */}
            <TrustedBy />

            {/* CTA */}
            <section className="py-[100px]" id="services-cta">
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                `}</style>
                <div
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    className="
    relative overflow-hidden
    max-w-5xl py-16 md:pl-24 md:w-full mx-2 md:mx-auto
    flex flex-col items-start justify-center text-left
    rounded-2xl p-10 text-white
    bg-[#4C0083]
  "
                >
                    {/* Half Gradient Overlay (Evolvex Style) */}
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Right-side soft gradient */}
                        <div className="absolute right-0 top-0 h-full w-[60%] bg-gradient-to-l from-[#7C3AED]/55 via-[#A855F7]/25 to-transparent" />

                        {/* Bottom soft tint */}
                        <div className="absolute bottom-0 left-0 h-[55%] w-full bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                        {/* Decorative shapes (subtle) */}
                        <div className="absolute -top-24 -right-24 w-[320px] h-[320px] bg-white/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-28 right-24 w-[380px] h-[380px] bg-pink-400/15 rounded-full blur-3xl" />
                        <div className="absolute top-16 left-12 w-[220px] h-[220px] bg-blue-300/10 rounded-full blur-2xl" />
                    </div>

                    {/* CONTENT */}
                    <div className="relative z-10">
                        <div className="flex items-center">
                            <div className="flex -space-x-3 pr-3">
                                <img
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                                    alt="image"
                                    className="size-8 rounded-full hover:-translate-y-px transition z-1 border border-white/20"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                                    alt="image"
                                    className="size-8 rounded-full hover:-translate-y-px transition z-[2] border border-white/20"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                                    alt="image"
                                    className="size-8 rounded-full hover:-translate-y-px transition z-[3] border border-white/20"
                                />
                            </div>

                            <div> <div className="flex items-center gap-px"> <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.85536 0.463527C6.00504 0.00287118 6.65674 0.00287028 6.80642 0.463526L7.82681 3.60397C7.89375 3.80998 8.08572 3.94946 8.30234 3.94946H11.6044C12.0888 3.94946 12.2901 4.56926 11.8983 4.85397L9.22687 6.79486C9.05162 6.92219 8.97829 7.14787 9.04523 7.35388L10.0656 10.4943C10.2153 10.955 9.68806 11.338 9.2962 11.0533L6.62478 9.11244C6.44954 8.98512 6.21224 8.98512 6.037 9.11244L3.36558 11.0533C2.97372 11.338 2.44648 10.955 2.59616 10.4943L3.61655 7.35388C3.68349 7.14787 3.61016 6.92219 3.43491 6.79486L0.763497 4.85397C0.37164 4.56927 0.573027 3.94946 1.05739 3.94946H4.35944C4.57606 3.94946 4.76803 3.80998 4.83497 3.60397L5.85536 0.463527Z" fill="#FF8F20" /> </svg> <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.85536 0.463527C6.00504 0.00287118 6.65674 0.00287028 6.80642 0.463526L7.82681 3.60397C7.89375 3.80998 8.08572 3.94946 8.30234 3.94946H11.6044C12.0888 3.94946 12.2901 4.56926 11.8983 4.85397L9.22687 6.79486C9.05162 6.92219 8.97829 7.14787 9.04523 7.35388L10.0656 10.4943C10.2153 10.955 9.68806 11.338 9.2962 11.0533L6.62478 9.11244C6.44954 8.98512 6.21224 8.98512 6.037 9.11244L3.36558 11.0533C2.97372 11.338 2.44648 10.955 2.59616 10.4943L3.61655 7.35388C3.68349 7.14787 3.61016 6.92219 3.43491 6.79486L0.763497 4.85397C0.37164 4.56927 0.573027 3.94946 1.05739 3.94946H4.35944C4.57606 3.94946 4.76803 3.80998 4.83497 3.60397L5.85536 0.463527Z" fill="#FF8F20" /> </svg> <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.85536 0.463527C6.00504 0.00287118 6.65674 0.00287028 6.80642 0.463526L7.82681 3.60397C7.89375 3.80998 8.08572 3.94946 8.30234 3.94946H11.6044C12.0888 3.94946 12.2901 4.56926 11.8983 4.85397L9.22687 6.79486C9.05162 6.92219 8.97829 7.14787 9.04523 7.35388L10.0656 10.4943C10.2153 10.955 9.68806 11.338 9.2962 11.0533L6.62478 9.11244C6.44954 8.98512 6.21224 8.98512 6.037 9.11244L3.36558 11.0533C2.97372 11.338 2.44648 10.955 2.59616 10.4943L3.61655 7.35388C3.68349 7.14787 3.61016 6.92219 3.43491 6.79486L0.763497 4.85397C0.37164 4.56927 0.573027 3.94946 1.05739 3.94946H4.35944C4.57606 3.94946 4.76803 3.80998 4.83497 3.60397L5.85536 0.463527Z" fill="#FF8F20" /> </svg> <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.85536 0.463527C6.00504 0.00287118 6.65674 0.00287028 6.80642 0.463526L7.82681 3.60397C7.89375 3.80998 8.08572 3.94946 8.30234 3.94946H11.6044C12.0888 3.94946 12.2901 4.56926 11.8983 4.85397L9.22687 6.79486C9.05162 6.92219 8.97829 7.14787 9.04523 7.35388L10.0656 10.4943C10.2153 10.955 9.68806 11.338 9.2962 11.0533L6.62478 9.11244C6.44954 8.98512 6.21224 8.98512 6.037 9.11244L3.36558 11.0533C2.97372 11.338 2.44648 10.955 2.59616 10.4943L3.61655 7.35388C3.68349 7.14787 3.61016 6.92219 3.43491 6.79486L0.763497 4.85397C0.37164 4.56927 0.573027 3.94946 1.05739 3.94946H4.35944C4.57606 3.94946 4.76803 3.80998 4.83497 3.60397L5.85536 0.463527Z" fill="#FF8F20" /> </svg> <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.85536 0.463527C6.00504 0.00287118 6.65674 0.00287028 6.80642 0.463526L7.82681 3.60397C7.89375 3.80998 8.08572 3.94946 8.30234 3.94946H11.6044C12.0888 3.94946 12.2901 4.56926 11.8983 4.85397L9.22687 6.79486C9.05162 6.92219 8.97829 7.14787 9.04523 7.35388L10.0656 10.4943C10.2153 10.955 9.68806 11.338 9.2962 11.0533L6.62478 9.11244C6.44954 8.98512 6.21224 8.98512 6.037 9.11244L3.36558 11.0533C2.97372 11.338 2.44648 10.955 2.59616 10.4943L3.61655 7.35388C3.68349 7.14787 3.61016 6.92219 3.43491 6.79486L0.763497 4.85397C0.37164 4.56927 0.573027 3.94946 1.05739 3.94946H4.35944C4.57606 3.94946 4.76803 3.80998 4.83497 3.60397L5.85536 0.463527Z" fill="#FF8F20" /> </svg> </div>
                                <p className="text-sm text-white/80">Trusted by founders & product teams</p>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-[46px] md:leading-[60px] font-semibold max-w-xl mt-5">
                            Ready to Build Something Exceptional?
                        </h1>

                        <p className="text-[14px] md:text-[16px] font-normal leading-[1.7] text-white/90 mb-[36px]">
                            Our team is here to turn your vision into a scalable digital product.
                        </p>

                        <a
                            href="/contact"
                            className="px-12 py-3 text-white bg-white/15 hover:bg-white/25 border border-white/20 transition-all rounded-full text-sm mt-8 backdrop-blur-md"
                        >
                            Get a Consultation
                        </a>
                    </div>
                </div>

            </section>

            {/* Contact Section - extracted from index.html shared */}
            <section id="contact" className="py-[96px] bg-white relative overflow-hidden" aria-labelledby="contact-heading">
                {/* ... Reuse contact section code as it appears identical in both files ... */}
                {/* Since the user asked to convert each page, I should include the contact section here too if it's inservices.html, which it is. */}
                <div className="w-full max-w-[1200px] mx-auto px-5 relative z-10">
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

export default Services;
