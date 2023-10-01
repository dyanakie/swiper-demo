import { useState, useEffect, useRef } from "react";

import GameCard from "./GameCard";

const CarouselStandalone = ({ title, games, isMobile, height = 121, width = 162, pageSlides = 4 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gamesList, setGamesList] = useState(games);
  const startPosition = useRef(0);
  const isDragging = useRef(false);
  const slidesPerPage = isMobile ? 1 : pageSlides;

  useEffect(() => {
    if (games.length < 10) {
      let newGamesList = [...games];
      while (newGamesList.length < 10) newGamesList = [...newGamesList, ...newGamesList];
      setGamesList(newGamesList);
    }
  }, []);

  const handleStart = (position) => {
    startPosition.current = position;
    isDragging.current = true;
  };

  const handleEnd = (position) => {
    const difference = startPosition.current - position;
    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        nextSlide();
      } else if (difference < 0 && currentIndex > 0) {
        prevSlide();
      }
    }
    isDragging.current = false;
  };

  const nextSlide = () => {
    gamesList.length - currentIndex <= 10 && setGamesList([...gamesList, ...games]);

    setCurrentIndex((prevIndex) => prevIndex + slidesPerPage);
  };
  const prevSlide = () => setCurrentIndex((prevIndex) => Math.max(0, prevIndex - slidesPerPage));

  return (
    <div
      className="relative md:px-[30px] pl-[10px] mt-[30px] mb-[20px]"
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => isDragging.current && handleEnd(e.clientX)}
      onMouseUp={(e) => handleEnd(e.clientX)}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
    >
      <h2 className="flex items-center mb-[10px] text-black text-[14px] sm:text-[18px] font-bold md:font-semibold lg:text-[22px]">
        {title}
      </h2>
      <div className={`flex overflow-hidden ${isMobile ? "w-full" : `w-[${width * slidesPerPage}px]`}`}>
        {gamesList.map(({ name, id, image }, index) => (
          <div
            key={`${id}-${index}`}
            className={`flex-shrink-0 ${
              index >= currentIndex && index < currentIndex + slidesPerPage ? "block" : "hidden"
            } ${isMobile ? "w-full" : `w-[${width}px]`} ${index < gamesList.length - 1 && "mr-5"}`}
          >
            <GameCard
              thumbnail={image}
              id={id}
              name={name}
              className={`w-full inline-block ${!isMobile ? `h-[${height}px]` : "h-auto"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselStandalone;
