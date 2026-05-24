"use client";

import React from "react";
import { Pricing } from "@/components/sections/Pricing";
import { Hero, CTA } from "@/components/sections/Hero";
import { FAQ } from "@/components/sections/FAQ";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: 0,
      description: "Perfect for beginners",
      features: [
        "Portfolio tracking",
        "Basic analytics",
        "Mobile app access",
        "Email support",
        "Up to 5 watchlists",
        "Monthly market reports",
      ],
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: 29,
      description: "For active traders",
      features: [
        "Everything in Starter",
        "Advanced analytics",
        "Priority support",
        "Custom alerts",
        "API access",
        "Unlimited watchlists",
        "Daily market insights",
        "Tax reporting tools",
      ],
      cta: "Try Free for 7 Days",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For institutions",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced compliance",
        "White-label options",
        "Priority API access",
        "Custom analytics",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
    },
  ];

  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can change your plan anytime. Upgrades take effect immediately, and downgrades take effect at the end of your billing cycle.",
    },
    {
      question: "Is there a long-term commitment?",
      answer:
        "No, all our plans are month-to-month. You can cancel anytime without penalty.",
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer:
        "Yes, we offer 20% off for annual billing. Contact our sales team for more details.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, bank transfers, and digital wallets.",
    },
    {
      question: "Do you refund if I'm not satisfied?",
      answer:
        "Yes, we offer a 30-day money-back guarantee if you're not satisfied.",
    },
  ];

  return (
    <>
      <Hero
        badge="Pricing"
        title="Simple, Transparent Pricing"
        description="Choose the perfect plan for your investment journey. No hidden fees."
      />

      <Pricing plans={plans} />

      <FAQ faqs={faqs} />

      <CTA
        title="Ready to get started?"
        description="Join thousands of investors who are already using Uptick to grow their wealth."
        cta={{
          text: "Start Free Trial",
          href: "/contact",
        }}
      />
    </>
  );
}