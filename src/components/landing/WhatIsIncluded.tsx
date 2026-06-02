'use client';

import { motion } from 'framer-motion';
import { Layers, Layout, FileCode } from 'lucide-react';

const stats = [
  {
    number: '15+',
    label: 'Pages',
    description: 'Beautifully designed pages covering all essential sections for your AR gadget showcase.',
    icon: Layout,
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    number: '40+',
    label: 'Sections',
    description: 'Ready-to-use sections with unique layouts, interactions, and responsive design.',
    icon: Layers,
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    number: '25+',
    label: 'Components',
    description: 'Modular components that can be mixed and matched to create unique page layouts.',
    icon: FileCode,
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function WhatIsIncluded() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#f9f9f9]">
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
            What&apos;s Inside
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#111] mb-4">
            What is included in GadgetAR
          </h2>
          <p className="text-base lg:text-lg text-[#666] max-w-2xl mx-auto">
            Everything you need to build a stunning AR gadget website, from pages and sections to reusable components.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.number}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-2xl border border-gray-100 p-8 lg:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Gradient background effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#111] flex items-center justify-center mb-6">
                  <stat.icon size={20} className="text-white" />
                </div>

                {/* Number */}
                <div className="text-4xl lg:text-5xl font-heading font-bold text-[#111] mb-2">
                  {stat.number}
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-[#111] mb-3">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#666] leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
