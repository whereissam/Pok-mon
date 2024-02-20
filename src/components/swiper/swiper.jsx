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
          className="mySwiperTop"
        >
          <SwiperSlide>
            <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/psglt21spndrmwivbsfxek6qprh6uuo5y8e06f923e-c5da-48bc-af80-f760d8555fda" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/psvskkcsj54aiq8sgolgl2qeuaxjumjz1hcf34cbd7e-f8c8-46e6-80e2-ae82e15bfde8" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/pscqykarykp4qo6r3bteox7j9rwh7d4e3k1af8c844-5c2f-4c9c-968f-509bbe7420d4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/psccfvls576m52dicaw9hy78w6n51fa1y88a90cd69-619a-4eb5-9e85-eab0731597b1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/psmjkdg8kbod9v8bxp9lr37ks6fm7w8of90c203e1-f5fe-42eb-98f4-17512ffa54c4" />
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
          className="mySwiperDown"
          height={100}
        >
          <SwiperSlide>
            <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/psglt21spndrmwivbsfxek6qprh6uuo5y8e06f923e-c5da-48bc-af80-f760d8555fda" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/psvskkcsj54aiq8sgolgl2qeuaxjumjz1hcf34cbd7e-f8c8-46e6-80e2-ae82e15bfde8" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/pscqykarykp4qo6r3bteox7j9rwh7d4e3k1af8c844-5c2f-4c9c-968f-509bbe7420d4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/psccfvls576m52dicaw9hy78w6n51fa1y88a90cd69-619a-4eb5-9e85-eab0731597b1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/psmjkdg8kbod9v8bxp9lr37ks6fm7w8of90c203e1-f5fe-42eb-98f4-17512ffa54c4" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
