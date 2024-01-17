import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Grid } from '@mui/material';

const Carousel_Area = () => {
    return (
        <>
        <Grid container spacing={1}>
            <Grid item xs={8} height={"100"}>
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
                <SwiperSlide><img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/2ee2ac34-c52c-465c-90eb-1a75f6820ac4.png?format=avif" alt="" /></SwiperSlide>
                <SwiperSlide><img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/fc1126f5-5186-47a3-b207-69f57dfa6b2f.png?format=avif" alt="" /></SwiperSlide>
                <SwiperSlide><img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/5a0e2a09-32fe-49ce-8cd6-1082c3571856.png?format=avif" alt="" /></SwiperSlide>
                <SwiperSlide><img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/52dd308f-c1f9-419c-bc13-817c05384b83.png?format=avif" alt="" /></SwiperSlide>
                <SwiperSlide><img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/af899b2f-1f12-4c9e-a3dd-5ebb0d93b6ce.gif?format=avif" alt="" /></SwiperSlide>
                <SwiperSlide><img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/52a25365-3d6c-43f1-896e-80e56cf2012b.png?format=avif" alt="" /></SwiperSlide>
                <SwiperSlide><img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0002/assets/aac48369-b009-4b8b-ad11-b402928bb756.png?format=avif" alt="" /></SwiperSlide>
                <SwiperSlide><img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/83b71291-65f5-4fcc-8db8-a72d91b32426.jpg?format=avif" alt="" /></SwiperSlide>
                
            </Swiper>

            </Grid>
            <Grid item xs={4} height={"100%"} >
                <img height={"95%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/9fa77bc4-04be-47ec-a433-42126343092c.png?format=avif" width={"50%"} alt="" />
                <img height={"95%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/aeca53b5-4d64-4733-a911-0143b32ce237.png?format=avif" width={"50%"} alt="" />
            </Grid>

        </Grid>
        <hr />

        </>
    )
}

export default Carousel_Area