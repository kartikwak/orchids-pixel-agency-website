"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Palette,
  Globe,
  TrendingUp,
  Code2,
  Star,
  ArrowUpRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Strategic brand design that tells your story and captivates your audience.",
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "Beautiful, conversion-focused websites that leave lasting impressions.",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Clean, scalable code that brings designs to life with cutting-edge tech.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven campaigns that amplify your reach and drive real results.",
  },
];

const projects = [
  {
    title: "Solaris Energy",
    category: "Branding & Web",
    image: "from-emerald-400 to-teal-600",
  },
  {
    title: "Nexus Finance",
    category: "UI/UX Design",
    image: "from-violet-400 to-purple-600",
  },
  {
    title: "Bloom Wellness",
    category: "Full Rebrand",
    image: "from-rose-400 to-pink-600",
  },
];

const testimonials = [
  {
    quote: "Prism Studio transformed our brand from forgettable to unforgettable. The results exceeded every expectation.",
    author: "Sarah Chen",
    role: "CEO, Solaris Energy",
    rating: 5,
  },
  {
    quote: "Working with them felt like a true partnership. They understood our vision and amplified it beautifully.",
    author: "Marcus Rivera",
    role: "Founder, Nexus Finance",
    rating: 5,
  },
  {
    quote: "Our conversion rate doubled within three months of launching our new site. Incredible work.",
    author: "Emily Dawson",
    role: "CMO, Bloom Wellness",
    rating: 5,
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "12", label: "Industry Awards" },
  { value: "98%", label: "Client Retention" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-8"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Creative Agency of the Year 2025
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
            >
              We craft brands that{" "}
              <span className="text-primary">move</span> people
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Prism Studio is a full-service creative agency specializing in branding,
              web design, and digital marketing. We turn bold ideas into
              extraordinary experiences.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-7 text-sm font-semibold hover:bg-muted transition-colors"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={5}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-10"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">What We Do</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Services built for ambitious brands
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From strategy to execution, we deliver end-to-end creative solutions
              that drive growth and make your brand impossible to ignore.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={i + 1}
                className="group relative rounded-2xl border border-border bg-background p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          >
            <div>
              <p className="text-sm font-semibold text-primary tracking-wide uppercase">Portfolio</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
                Featured projects
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View all work <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={i + 1}
                className="group cursor-pointer"
              >
                <div
                  className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.image} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <ArrowUpRight className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">Testimonials</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Loved by forward-thinking brands
            </h2>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={i + 1}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-xs font-bold text-primary">
                    {t.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.author}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="relative rounded-3xl bg-primary overflow-hidden px-8 py-16 sm:px-16 sm:py-24 text-center"
          >
            <div className="absolute inset-0 -z-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight">
                Ready to stand out?
              </h2>
              <p className="mt-4 text-primary-foreground/80 text-lg max-w-xl mx-auto">
                Let&apos;s bring your vision to life. Get in touch and we&apos;ll
                start crafting something extraordinary.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-primary hover:bg-white/90 transition-colors"
                >
                  Let&apos;s Talk <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-7 text-sm font-semibold text-primary-foreground hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
