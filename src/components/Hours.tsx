import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const schedule = [
    { hours: "07:00 - 17:30" },
    { hours: "07:00 - 17:30" },
    { hours: "07:00 - 17:30" },
    { hours: "07:00 - 17:30" },
    { hours: "07:00 - 17:30" },
    { hours: "09:00 - 12:00" },
    { hours: t.hours.closed },
  ];

  const todayIndex = [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];

  // Check if currently open
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinute;
  const todaySchedule = schedule[todayIndex].hours;

  let isCurrentlyOpen = false;
  if (todaySchedule !== t.hours.closed) {
    const [start, end] = todaySchedule.split(" - ");
    const [startHour, startMin] = start.split(":").map(Number);
    const [endHour, endMin] = end.split(":").map(Number);
    const startTime = startHour * 60 + startMin;
    const endTime = endHour * 60 + endMin;
    isCurrentlyOpen = currentTime >= startTime && currentTime <= endTime;
  }

  return (
    <section id="orari" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.hours.label}
          </span>
          <h2 className="mt-2 font-serif text-3xl md:text-5xl">
            {t.hours.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-xl rounded-2xl border bg-background shadow-soft overflow-hidden"
        >
          <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg">{t.hours.header}</span>
            {isCurrentlyOpen && (
              <span className="ml-auto rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">
                Aperto ora
              </span>
            )}
          </div>
          <div className="divide-y">
            {schedule.map((item, i) => {
              const isToday = i === todayIndex;
              const isClosed = item.hours === t.hours.closed;
              return (
                <div
                  key={i}
                  className={`px-6 py-4 flex justify-between items-center ${
                    isToday ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && <CheckCircle className="h-4 w-4 text-primary" />}
                    <span className={isToday ? "font-medium text-primary" : ""}>
                      {t.hours.days[i]}
                    </span>
                    {isToday && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {t.hours.today}
                      </span>
                    )}
                  </div>
                  <span
                    className={
                      isClosed
                        ? "text-muted-foreground"
                        : isToday
                        ? "font-medium text-primary"
                        : ""
                    }
                  >
                    {item.hours}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
