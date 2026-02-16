"use client";

import { motion } from "framer-motion";
import { Heart, Target, Zap, Users, Award, Coffee } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const values = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "Every project gets our full creative energy. We genuinely care about making your brand shine.",
  },
  {
    icon: Target,
    title: "Results-Focused",
    description: "Beautiful design is just the beginning. We measure success by the impact we create for you.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We stay ahead of trends and push creative boundaries to keep your brand at the forefront.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Your vision drives everything. We work closely with you at every step of the journey.",
  },
];

const team = [
  { name: "Alex Morgan", role: "Creative Director", gradient: "from-rose-400 to-pink-600" },
  { name: "Jordan Lee", role: "Lead Designer", gradient: "from-violet-400 to-purple-600" },
  { name: "Sam Patel", role: "Head of Development", gradient: "from-blue-400 to-indigo-600" },
  { name: "Taylor Kim", role: "Strategy Lead", gradient: "from-amber-400 to-orange-600" },
];

export default function AboutPage() {
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
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">About Us</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              A team obsessed with{" "}
              <span className="text-primary">great design</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Founded in 2018, Prism Studio has grown from a small design shop into a
              full-service creative agency. We believe that extraordinary design has
              the power to transform businesses and connect people.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our story</h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  What started as a passion project between two designers in a tiny
                  studio apartment has blossomed into one of the most sought-after
                  creative agencies in the industry.
                </p>
                <p>
                  We&apos;ve had the privilege of working with startups, Fortune 500
                  companies, and everything in between. Each project has taught us
                  something new and fueled our desire to push boundaries further.
                </p>
                <p>
                  Today, our diverse team of designers, developers, and strategists
                  brings a unique blend of creativity and technical expertise to
                  every engagement.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={1}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/20 to-primary/40" />
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-amber-200 to-orange-300" />
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-violet-200 to-purple-300" />
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-emerald-200 to-teal-300" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Award, value: "7+", label: "Years in Business" },
              { icon: Users, value: "50+", label: "Clients Worldwide" },
              { icon: Coffee, value: "10K+", label: "Cups of Coffee" },
              { icon: Zap, value: "150+", label: "Projects Completed" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                <div className="text-3xl lg:text-4xl font-bold">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">Our Values</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              What drives us every day
            </h2>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={i + 1}
                className="rounded-2xl border border-border bg-background p-6 text-center"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">Our Team</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Meet the creative minds
            </h2>
            <p className="mt-4 text-muted-foreground">
              A talented group of designers, developers, and strategists passionate
              about craft.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={i + 1}
                className="group text-center"
              >
                <div
                  className={`aspect-[3/4] rounded-2xl bg-gradient-to-br ${member.gradient} mb-4 overflow-hidden`}
                >
                  <div className="w-full h-full flex items-end justify-center pb-8">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xl font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
