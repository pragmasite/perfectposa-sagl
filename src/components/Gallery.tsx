import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/images/img-1.png", alt: t.gallery.images.img1 },
    { src: "/images/img-2.png", alt: t.gallery.images.img2 },
    { src: "/images/img-3.png", alt: t.gallery.images.img3 },
    { src: "/images/img-4.png", alt: t.gallery.images.img4 },
    { src: "/images/img-5.png", alt: t.gallery.images.img5 },
    { src: "/images/img-6.png", alt: t.gallery.images.img6 },
    { src: "/images/img-7.png", alt: t.gallery.images.img7 },
    { src: "/images/img-8.png", alt: t.gallery.images.img8 },
    { src: "/images/img-9.png", alt: t.gallery.images.img9 },
    { src: "/images/img-10.png", alt: t.gallery.images.img10 },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galleria" className="py-24 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.gallery.label}
          </span>
          <h2 className="mt-2 font-serif text-3xl md:text-5xl">
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-medium"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-lg font-medium text-white">
                {images[currentIndex].alt}
              </p>
            </div>
          </motion.div>

          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="mt-6 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-accent"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {images.slice(0, 5).map((image, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-[4/3] overflow-hidden rounded-xl transition-all ${
                currentIndex === index
                  ? "ring-2 ring-accent ring-offset-2"
                  : "hover:opacity-80"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
