import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import './swiper.css';

export default function SwiperComponent() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="">
        <Swiper
          effect={'coverflow'}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          pagination={false}
          modules={[Pagination, Thumbs]}
          initialSlide={1}
          className="myMobileSwiperTop"
        >
          <SwiperSlide>
            <img src="images/section6/pic1-mobile.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/section6/pic2-mobile.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/section6/pic3-mobile.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/section6/pic4-mobile.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/section6/pic5-mobile.png" />
          </SwiperSlide>
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="myMobileSwiperDown"
          style={{
            width: '300px',
            height: '100px',
          }}
        >
          <SwiperSlide>
            <img src="images/section6/pic1-mobile.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/section6/pic2-mobile.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/section6/pic3-mobile.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/section6/pic4-mobile.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/section6/pic5-mobile.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
