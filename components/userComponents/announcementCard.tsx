"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import {
  Lightbulb,
  Megaphone,
  CalendarDays,
  Clock,
  MapPin,
} from "lucide-react";

interface AnnouncementCardProps {
  mainTitle: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
}

const AnnouncementCard = ({
  mainTitle,
  title,
  description,
  date,
  time,
  location,
  image,
}: AnnouncementCardProps) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView && !hasAnimated) setHasAnimated(true);
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto font-sans"
      initial={{ opacity: 0, y: 50 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        {/* Text Side */}
        <div className="flex-1 w-full">
          <h3 className="font-bold text-gray-800 text-lg sm:text-xl lg:text-2xl mb-4 font-head leading-tight">
            {mainTitle}
          </h3>

          <div className="flex items-start gap-3 mb-4">
            <Lightbulb className="text-yellow-500 w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
            <span className="font-semibold text-gray-700 font-pop text-sm sm:text-base lg:text-lg">
              {title}
            </span>
          </div>

          <div className="flex items-start gap-3 mb-6">
            <Megaphone className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm lg:text-base font-sans">
              {description}
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CalendarDays className="text-red-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span className="font-medium text-gray-700 font-mono text-xs sm:text-sm lg:text-base block">
                <span className="font-semibold">Tanggal:</span> {date}
              </span>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span className="font-medium text-gray-700 font-mono text-xs sm:text-sm lg:text-base block">
                <span className="font-semibold">Waktu:</span> {time}
              </span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="text-green-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <span className="font-medium text-gray-700 font-mono text-xs sm:text-sm lg:text-base block">
                <span className="font-semibold">Lokasi:</span> {location}
              </span>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative w-full h-40 sm:h-48 md:h-52 lg:w-80 lg:h-52 xl:w-96 xl:h-60 2xl:w-[28rem] 2xl:h-64 flex-shrink-0 order-first lg:order-last self-center">
          <Image
            src={image || "/api/placeholder/400/320"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="object-cover rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AnnouncementCard;
