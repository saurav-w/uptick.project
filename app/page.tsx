"use client";

import React from "react";
import { Hero, Features, CTA } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import {
  TrendingUp,
  Lock,
  BarChart3,
  Zap,
  Users,
  Shield,
  ArrowUpRight,
  DollarSign,
} from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import Card from "@/components/ui/Card";

export default function Home() {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Track your portfolio performance with advanced analytics and insights.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Bank-grade Security",
      description: "Your investments are protected with military-grade encryption.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Portfolio Management",
      description: "Diversify and manage your investments with intelligent tools.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Execution",
      description: "Execute trades instantly with our lightning-fast platform.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community",
      description: "Join thousands of investors and share strategies.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance",
      description: "100% compliant with all financial regulations.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Uptick has completely transformed how I manage my investments. The interface is intuitive and the insights are invaluable.",
      author: "Sarah Chen",
      role: "Portfolio Manager",
    },
    {
      quote:
        "Best fintech platform I've used. The customer support is exceptional and the fees are transparent.",
      author: "Michael Rodriguez",
      role: "Active Investor",
    },
    {
      quote:
        "I've been using Uptick for 2 years now. The growth tools and analytics keep me ahead of the market.",
      author: "Emma Thompson",
      role: "Wealth Advisor",
    },
  ];

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
      ],
      cta: "Contact Sales",
    },
  ];

  const faqs = [
    {
      question: "How do I get started with Uptick?",
      answer:
        "Simply create an account, verify your identity, and link your bank account. You'll be ready to start investing in minutes. Our onboarding process is designed to be quick and secure.",
    },
    {
      question: "What are the fees?",
      answer:
        "We offer transparent, competitive pricing. Our Professional plan starts at $29/month. The Starter plan is completely free. Enterprise plans are customized based on your needs.",
    },
    {
      question: "Is my money safe?",
      answer:
        "Absolutely. We use bank-grade encryption, maintain separate client accounts, and are fully insured. Your investments are protected by multiple layers of security.",
    },
    {
      question: "Can I use Uptick on mobile?",
      answer:
        "Yes! Our native iOS and Android apps offer full platform functionality. Download them from the App Store or Google Play today.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes, we provide 24/7 customer support via email, chat, and phone. Professional and Enterprise customers get priority support.",
    },
    {
      question: "Can I export my data?",
      answer:
        "Yes, you can export your data in multiple formats including CSV and PDF. Our API also allows programmatic access to your data.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        badge="Welcome to the future of investing"
        title="Invest Smarter, Grow Faster"
        description="Experience premium fintech with advanced analytics, real-time trading, and personalized insights. Join thousands of successful investors on Uptick."
        cta={{
          text: "Start Investing Today",
          href: "/contact",
          secondary: "Watch Demo",
          secondaryHref: "#",
        }}
        image={
          <div className="space-y-4">
            <div className="h-64 bg-gradient-primary/10 rounded-lg flex items-end justify-around p-4">
              {[40, 65, 50, 80, 60].map((height, i) => (
                <div
                  key={i}
                  className="w-8 bg-gradient-primary rounded-t-lg transition-all hover:h-full"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <Text variant="small" className="text-secondary/50">
                  ROI
                </Text>
                <Text variant="h4" className="text-accent">
                  +24.5%
                </Text>
              </div>
              <div>
                <Text variant="small" className="text-secondary/50">
                  Assets
                </Text>
                <Text variant="h4" className="text-primary">
                  $2.4M
                </Text>
              </div>
              <div>
                <Text variant="small" className="text-secondary/50">
                  Holdings
                </Text>
                <Text variant="h4" className="text-primary">
                  24
                </Text>
              </div>
            </div>
          </div>
        }
      />

      {/* Features Section */}
      <Features
        title="Powerful Features"
        subtitle="Everything you need to make smart investment decisions"
        features={features}
      />

      {/* Stats Section */}
      <section className="section-lg bg-foreground text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Active Investors" },
              { number: "$2.4B", label: "Assets Managed" },
              { number: "24/7", label: "Support" },
              { number: "99.9%", label: "Uptime" },
            ].map((stat, i) => (
              <div key={i}>
                <Text variant="h2" className="text-accent mb-2">
                  {stat.number}
                </Text>
                <Text className="text-white/60">{stat.label}</Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />

      {/* Pricing */}
      <Pricing plans={plans} />

      {/* Newsletter Section */}
      <section className="section-lg bg-muted dark:bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <Text variant="h2" className="text-primary mb-4">
              Stay updated
            </Text>
            <Text className="text-lg text-secondary/70 mb-8">
              Get the latest market insights and investment tips delivered to your inbox.
            </Text>
            <form className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                required
              />
              <Button size="lg" variant="primary" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={faqs} />

      {/* Final CTA */}
      <CTA
        title="Ready to transform your investments?"
        description="Join thousands of successful investors who are already using Uptick to grow their wealth."
        cta={{
          text: "Get Started Free",
          href: "/contact",
        }}
      />
    </>
  );
}
