"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

export default function BlogPost() {
  return (
    <>
      <article className="pt-32 pb-16">
        <div className="container-custom max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog">
              <Button variant="ghost" size="sm" asChild>
                <a className="inline-flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Blog</span>
                </a>
              </Button>
            </Link>

            <div className="mt-8">
              <Badge variant="primary" size="md">
                Investment Strategy
              </Badge>
              <Text variant="h1" className="text-primary mt-4 mb-4">
                Getting Started: A Beginner's Guide to Investing
              </Text>
              <div className="flex flex-wrap items-center gap-6 text-secondary/70">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>May 20, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Sarah Chen</span>
                </div>
                <span>5 min read</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="w-full h-96 bg-gradient-primary/10 rounded-lg mt-8 mb-12" />

            {/* Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <Text className="text-lg leading-relaxed mb-8">
                Starting your investment journey can feel overwhelming, but with the right knowledge
                and tools, you can build wealth and achieve your financial goals. In this comprehensive
                guide, we'll walk you through everything you need to know as a beginner investor.
              </Text>

              <Text variant="h2" className="text-primary mt-12 mb-6">
                Why Start Investing?
              </Text>
              <Text className="text-lg leading-relaxed mb-8">
                Investing is one of the most powerful ways to build long-term wealth. Whether you're
                saving for retirement, a down payment on a home, or financial independence, investing
                can help you reach your goals faster than simply saving money.
              </Text>

              <Text variant="h2" className="text-primary mt-12 mb-6">
                Key Principles for Beginners
              </Text>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Start Early",
                    description:
                      "The power of compound interest means that even small investments made early can grow significantly over time.",
                  },
                  {
                    title: "Diversify Your Portfolio",
                    description:
                      "Don't put all your eggs in one basket. Spread your investments across different asset classes and sectors.",
                  },
                  {
                    title: "Invest for the Long Term",
                    description:
                      "Successful investing requires patience. Focus on long-term growth rather than short-term gains.",
                  },
                  {
                    title: "Keep Costs Low",
                    description:
                      "High fees can significantly impact your returns. Choose low-cost investments and minimize trading.",
                  },
                ].map((principle, i) => (
                  <Card key={i}>
                    <Text variant="h4" className="text-primary mb-2">
                      {principle.title}
                    </Text>
                    <Text className="text-secondary/70">{principle.description}</Text>
                  </Card>
                ))}
              </div>

              <Text variant="h2" className="text-primary mt-12 mb-6">
                Getting Started with Uptick
              </Text>
              <Text className="text-lg leading-relaxed mb-8">
                With Uptick, starting your investment journey has never been easier. Our platform
                provides all the tools and resources you need to invest confidently.
              </Text>

              <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-border">
                <Button size="lg" variant="primary" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#" className="inline-flex items-center space-x-2">
                    <Share2 className="w-4 h-4" />
                    <span>Share Article</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-20 pt-12 border-t border-border">
              <Text variant="h3" className="text-primary mb-8">
                Related Articles
              </Text>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Portfolio Diversification",
                    slug: "portfolio-diversification",
                  },
                  {
                    title: "Long-Term Investing",
                    slug: "long-term-investing",
                  },
                ].map((post, i) => (
                  <Link key={i} href={`/blog/${post.slug}`}>
                    <Card className="hover:border-primary/30 group cursor-pointer">
                      <Text variant="h4" className="group-hover:text-primary transition-colors">
                        {post.title}
                      </Text>
                      <div className="mt-4 flex items-center text-primary group-hover:translate-x-1 transition-transform">
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
}