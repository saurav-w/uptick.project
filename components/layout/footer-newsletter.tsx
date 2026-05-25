"use client";

import { motion } from "framer-motion";

const FooterNewsletter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
    >
      <div className="mb-5">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-accent">
          Weekly Insights
        </p>

        <h3 className="text-2xl font-semibold text-white">
          Stay ahead of the market
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-white/60">
          Get curated investment insights, market trends, and portfolio
          strategies directly in your inbox.
        </p>
      </div>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-accent"
        />

        <button
          type="submit"
          className="h-12 w-full rounded-2xl bg-accent text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(16,185,129,0.35)]"
        >
          Subscribe Now
        </button>
      </form>

      <p className="mt-4 text-xs text-white/40">
        No spam. Unsubscribe anytime.
      </p>
    </motion.div>
  );
};

export default FooterNewsletter;