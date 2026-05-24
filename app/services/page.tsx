"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hero, Features, CTA } from "@/components/sections/Hero";
import Text from "@/components/ui/Text";
import Card from "@/components/ui/Card";
import { CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <>
      <Hero
        badge="Services"
        title="Comprehensive Investment Solutions"
        description="From portfolio management to advanced analytics, we provide all the tools you need for successful investing."
      />

      {/* Services Grid */}
      <section className="section-lg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Portfolio Management",
                description:
                  "Intelligent portfolio construction and rebalancing with AI-powered recommendations.",
                features: [
                  "Automated rebalancing",
                  "Risk assessment",
                  "Tax-loss harvesting",
                  "Performance tracking",
                ],
              },
              {
                title: "Market Analytics",
                description:
                  "Real-time market data with advanced analytics and predictive insights.",
                features: [
                  "Real-time quotes",
                  "Technical analysis",
                  "Sentiment analysis",
                  "Market alerts",
                ],
              },
              {
                title: "Trading Platform",
                description:
                  "Execute trades instantly with our lightning-fast platform.",
                features: [
                  "Instant execution",
                  "Multiple asset classes",
                  "Advanced orders",
                  "Commission-free trades",
                ],
              },
              {
                title: "Financial Planning",
                description: "Personalized financial planning and wealth management strategies.",
                features: [
                  "Goal planning",
                  "Retirement planning",
                  "Tax planning",
                  "Expert advisors",
                ],
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <Text variant="h3" className="text-primary mb-3">
                    {service.title}
                  </Text>
                  <Text className="text-secondary/70 mb-6">{service.description}</Text>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <Text>{feature}</Text>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Start Your Investment Journey"
        description="Unlock all our services with a free account. No credit card required."
        cta={{
          text: "Create Free Account",
          href: "/contact",
        }}
      />
    </>
  );
}