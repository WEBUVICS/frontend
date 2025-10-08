"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface EventCardProps {
  title: string;
  image: string;
  description: string;
  hashtag: string;
}

const EventCard = ({ title, image, description, hashtag }: EventCardProps) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView && !hasAnimated) setHasAnimated(true);
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className="bg-[#e6f0ff] rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 p-4 sm:p-6 font-sans"
      initial={{ opacity: 0, y: 50 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ y: -5 }}
    >
      {/* Title */}
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="font-bold text-[var(--color-second)] text-lg sm:text-xl font-head">
          {title}
        </h3>
      </div>

      {/* Image */}
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
        <div className="relative w-full h-48 sm:h-56 md:w-100 md:h-64 flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <p className="text-gray-600 leading-relaxed mb-4 text-xs sm:text-sm font-sans">
            {description}
          </p>

          <div className="text-[var(--color-primary)] text-xs sm:text-sm font-medium font-mono">
            {hashtag}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
