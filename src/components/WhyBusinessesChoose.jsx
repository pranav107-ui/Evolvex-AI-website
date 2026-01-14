import React, { useState } from 'react';

const WhyWorkWithUs = () => {
    // State for hover effects. null means default state (both flex-1)
    const [leftHover, setLeftHover] = useState(null); // 'growth' | 'innovation'
    const [rightHover, setRightHover] = useState(null); // 'collab' | 'balance'

    const handleMouseEnter = (column, card) => {
        if (column === 'left') setLeftHover(card);
        else setRightHover(card);
    };

    const handleMouseLeave = (column) => {
        if (column === 'left') setLeftHover(null);
        else setRightHover(null);
    };

    const getCardClasses = (column, cardName) => {
        const hoverState = column === 'left' ? leftHover : rightHover;
        const isExpanded = hoverState === cardName;

        // Base classes from the user's snippet
        let classes = "transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] w-full flex flex-col items-start px-8 py-[29px] relative rounded-3xl gap-2.5 bg-[#6838cc] self-stretch overflow-hidden group border border-transparent";

        // Dynamic classes based on state
        if (isExpanded) {
            classes += " flex-none h-[600px] expanded";
        } else {
            classes += " flex-1";
        }

        return classes;
    };

    return (
        <section className="py-[80px]" id="why-work" aria-labelledby="why-work-title">
            <div className="w-full px-5">
                <header className="text-center mb-[32px]" data-animate="fade-up">
                    <h2 id="why-work-title" className="text-[32px] font-extrabold text-[#0b1220] mb-2">Why Businesses Choose Evolvex AI</h2>
                   
                </header>

                <div className="flex flex-col md:flex-row gap-[28px] w-full max-w-[1200px] mx-auto md:h-[880px] p-4">

                    <div className="flex flex-col flex-1 gap-[28px] h-full" id="card-left-container">
                        {/* Card 1: Growth Opportunities */}
                        <div id="card-growth"
                            className={getCardClasses('left', 'growth')}
                            onMouseEnter={() => handleMouseEnter('left', 'growth')}
                            onMouseLeave={() => handleMouseLeave('left')}>

                            <div className="w-full flex self-stretch flex-col items-start gap-[22px] flex-[0_0_auto] relative">
                                <div className="w-full flex self-stretch flex-col items-start gap-3.5 flex-[0_0_auto] px-0 py-2 relative">
                                    <div className="font-sans self-stretch mt-[-1.00px] tracking-[0] text-2xl text-white relative h-[29px] font-bold leading-[normal]">
                                        Strategic Technology Expertise
                                    </div>

                                    {/* Text Container */}
                                    <div className="font-sans self-stretch tracking-[0] text-sm text-[#ffffffcc] relative font-medium leading-[normal] h-[60px] transition-all duration-500 group-[.expanded]:h-[207px]">
                                        {/* Short Text */}
                                        <p className="absolute inset-0 transition-opacity duration-500 opacity-100 group-[.expanded]:opacity-0 pointer-events-none group-[.expanded]:pointer-events-none">
                                            We combine deep technical knowledge with business-focused thinking to deliver solutions that produce measurable results.
                                        </p>
                                        {/* Long Text */}
                                        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-[.expanded]:opacity-100 pointer-events-none group-[.expanded]:pointer-events-auto">
                                            We provide a structured environment that supports continuous professional development. <br /><br />
                                            Employees gain access to mentorship, training programmes, and hands-on project exposure. <br /><br />
                                            Our organisation ensures that every individual is equipped to advance confidently in their career.
                                        </div>
                                    </div>
                                </div>

                                {/* Image */}
                                <img
                                    className="object-cover absolute transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] bottom-[-249px] w-[230px] right-[-46px] h-[230px] group-[.expanded]:bottom-[-264px] group-[.expanded]:w-80 group-[.expanded]:right-2 group-[.expanded]:h-[300px]"
                                    alt="Growth Opportunities" src="/assets/images/Strategic-Technology.png" />
                            </div>
                        </div>

                        {/* Card 2: Innovation-Driven */}
                        <div id="card-innovation"
                            className={getCardClasses('left', 'innovation')}
                            onMouseEnter={() => handleMouseEnter('left', 'innovation')}
                            onMouseLeave={() => handleMouseLeave('left')}>

                            <div className="w-full flex self-stretch flex-col items-start gap-[22px] flex-[0_0_auto] relative">
                                <div className="w-full flex self-stretch flex-col items-start gap-3.5 flex-[0_0_auto] px-0 py-2 relative">
                                    <div className="font-sans self-stretch mt-[-1.00px] tracking-[0] text-2xl text-white relative h-[29px] font-bold leading-[normal]">
                                       Scalable and Future-Ready Solutions
                                    </div>

                                    {/* Text Container */}
                                    <div className="font-sans self-stretch tracking-[0] text-sm text-[#ffffffcc] relative font-medium leading-[normal] h-[60px] transition-all duration-500 group-[.expanded]:h-[187px]">
                                        {/* Short Text */}
                                        <p className="absolute inset-0 transition-opacity duration-500 opacity-100 group-[.expanded]:opacity-0 pointer-events-none group-[.expanded]:pointer-events-none">
                                            We build systems engineered for growth, adaptability, and long-term performance as your business evolves.
                                        </p>
                                        {/* Long Text */}
                                        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-[.expanded]:opacity-100 pointer-events-none group-[.expanded]:pointer-events-auto">
                                            Our workplace empowers individuals to explore creative ideas and experiment freely. <br /><br />
                                            Teams are encouraged to adopt modern technologies and innovative thinking in problem-solving. <br /><br />
                                            We support a mindset that embraces change and drives breakthrough solutions.
                                        </div>
                                    </div>
                                </div>

                                {/* Image */}
                                <img
                                    className="object-cover absolute transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] bottom-[-255px] w-[228px] -right-12 h-[227px] group-[.expanded]:bottom-[-298px] group-[.expanded]:w-80 group-[.expanded]:right-0 group-[.expanded]:h-[300px]"
                                    alt="Innovation Driven" src="/assets/images/Scalable.png" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col flex-1 gap-[28px] h-full" id="card-right-container">
                        {/* Card 1: Collaborative Culture */}
                        <div id="card-collab"
                            className={getCardClasses('right', 'collab')}
                            onMouseEnter={() => handleMouseEnter('right', 'collab')}
                            onMouseLeave={() => handleMouseLeave('right')}>

                            <div className="w-full flex self-stretch flex-col items-start gap-[22px] flex-[0_0_auto] relative">
                                <div className="w-full flex self-stretch flex-col items-start gap-3.5 flex-[0_0_auto] px-0 py-2 relative">
                                    <div className="font-sans self-stretch mt-[-1.00px] tracking-[0] text-2xl text-white relative h-[29px] font-bold leading-[normal]">
                                        Transparent and Reliable Delivery
                                    </div>

                                    {/* Text Container */}
                                    <div className="font-sans self-stretch tracking-[0] text-sm text-[#ffffffcc] relative font-medium leading-[normal] h-[60px] transition-all duration-500 group-[.expanded]:h-[207px]">
                                        {/* Short Text */}
                                        <p className="absolute inset-0 transition-opacity duration-500 opacity-100 group-[.expanded]:opacity-0 pointer-events-none group-[.expanded]:pointer-events-none">
                                            Our development process ensures predictable timelines, clear communication, and consistent quality at every stage.
                                        </p>
                                        {/* Long Text */}
                                        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-[.expanded]:opacity-100 pointer-events-none group-[.expanded]:pointer-events-auto">
                                            We encourage transparent communication and teamwork across all departments.<br /><br />
                                            Every voice is valued, allowing individuals to contribute effectively to shared goals.<br /><br />
                                            Our culture promotes respect, inclusivity, and strong professional relationships.
                                        </div>
                                    </div>
                                </div>

                                {/* Image */}
                                <img
                                    className="object-cover absolute transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] bottom-[-249px] w-[230px] right-[-46px] h-[230px] group-[.expanded]:bottom-[-264px] group-[.expanded]:w-80 group-[.expanded]:right-2 group-[.expanded]:h-[300px]"
                                    alt="People working open" src="/assets/images/Transparent-and-Reliable Delivery.png" />
                            </div>
                        </div>

                        {/* Card 2: Work-Life Balance */}
                        <div id="card-balance"
                            className={getCardClasses('right', 'balance')}
                            onMouseEnter={() => handleMouseEnter('right', 'balance')}
                            onMouseLeave={() => handleMouseLeave('right')}>

                            <div className="w-full flex self-stretch flex-col items-start gap-[22px] flex-[0_0_auto] relative">
                                <div className="w-full flex self-stretch flex-col items-start gap-3.5 flex-[0_0_auto] px-0 py-2 relative">
                                    <div className="font-sans self-stretch mt-[-1.00px] tracking-[0] text-2xl text-white relative h-[29px] font-bold leading-[normal]">
                                       Dedicated Partnership Approach
                                    </div>

                                    {/* Text Container */}
                                    <div className="font-sans self-stretch tracking-[0] text-sm text-[#ffffffcc] relative font-medium leading-[normal] h-[60px] transition-all duration-500 group-[.expanded]:h-[187px]">
                                        {/* Short Text */}
                                        <p className="absolute inset-0 transition-opacity duration-500 opacity-100 group-[.expanded]:opacity-0 pointer-events-none group-[.expanded]:pointer-events-none">
                                            We leverage modern tools, AI capabilities, and creative problem-solving to help organizations stay competitive and forward-thinking.
                                        </p>
                                        {/* Long Text */}
                                        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-[.expanded]:opacity-100 pointer-events-none group-[.expanded]:pointer-events-auto">
                                            We prioritise employee well-being by providing a flexible and supportive work environment.<br /><br />
                                            Our policies are designed to help individuals maintain a healthy balance between work and personal life.<br /><br />
                                            This approach ensures long-term productivity, satisfaction, and overall happiness.
                                        </div>
                                    </div>
                                </div>

                                {/* Image */}
                                <img
                                    className="object-cover absolute transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] bottom-[-255px] w-[228px] -right-12 h-[227px] group-[.expanded]:bottom-[-298px] group-[.expanded]:w-80 group-[.expanded]:right-0 group-[.expanded]:h-[300px]"
                                    alt="Element life style" src="/assets/images/Dedicated-Partnership-Approach.png" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyWorkWithUs;
