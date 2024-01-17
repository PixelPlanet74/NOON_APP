import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CarouselArea_2 = () => {
    return (
        <>
            <Swiper

                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                // pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/715f6692-240e-4018-ac61-0537d627240b.png?format=avif" alt="" /></SwiperSlide>
                <SwiperSlide><img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/0a9eb102-1449-4612-85e1-b94c4920b01f.png?format=avif" alt="" /></SwiperSlide>
                <SwiperSlide><img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/2600313f-1710-4c01-a1d3-cdc98ff69589.jpg?format=avif" alt="" /></SwiperSlide>
                <SwiperSlide><img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/cf7d9bd1-315d-4182-840c-5d3d00226e55.gif?format=avif" alt="" /></SwiperSlide>
            
            </Swiper>



        </>

    )
}

export default CarouselArea_2