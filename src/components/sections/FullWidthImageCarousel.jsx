import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FullWidthImageCarousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!images.length) return null;

  const nextImage = () =>
    setCurrentIndex((p) => (p === images.length - 1 ? 0 : p + 1));
  const prevImage = () =>
    setCurrentIndex((p) => (p === 0 ? images.length - 1 : p - 1));

  return (
    <div className="w-full flex flex-col items-center">

          {/* Navigation Buttons */}
        <button
  onClick={prevImage}
  className="absolute left-4 lg:left-40 top-1/2 -translate-y-1/2 text-orange-400 font-bold bg-transparent hover:bg-white/90 p-3 rounded-full shadow-lg transition-colors z-10"
>
  <ChevronLeft size={30} />
</button>

<button
  onClick={nextImage}
  className="absolute right-4 lg:right-40 top-1/2 -translate-y-1/2 text-orange-400 font-bold bg-transparent hover:bg-white/90 p-3 rounded-full shadow-lg transition-colors z-10"
>
  <ChevronRight size={30} />
</button>


      {/* Full-width carousel wrapper */}
      <div className="relative w-full max-w-screen-lg mx-auto px-4">
        <div className="relative w-full max-w-screen- mx-auto overflow-hidden rounded-xl">

          
        
          <img
  src={images[currentIndex]}
  alt={`Slide ${currentIndex + 1}`}
     className="w-full h-auto object-cover"
/>

      
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-5 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-colors ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FullWidthImageCarousel;
