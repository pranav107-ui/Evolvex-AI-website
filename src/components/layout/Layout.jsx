import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// Lazy load the heavy overlay component
const EnquiryOverlay = lazy(() => import('./EnquiryOverlay'));

const Layout = () => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const location = useLocation();

    // Close overlay on route change
    useEffect(() => {
        setIsOverlayOpen(false);
    }, [location.pathname]);

    // Lock body scroll when overlay is open
    useEffect(() => {
        if (isOverlayOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOverlayOpen]);

    const openOverlay = () => setIsOverlayOpen(true);
    const closeOverlay = () => setIsOverlayOpen(false);

    return (
        <div className="font-sans antialiased text-[#0b1220] bg-white">
            <Navbar onOpenOverlay={openOverlay} />
            <main>
                <Outlet />
            </main>
            <Footer />

            {/* Lazy Loaded Overlay - Only mounts when needed (or preloaded) */}
            <Suspense fallback={null}>
                {isOverlayOpen && (
                    <EnquiryOverlay
                        isOpen={isOverlayOpen}
                        onClose={closeOverlay}
                    />
                )}
            </Suspense>
        </div>
    );
};

export default Layout;
