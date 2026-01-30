import React from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Layers3, TrendingUp, Clock3, Star, X } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

const list = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.10, delayChildren: 0.12 } },
};

const card = {
    hidden: { opacity: 0, y: 20, scale: 0.985 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
};

function FeatureCard({ item, index, onClick }) {
    const Icon = item.icon;

    return (
        <motion.button
            type="button"
            variants={card}
            onClick={onClick}
            className="group relative w-full text-left overflow-hidden rounded-[24px] border border-black/5 bg-white/70 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_35px_100px_rgba(0,0,0,0.12)] focus:outline-none focus:ring-2 focus:ring-[#6C4CF4]/40"
        >
            {/* Accent strip */}
            <div className={`absolute left-0 top-0 h-[3px] w-full ${item.accent}`} />

            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className={`absolute -top-14 -right-14 h-48 w-48 rounded-full ${item.glow} blur-3xl`} />
            </div>

            <div className="relative z-10 p-[26px] lg:p-[34px]">
                {/* icon + index */}
                <div className="flex items-start justify-between gap-4">
                    <div
                        className={`grid h-[54px] w-[54px] place-items-center rounded-[16px] border border-black/5 shadow-[0_12px_26px_rgba(0,0,0,0.08)] ${item.iconBox}`}
                    >
                        <motion.div
                            initial={false}
                            whileHover={{ rotate: index % 2 === 0 ? 7 : -7, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 260, damping: 16 }}
                        >
                            <Icon className="h-[22px] w-[22px] text-[#111]" />
                        </motion.div>
                    </div>

                    <div className="hidden sm:flex items-center rounded-full border border-black/5 bg-white/70 px-3 py-1 text-[12px] font-extrabold tracking-[0.16em] text-black/35">
                        0{index + 1}
                    </div>
                </div>

                {/* content */}
                <h3 className="mt-6 text-[18px] lg:text-[20px] font-extrabold text-[#111]">
                    {item.title}
                </h3>
                <p className="mt-2 text-[14px] lg:text-[15px] leading-[1.7] text-[#555] max-w-[520px]">
                    {item.desc}
                </p>

                {/* divider */}
                <div className="mt-6 h-px w-full bg-gradient-to-r from-black/0 via-black/10 to-black/0" />

                {/* ✅ clear interaction hint */}
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-black/45">
                        Click to view details
                    </span>
                    <span className="text-[18px] text-black/25 transition group-hover:text-black/40">
                        →
                    </span>
                </div>
            </div>
        </motion.button>
    );
}

import { CardSpotlight } from "@/components/ui/card-spotlight";

function Modal({ open, onClose, item }) {
    React.useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/45 backdrop-blur-[2px]"
                    />

                    {/* Modal wrapper */}
                    <motion.div
                        initial={{ opacity: 0, y: 18, scale: 0.985 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.985 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[70] flex items-center justify-center px-4"
                        role="dialog"
                        aria-modal="true"
                        onClick={onClose}
                    >
                        {/* Spotlight Card */}
                        <CardSpotlight
                            onClick={(e) => e.stopPropagation()}
                            variant="light"
                            radius={420}
                            color="rgba(108, 76, 244, 0.16)" // subtle base light
                            className="w-full max-w-[760px]"
                        >
                            {/* accent strip */}
                            <div className={`h-[4px] w-full ${item?.accent || "bg-[#6C4CF4]"}`} />

                            <div className="p-6 lg:p-8">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-6">
                                    <div className="min-w-0">
                                        <p className="text-[12px] tracking-[0.22em] font-extrabold uppercase text-[#6C4CF4]">
                                            Culture
                                        </p>

                                        <h3 className="mt-2 text-[22px] lg:text-[30px] leading-[1.15] font-extrabold text-[#111]">
                                            {item?.title}
                                        </h3>
                                    </div>

                                    <button
                                        onClick={onClose}
                                        className="shrink-0 grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/80 hover:bg-white transition shadow-[0_10px_28px_rgba(0,0,0,0.10)]"
                                        aria-label="Close"
                                    >
                                        <X className="h-5 w-5 text-black/65" />
                                    </button>
                                </div>

                                {/* Body */}
                                <p className="mt-4 text-[14px] lg:text-[16px] leading-[1.85] text-[#52525b]">
                                    {item?.longDesc}
                                </p>

                                {/* Tags */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {(item?.tags || []).map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-full border border-black/5 bg-white/75 px-3 py-2 text-[12px] font-semibold text-black/70 shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer (optional premium hint) */}
                                <div className="mt-7 flex items-center justify-between gap-4">
                                    <span className="text-[12px] font-semibold text-black/40">
                                        Tip: Click outside or press ESC to close
                                    </span>

                                    <span className="text-[12px] font-extrabold tracking-[0.20em] text-[#6C4CF4] uppercase">
                                        Evolvex Culture
                                    </span>
                                </div>
                            </div>
                        </CardSpotlight>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default function LifeAtEvolvex() {
    const reduceMotion = useReducedMotion();
    const [active, setActive] = React.useState(null);

    const features = [
        {
            title: "Innovative Projects",
            desc: "Work on impactful real-world products powered by modern technology.",
            longDesc:
                "You will work on real products with measurable impact. We focus on quality engineering, clean design systems, and scalable delivery that helps businesses grow.",
            tags: ["Product impact", "Modern stack", "Ship faster", "Quality mindset"],
            icon: Layers3,
            accent: "bg-gradient-to-r from-[#6C4CF4] via-[#B44CFF] to-[#FF4FD8]",
            glow: "bg-[#6C4CF4]/20",
            iconBox: "bg-gradient-to-br from-[#F5F2FF] to-white",
        },
        {
            title: "Growth-Focused Culture",
            desc: "Continuous learning, mentorship and upskilling opportunities.",
            longDesc:
                "We invest in learning through mentorship, structured feedback, and opportunities to work across domains. Growth is part of the workflow, not extra work.",
            tags: ["Mentorship", "Upskilling", "Feedback loops", "Career growth"],
            icon: TrendingUp,
            accent: "bg-gradient-to-r from-[#FF4FD8] via-[#B44CFF] to-[#6C4CF4]",
            glow: "bg-[#FF4FD8]/18",
            iconBox: "bg-gradient-to-br from-[#FFF1FA] to-white",
        },
        {
            title: "Flexible & Supportive Environment",
            desc: "Balanced work culture that respects your time and creativity.",
            longDesc:
                "We believe sustainable pace builds the best products. Flexible work, clear communication, and respectful planning allow creativity to thrive without burnout.",
            tags: ["Work-life balance", "Flexible culture", "High trust", "Support"],
            icon: Clock3,
            accent: "bg-gradient-to-r from-[#6C4CF4] to-[#7AE7FF]",
            glow: "bg-[#7AE7FF]/18",
            iconBox: "bg-gradient-to-br from-[#F1FCFF] to-white",
        },
        {
            title: "Opportunities to Lead",
            desc: "Ownership-driven environment where you can grow into leadership roles.",
            longDesc:
                "Leadership is earned through ownership and impact. We give space for engineers and designers to lead initiatives, mentor others, and influence product direction.",
            tags: ["Ownership", "Leadership", "Initiatives", "Decision making"],
            icon: Star,
            accent: "bg-gradient-to-r from-[#FF4FD8] to-[#FFD1F0]",
            glow: "bg-[#B44CFF]/16",
            iconBox: "bg-gradient-to-br from-[#F9F2FF] to-white",
        },
    ];

    return (
        <>
            <section
                className="relative overflow-hidden py-[95px] lg:py-[130px]"
                id="life-at-evolvex"
            >
                {/* background */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FBFAFF] to-white" />

                <div className="relative w-full max-w-[1200px] mx-auto px-5">
                    {/* Header */}
                    <motion.div
                        initial={reduceMotion ? "visible" : "hidden"}
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.35 }}
                        variants={list}
                        className="text-center mb-[44px] lg:mb-[62px]"
                    >
                        <motion.span
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 text-[12px] tracking-[0.35em] text-[#6C4CF4] font-extrabold uppercase"
                        >
                            <span className="h-[6px] w-[6px] rounded-full bg-[#6C4CF4]" />
                            CULTURE
                        </motion.span>

                        <motion.h2
                            variants={fadeUp}
                            className="mt-4 text-[30px] lg:text-[46px] font-extrabold text-[#111]"
                        >
                            Life at Evolvex
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mt-3 text-[15px] lg:text-[16px] leading-[1.85] text-[#555] max-w-[720px] mx-auto"
                        >
                            A workplace built on growth, ownership, and creativity.
                        </motion.p>


                    </motion.div>

                    {/* Grid */}
                    <motion.div
                        initial={reduceMotion ? "visible" : "hidden"}
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={list}
                        className="grid grid-cols-1 md:grid-cols-2 gap-[22px] lg:gap-[28px]"
                    >
                        {features.map((it, idx) => (
                            <FeatureCard
                                key={it.title}
                                item={it}
                                index={idx}
                                onClick={() => setActive(it)}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Modal */}
            <Modal open={!!active} item={active || {}} onClose={() => setActive(null)} />
        </>
    );
}
