"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Text from "../ui/Text";
import Badge from "../ui/Badge";

export const Pricing = ({
  plans,
}: {
  plans: Array<{
    name: string;
    price: number | string;
    description: string;
    features: string[];
    cta: string;
    highlighted?: boolean;
  }>;
}) => {
  return (
    <section className="section-lg bg-muted dark:bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Text variant="h2" className="text-primary mb-4">
            Simple, transparent pricing
          </Text>
          <Text className="text-lg text-secondary/70 max-w-2xl mx-auto">
            Choose the perfect plan for your investment journey
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 sm:p-10 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-primary text-white shadow-lg scale-105"
                  : "card hover:shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <Badge variant="primary" className="mb-4 bg-white/20 text-white border-white/30">
                  Most Popular
                </Badge>
              )}
              <Text variant="h3" className={plan.highlighted ? "text-white" : ""}>
                {plan.name}
              </Text>
              <Text className={`text-sm mt-2 ${plan.highlighted ? "text-white/80" : "text-secondary/70"}`}>
                {plan.description}
              </Text>
              <div className="my-8">
                <Text
                  className={`text-4xl font-bold ${
                    plan.highlighted ? "text-white" : "text-primary"
                  }`}
                >
                  ${plan.price}
                  <span className={`text-sm font-normal ${plan.highlighted ? "text-white/70" : "text-secondary/70"}`}>
                    /month
                  </span>
                </Text>
              </div>
              <Button
                size="lg"
                variant={plan.highlighted ? "secondary" : "outline"}
                asChild
                className="w-full mb-8"
              >
                <a href="/contact">{plan.cta}</a>
              </Button>
              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <svg
                      className={`w-5 h-5 ${
                        plan.highlighted ? "text-white" : "text-accent"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <Text
                      variant="body"
                      className={plan.highlighted ? "text-white/90" : ""}
                    >
                      {feature}
                    </Text>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
