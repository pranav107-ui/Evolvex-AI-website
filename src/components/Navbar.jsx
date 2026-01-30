import React, { useEffect, useState, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = ({ onOpenOverlay }) => {
    // Basic mobile menu toggle
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    const indicatorRef = useRef(null);
    const location = useLocation();

    // Scroll Logic for Smart Navbar
    const [isVisible, setIsVisible] = useState(true);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            // Update visible state
            if (currentScrollY > 100) {
                if (currentScrollY > lastScrollY) {
                    setIsVisible(false); // Hide on scroll down
                } else {
                    setIsVisible(true); // Show on scroll up
                }
            } else {
                setIsVisible(true); // Always show at top
            }

            // Update scrolled state for style
            setIsScrolled(currentScrollY > 20);

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const moveIndicator = (target) => {
        const indicator = indicatorRef.current;
        if (!indicator || !target) return;

        const targetLeft = target.offsetLeft;
        const targetWidth = target.offsetWidth;
        const indicatorWidth = indicator.offsetWidth;

        const newLeft = targetLeft + (targetWidth / 2) - (indicatorWidth / 2);

        indicator.style.left = `${newLeft}px`;
        indicator.style.opacity = '1';
    };

    const resetIndicator = () => {
        const nav = navRef.current;
        if (!nav) return;
        const activeLink = nav.querySelector('.nav-link.nav-link-active');
        if (activeLink) {
            moveIndicator(activeLink);
        } else {
            // Maybe hide if no active link?
            if (indicatorRef.current) indicatorRef.current.style.opacity = '0';
        }
    };

    useEffect(() => {
        // Initial positioning and on location change
        // Timeout to ensure DOM is ready/fonts loaded (similar to legacy)
        const activeLink = navRef.current?.querySelector('.nav-link.nav-link-active');

        if (activeLink) {
            moveIndicator(activeLink);
        } else {
            // If we are on a page not in nav (e.g. open-roles), we might want to hide it
            if (indicatorRef.current) indicatorRef.current.style.opacity = '0';
        }

        // Add minimal delay for safety
        setTimeout(resetIndicator, 50);

        window.addEventListener('resize', resetIndicator);
        return () => window.removeEventListener('resize', resetIndicator);
    }, [location.pathname]);

    const handleEnquireClick = (e) => {
        e.preventDefault();
        if (onOpenOverlay) {
            onOpenOverlay();
        } else {
            // Fallback for legacy behavior if prop not provided (though ID might be missing now)
            const overlay = document.getElementById('enquireOverlay');
            if (overlay) {
                overlay.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        }
    };

    return (
        <motion.header
            className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-transparent' : 'bg-white border-b border-[#eee]'}`}
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <div className="w-full px-5 flex items-center justify-between py-[18px] relative">

                {/* Logo */}
                <div className="flex items-center gap-2 z-50">
                    <Link to="/" className="text-[25px] font-extrabold text-[#1a1a1a] tracking-tighter">
                        Evolvex AI
                    </Link>
                </div>

                {/* Nav Menu */}
                <nav
                    ref={navRef}
                    className={`
                        ${isOpen ? 'flex flex-col absolute top-full left-0 w-full bg-white p-6 shadow-xl border-t border-gray-100' : 'hidden'}
                        md:flex md:flex-row md:items-center md:gap-[28px]
                        md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
                        md:w-auto md:bg-transparent md:p-0 md:shadow-none md:border-none
                        z-40
                    `}
                    id="mainNav" role="navigation" aria-label="Main"
                    onMouseLeave={resetIndicator}
                >

                    <div className="nav-indicator" id="navIndicator" ref={indicatorRef} style={{ opacity: 0 }}>
                        <div className="nav-indicator-dot"></div>
                        <div className="nav-indicator-bar"></div>
                    </div>

                    <NavLink
                        to="/"
                        className={({ isActive }) => `nav-link font-medium ${isActive ? 'nav-link-active' : ''}`}
                        onMouseEnter={(e) => moveIndicator(e.currentTarget)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={({ isActive }) => `nav-link font-medium ${isActive ? 'nav-link-active' : ''}`}
                        onMouseEnter={(e) => moveIndicator(e.currentTarget)}
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `nav-link font-medium ${isActive ? 'nav-link-active' : ''}`}
                        onMouseEnter={(e) => moveIndicator(e.currentTarget)}
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/careers"
                        className={({ isActive }) => `nav-link font-medium ${isActive ? 'nav-link-active' : ''}`}
                        onMouseEnter={(e) => moveIndicator(e.currentTarget)}
                    >
                        Careers
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => `nav-link font-medium ${isActive ? 'nav-link-active' : ''}`}
                        onMouseEnter={(e) => moveIndicator(e.currentTarget)}
                    >
                        Contact
                    </NavLink>
                </nav>
                <a href="#" className="hidden md:inline-flex btn-enquire" id="openEnquire" onClick={handleEnquireClick}>Enquire Now</a>

                <button id="navToggle" aria-expanded={isOpen} onClick={toggleMenu}
                    className="md:hidden text-[#0b1220] font-semibold text-[15px]">Menu</button>
            </div>
        </motion.header>
    );
};

export default Navbar;