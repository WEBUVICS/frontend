"use client";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../ui/card";
import { motion } from "framer-motion";

type ShowCaseCardProps = {
  id: string;
  image?: string;
  title: string;
  lomba: string;
  tags?: string[];
};

export default function ShowCaseCards({
  id,
  image,
  title,
  lomba,
  tags = [],
}: ShowCaseCardProps) {
  return (
    <Link href={`/showcase/${id}`} className="block">
      <motion.div
        whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card className="w-full max-w-xs p-4 rounded-2xl shadow-md bg-white flex flex-col gap-3 cursor-pointer">
          {/* Thumbnail / Image */}
          <div className="w-full h-32 rounded-2xl overflow-hidden bg-gray-300 relative">
            {image && (
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover"
              />
            )}
          </div>

          {/* Title & Subtitle */}
          <div>
            <h2 className="text-base font-semibold">{title}</h2>
            <p className="italic text-gray-600 text-sm">{lomba}</p>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="text-xs text-gray-500 flex flex-wrap gap-1">
              {tags.map((tag, index) => (
                <span key={index}>
                  {tag}
                  {index < tags.length - 1 && <span className="mx-1">|</span>}
                </span>
              ))}
            </div>
          )}
        </Card>
      </motion.div>
    </Link>
  );
}
