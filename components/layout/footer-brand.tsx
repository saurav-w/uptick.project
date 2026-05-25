"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FooterBrand = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-sm"
    >
      <Link href="/" className="inline-flex items-center mb-6">
        <Image
          src="/logos/horizontal-logo-in-white.svg"
          alt="Uptick Invest"
          width={180}
          height={40}
          className="h-auto w-auto"
          priority
        />
      </Link>

      <p className="text-sm leading-relaxed text-white/60">
        Modern fintech infrastructure for intelligent investing, portfolio
        growth, and wealth management.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
          Bank-grade security
        </div>

        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
          Real-time analytics
        </div>

        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
          Secure infrastructure
        </div>
      </div>
    </motion.div>
  );
};

export default FooterBrand;