"use client";

import {
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

const socials = [
  {
    icon: Twitter,
    href: "#",
    label: "Twitter",
  },
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "#",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:hello@uptickinvest.com",
    label: "Email",
  },
];

const FooterSocials = () => {
  return (
    <div className="flex items-center gap-3">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent hover:text-black hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]"
          >
            <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          </a>
        );
      })}
    </div>
  );
};

export default FooterSocials;