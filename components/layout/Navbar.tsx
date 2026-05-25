"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-border/40 bg-background/70 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center">
            <Image
              src={
                resolvedTheme === "dark"
                  ? "/logos/horizontal-logo-in-white.svg"
                  : "/logos/horizontal-logo-without-gradient.svg"
              }
              alt="Uptick Invest"
              width={180}
              height={40}
              priority
              className="h-auto w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative text-sm font-medium tracking-wide text-foreground/70 transition-all duration-300 hover:text-foreground dark:text-white/70 dark:hover:text-white"
              >
                {link.label}

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-background/70 backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:bg-accent/5 dark:border-white/10 dark:bg-white/5"
              aria-label="Toggle Theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5 text-white" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </button>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 lg:flex">
              <button className="h-11 rounded-2xl border border-border bg-background/60 px-5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/40 hover:bg-accent/5 dark:border-white/10 dark:bg-white/5 dark:text-white">
                Sign In
              </button>

              <button className="h-11 rounded-2xl bg-primary px-5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(0,75,68,0.25)]">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="relative z-50 flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-background/70 backdrop-blur-xl transition-all duration-300 hover:border-accent/40 dark:border-white/10 dark:bg-white/5 lg:hidden"
              aria-label="Toggle Menu"
            >
              {mobileMenu ? (
                <X className="h-5 w-5 text-foreground dark:text-white" />
              ) : (
                <Menu className="h-5 w-5 text-foreground dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl dark:bg-[#091210]/95 lg:hidden"
          >
            <div className="flex h-full flex-col px-6 pb-10 pt-28">
              {/* Links */}
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenu(false)}
                      className="text-3xl font-semibold tracking-tight text-foreground transition-colors hover:text-accent dark:text-white"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="mt-auto space-y-4">
                <button className="h-12 w-full rounded-2xl border border-border bg-background/60 text-sm font-medium text-foreground transition-all dark:border-white/10 dark:bg-white/5 dark:text-white">
                  Sign In
                </button>

                <button className="h-12 w-full rounded-2xl bg-primary text-sm font-medium text-white shadow-[0_0_30px_rgba(0,75,68,0.25)] transition-all hover:bg-primary/90">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;