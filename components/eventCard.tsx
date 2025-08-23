"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EventCard = ({ title, image, description, hashtag }) => {
  return (
    <motion.div
      className="bg-[#e6f0ff] rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      {/* Title */}
      <div className="text-center mb-6">
        <h3 className="font-bold text-[var(--color-second)] text-xl">
          {title}
        </h3>
      </div>

      {/* Image */}
      <div className="flex gap-6">
        <div className="relative w-90 h-64 flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            {description}
          </p>

          <div className="text-[var(--color-primary)] text-sm font-medium">
            {hashtag}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
