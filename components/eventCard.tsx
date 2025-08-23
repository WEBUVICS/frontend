"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EventCard = ({ title, foto, deskripsi, hashtag }) => {
  return (
    <motion.div
      className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative w-80 h-64 flex-shrink-0">
        <Image src={foto} alt={title} fill className="object-cover" />
        <div className="absolute top-4 left-4">
          <span className="bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-sm font-semibold">
            EVENT
          </span>
        </div>
      </div>

      <div className="p-6 flex-1">
        <h3 className="font-bold text-gray-800 mb-3 text-xl">{title}</h3>

        <p className="text-gray-600 leading-relaxed mb-4 text-sm line-clamp-4">
          {deskripsi}
        </p>

        <div className="text-[var(--color-primary)] text-sm font-medium">
          {hashtag}
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
