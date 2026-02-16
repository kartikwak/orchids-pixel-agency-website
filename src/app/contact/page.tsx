"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@prismstudio.co",
    href: "mailto:hello@prismstudio.co",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 234-5678",
    href: "tel:+15552345678",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
];

export default function ContactPage() {
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
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">Contact</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Let&apos;s start{" "}
              <span className="text-primary">something great</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Have a project in mind? We&apos;d love to hear about it. Fill out the
              form below and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="lg:col-span-3"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option>Brand Identity</option>
                    <option>Web Design</option>
                    <option>Web Development</option>
                    <option>Digital Marketing</option>
                    <option>Social Media</option>
                    <option>Content Creation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option>Under $2,500</option>
                    <option>$2,500 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="lg:col-span-2"
            >
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">{info.title}</div>
                      <div className="font-semibold">{info.value}</div>
                    </div>
                  </a>
                ))}

                <div className="rounded-xl border border-border bg-card p-6 mt-8">
                  <h3 className="font-semibold mb-2">Office Hours</h3>
                  <div className="space-y-1.5 text-sm text-muted-foreground">
                    <p>Monday - Friday: 9am - 6pm PST</p>
                    <p>Saturday: 10am - 2pm PST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold mb-2">Follow Us</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Twitter", "LinkedIn", "Instagram", "Dribbble"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-muted text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                      >
                        {social} <ArrowUpRight className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
