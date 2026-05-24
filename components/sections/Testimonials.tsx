"use client";

import React from "react";
import { motion } from "framer-motion";
import Text from "../ui/Text";
import Card from "../ui/Card";

export const Testimonials = ({
  testimonials,
}: {
  testimonials: Array<{
    quote: string;
    author: string;
    role: string;
    image?: string;
  }>;
}) => {
  return (
    <section className="section-lg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Text variant="h2" className="text-primary mb-4">
            Loved by investors
          </Text>
          <Text className="text-lg text-secondary/70 max-w-2xl mx-auto">
            Join thousands of successful investors using our platform
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card glass>
                <div className="flex items-start space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-accent fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <Text className="mb-6 leading-relaxed">"{testimonial.quote}"</Text>
                <div className="flex items-center space-x-3">
                  {testimonial.image && (
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                  <div>
                    <Text variant="h4" className="font-semibold">
                      {testimonial.author}
                    </Text>
                    <Text variant="small">{testimonial.role}</Text>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
