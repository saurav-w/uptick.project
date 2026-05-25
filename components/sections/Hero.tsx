"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Activity,
  PieChart,
  BarChart3,
} from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pb-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_40%)]" />
      </div>

      <div className="container-custom">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-1 text-sm font-medium text-accent backdrop-blur-xl">
                Built for Nepal’s next generation of investors
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl dark:text-white"
            >
              Track, analyze, and grow your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                NEPSE portfolio
              </span>{" "}
              intelligently.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              Real-time portfolio tracking, intelligent analytics, market
              insights, and modern investing infrastructure designed
              specifically for Nepali investors.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/dashboard"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-7 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(0,75,68,0.25)]"
              >
                Start Investing
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/pricing"
                className="inline-flex h-14 items-center justify-center rounded-2xl border border-border bg-background/70 px-7 text-sm font-medium text-foreground backdrop-blur-xl transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                View Dashboard
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-14 flex flex-wrap gap-10"
            >
              <div>
                <p className="text-3xl font-semibold text-foreground dark:text-white">
                  10K+
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Active Investors
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-foreground dark:text-white">
                  NPR 50Cr+
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Assets Tracked
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-foreground dark:text-white">
                  99.9%
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Platform Reliability
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT DASHBOARD PREVIEW */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />

            {/* Main Dashboard */}
            <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-white/70 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#091210]/80">
              {/* Header */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Portfolio Balance
                  </p>

                  <h3 className="mt-1 text-3xl font-semibold text-foreground dark:text-white">
                    NPR 12,45,000
                  </h3>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <TrendingUp className="h-7 w-7" />
                </div>
              </div>

              {/* Performance Card */}
              <div className="rounded-3xl border border-border/60 bg-background/80 p-5 dark:border-white/10 dark:bg-white/5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Monthly Growth
                    </p>

                    <h4 className="mt-1 text-2xl font-semibold text-accent">
                      +18.42%
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-accent/10 p-3 text-accent">
                    <Activity className="h-5 w-5" />
                  </div>
                </div>

                {/* Fake Chart */}
                <div className="flex h-32 items-end gap-2">
                  {[40, 55, 48, 70, 65, 90, 78, 100].map((height, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{
                        duration: 0.8,
                        delay: idx * 0.05,
                      }}
                      className="flex-1 rounded-t-xl bg-gradient-to-t from-primary to-accent"
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Cards */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {/* Top Gainer */}
                <div className="rounded-3xl border border-border/60 bg-background/80 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Top Gainer
                    </p>

                    <PieChart className="h-4 w-4 text-primary" />
                  </div>

                  <h4 className="text-lg font-semibold text-foreground dark:text-white">
                    NABIL
                  </h4>

                  <p className="mt-2 text-sm font-medium text-accent">
                    +6.24%
                  </p>
                </div>

                {/* Watchlist */}
                <div className="rounded-3xl border border-border/60 bg-background/80 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Watchlist
                    </p>

                    <BarChart3 className="h-4 w-4 text-primary" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground dark:text-white">
                        HIDCL
                      </span>

                      <span className="text-accent">+2.1%</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground dark:text-white">
                        NICA
                      </span>

                      <span className="text-red-500">-0.8%</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground dark:text-white">
                        UPPER
                      </span>

                      <span className="text-accent">+4.3%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 -left-8 hidden rounded-3xl border border-border/60 bg-white/80 p-5 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-[#091210]/80 xl:block"
            >
              <p className="text-sm text-muted-foreground">
                NEPSE Index
              </p>

              <div className="mt-2 flex items-end gap-3">
                <h4 className="text-2xl font-semibold text-foreground dark:text-white">
                  2,184
                </h4>

                <span className="mb-1 text-sm font-medium text-accent">
                  +1.84%
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;