'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const phoneScreens = [
  {
    id: 1,
    gradient: 'from-violet-600 to-indigo-900',
    label: 'AR Dashboard',
    icon: '📱',
  },
  {
    id: 2,
    gradient: 'from-emerald-600 to-teal-900',
    label: '3D Viewer',
    icon: '🔮',
  },
  {
    id: 3,
    gradient: 'from-amber-600 to-orange-900',
    label: 'Product Hub',
    icon: '🛍️',
  },
  {
    id: 4,
    gradient: 'from-rose-600 to-pink-900',
    label: 'Social Feed',
    icon: '💬',
  },
  {
    id: 5,
    gradient: 'from-cyan-600 to-blue-900',
    label: 'Analytics',
    icon: '📊',
  },
  {
    id: 6,
    gradient: 'from-purple-600 to-fuchsia-900',
    label: 'Settings',
    icon: '⚙️',
  },
  {
    id: 7,
    gradient: 'from-lime-600 to-green-900',
    label: 'Maps',
    icon: '🗺️',
  },
  {
    id: 8,
    gradient: 'from-red-600 to-rose-900',
    label: 'Camera',
    icon: '📸',
  },
];

function PhoneMockup({ screen, index }: { screen: typeof phoneScreens[0]; index: number }) {
  return (
    <motion.div
      className="flex-shrink-0 w-[180px] sm:w-[200px] lg:w-[220px]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
    >
      <div className="relative">
        {/* Phone Frame */}
        <div className="relative bg-[#1a1a1a] rounded-[2rem] p-2 shadow-2xl shadow-black/50">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1a1a1a] rounded-b-xl z-10" />
          {/* Screen */}
          <div
            className={`bg-gradient-to-br ${screen.gradient} rounded-[1.5rem] aspect-[9/19] flex flex-col items-center justify-center gap-3 relative overflow-hidden`}
          >
            {/* Overlay pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }} />
            </div>
            <span className="text-4xl lg:text-5xl relative z-10">{screen.icon}</span>
            <span className="text-white text-xs font-medium relative z-10 opacity-80">{screen.label}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  // Double the screens for infinite scroll
  const allScreens = [...phoneScreens, ...phoneScreens];

  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-20 px-4 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 mb-8"
          >
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            New Webflow Template
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight tracking-tight mb-6">
            <span>GadgetAR</span>{' '}
            <span className="bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent">
              Webflow Template
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A premium AR gadget showcase template crafted for innovative brands.
            Beautifully designed pages with stunning interactions and modern aesthetics.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#preview"
              className="group inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/5 transition-all duration-300"
            >
              <Play size={16} className="group-hover:scale-110 transition-transform" />
              Live Preview
            </a>
            <a
              href="#buy"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-white/90 transition-all duration-300"
            >
              Buy Template
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative z-10 pb-12 lg:pb-20">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4 lg:gap-6"
            animate={{ x: [0, -50 * phoneScreens.length] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 25,
                ease: 'linear',
              },
            }}
          >
            {allScreens.map((screen, index) => (
              <PhoneMockup
                key={`${screen.id}-${index}`}
                screen={screen}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
