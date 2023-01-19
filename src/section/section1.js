import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function SectionFirst() {
  return (
    // <div className="swiper">
    //   first section
    //   <div className="swiper-wrapper">
    //     <div className="swiper-slide">Slide 1</div>
    //     <div className="swiper-slide">Slide 2</div>
    //     <div className="swiper-slide">Slide 3</div>
    //   </div>
    //   <div className="swiper-pagination"></div>
    //   <div className="swiper-button-prev"></div>
    //   <div className="swiper-button-next"></div>
    //   <div className="swiper-scrollbar"></div>
    // </div>
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2000 }}
        loop
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>Section 1 - Slide 1</SwiperSlide>
        <SwiperSlide>Section 1 - Slide 2</SwiperSlide>
        <SwiperSlide>Section 1 - Slide 3</SwiperSlide>
        <SwiperSlide>Section 1 - Slide 4</SwiperSlide>
        <SwiperSlide>Section 1 - Slide 5</SwiperSlide>
        <SwiperSlide>Section 1 - Slide 6</SwiperSlide>
      </Swiper>
    </div>
  );
}
