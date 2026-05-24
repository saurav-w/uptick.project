"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import Text from "@/components/ui/Text";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      slug: "intro-to-investing",
      title: "Getting Started: A Beginner's Guide to Investing",
      excerpt:
        "Learn the basics of investing and how to build a solid foundation for your financial future.",
      date: "May 20, 2024",
      author: "Sarah Chen",
      category: "Education",
      readTime: "5 min read",
    },
    {
      slug: "portfolio-diversification",
      title: "The Art of Portfolio Diversification",
      excerpt:
        "Discover why diversification is crucial and how to build a well-balanced investment portfolio.",
      date: "May 18, 2024",
      author: "Michael Rodriguez",
      category: "Strategy",
      readTime: "8 min read",
    },
    {
      slug: "market-trends-2024",
      title: "Top Market Trends to Watch in 2024",
      excerpt:
        "Explore the key market trends and opportunities that could shape your investment strategy.",
      date: "May 15, 2024",
      author: "Emma Thompson",
      category: "Market Analysis",
      readTime: "10 min read",
    },
    {
      slug: "long-term-investing",
      title: "Why Long-Term Investing Beats Short-Term Trading",
      excerpt:
        "Understand the power of long-term investing and how patience can lead to wealth accumulation.",
      date: "May 12, 2024",
      author: "Alex Johnson",
      category: "Investment",
      readTime: "7 min read",
    },
    {
      slug: "tax-efficient-investing",
      title: "Tax-Efficient Investing Strategies",
      excerpt:
        "Learn how to minimize taxes and keep more of your investment gains.",
      date: "May 10, 2024",
      author: "Sarah Chen",
      category: "Taxes",
      readTime: "6 min read",
    },
    {
      slug: "retirement-planning",
      title: "Planning for Retirement: Never Too Early to Start",
      excerpt:
        "Discover retirement planning strategies and how to ensure financial security in your golden years.",
      date: "May 8, 2024",
      author: "Michael Rodriguez",
      category: "Planning",
      readTime: "9 min read",
    },
  ];

  return (
    <>
      <Hero
        badge="Blog"
        title="Investment Insights & Tips"
        description="Stay informed with the latest market trends, investment strategies, and financial tips from our experts."
      />

      <section className="section-lg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:border-primary/30 group cursor-pointer">
                    <div className="mb-4">
                      <Badge variant="primary" size="sm">
                        {post.category}
                      </Badge>
                    </div>
                    <Text variant="h3" className="mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </Text>
                    <Text className="text-secondary/70 mb-6">{post.excerpt}</Text>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="space-y-1 text-xs text-secondary/50">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-primary group-hover:translate-x-1 transition-transform">
                        <span className="text-xs font-medium">{post.readTime}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}