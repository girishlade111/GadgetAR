'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, Send } from 'lucide-react';

const footerLinks = {
  Socials: ['Twitter', 'Instagram', 'LinkedIn', 'GitHub'],
  About: ['Our Story', 'Team', 'Careers', 'Press'],
  Features: ['Pages', 'Components', 'Interactions', 'CMS'],
  Products: ['Templates', 'UI Kits', 'Icons', 'Plugins'],
  Support: ['Documentation', 'Help Center', 'Community', 'Contact Us'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Licenses', 'Cookie Policy'],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        {/* Main Footer */}
        <div className="py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Left - Logo & Newsletter */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <a href="#home" className="inline-block mb-6">
                  <span className="text-2xl font-bold text-white tracking-tight">
                    Gadget<span className="text-white/60">AR</span>
                  </span>
                </a>
                <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-xs">
                  A premium AR gadget showcase template crafted for innovative brands. Build stunning websites with ease.
                </p>

                {/* Newsletter Form */}
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 transition-colors"
                    />
                  </div>
                  <button className="px-4 py-3 bg-white text-black rounded-xl text-sm font-semibold hover:bg-white/90 transition-colors flex items-center gap-1.5">
                    <Send size={14} />
                    <span className="hidden sm:inline">Subscribe</span>
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right - Links Grid */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8"
              >
                {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category}>
                    <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
                    <ul className="space-y-2.5">
                      {links.map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="text-sm text-white/40 hover:text-white/70 transition-colors duration-200"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} GadgetAR. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-white/30 hover:text-white/70 transition-colors duration-200"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
