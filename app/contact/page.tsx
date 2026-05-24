"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Hero, CTA } from "@/components/sections/Hero";
import Text from "@/components/ui/Text";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Hero
        badge="Get in Touch"
        title="We'd Love to Hear From You"
        description="Have questions? Our team is here to help. Reach out anytime."
      />

      <section className="section-lg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email",
                content: "hello@uptick.com",
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Phone",
                content: "+1 (555) 123-4567",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Office",
                content: "San Francisco, CA",
              },
            ].map((contact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {contact.icon}
                  </div>
                  <Text variant="h4" className="mb-2">
                    {contact.title}
                  </Text>
                  <Text className="text-secondary/70">{contact.content}</Text>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Full Name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="textarea"
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button size="lg" variant="primary" type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 bg-accent/10 text-accent rounded-lg text-sm font-medium"
                  >
                    ✓ Message sent! We'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <Text variant="h3" className="text-primary mb-4">
                  Business Hours
                </Text>
                <div className="space-y-2 text-secondary/70">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
                  <p>Saturday: 10:00 AM - 4:00 PM (EST)</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              <div>
                <Text variant="h3" className="text-primary mb-4">
                  Response Time
                </Text>
                <p className="text-secondary/70">
                  We typically respond to inquiries within 24 hours. For urgent matters, please
                  call us directly.
                </p>
              </div>
              <Card glass>
                <Text variant="h4" className="mb-2">
                  Need faster assistance?
                </Text>
                <Text className="text-secondary/70 mb-4">
                  Check out our knowledge base for instant answers to common questions.
                </Text>
                <Button variant="outline" size="sm" asChild>
                  <a href="#">View Help Center</a>
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA
        title="Let's build the future together"
        description="Join our community and start your investment journey today."
        cta={{
          text: "Get Started",
          href: "/",
        }}
      />
    </>
  );
}