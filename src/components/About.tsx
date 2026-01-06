import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle, ThumbsUp, Users } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "15+", label: t.about.stat1, icon: Award },
    { value: "500+", label: t.about.stat2, icon: CheckCircle },
    { value: "100%", label: t.about.stat3, icon: ThumbsUp },
  ];

  const featureIcons = [Users, Award, CheckCircle, ThumbsUp];

  return (
    <section id="chi-siamo" className="py-24 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.about.label}
          </span>
          <h2 className="mt-2 font-serif text-3xl md:text-5xl">
            {t.about.title1}
            <br />
            <span className="text-accent">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t.about.p1}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t.about.p2}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="rounded-xl bg-background p-4 text-center shadow-soft"
                  >
                    <Icon className="mx-auto mb-2 h-6 w-6 text-accent" />
                    <div className="font-serif text-2xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {t.about.features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex gap-4 rounded-xl bg-background p-6 shadow-soft"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-serif text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
