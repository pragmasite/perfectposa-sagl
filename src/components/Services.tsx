import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  DoorOpen,
  SquareDashedBottomCode,
  PanelTop,
  ShieldCheck,
  Grid3x3,
  Sun,
  Warehouse,
  Lock,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const serviceIcons = [DoorOpen, SquareDashedBottomCode, PanelTop, Grid3x3, Sun, PanelTop, Warehouse, Lock];

  return (
    <section id="servizi" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.services.label}
          </span>
          <h2 className="mt-2 font-serif text-3xl md:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-soft transition-all hover:shadow-medium hover:-translate-y-1"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
