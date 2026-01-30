# EvolveX Website - AI & Tech Corporate Platform

## Overview
The **EvolveX Website** is a modern, high-performance corporate platform designed for EvolveX, an AI and technology solutions provider. This project implements a cutting-edge frontend architecture using React 19 and Vite, featuring immersive 3D/2D animations, a responsive design system, and a seamless user experience.

The website serves as the primary digital presence for EvolveX, showcasing:
- **Services & Expertise**: Detailed insights into AI and tech offerings.
- **Careers & Culture**: Open roles, team philosophy, and "Life at EvolveX".
- **Product Showcase**: Interactive demonstrations of core platform capabilities.
- **Corporate Info**: About Us, Legal, and Contact channels.

## Features
- **Immersive Animations**: Integrated **Three.js (Fiber)**, **GSAP**, and **Framer Motion** for premium visual effects (Floating Lines, Dot Grids, Scroll Reveals).
- **Performance Optimized**: Lazy loading for all major routes and component splitting to ensure fast initial load times.
- **Responsive Design**: Mobile-first approach using **Tailwind CSS**.
- **Interactive UI**: Custom components including a global **Enquiry Overlay**, **Product Showcases**, and dynamic **Job Details** views.
- **Modern Routing**: Robust client-side routing with **React Router DOM v7**.

## Tech Stack
**Frontend:**
- **Framework & Core:** React 19, Vite
- **Styling:** Tailwind CSS, PostCSS, Custom CSS Variables
- **Animations:** Framer Motion, GSAP, Three.js (@react-three/fiber), Motion
- **Icons:** Lucide React

**Tools & Utilities:**
- **Build Tool:** Vite
- **Routing:** React Router DOM

## Folder Structure
```text
evolvex-website/
├── public/              # Static assets (images, icons, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # Atomic design elements (buttons, inputs)
│   │   ├── Layout.jsx   # Main layout wrapper (Navbar, Footer, Overlay)
│   │   └── ...          # Feature-specific components (Navbar, Footer, etc.)
│   ├── pages/           # Application route pages (Home, About, Services)
│   ├── styles/          # Global styles and Tailwind configuration
│   ├── App.jsx          # Main application routing logic
│   └── main.jsx         # Application entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## Installation
1.  **Clone the repository**:
    ```bash
    git clone https://github.com/pranav107-ui/Evolvex-AI-website.git
    cd evolvex-website
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## Running the Project
- **Development Server**:
    Starts the local development server with hot module replacement (HMR).
    ```bash
    npm run dev
    ```

- **Build for Production**:
    Builds the application for deployment to the `dist` folder.
    ```bash
    npm run build
    ```

- **Preview Production Build**:
    Locally preview the production build.
    ```bash
    npm run preview
    ```

## Environment Variables
Currently, the project relies on static configuration. If API integration is added in the future:
- Create a `.env` file in the root directory.
- Use `VITE_` prefix for client-exposed variables.

## Known Issues / Limitations
- **Animation Performance**: Heavy use of Three.js and GSAP may impact performance on lower-end devices. Optimization is ongoing.
- **Browser Compatibility**: Best viewed in modern browsers (Chrome, Edge, Firefox, Safari) due to modern CSS and JS features.

## License
ISC
