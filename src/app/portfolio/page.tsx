"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const categories = ["All", "Branding", "Web Design", "Development", "Marketing"];

const projects = [
  {
    title: "Solaris Energy",
    category: "Branding",
    description: "Complete rebrand for a renewable energy startup, including logo, guidelines, and collateral.",
    gradient: "from-emerald-400 to-teal-600",
    tags: ["Branding", "Strategy"],
  },
  {
    title: "Nexus Finance",
    category: "Web Design",
    description: "Modern fintech dashboard design with a focus on data visualization and user experience.",
    gradient: "from-violet-400 to-purple-600",
    tags: ["Web Design", "UI/UX"],
  },
  {
    title: "Bloom Wellness",
    category: "Branding",
    description: "Full brand identity for a luxury wellness brand, from naming to packaging design.",
    gradient: "from-rose-400 to-pink-600",
    tags: ["Branding", "Packaging"],
  },
  {
    title: "Velocity Sports",
    category: "Development",
    description: "High-performance e-commerce platform built with Next.js and headless CMS.",
    gradient: "from-blue-400 to-indigo-600",
    tags: ["Development", "E-commerce"],
  },
  {
    title: "Harvest Kitchen",
    category: "Marketing",
    description: "Integrated digital marketing campaign that increased online orders by 340%.",
    gradient: "from-amber-400 to-orange-600",
    tags: ["Marketing", "Social Media"],
  },
  {
    title: "Atlas Travel",
    category: "Web Design",
    description: "Immersive travel booking experience with rich animations and intuitive UX.",
    gradient: "from-cyan-400 to-blue-600",
    tags: ["Web Design", "Development"],
  },
  {
    title: "Lumina Beauty",
    category: "Branding",
    description: "Premium beauty brand identity with sophisticated typography and elegant color palette.",
    gradient: "from-pink-400 to-rose-600",
    tags: ["Branding", "Packaging"],
  },
  {
    title: "Quantum AI",
    category: "Development",
    description: "SaaS platform with complex data dashboards and real-time analytics features.",
    gradient: "from-indigo-400 to-violet-600",
    tags: ["Development", "UI/UX"],
  },
  {
    title: "Green Earth Co",
    category: "Marketing",
    description: "Sustainability-focused content strategy that grew organic traffic by 500%.",
    gradient: "from-lime-400 to-green-600",
    tags: ["Marketing", "Content"],
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">Portfolio</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Work we&apos;re{" "}
              <span className="text-primary">proud of</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A curated selection of our best projects across branding, web design,
              development, and digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filter Tabs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="flex flex-wrap gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={i}
                  className="group cursor-pointer"
                >
                  <div
                    className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <ArrowUpRight className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
