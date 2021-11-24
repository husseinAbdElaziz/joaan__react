import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Import Swiper styles
import 'swiper/swiper.min.css';
import RestauCard from '../RestauCard';

export default function LocationsSwiper({ data, onSlideChange }) {
  const breakpointsOptions = {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    740: {
      slidesPerView: 1.9,
    },
    940: {
      slidesPerView: 2.3,
    },
  };

  const handleOnSlideChange = (slideData) => {
    const { lat, lng } = data[slideData?.realIndex]?.location;
    onSlideChange({ lat, lng });
  };

  return (
    <Swiper
      breakpoints={breakpointsOptions}
      spaceBetween={15}
      onSlideChange={(slideData) => handleOnSlideChange(slideData)}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
    >
      {data?.map((item) => (
        <SwiperSlide key={item?.location?.id} virtualIndex={item?.location?.id}>
          <div className='my-2'>
            <RestauCard restaurantDate={item} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
