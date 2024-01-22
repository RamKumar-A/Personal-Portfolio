import { useState } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

function Carousel({ className, images }) {
  const [curSlide, setCurSlide] = useState(0);

  const maxSlide = images.length - 1;
  const prevSlide = () => {
    const newSlide = curSlide === 0 ? maxSlide : curSlide - 1;
    setCurSlide(newSlide);
  };
  const nextSlide = () => {
    const newSlide = curSlide === maxSlide ? 0 : curSlide + 1;
    setCurSlide(newSlide);
  };

  const handleDotClick = (index) => {
    // Handle dot click, update activeIndex, etc.
    setCurSlide(index);
  };

  return (
    <div className="relative h-full w-full">
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 border border-gray-500 sm:p-0.5 sm:text-xl rounded-full -translate-y-1/2 cursor-pointer"
      >
        <HiArrowLeft className="" />
      </button>

      <div className="h-full md:h-[22rem] lg:h-full p-1 md:p-5 bg-gray-300 border border-gray-500 transition-all duration-1000  xl:w-[55rem]">
        <img
          src={images[curSlide]}
          alt={images.at(curSlide)}
          className={`${className} object-contain `}
        />
        <div className="hidden md:flex gap-2 items-center justify-center">
          {images.map((_, i) => (
            <button
              className={`cursor-pointer rounded-full bg-gray-900 ${
                curSlide === i ? 'w-3 h-3' : 'w-2 h-2'
              }`}
              onClick={() => handleDotClick(i)}
              key={i}
            ></button>
          ))}
        </div>
      </div>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 border border-gray-500 sm:p-0.5 sm:text-xl rounded-full -translate-y-1/2 cursor-pointer"
      >
        <HiArrowRight />
      </button>
    </div>
  );
}

export default Carousel;
