"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Palette,
  Globe,
  Code2,
  TrendingUp,
  Megaphone,
  PenTool,
  Camera,
  BarChart3,
  CheckCircle2,
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
    description:
      "Complete brand systems including logo design, color palettes, typography, and comprehensive brand guidelines that ensure consistency across all touchpoints.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
    gradient: "from-rose-400 to-pink-600",
  },
  {
    icon: Globe,
    title: "Web Design",
    description:
      "Conversion-focused, responsive websites designed to captivate visitors and drive action. From landing pages to full e-commerce experiences.",
    features: ["UI/UX Design", "Responsive Design", "Prototyping", "Design Systems"],
    gradient: "from-violet-400 to-purple-600",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Clean, performant code using modern technologies. We build fast, accessible, SEO-friendly websites that scale with your business.",
    features: ["Frontend Dev", "CMS Integration", "E-commerce", "API Development"],
    gradient: "from-blue-400 to-indigo-600",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that amplify your reach, engage your audience, and convert prospects into loyal customers.",
    features: ["SEO Strategy", "Content Marketing", "Email Campaigns", "Analytics"],
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    icon: Megaphone,
    title: "Social Media",
    description:
      "Strategic social media management that builds community, drives engagement, and turns followers into brand advocates.",
    features: ["Content Strategy", "Community Management", "Paid Social", "Influencer Marketing"],
    gradient: "from-amber-400 to-orange-600",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description:
      "Compelling visual and written content that tells your brand story. From photography to copywriting, we create content that resonates.",
    features: ["Copywriting", "Photography", "Video Production", "Illustration"],
    gradient: "from-cyan-400 to-blue-600",
  },
];

const process = [
  {
    step: "01",
    icon: Camera,
    title: "Discovery",
    description: "We dive deep into your brand, audience, and goals to understand the full picture.",
  },
  {
    step: "02",
    icon: PenTool,
    title: "Strategy",
    description: "We craft a tailored plan that aligns creative vision with business objectives.",
  },
  {
    step: "03",
    icon: Palette,
    title: "Design",
    description: "Our team brings the strategy to life with bold, purposeful creative work.",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Deliver & Optimize",
    description: "We launch, measure, and iterate to ensure continued success and growth.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">Our Services</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Everything you need to{" "}
              <span className="text-primary">build & grow</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              From brand strategy to digital marketing, we offer a comprehensive
              suite of creative services designed to elevate your brand and
              accelerate your growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={i}
                className="group rounded-2xl border border-border bg-background p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div
                  className={`h-12 w-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl">{service.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">Our Process</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              How we bring ideas to life
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our proven four-step process ensures every project is delivered on time,
              on brand, and beyond expectations.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={i + 1}
                className="relative text-center"
              >
                <div className="text-5xl font-bold text-primary/10 mb-4">{step.step}</div>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Not sure which service you need?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Let&apos;s chat. We&apos;ll help you figure out the best approach for
              your goals and budget.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all"
              >
                Book a Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
