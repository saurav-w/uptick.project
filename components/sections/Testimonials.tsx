"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star, TrendingUp } from "lucide-react";

const testimonials = [
  {
    quote:
      "Uptick Invest completely changed how I track my NEPSE portfolio. The analytics and clean dashboard make investing far more organized.",
    author: "Aayush Shrestha",
    role: "Retail Investor · Kathmandu",
    image: "/images/testimonials/user-1.jpg",
    growth: "+28.4%",
  },
  {
    quote:
      "Most Nepali investing platforms feel outdated. Uptick finally brings a premium modern investing experience to NEPSE investors.",
    author: "Sanjog Karki",
    role: "Swing Trader · Pokhara",
    image: "/images/testimonials/user-2.jpg",
    growth: "+18.2%",
  },
  {
    quote:
      "The portfolio insights and market analytics helped me make smarter investment decisions with better confidence.",
    author: "Nischal Adhikari",
    role: "Long-term Investor · Lalitpur",
    image: "/images/testimonials/user-3.jpg",
    growth: "+32.8%",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_45%)]" />
      </div>

      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-1 text-sm font-medium text-accent backdrop-blur-xl">
            Trusted by modern NEPSE investors
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
            Investors across Nepal are growing with{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Uptick Invest
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Join thousands of investors using modern analytics and portfolio
            intelligence to make smarter NEPSE investment decisions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-border/60 bg-white/70 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#091210]/70"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
              </div>

              {/* Quote Icon */}
              <div className="relative z-10 mb-6 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Quote className="h-6 w-6" />
                </div>

                {/* Growth */}
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  <TrendingUp className="h-4 w-4" />
                  {testimonial.growth}
                </div>
              </div>

              {/* Stars */}
              <div className="mb-6 flex items-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="relative z-10 text-lg leading-relaxed text-foreground/80 dark:text-white/80">
                “{testimonial.quote}”
              </p>

              {/* Footer */}
              <div className="relative z-10 mt-8 flex items-center gap-4">
                {/* Avatar */}
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-border dark:border-white/10">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div>
                  <h4 className="text-base font-semibold text-foreground dark:text-white">
                    {testimonial.author}
                  </h4>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-8 rounded-[36px] border border-border/60 bg-white/60 p-10 text-center backdrop-blur-2xl sm:grid-cols-3 dark:border-white/10 dark:bg-[#091210]/70"
        >
          <div>
            <h3 className="text-4xl font-semibold text-foreground dark:text-white">
              10K+
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Active Investors
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-semibold text-foreground dark:text-white">
              NPR 50Cr+
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Assets Tracked
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-semibold text-foreground dark:text-white">
              4.9/5
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Investor Satisfaction
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;