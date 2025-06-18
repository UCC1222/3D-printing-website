import { useState, useRef } from 'react';

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const dragStartX = useRef<number | null>(null);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  // 拖动切换图片
  const handleDragStart = (e: React.DragEvent) => {
    dragStartX.current = e.clientX;
  };
  const handleDragEnd = (e: React.DragEvent) => {
    if (dragStartX.current !== null) {
      const diff = e.clientX - dragStartX.current;
      if (diff > 40) prev();
      else if (diff < -40) next();
    }
    dragStartX.current = null;
  };

  return (
    <div className="relative w-64 h-48 select-none">
      <img
        src={images[current]}
        alt={`carousel-${current}`}
        className="w-full h-full object-cover rounded shadow-lg"
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      />
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-orange-500 transition-colors"
        onClick={prev}
        aria-label="Previous"
      >
        &#8592;
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-orange-500 transition-colors"
        onClick={next}
        aria-label="Next"
      >
        &#8594;
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`block w-2 h-2 rounded-full ${idx === current ? 'bg-orange-500' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
} 