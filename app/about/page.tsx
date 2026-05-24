"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hero, Features, CTA } from "@/components/sections/Hero";
import Text from "@/components/ui/Text";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import { Users, Target, Lightbulb, Award } from "lucide-react";

export default function About() {
  return (
    <>
      <Hero
        badge="About Us"
        title="Building the Future of Finance"
        subtitle="Launched in 2020 with a mission to democratize investing"
        description="We're on a mission to make professional-grade investing tools accessible to everyone. Founded by financial experts and software engineers, Uptick combines cutting-edge technology with decades of market expertise."
        image={
          <div className="space-y-6">
            <div className="bg-gradient-primary/10 rounded-lg p-8 text-center">
              <Text variant="h3" className="text-primary">
                Founded 2020
              </Text>
              <Text className="text-secondary/70 mt-2">
                From vision to platform in 12 months
              </Text>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <Text variant="h4" className="text-accent">
                  150+
                </Text>
                <Text variant="small">Team Members</Text>
              </Card>
              <Card>
                <Text variant="h4" className="text-primary">
                  50
                </Text>
                <Text variant="small">Countries</Text>
              </Card>
            </div>
          </div>
        }
      />

      {/* Mission Section */}
      <section className="section-lg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Our Mission",
                description:
                  "Democratize access to professional investment tools for everyone.",
              },
              {
                icon: <Lightbulb className="w-6 h-6" />,
                title: "Innovation",
                description:
                  "Continuously improve with the latest financial technologies.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Community",
                description:
                  "Build a supportive community of investors helping each other.",
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Excellence",
                description: "Deliver the highest quality service and support.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                  {item.icon}
                </div>
                <Text variant="h4" className="mb-2">
                  {item.title}
                </Text>
                <Text className="text-secondary/70">{item.description}</Text>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet the Leadership
            </Text>
            <Text className="text-lg text-secondary/70 max-w-2xl mx-auto">
              Built by experienced professionals from top financial institutions
            </Text>
          </motion.div>

          <Grid cols={3} gap="lg">
            {[
              {
                name: "Alex Johnson",
                role: "CEO & Co-founder",
                background: "Ex-Goldman Sachs",
              },
              {
                name: "Sarah Lee",
                role: "CTO & Co-founder",
                background: "Ex-Google, AI/ML Specialist",
              },
              {
                name: "Michael Park",
                role: "COO",
                background: "Ex-Morgan Stanley",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="w-20 h-20 bg-gradient-primary/10 rounded-full mx-auto mb-4" />
                  <Text variant="h4">{member.name}</Text>
                  <Text variant="body" className="text-primary font-semibold mb-2">
                    {member.role}
                  </Text>
                  <Text variant="small">{member.background}</Text>
                </Card>
              </motion.div>
            ))}
          </Grid>
        </div>
      </section>

      <CTA
        title="Join Our Team"
        description="We're hiring talented individuals to help us revolutionize finance."
        cta={{
          text: "View Open Positions",
          href: "#",
        }}
      />
    </>
  );
}