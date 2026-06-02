'use client';

import { motion } from 'framer-motion';

const mainPages = [
  { name: 'Home V1', type: 'desktop', color: 'from-violet-500/30 to-purple-500/30' },
  { name: 'Home V2', type: 'desktop', color: 'from-cyan-500/30 to-blue-500/30' },
  { name: 'About', type: 'desktop', color: 'from-emerald-500/30 to-teal-500/30' },
  { name: 'Contact', type: 'desktop', color: 'from-amber-500/30 to-orange-500/30' },
  { name: 'Blog', type: 'desktop', color: 'from-rose-500/30 to-pink-500/30' },
  { name: 'Blog Post', type: 'desktop', color: 'from-lime-500/30 to-green-500/30' },
];

const utilityPages = [
  { name: '404 Page', type: 'mobile', color: 'from-red-500/20 to-rose-500/20' },
  { name: 'Password', type: 'mobile', color: 'from-indigo-500/20 to-violet-500/20' },
  { name: 'Style Guide', type: 'mobile', color: 'from-fuchsia-500/20 to-pink-500/20' },
  { name: 'Licenses', type: 'mobile', color: 'from-teal-500/20 to-cyan-500/20' },
  { name: 'Changelog', type: 'mobile', color: 'from-yellow-500/20 to-amber-500/20' },
  { name: 'Start Here', type: 'mobile', color: 'from-sky-500/20 to-blue-500/20' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function DesktopMockup({ page }: { page: typeof mainPages[0] }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="group cursor-pointer"
    >
      <div className="bg-[#1a1a1a] rounded-xl p-2 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 mb-2 px-2 pt-1">
          <div className="w-2 h-2 rounded-full bg-red-500/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
          <div className="w-2 h-2 rounded-full bg-green-500/60" />
          <div className="flex-1 mx-2">
            <div className="bg-white/5 rounded px-2 py-0.5 text-[9px] text-white/20 text-center">
              gadgetar.webflow.io/{page.name.toLowerCase().replace(' ', '-')}
            </div>
          </div>
        </div>
        {/* Screen content */}
        <div className={`bg-gradient-to-br ${page.color} rounded-lg aspect-[16/10] flex items-center justify-center`}>
          <div className="w-full h-full p-4 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 rounded bg-white/20" />
              <div className="w-10 h-1.5 rounded bg-white/15" />
              <div className="flex-1" />
              <div className="w-6 h-1.5 rounded bg-white/10" />
              <div className="w-6 h-1.5 rounded bg-white/10" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-2 rounded bg-white/15 mx-auto mb-2" />
                <div className="w-32 h-3 rounded bg-white/20 mx-auto mb-3" />
                <div className="w-16 h-1.5 rounded bg-white/10 mx-auto" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-8 rounded bg-white/5" />
              <div className="h-8 rounded bg-white/5" />
              <div className="h-8 rounded bg-white/5" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-sm font-medium text-[#111] mt-3 group-hover:text-[#666] transition-colors">
        {page.name}
      </p>
    </motion.div>
  );
}

function MobileMockup({ page }: { page: typeof utilityPages[0] }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="group cursor-pointer"
    >
      <div className="flex justify-center">
        <div className="w-28 sm:w-32">
          {/* Phone frame */}
          <div className="bg-[#1a1a1a] rounded-2xl p-1.5 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-3 bg-[#1a1a1a] rounded-b-lg z-10" />
            {/* Screen */}
            <div className={`bg-gradient-to-br ${page.color} rounded-xl aspect-[9/16] flex items-center justify-center`}>
              <div className="w-full h-full p-3 flex flex-col items-center justify-center">
                <div className="w-16 h-2 rounded bg-white/15 mb-2" />
                <div className="w-20 h-2.5 rounded bg-white/20 mb-3" />
                <div className="w-12 h-1.5 rounded bg-white/10" />
              </div>
            </div>
          </div>
          <p className="text-center text-xs font-medium text-[#111] mt-2 group-hover:text-[#666] transition-colors">
            {page.name}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function PagesGrid() {
  return (
    <section id="pages" className="py-16 lg:py-24 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        {/* Main Pages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-24"
        >
          <div className="text-center mb-10 lg:mb-14">
            <span className="text-xs font-semibold tracking-widest text-[#666] uppercase mb-4 block">
              Core Pages
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#111]">
              Main pages
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {mainPages.map((page) => (
              <DesktopMockup key={page.name} page={page} />
            ))}
          </motion.div>
        </motion.div>

        {/* Utility Pages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10 lg:mb-14">
            <span className="text-xs font-semibold tracking-widest text-[#666] uppercase mb-4 block">
              Supporting Pages
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#111]">
              Utility pages
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8"
          >
            {utilityPages.map((page) => (
              <MobileMockup key={page.name} page={page} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
