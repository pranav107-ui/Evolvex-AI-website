import React, { useEffect } from 'react';
import FloatingLines from '../components/FloatingLines';
import TiltedCard from './TiltedCard';
import ScrollReveal from './ScrollReveal';

const Services = () => {
    useEffect(() => {
        // Animation triggers for fade-up, etc.
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    // Add staggered delays if needed logic here or handled by CSS class presence
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
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
                    />
                </div>


                <div className="max-w-[1248px] mx-auto text-center" data-animate="fade-up">

                    <h1 className="text-[42px] md:text-[52px] lg:text-[64px] leading-[1.1] font-bold text-[#1a1a1a] mb-[24px] tracking-tight">
                        Transforming Ideas into Intelligent<br />
                        Digital Solutions
                    </h1>

                    <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#6F6C8F] max-w-[600px] mx-auto mb-[40px]">
                        Discover our expertise across engineering, cloud, AI, and business
                        modernization.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="/contact"
                            className="inline-flex px-[36px] py-[14px] rounded-[10px] bg-gradient-to-r from-[#B455F3] to-[#393AF3] text-white font-semibold text-[15.2px] shadow-[0_10px_30px_rgba(108,76,240,0.35)] transition-transform duration-200 hover:scale-[1.02]">
                            Get a Consultation
                        </a>
                    </div>
                </div>
            </section>

            {/* Explore Our Expertise */}
            <section className="py-[60px] md:py-[80px] bg-white" id="expertise">
                <div className="w-full px-5 max-w-[1248px] mx-auto" data-animate="fade-up">

                    <h2 className="text-center text-[25.6px] md:text-[32px] font-bold text-[#140a4f] mb-[36px] md:mb-[48px]">
                        Explore Our Expertise
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]">

                        {/* Card 1: Product Engineering */}
                        <TiltedCard captionText="Product Engineering" showMobileWarning={false} rotateAmplitude={10} scaleOnHover={1.03} containerHeight="100%">
                            <article
                                className="relative h-[280px] p-[26px] rounded-[16px] overflow-hidden shadow-[0_8px_24px_rgba(18,16,74,0.04)] bg-[#f4f1ff] flex flex-col justify-start">
                                <h3 className="text-[22px] font-bold text-[#141033] mb-[14px] leading-[1.2]">Product Engineering</h3>
                                <p className="text-[16px] leading-[1.5] text-[#666666]">
                                    Build scalable digital products from concept to launch.
                                </p>
                                <span className="absolute bottom-[-20px] left-[20px] w-[80px] h-[40px] rounded-t-[40px] bg-[#7a5cff]"></span>
                            </article>
                        </TiltedCard>

                        {/* Card 2: Custom Software */}
                        <TiltedCard captionText="Custom Software Development" showMobileWarning={false} rotateAmplitude={10} scaleOnHover={1.03} containerHeight="100%">
                            <article
                                className="relative h-[280px] p-[26px] rounded-[16px] overflow-hidden shadow-[0_8px_24px_rgba(18,16,74,0.04)] bg-[#eef5ff] flex flex-col justify-start">
                                <h3 className="text-[22px] font-bold text-[#141033] mb-[14px] leading-[1.2]">Custom Software Development</h3>
                                <p className="text-[16px] leading-[1.5] text-[#666666]">
                                    Tailored software solutions that streamline operations.
                                </p>
                                <span className="absolute bottom-[-20px] left-[20px] w-[80px] h-[40px] rounded-t-[40px] bg-[#2f7cff]"></span>
                            </article>
                        </TiltedCard>

                        {/* Card 3: Cloud & DevOps */}
                        <TiltedCard captionText="Cloud & DevOps" showMobileWarning={false} rotateAmplitude={10} scaleOnHover={1.03} containerHeight="100%">
                            <article
                                className="relative h-[280px] p-[26px] rounded-[16px] overflow-hidden shadow-[0_8px_24px_rgba(18,16,74,0.04)] bg-[#f3f6ff] flex flex-col justify-start">
                                <h3 className="text-[22px] font-bold text-[#141033] mb-[14px] leading-[1.2]">Cloud & DevOps</h3>
                                <p className="text-[16px] leading-[1.5] text-[#666666]">
                                    Cloud migration, CI/CD, automation, and infrastructure scaling.
                                </p>
                                <span className="absolute bottom-[-20px] left-[20px] w-[80px] h-[40px] rounded-t-[40px] bg-[#7b61ff]"></span>
                            </article>
                        </TiltedCard>

                        {/* Card 4: AI & Automation */}
                        <TiltedCard captionText="AI & Automation" showMobileWarning={false} rotateAmplitude={10} scaleOnHover={1.03} containerHeight="100%">
                            <article
                                className="relative h-[280px] p-[26px] rounded-[16px] overflow-hidden shadow-[0_8px_24px_rgba(18,16,74,0.04)] bg-[#fff1fb] flex flex-col justify-start">
                                <h3 className="text-[22px] font-bold text-[#141033] mb-[14px] leading-[1.2]">AI & Automation</h3>
                                <p className="text-[16px] leading-[1.5] text-[#666666]">
                                    Intelligent solutions for automation, predictions, and decision-making.
                                </p>
                                <span className="absolute bottom-[-20px] left-[20px] w-[80px] h-[40px] rounded-t-[40px] bg-[#c45bff]"></span>
                            </article>
                        </TiltedCard>

                        {/* Card 5: Mobile App Development */}
                        <TiltedCard captionText="Mobile App Development" showMobileWarning={false} rotateAmplitude={10} scaleOnHover={1.03} containerHeight="100%">
                            <article
                                className="relative h-[280px] p-[26px] rounded-[16px] overflow-hidden shadow-[0_8px_24px_rgba(18,16,74,0.04)] bg-[#edfffb] flex flex-col justify-start">
                                <h3 className="text-[22px] font-bold text-[#141033] mb-[14px] leading-[1.2]">Mobile App Development</h3>
                                <p className="text-[16px] leading-[1.5] text-[#666666]">
                                    Cross-platform and native apps with high performance.
                                </p>
                                <span className="absolute bottom-[-20px] left-[20px] w-[80px] h-[40px] rounded-t-[40px] bg-[#00c2a8]"></span>
                            </article>
                        </TiltedCard>

                        {/* Card 6: IT Consulting */}
                        <TiltedCard captionText="IT Consulting & Digital Transformation" showMobileWarning={false} rotateAmplitude={10} scaleOnHover={1.03} containerHeight="100%">
                            <article
                                className="relative h-[280px] p-[26px] rounded-[16px] overflow-hidden shadow-[0_8px_24px_rgba(18,16,74,0.04)] bg-[#fff3e8] flex flex-col justify-start">
                                <h3 className="text-[22px] font-bold text-[#141033] mb-[14px] leading-[1.2]">IT Consulting & Digital Transformation
                                </h3>
                                <p className="text-[16px] leading-[1.5] text-[#666666]">
                                    Technology strategy, modernization, and process optimization.
                                </p>
                                <span className="absolute bottom-[-20px] left-[20px] w-[80px] h-[40px] rounded-t-[40px] bg-[#ff8a34]"></span>
                            </article>
                        </TiltedCard>

                    </div>

                </div>
            </section>

            {/* How We Deliver Excellence */}
            <section className="py-[70px] md:py-[90px] bg-white" id="delivery-excellence">
                <div className="w-full px-5 max-w-[1248px] mx-auto">

                    <header className="text-center mb-[70px]" data-animate="fade-up">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-[36px] md:mb-[48px]">
                            <img
                                src="/assets/svg/robot.svg"
                                alt="Robot mascot"
                                className="w-[120px] md:w-[150px] h-auto object-contain animate-bounce-slow"
                            />

                            <h2 className="text-[27.2px] md:text-[33.6px] font-bold text-[#170F49]">
                                How We Deliver Excellence
                            </h2>
                        </div>
                    </header>

                    {/* Item 1: Product Engineering */}
                    {/* Item 1: Product Engineering */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center gap-[30px] md:gap-[40px] mb-[70px] md:mb-[90px]"
                        data-animate="fade-up">
                        <div className="w-full">
                            <h3 className="text-[24px] md:text-[32px] font-semibold text-[#140a4f] mb-[12px]">Product Engineering</h3>
                            <p className="text-[18px] md:text-[20px] font-medium text-[#4f4b78] mb-[14px] leading-[1.6]">
                                Transforming ideas into scalable, high-quality digital products with
                                precision and innovation.
                            </p>
                            <ScrollReveal
                                baseOpacity={0}
                                enableBlur={true}
                                baseRotation={5}
                                blurStrength={10}
                                textClassName="text-[18px] md:text-[20px] text-[#6b678a] leading-[1.7]"
                                containerClassName="my-0"
                            >
                                We provide end-to-end product engineering services, covering strategy,
                                design, development, testing, and deployment. Our approach ensures
                                that your product delivers real-world value while maintaining long-term
                                stability and performance.
                            </ScrollReveal>
                        </div>
                        <div className="flex justify-center items-center mt-[30px] md:mt-0">
                            <img src="/assets/images/product-engineering.png" alt="Product Engineering illustration"
                                className="w-full max-w-[320px] md:max-w-[360px] h-auto block" />
                        </div>
                    </div>

                    {/* Item 2: Software Development (Reverse) */}
                    {/* Item 2: Software Development (Reverse) */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] items-center gap-[30px] md:gap-[40px] mb-[70px] md:mb-[90px]"
                        data-animate="fade-up">
                        <div className="w-full order-1 md:order-2">
                            <h3 className="text-[24px] md:text-[32px] font-semibold text-[#140a4f] mb-[12px]">Software Development</h3>
                            <p className="text-[18px] md:text-[20px] font-medium text-[#4f4b78] mb-[14px] leading-[1.6]">
                                Tailored software solutions designed to meet your unique business needs.
                            </p>
                            <ScrollReveal
                                baseOpacity={0}
                                enableBlur={true}
                                baseRotation={5}
                                blurStrength={10}
                                textClassName="text-[18px] md:text-[20px] text-[#6b678a] leading-[1.7]"
                                containerClassName="my-0"
                            >
                                We develop bespoke software applications that align with your workflows
                                and organizational goals. Our engineering practices focus on
                                extensibility, reliability, and future-readiness.
                            </ScrollReveal>
                        </div>
                        <div className="flex justify-center items-center mt-[30px] md:mt-0 order-2 md:order-1">
                            <img src="/assets/images/software-development.png" alt="Software Development illustration"
                                className="w-full max-w-[320px] md:max-w-[360px] h-auto block" />
                        </div>
                    </div>

                    {/* Item 3: AI-Powered Automation */}
                    {/* Item 3: AI-Powered Automation */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center gap-[30px] md:gap-[40px] mb-[70px] md:mb-[90px]"
                        data-animate="fade-up">
                        <div className="w-full">
                            <h3 className="text-[24px] md:text-[32px] font-semibold text-[#140a4f] mb-[12px]">AI-Powered Automation
                            </h3>
                            <p className="text-[18px] md:text-[20px] font-medium text-[#4f4b78] mb-[14px] leading-[1.6]">
                                Intelligent automation that reduces manual effort and drives operational excellence.
                            </p>
                            <ScrollReveal
                                baseOpacity={0}
                                enableBlur={true}
                                baseRotation={5}
                                blurStrength={10}
                                textClassName="text-[18px] md:text-[20px] text-[#6b678a] leading-[1.7]"
                                containerClassName="my-0"
                            >
                                We integrate advanced AI models to automate repetitive tasks, analyze
                                complex datasets, and uncover actionable insights. Our solutions
                                improve efficiency, reduce costs, and enhance business workflows.
                            </ScrollReveal>
                        </div>
                        <div className="flex justify-center items-center mt-[30px] md:mt-0">
                            <img src="/assets/images/ai-automation.png" alt="AI Powered Automation illustration"
                                className="w-full max-w-[320px] md:max-w-[360px] h-auto block" />
                        </div>
                    </div>

                    {/* Item 4: Cloud & DevOps (Reverse) */}
                    {/* Item 4: Cloud & DevOps (Reverse) */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] items-center gap-[30px] md:gap-[40px] mb-[70px] md:mb-[90px]"
                        data-animate="fade-up">
                        <div className="w-full order-1 md:order-2">
                            <h3 className="text-[24px] md:text-[32px] font-semibold text-[#140a4f] mb-[12px]">Cloud & DevOps</h3>
                            <p className="text-[18px] md:text-[20px] font-medium text-[#4f4b78] mb-[14px] leading-[1.6]">
                                Accelerated delivery and enhanced efficiency through cloud-native solutions.
                            </p>
                            <ScrollReveal
                                baseOpacity={0}
                                enableBlur={true}
                                baseRotation={5}
                                blurStrength={10}
                                textClassName="text-[18px] md:text-[20px] text-[#6b678a] leading-[1.7]"
                                containerClassName="my-0"
                            >
                                Our Cloud & DevOps services streamline development pipelines, automate
                                deployments, and ensure reliable infrastructure operations. We help
                                organizations achieve continuous integration and continuous delivery
                                excellence.
                            </ScrollReveal>
                        </div>
                        <div className="flex justify-center items-center mt-[30px] md:mt-0 order-2 md:order-1">
                            <img src="/assets/images/cloud-devops.png" alt="Cloud and DevOps illustration"
                                className="w-full max-w-[320px] md:max-w-[360px] h-auto block" />
                        </div>
                    </div>

                    {/* Item 5: Mobile App Development */}
                    {/* Item 5: Mobile App Development */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center gap-[30px] md:gap-[40px] mb-[70px] md:mb-[90px]"
                        data-animate="fade-up">
                        <div className="w-full">
                            <h3 className="text-[24px] md:text-[32px] font-semibold text-[#140a4f] mb-[12px]">Mobile App Development
                            </h3>
                            <p className="text-[18px] md:text-[20px] font-medium text-[#4f4b78] mb-[14px] leading-[1.6]">
                                End-to-end mobile solutions that deliver seamless user experiences.
                            </p>
                            <ScrollReveal
                                baseOpacity={0}
                                enableBlur={true}
                                baseRotation={5}
                                blurStrength={10}
                                textClassName="text-[18px] md:text-[20px] text-[#6b678a] leading-[1.7]"
                                containerClassName="my-0"
                            >
                                We build intuitive, high-performance mobile applications for Android
                                and iOS, focusing on user engagement, scalability, and seamless backend
                                connectivity.
                            </ScrollReveal>
                        </div>
                        <div className="flex justify-center items-center mt-[30px] md:mt-0">
                            <img src="/assets/images/mobile-development.png" alt="Mobile App Development illustration"
                                className="w-full max-w-[320px] md:max-w-[360px] h-auto block" />
                        </div>
                    </div>

                    {/* Item 6: IT Consulting & Digital Platforms (Reverse) */}
                    {/* Item 6: IT Consulting & Digital Platforms (Reverse) */}
                    <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] items-center gap-[30px] md:gap-[40px]"
                        data-animate="fade-up">
                        <div className="w-full order-1 md:order-2">
                            <h3 className="text-[24px] md:text-[32px] font-semibold text-[#140a4f] mb-[12px]">IT Consulting & Digital
                                Platforms</h3>
                            <p className="text-[18px] md:text-[20px] font-medium text-[#4f4b78] mb-[14px] leading-[1.6]">
                                Strategic guidance and platform development that empower digital transformation.
                            </p>
                            <ScrollReveal
                                baseOpacity={0}
                                enableBlur={true}
                                baseRotation={5}
                                blurStrength={10}
                                textClassName="text-[18px] md:text-[20px] text-[#6b678a] leading-[1.7]"
                                containerClassName="my-0"
                            >
                                We help organizations modernize operations through technology audits,
                                digital strategy planning, and platform implementation. Our solutions
                                align business objectives with clear insights and robust systems.
                            </ScrollReveal>
                        </div>
                        <div className="flex justify-center items-center mt-[30px] md:mt-0 order-2 md:order-1">
                            <img src="/assets/images/it-consulting.png" alt="IT Consulting and Digital Platforms illustration"
                                className="w-full max-w-[320px] md:max-w-[360px] h-auto block" />
                        </div>
                    </div>

                </div>
            </section>

            {/* Our Delivery Process */}
            <section className="py-[70px] md:py-[90px] pb-[100px] bg-white" id="delivery-process">
                <div className="w-full px-5 max-w-[1248px] mx-auto">

                    <header className="text-center max-w-[720px] mx-auto mb-[70px]" data-animate="fade-up">
                        <h2 className="text-[28.8px] md:text-[38.4px] font-bold text-[#2b2b2b] mb-[14px]">
                            Our Delivery Process
                        </h2>
                        <p className="text-[16px] text-regular leading-[24px] text-[#555555]">
                            A structured and transparent workflow that ensures quality, efficiency,
                            and predictable outcomes at every stage of your project.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[90px] lg:gap-[70px]">

                        {/* Step 1 */}
                        <article className="relative pt-[60px]" data-step="1" data-animate="fade-up">
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

                        {/* Step 2 */}
                        <article className="relative pt-[60px]" data-step="2" data-animate="fade-up">
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

                        {/* Step 3 */}
                        <article className="relative pt-[60px]" data-step="3" data-animate="fade-up">
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

                        {/* Step 4 */}
                        <article className="relative pt-[60px]" data-step="4" data-animate="fade-up">
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

                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-[100px]" id="services-cta">
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
                                Ready to Build Something Exceptional?
                            </h2>

                            <p className="text-[14px] md:text-[16px] font-normal leading-[1.7] text-white/90 mb-[36px]">
                                Our team is here to turn your vision into a scalable digital product.
                            </p>

                            <a href="/contact"
                                className="inline-block px-[36px] py-[14px] bg-white text-[#6f5af7] text-[14px] font-semibold rounded-full shadow-[0_12px_30px_rgba(0,0,0,0.15)] transition-all duration-250 hover:-translate-y-[2px] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
                                Get a Consultation
                            </a>

                        </div>

                    </div>

                </div>
            </section>

            {/* Contact Section - extracted from index.html shared */}
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

export default Services;
