"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerSections = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "/services" },
      { label: "Pricing", href: "/pricing" },
      { label: "Analytics", href: "/dashboard" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/#faq" },
      { label: "Help Center", href: "/help" },
      { label: "Documentation", href: "/docs" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
];

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
      {footerSections.map((section, index) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            {section.title}
          </h3>

          <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center text-sm text-white/60 transition-all duration-300 hover:text-white"
                >
                  <span className="relative">
                    {link.label}

                    <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default FooterLinks;