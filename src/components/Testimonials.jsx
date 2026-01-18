
import React from 'react';

const Testimonials = () => {
    const cardsData = [
        {
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
            name: 'Briar Martin',
            handle: '@neilstellar',
            review: 'Evolvex transformed our product vision into reality. The engineering quality is unmatched.',
        },
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
            name: 'Avery Johnson',
            handle: '@averywrites',
            review: 'Reliable, fast, and incredibly talented team. They handled our complex requirements with ease.',
        },
        {
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
            name: 'Jordan Lee',
            handle: '@jordantalks',
            review: 'Their AI integration expertise helped us scale our operations 10x faster than expected.',
        },
        {
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
            name: 'Morgan Smith',
            handle: '@morgans',
            review: 'A true partner in every sense. The communication and technical delivery were flawless.',
        },
        {
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
            name: 'Riley Davis',
            handle: '@riley_d',
            review: 'The best engineering team we’ve worked with. They care about the code as much as the product.',
        },
    ];

    const CreateCard = ({ card }) => (
        <div className="group p-6 rounded-2xl mx-4 bg-white border border-gray-100 shadow-sm hover:shadow-[0_8px_30px_rgb(108,76,244,0.12)] hover:border-[#6C4CF4]/30 transition-all duration-300 w-[340px] shrink-0 flex flex-col justify-between h-[200px]">

            <div>
                <p className="text-[15px] leading-relaxed text-slate-600 mb-6">"{card.review}"</p>
            </div>

            <div className="flex items-center gap-3">
                <img className="size-10 rounded-full object-cover border border-gray-100" src={card.image} alt={card.name} />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                        <p className="font-semibold text-sm text-slate-800">{card.name}</p>
                        <svg className="fill-[#6C4CF4]" width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" />
                        </svg>
                    </div>
                    <span className="text-xs font-medium text-slate-400">{card.handle}</span>
                </div>
            </div>

        </div>
    );

    return (
        <section className="relative py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white overflow-hidden" id="testimonials">
            <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }
            
            @keyframes blob {
                0% { transform: translate(0px, 0px) scale(1); }
                33% { transform: translate(30px, -50px) scale(1.1); }
                66% { transform: translate(-20px, 20px) scale(0.9); }
                100% { transform: translate(0px, 0px) scale(1); }
            }

            .marquee-inner {
                animation: marqueeScroll 40s linear infinite;
            }
            
            .animate-blob {
                animation: blob 7s infinite;
            }
            
            .animation-delay-2000 {
                animation-delay: 2s;
            }
            
            .animation-delay-4000 {
                animation-delay: 4s;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
            
            .marquee-row:hover .marquee-inner {
                 animation-play-state: paused; 
            }
        `}</style>

            <span className="absolute left-1/2 top-[14%] -translate-x-1/2 -translate-y-1/2
            font-black tracking-widest
            bg-gradient-to-r from-[#B2EBF2] via-[#D1C4E9] to-[#F8BBD0]
            bg-clip-text text-transparent
            opacity-50
            whitespace-nowrap select-none pointer-events-none z-0"
                style={{ fontSize: 'clamp(30px, 10vw, 100px)', lineHeight: 1 }}>
                TRUSTED BY CLIENTS
            </span>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 text-center mb-16 relative z-20">


                <h2 className="text-[38px] md:text-[48px] font-bold text-[#1a1a1a] mb-4 tracking-tight">
                    What Our Clients Say
                </h2>
                <p className="text-[18px] text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Trusted by founders and teams who value quality engineering and reliable delivery.
                </p>
            </div>

            <div className="flex flex-col gap-10 relative z-10">
                {/* Row 1: Left Scroll */}
                <div className="marquee-row w-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 h-full w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                    <div className="marquee-inner flex items-center transform-gpu w-fit">
                        {[...cardsData, ...cardsData, ...cardsData, ...cardsData].map((card, index) => (
                            <CreateCard key={`t1-${index}`} card={card} />
                        ))}
                    </div>
                    <div className="absolute right-0 top-0 h-full w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
                </div>

                {/* Row 2: Right Scroll (Reverse) */}
                <div className="marquee-row w-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 h-full w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                    <div className="marquee-inner marquee-reverse flex items-center transform-gpu w-fit">
                        {[...cardsData, ...cardsData, ...cardsData, ...cardsData].map((card, index) => (
                            <CreateCard key={`t2-${index}`} card={card} />
                        ))}
                    </div>
                    <div className="absolute right-0 top-0 h-full w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;
