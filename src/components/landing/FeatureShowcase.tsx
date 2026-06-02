'use client';

import { motion } from 'framer-motion';
import { Bell, BarChart3, Zap, Eye } from 'lucide-react';

const floatingCards = [
  {
    icon: Bell,
    title: 'Smart Alerts',
    description: 'Real-time notifications',
    color: 'bg-violet-600',
    position: 'top-8 -left-4 lg:-left-16',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Track performance',
    color: 'bg-emerald-600',
    position: 'top-20 -right-4 lg:-right-16',
  },
  {
    icon: Zap,
    title: 'Fast Deploy',
    description: 'One-click publish',
    color: 'bg-amber-500',
    position: 'bottom-16 -left-4 lg:-left-12',
  },
  {
    icon: Eye,
    title: 'Live Preview',
    description: 'See changes instantly',
    color: 'bg-cyan-600',
    position: 'bottom-8 -right-4 lg:-right-12',
  },
];

export default function FeatureShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-[#666] uppercase mb-4 block">
            Feature Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#111] mb-4">
            Beautifully crafted pages
          </h2>
          <p className="text-base lg:text-lg text-[#666] max-w-2xl mx-auto">
            Every page is designed with attention to detail, featuring smooth animations and modern aesthetics.
          </p>
        </motion.div>

        {/* Laptop Mockup with Floating Cards */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Laptop Frame */}
            <div className="relative">
              {/* Screen */}
              <div className="bg-[#1a1a1a] rounded-t-2xl p-3 lg:p-4 shadow-2xl">
                {/* Browser bar */}
                <div className="flex items-center gap-2 mb-3 px-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="flex-1 mx-4">
                    <div className="bg-white/10 rounded-lg px-4 py-1.5 text-xs text-white/40 max-w-md mx-auto">
                      gadgetar.webflow.io
                    </div>
                  </div>
                </div>
                {/* Content area */}
                <div className="bg-gradient-to-br from-[#0f0f23] to-[#1a0a2e] rounded-lg aspect-[16/9] flex items-center justify-center relative overflow-hidden">
                  {/* Simulated UI elements */}
                  <div className="absolute inset-0 p-6 lg:p-10 flex flex-col">
                    {/* Top nav */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-white/20" />
                        <div className="w-16 h-3 rounded bg-white/10" />
                      </div>
                      <div className="flex gap-3">
                        <div className="w-10 h-3 rounded bg-white/10" />
                        <div className="w-10 h-3 rounded bg-white/10" />
                        <div className="w-10 h-3 rounded bg-white/10" />
                      </div>
                    </div>
                    {/* Hero content */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-48 h-4 rounded bg-white/10 mx-auto mb-3" />
                        <div className="w-72 h-6 rounded bg-gradient-to-r from-violet-400/30 to-cyan-400/30 mx-auto mb-4" />
                        <div className="w-40 h-3 rounded bg-white/10 mx-auto mb-6" />
                        <div className="flex gap-3 justify-center">
                          <div className="w-20 h-8 rounded-full bg-white/20" />
                          <div className="w-20 h-8 rounded-full border border-white/20" />
                        </div>
                      </div>
                    </div>
                    {/* Bottom cards */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-16 rounded-lg bg-white/5 border border-white/5" />
                      <div className="h-16 rounded-lg bg-white/5 border border-white/5" />
                      <div className="h-16 rounded-lg bg-white/5 border border-white/5" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Laptop base */}
              <div className="bg-[#2a2a2a] h-4 rounded-b-xl mx-8 lg:mx-16 shadow-lg" />
              <div className="bg-[#333] h-2 rounded-b-lg mx-16 lg:mx-32" />
            </div>

            {/* Floating Cards */}
            {floatingCards.map((card, index) => (
              <motion.div
                key={card.title}
                className={`absolute ${card.position} z-20 hidden md:block`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-44 lg:w-52"
                >
                  <div className={`w-9 h-9 ${card.color} rounded-lg flex items-center justify-center mb-3`}>
                    <card.icon size={16} className="text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-[#111] mb-1">{card.title}</h4>
                  <p className="text-xs text-[#666]">{card.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Pages Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center mt-10 lg:mt-14"
          >
            <a
              href="#pages"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#111] text-white rounded-full text-sm font-medium hover:bg-[#333] transition-colors duration-200"
            >
              View all pages
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
