"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EventCard = ({ 
  image, 
  title, 
  description, 
  date, 
  hashtag, 
  layout = "horizontal" // "horizontal" atau "vertical"
}) => {
  const isHorizontal = layout === "horizontal";
  
  return (
    <motion.div
      className={`bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
        isHorizontal ? "flex" : "flex-col"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      {/* Image */}
      <div className={`relative ${
        isHorizontal 
          ? "w-80 h-64 flex-shrink-0" 
          : "w-full h-48"
      }`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        {date && (
          <div className="absolute top-4 left-4">
            <span className="bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-sm font-semibold">
              EVENT
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-6 ${isHorizontal ? "flex-1" : ""}`}>
        {date && (
          <div className="text-[var(--color-primary)] text-sm font-semibold mb-2 uppercase tracking-wider">
            {date}
          </div>
        )}
        
        <h3 className={`font-bold text-gray-800 mb-3 ${
          isHorizontal ? "text-xl" : "text-lg"
        }`}>
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-4 text-sm line-clamp-4">
          {description}
        </p>
        
        {hashtag && (
          <div className="text-[var(--color-primary)] text-sm font-medium">
            {hashtag}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default EventCard;