"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, HelpCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups looking to establish their brand.",
    price: "$2,500",
    period: "per project",
    features: [
      "Logo & brand mark design",
      "Color palette & typography",
      "2 rounds of revisions",
      "Basic brand guidelines",
      "Social media templates (3)",
      "Source files delivery",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    description: "For growing brands that need a comprehensive creative partner.",
    price: "$7,500",
    period: "per project",
    features: [
      "Everything in Starter",
      "Full brand identity system",
      "Custom website design (up to 8 pages)",
      "Responsive development",
      "5 rounds of revisions",
      "Content strategy guide",
      "SEO optimization",
      "3 months of support",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Full-service creative partnership for established brands with big ambitions.",
    price: "Custom",
    period: "tailored pricing",
    features: [
      "Everything in Professional",
      "Unlimited revisions",
      "Custom web application",
      "Ongoing design retainer",
      "Marketing campaign strategy",
      "Dedicated account manager",
      "Priority support",
      "Quarterly strategy reviews",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by scope. A brand identity project typically takes 4-6 weeks, while a full website design and development project takes 8-12 weeks. We always provide a detailed timeline during our discovery phase.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes! Our Professional plan includes 3 months of support, and our Enterprise plan includes ongoing support. We also offer monthly retainer packages for continued collaboration.",
  },
  {
    question: "Can I customize a plan to fit my needs?",
    answer:
      "Absolutely. Every project is unique, and we're happy to create a custom scope that fits your specific needs and budget. Get in touch to discuss your requirements.",
  },
  {
    question: "What's your payment structure?",
    answer:
      "We typically work with a 50% deposit to kick off the project, with the remaining 50% due upon completion. For larger projects, we can arrange milestone-based payments.",
  },
  {
    question: "Do you work with clients internationally?",
    answer:
      "Yes, we work with clients worldwide. Our team is experienced in remote collaboration and we use tools that make working across time zones seamless.",
  },
];

export default function PricingPage() {
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
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">Pricing</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Transparent pricing,{" "}
              <span className="text-primary">exceptional value</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Choose the plan that fits your needs. Every project includes our
              full creative expertise and dedication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={i}
                className={`relative rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-primary bg-primary/[0.03] shadow-lg shadow-primary/10"
                    : "border-border bg-card"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      Most Popular
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-xl">{plan.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <div className="mt-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className={`flex h-11 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors ${
                      plan.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                        : "border border-border hover:bg-muted"
                    }`}
                  >
                    {plan.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">FAQ</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Common questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="rounded-xl border border-border bg-background p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">{faq.question}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
