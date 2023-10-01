import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import GameCard from "../common/GameCard";
import "swiper/css";
import "./carousel.css";

const Carousel = ({ title, games, isMobile, height = 121, width = 162 }) => {
  const [gamesList, setGamesList] = useState(games);

  useEffect(() => {
    if (games.length < 10) {
      let newGamesList = [...games];
      while (newGamesList.length < 10) newGamesList = [...newGamesList, ...newGamesList];
      setGamesList(newGamesList);
    }
  }, []);

  const onTransitionEnd = ({ activeIndex }) => {
    // getting games earlier than last slide, to have time for API call
    if (gamesList.length - activeIndex <= 10) {
      setGamesList([...gamesList, ...games]);
    }
  };

  const renderSlides = () =>
    gamesList.map(({ name, id, image }, index) => (
      <SwiperSlide
        key={`${index}-${id}-${name}`}
        style={{
          height: isMobile ? "auto" : `${height}px`,
          maxWidth: isMobile ? "100vw" : `${width}px`,
        }}
        className={`mr-[20px] ${isMobile ? "min-w-full" : `min-w-[${width}px]`}`}
      >
        <GameCard
          thumbnail={image}
          className={`${isMobile ? "w-full h-auto" : `w-[${width}px] h-[${height}px]`} inline-block`}
          id={id}
          name={name}
        />
      </SwiperSlide>
    ));

  return (
    <div className="relative md:px-[30px] pl-[10px] mt-[30px] mb-[20px]">
      <h2 className="flex items-center mb-[10px] text-black text-[14px] sm:text-[18px] font-bold md:font-semibold lg:text-[22px]">
        {title}
      </h2>
      <Swiper
        onTransitionEnd={onTransitionEnd}
        slidesPerView={isMobile ? 1 : "auto"}
        spaceBetween="20px"
        navigation={false}
      >
        {renderSlides()}
      </Swiper>
    </div>
  );
};

export default Carousel;
