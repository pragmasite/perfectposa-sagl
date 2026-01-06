import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 78 835 84 09",
      href: "tel:+41788358409",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "perfectposa@gmail.com",
      href: "mailto:perfectposa@gmail.com",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Viale C. Olgiati 14, 6512 Giubiasco",
      href: "https://maps.google.com/?q=Viale+C.+Olgiati+14,+6512+Giubiasco",
    },
  ];

  return (
    <section id="contatto" className="py-24 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.contact.label}
          </span>
          <h2 className="mt-2 font-serif text-3xl md:text-5xl">
            {t.contact.title1}
            <br />
            <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.icon === MapPin ? "_blank" : undefined}
                    rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex gap-4 rounded-xl bg-background p-6 shadow-soft hover:shadow-medium transition-all group"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">
                        {info.label}
                      </div>
                      <div className="font-medium text-foreground">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="rounded-xl bg-primary/5 p-6 border border-primary/10"
              >
                <p className="text-muted-foreground mb-4">{t.contact.cta}</p>
                <Button asChild size="lg" className="w-full">
                  <a href="tel:+41788358409">
                    <Phone className="mr-2 h-5 w-5" />
                    {t.contact.callNow}
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-[500px] overflow-hidden rounded-2xl shadow-medium"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2764.5834442934616!2d9.003891276539295!3d46.17234957112193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47842f9c9c9c9c9d%3A0x9c9c9c9c9c9c9c9c!2sViale%20Carlo%20Olgiati%2014%2C%206512%20Giubiasco%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Perfectposa Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
