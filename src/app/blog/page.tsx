"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const posts = [
  {
    title: "The Psychology of Color in Brand Design",
    excerpt:
      "How strategic color choices can influence perception, drive emotion, and create memorable brand experiences that resonate with your audience.",
    category: "Branding",
    readTime: "6 min read",
    date: "Jan 15, 2026",
    gradient: "from-rose-400 to-pink-600",
    slug: "#",
  },
  {
    title: "Why Your Website Needs a Design System",
    excerpt:
      "Design systems aren't just for big companies. Learn how a well-structured system can save time, ensure consistency, and scale with your brand.",
    category: "Design",
    readTime: "8 min read",
    date: "Jan 8, 2026",
    gradient: "from-violet-400 to-purple-600",
    slug: "#",
  },
  {
    title: "5 SEO Mistakes That Are Killing Your Traffic",
    excerpt:
      "Common technical and content SEO pitfalls we see every day, and actionable steps to fix them and recover your organic rankings.",
    category: "Marketing",
    readTime: "5 min read",
    date: "Dec 28, 2025",
    gradient: "from-emerald-400 to-teal-600",
    slug: "#",
  },
  {
    title: "Building Performant React Applications",
    excerpt:
      "Practical tips for optimizing React apps, from code splitting and lazy loading to memoization and server components.",
    category: "Development",
    readTime: "10 min read",
    date: "Dec 20, 2025",
    gradient: "from-blue-400 to-indigo-600",
    slug: "#",
  },
  {
    title: "The Future of Motion Design on the Web",
    excerpt:
      "From micro-interactions to full page transitions, explore how animation is shaping the next generation of web experiences.",
    category: "Design",
    readTime: "7 min read",
    date: "Dec 12, 2025",
    gradient: "from-amber-400 to-orange-600",
    slug: "#",
  },
  {
    title: "How to Write a Creative Brief That Works",
    excerpt:
      "A well-written creative brief is the foundation of every successful project. Here's our framework for briefs that actually drive results.",
    category: "Strategy",
    readTime: "4 min read",
    date: "Dec 5, 2025",
    gradient: "from-cyan-400 to-blue-600",
    slug: "#",
  },
];

export default function BlogPage() {
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
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">Blog</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Insights &{" "}
              <span className="text-primary">ideas</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Thoughts on design, development, marketing, and building brands that
              stand out. Written by our team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <Link href="#" className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl border border-border bg-card p-6 lg:p-0 overflow-hidden">
                <div className={`aspect-[16/10] lg:aspect-auto rounded-xl lg:rounded-none bg-gradient-to-br ${posts[0].gradient}`} />
                <div className="flex flex-col justify-center lg:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {posts[0].category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" /> {posts[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {posts[0].excerpt}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Read article <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post, i) => (
              <motion.div
                key={post.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={i}
              >
                <Link href={post.slug} className="group block">
                  <div
                    className={`aspect-[16/10] rounded-2xl bg-gradient-to-br ${post.gradient} mb-4`}
                  />
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Tag className="h-3 w-3" /> {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">{post.date}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
