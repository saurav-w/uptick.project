"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Text from "../ui/Text";
import Badge from "../ui/Badge";

export const Hero = ({
  badge,
  title,
  subtitle,
  description,
  cta,
  image,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  description: string;
  cta?: { text: string; href: string; secondary?: string; secondaryHref?: string };
  image?: React.ReactNode;
}) => {
  return (
    <section className="section-lg relative overflow-hidden pt-32">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {badge && <Badge>{badge}</Badge>}
            <div>
              <Text variant="h1" className="text-primary mb-4">
                {title}
              </Text>
              {subtitle && (
                <Text variant="h4" className="text-secondary/70 font-normal">
                  {subtitle}
                </Text>
              )}
            </div>
            <Text className="text-lg text-secondary/70 leading-relaxed max-w-lg">
              {description}
            </Text>
            {cta && (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild>
                  <a href={cta.href} className="inline-flex items-center gap-2">
                    {cta.text}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                {cta.secondary && (
                  <Button size="lg" variant="outline" asChild>
                    <a href={cta.secondaryHref || "#"}>{cta.secondary}</a>
                  </Button>
                )}
              </div>
            )}
          </motion.div>

          {/* Image */}
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-primary/5 rounded-2xl blur-3xl" />
              <div className="relative bg-white dark:bg-secondary rounded-2xl p-8 sm:p-12 shadow-lg">
                {image}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export const Features = ({
  title,
  subtitle,
  features,
}: {
  title: string;
  subtitle?: string;
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
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
            {title}
          </Text>
          {subtitle && (
            <Text className="text-lg text-secondary/70 max-w-2xl mx-auto">
              {subtitle}
            </Text>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card hover:shadow-lg hover:border-primary/20"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <Text variant="h4" className="mb-3">
                {feature.title}
              </Text>
              <Text className="text-secondary/70">{feature.description}</Text>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CTA = ({
  title,
  description,
  cta,
}: {
  title: string;
  description: string;
  cta: { text: string; href: string };
}) => {
  return (
    <section className="section-lg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-primary rounded-2xl p-12 sm:p-16 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <Text variant="h2" className="text-white mb-4">
              {title}
            </Text>
            <Text className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {description}
            </Text>
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <a href={cta.href}>{cta.text}</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
