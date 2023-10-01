import { useMediaQuery } from "@mui/material";

import { MOBILE_WIDTH } from "../../../constants/constants";
import Carousel from "../../common/Carousel";
import { gameList1, gameList2, gameList3 } from "../../../constants/gameImagesLists";
import CarouselStandalone from "../../common/CarouselStandalone";

const Homepage = () => {
  const isMobile = useMediaQuery(MOBILE_WIDTH);

  return (
    <div className="w-full">
      <h1 className="text-center font-bold text-[18px] sm:text-[22px] mb-[30px]">Swiper Demo</h1>
      <Carousel title="Small Carousel" games={gameList1} isMobile={isMobile} width={170} height={125} />
      <Carousel title="Big Carousel" games={gameList1} isMobile={isMobile} width={336} height={252} />
      <Carousel title="Tall Carousel" games={gameList3} isMobile={isMobile} width={320} height={496} />
      <Carousel title="Bigger Carousel" games={gameList2} isMobile={isMobile} width={450} height={331} />
      <CarouselStandalone
        title="Custom Carousel"
        games={gameList1}
        isMobile={isMobile}
        width={336}
        height={252}
        pageSlides={4}
      />
    </div>
  );
};

export default Homepage;
