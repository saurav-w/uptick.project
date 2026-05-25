"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "499",
    description:
      "Perfect for beginner NEPSE investors starting their portfolio journey.",
    features: [
      "Portfolio Tracking",
      "NEPSE Watchlist",
      "Basic Analytics",
      "Market Updates",
      "Email Support",
    ],
    cta: "Start Free",
    icon: TrendingUp,
  },
  {
    name: "Pro Investor",
    price: "1499",
    description:
      "Advanced analytics and intelligent tools for serious investors.",
    features: [
      "Advanced Portfolio Analytics",
      "Sector Allocation Insights",
      "Real-time Alerts",
      "Performance Forecasting",
      "Priority Support",
      "Investment Reports",
    ],
    cta: "Get Pro Access",
    highlighted: true,
    icon: Sparkles,
  },
  {
    name: "Institutional",
    price: "Custom",
    description:
      "Professional-grade infrastructure for teams and institutional investors.",
    features: [
      "Multi-user Access",
      "Custom Analytics",
      "Dedicated Account Manager",
      "Enterprise Security",
      "Private API Access",
      "Custom Integrations",
    ],
    cta: "Contact Sales",
    icon: ShieldCheck,
  },
];

export const Pricing = () => {
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
            Flexible pricing for every investor
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
            Premium investing tools built for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NEPSE investors
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Start free and scale as your investment portfolio grows.
            Transparent pricing with no hidden fees.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-[32px] border p-8 transition-all duration-500 ${
                  plan.highlighted
                    ? "border-primary/20 bg-primary text-white shadow-[0_20px_80px_rgba(0,75,68,0.25)] lg:-translate-y-4"
                    : "border-border/60 bg-white/70 backdrop-blur-2xl hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#091210]/70"
                }`}
              >
                {/* Glow */}
                {plan.highlighted && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_40%)]" />
                )}

                {/* Popular Badge */}
                {plan.highlighted && (
                  <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-wide text-white backdrop-blur-xl">
                    Most Popular
                  </div>
                )}

                {/* Top */}
                <div className="relative z-10">
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${
                      plan.highlighted
                        ? "bg-white/10 text-white"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3
                    className={`text-2xl font-semibold ${
                      plan.highlighted
                        ? "text-white"
                        : "text-foreground dark:text-white"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  <p
                    className={`mt-4 leading-relaxed ${
                      plan.highlighted
                        ? "text-white/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-8 flex items-end gap-1">
                    {plan.price !== "Custom" && (
                      <span
                        className={`text-lg ${
                          plan.highlighted
                            ? "text-white/80"
                            : "text-muted-foreground"
                        }`}
                      >
                        NPR
                      </span>
                    )}

                    <span
                      className={`text-5xl font-semibold tracking-tight ${
                        plan.highlighted
                          ? "text-white"
                          : "text-foreground dark:text-white"
                      }`}
                    >
                      {plan.price}
                    </span>

                    {plan.price !== "Custom" && (
                      <span
                        className={`mb-1 text-sm ${
                          plan.highlighted
                            ? "text-white/70"
                            : "text-muted-foreground"
                        }`}
                      >
                        /month
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className={`inline-flex h-14 w-full items-center justify-center rounded-2xl px-6 text-sm font-medium transition-all duration-300 ${
                        plan.highlighted
                          ? "bg-white text-primary hover:scale-[1.02] hover:bg-white/90"
                          : "border border-border bg-background/70 text-foreground backdrop-blur-xl hover:border-primary/30 hover:bg-primary/5 dark:border-white/10 dark:bg-white/5 dark:text-white"
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>

                  {/* Features */}
                  <div className="mt-10 space-y-4">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <div
                          className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full ${
                            plan.highlighted
                              ? "bg-white/10 text-white"
                              : "bg-accent/10 text-accent"
                          }`}
                        >
                          <Check className="h-3.5 w-3.5" />
                        </div>

                        <p
                          className={`text-sm leading-relaxed ${
                            plan.highlighted
                              ? "text-white/90"
                              : "text-muted-foreground"
                          }`}
                        >
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground">
            All plans include secure cloud infrastructure, responsive dashboard
            access, and continuous NEPSE market updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;