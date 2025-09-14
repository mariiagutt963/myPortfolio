import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Image Display */}
      <div className="relative overflow-hidden rounded-lg flex justify-center">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="max-h-[850px] object-contain rounded-lg"
        />

        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;