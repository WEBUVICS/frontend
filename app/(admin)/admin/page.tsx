"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Edit, Trash2 } from "lucide-react";

const Gallery = () => {
  const [photos] = useState([
    {
      id: 1,
      src: "https://picsum.photos/id/1043/400/400",
      alt: "Group Photo 1",
    },
    {
      id: 2,
      src: "https://picsum.photos/id/1044/400/400",
      alt: "Group Photo 2",
    },
    {
      id: 3,
      src: "https://picsum.photos/id/1045/400/400",
      alt: "Group Photo 3",
    },
    {
      id: 4,
      src: "https://picsum.photos/id/1046/400/400",
      alt: "Group Photo 4",
    },
    {
      id: 5,
      src: "https://picsum.photos/id/1047/400/400",
      alt: "Group Photo 5",
    },
    {
      id: 6,
      src: "https://picsum.photos/id/1048/400/400",
      alt: "Group Photo 6",
    },
    {
      id: 7,
      src: "https://picsum.photos/id/1049/400/400",
      alt: "Group Photo 7",
    },
    {
      id: 8,
      src: "https://picsum.photos/id/1050/400/400",
      alt: "Group Photo 8",
    },
    {
      id: 9,
      src: "https://picsum.photos/id/1051/400/400",
      alt: "Group Photo 9",
    },
    {
      id: 10,
      src: "https://picsum.photos/id/1052/400/400",
      alt: "Group Photo 10",
    },
    {
      id: 11,
      src: "https://picsum.photos/id/1053/400/400",
      alt: "Group Photo 11",
    },
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const photosPerSlide = 6; // 2 rows × 3 photos
  const totalSlides = Math.ceil(photos.length / photosPerSlide);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index) => setCurrentSlide(index);

  const handleEditPhoto = (photoId) => {
    console.log("Edit photo:", photoId);
  };

  const handleDeletePhoto = (photoId) => {
    console.log("Delete photo:", photoId);
  };

  const getCurrentSlidePhotos = () => {
    const startIndex = currentSlide * photosPerSlide;
    const endIndex = startIndex + photosPerSlide;
    return photos.slice(startIndex, endIndex);
  };

  return (
    <main>
      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-2"
              style={{ color: "var(--color-second)" }}
            >
              GALLERY
            </h2>
            <div
              className="w-16 h-1 mx-auto"
              style={{ backgroundColor: "var(--color-second)" }}
            ></div>
          </div>

          {/* Gallery Grid */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-6 justify-items-center mb-8">
              {getCurrentSlidePhotos().map((photo) => (
                <div
                  key={photo.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden w-72"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={400}
                    height={300}
                    className="w-full h-52 object-cover"
                  />
                  {/* Admin Controls bawah */}
                  <div className="flex justify-end space-x-3 py-3 pr-4">
                    <button
                      onClick={() => handleEditPhoto(photo.id)}
                      className="p-2 rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200 hover:cursor-pointer transition-colors"
                      title="Edit"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDeletePhoto(photo.id)}
                      className="p-2 rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200 hover:cursor-pointer transition-colors"
                      title="Hapus"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 text-white p-2 rounded-full shadow-lg hover:opacity-80 transition-opacity z-10 cursor-pointer"
                  style={{ backgroundColor: "var(--color-second)" }}
                  title="Sebelumnya"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 text-white p-2 rounded-full shadow-lg hover:opacity-80 transition-opacity z-10 cursor-pointer"
                  style={{ backgroundColor: "var(--color-second)" }}
                  title="Berikutnya"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Pagination Dots */}
          {totalSlides > 1 && (
            <div className="flex justify-center space-x-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-orange-400 w-8"
                      : "bg-orange-200 w-3 hover:bg-orange-300"
                  }`}
                  title={`Slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Gallery;
