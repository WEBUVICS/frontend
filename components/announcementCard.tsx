"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AnnouncementCard = ({
  mainTitle,
  title,
  description,
  date,
  time,
  location,
  image,
}) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto font-sans"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        <div className="flex-1 w-full">
          {/* Main Title */}
          <h3 className="font-bold text-gray-800 text-lg sm:text-xl lg:text-2xl mb-4 font-head leading-tight">
            {mainTitle}
          </h3>

          {/* Title */}
          <div className="flex items-start gap-3 mb-4">
            <span className="text-yellow-500 text-lg sm:text-xl mt-1 flex-shrink-0">
              💡
            </span>
            <span className="font-semibold text-gray-700 font-pop text-sm sm:text-base lg:text-lg">
              {title}
            </span>
          </div>

          {/* Description */}
          <div className="flex items-start gap-3 mb-6">
            <span className="text-blue-500 text-lg sm:text-xl mt-1 flex-shrink-0">
              📢
            </span>
            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm lg:text-base font-sans">
              {description}
            </p>
          </div>

          <div className="space-y-3">
            {/* Date */}
            <div className="flex items-start gap-3">
              <span className="text-red-500 text-lg sm:text-xl flex-shrink-0">
                📅
              </span>
              <div className="min-w-0 flex-1">
                <span className="font-medium text-gray-700 font-mono text-xs sm:text-sm lg:text-base block break-words">
                  <span className="font-semibold">Tanggal:</span> {date}
                </span>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-start gap-3">
              <span className="text-blue-500 text-lg sm:text-xl flex-shrink-0">
                🕙
              </span>
              <div className="min-w-0 flex-1">
                <span className="font-medium text-gray-700 font-mono text-xs sm:text-sm lg:text-base block break-words">
                  <span className="font-semibold">Waktu:</span> {time}
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-lg sm:text-xl flex-shrink-0">
                📍
              </span>
              <div className="min-w-0 flex-1">
                <span className="font-medium text-gray-700 font-mono text-xs sm:text-sm lg:text-base block break-words">
                  <span className="font-semibold">Lokasi:</span> {location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
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
