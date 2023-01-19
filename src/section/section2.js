import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function SectionSecond() {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        loop
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>Section 2 - Slide 1</SwiperSlide>
        <SwiperSlide>Section 2 - Slide 2</SwiperSlide>
        <SwiperSlide>Section 2 - Slide 3</SwiperSlide>
        <SwiperSlide>Section 2 - Slide 4</SwiperSlide>
        <SwiperSlide>Section 2 - Slide 5</SwiperSlide>
        <SwiperSlide>Section 2 - Slide 6</SwiperSlide>
      </Swiper>
    </div>
  );
}
