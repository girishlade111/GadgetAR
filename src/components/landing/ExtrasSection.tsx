'use client';

import { motion } from 'framer-motion';
import { Layout, Bell, Palette, Palette as Icons, Code, Smartphone } from 'lucide-react';

const extras = [
  {
    icon: Layout,
    title: '3 Headers and Footers',
    description: 'Choose from three distinct header and footer styles to match your brand identity. Each variant is fully customizable and responsive.',
    visual: 'headers',
    reverse: false,
  },
  {
    icon: Bell,
    title: '3 Notification Bars',
    description: 'Engage your visitors with eye-catching notification bars. Announce sales, promotions, or important updates with style.',
    visual: 'notifications',
    reverse: true,
  },
  {
    icon: Icons,
    title: 'Custom Icon Set',
    description: 'A beautifully crafted icon set designed specifically for the GadgetAR template. Consistent style across all icons.',
    visual: 'icons',
    reverse: false,
  },
  {
    icon: Code,
    title: 'Clean Code Structure',
    description: 'Well-organized, semantic code that follows Webflow best practices. Easy to understand, modify, and extend.',
    visual: 'code',
    reverse: true,
  },
  {
    icon: Smartphone,
    title: 'Fully Responsive',
    description: 'Every page and component adapts perfectly to any screen size, from mobile phones to large desktop displays.',
    visual: 'responsive',
    reverse: false,
  },
  {
    icon: Palette,
    title: 'Global Styles',
    description: 'Easily customize colors, typography, and spacing through global style variables. Change the entire look in minutes.',
    visual: 'styles',
    reverse: true,
  },
];

function VisualBlock({ type }: { type: string }) {
  const visuals: Record<string, React.ReactNode> = {
    headers: (
      <div className="space-y-3">
        {['Header Style 1', 'Header Style 2', 'Header Style 3'].map((label, i) => (
          <div key={label} className="bg-white/5 rounded-lg p-3 flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
              ['bg-violet-600', 'bg-cyan-600', 'bg-emerald-600'][i]
            }`}>
              {i + 1}
            </div>
            <div className="flex-1">
              <div className="w-24 h-2 rounded bg-white/10 mb-1" />
              <div className="flex gap-2">
                <div className="w-8 h-1.5 rounded bg-white/5" />
                <div className="w-8 h-1.5 rounded bg-white/5" />
                <div className="w-8 h-1.5 rounded bg-white/5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
    notifications: (
      <div className="space-y-3">
        <div className="bg-violet-600/20 border border-violet-500/30 rounded-lg p-3 text-center text-xs text-violet-300">
          🎉 Special Offer - 50% Off All Templates!
        </div>
        <div className="bg-cyan-600/20 border border-cyan-500/30 rounded-lg p-3 text-center text-xs text-cyan-300">
          📢 New: AR Features Now Available
        </div>
        <div className="bg-emerald-600/20 border border-emerald-500/30 rounded-lg p-3 text-center text-xs text-emerald-300">
          ✨ Free Updates for Lifetime
        </div>
      </div>
    ),
    icons: (
      <div className="grid grid-cols-4 gap-3">
        {['🏠', '📱', '🎯', '💡', '⚙️', '🔗', '📊', '🛡️'].map((icon, i) => (
          <div key={i} className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-lg hover:bg-white/10 transition-colors cursor-pointer">
            {icon}
          </div>
        ))}
      </div>
    ),
    code: (
      <div className="bg-white/5 rounded-lg p-4 font-mono text-xs text-white/60 leading-relaxed">
        <div><span className="text-violet-400">const</span> template = {'{'}</div>
        <div className="pl-4">name: <span className="text-emerald-400">&quot;GadgetAR&quot;</span>,</div>
        <div className="pl-4">pages: <span className="text-amber-400">15</span>,</div>
        <div className="pl-4">responsive: <span className="text-cyan-400">true</span>,</div>
        <div>{'}'}</div>
      </div>
    ),
    responsive: (
      <div className="flex items-end justify-center gap-3">
        <div className="w-6 h-10 bg-white/10 rounded border border-white/10" />
        <div className="w-10 h-14 bg-white/10 rounded border border-white/10" />
        <div className="w-16 h-20 bg-white/10 rounded border border-white/10" />
      </div>
    ),
    styles: (
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-violet-500" />
          <div className="flex-1"><div className="w-20 h-2 rounded bg-white/10" /></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-cyan-500" />
          <div className="flex-1"><div className="w-20 h-2 rounded bg-white/10" /></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-emerald-500" />
          <div className="flex-1"><div className="w-20 h-2 rounded bg-white/10" /></div>
        </div>
      </div>
    ),
  };

  return <>{visuals[type]}</>;
}

export default function ExtrasSection() {
  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-20"
        >
          <span className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-4 block">
            Bonus Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            And so much more...
          </h2>
          <p className="text-base lg:text-lg text-white/50 max-w-2xl mx-auto">
            Beyond the core pages, GadgetAR comes packed with extras that make your website truly stand out.
          </p>
        </motion.div>

        {/* Zig-Zag Items */}
        <div className="space-y-16 lg:space-y-24">
          {extras.map((extra, index) => (
            <motion.div
              key={extra.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col ${
                extra.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-8 lg:gap-16`}
            >
              {/* Text Side */}
              <div className="flex-1 w-full">
                <div className="max-w-lg">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <extra.icon size={18} className="text-white/60" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-4">
                    {extra.title}
                  </h3>
                  <p className="text-base text-white/50 leading-relaxed">
                    {extra.description}
                  </p>
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex-1 w-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#1a1a1a] rounded-2xl border border-white/5 p-6 lg:p-8"
                >
                  <VisualBlock type={extra.visual} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
