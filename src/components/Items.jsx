// import React from 'react'

// const Items = () => {
//   return (
//     <>
    
    
    
//     </>
//   )
// }

// export default Items



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../App.css';

// import required modules
import { Pagination, Scrollbar } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
      
        slidesPerView={1}
        spaceBetween={10}
        scrollbar={{
            hide: false,
            clickable:true
          }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 8,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 12,
            spaceBetween: 10,
          },
        }}
        modules={[ Scrollbar]}
        className="mySwiper main_swiper"
      >
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/cf847f24-9b25-4a43-b2b1-ff8881fb51ab.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/705eead8-27f2-4704-96b6-c02c873b380a.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/878b025c-c97c-432f-aa18-a430d88a813d.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/67edd848-2b6f-4c93-b2e6-c72879bafb03.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/227c14e8-9e35-4875-8462-809da174966b.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/fa870ca7-b745-4386-b11c-dd70f5660006.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/ed889b28-66e2-4ee0-aa41-be4c885ca396.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/b531fe1e-3adb-4f09-9927-0f2f64c8fa66.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/beffdc53-26ca-45b1-b3d5-84c1a0909903.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/1988c23a-de3e-41d7-9381-2cb6784a3b74.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/7e179823-54ee-45c3-91c7-ed279d164314.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/c7d2dda0-d726-4bfa-9266-e1063a6fcd31.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/dfcbf954-c609-492b-925f-326e5c242e06.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/4c4006cc-37f1-4592-9694-aaeacdde8b2b.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/079404dc-4a7e-4fa1-b01e-c71818debb85.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/6f7397cf-9d65-43d2-98fd-19cdc12ce746.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/de461090-58ea-4fd5-97f8-291f407080f3.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/e5dfc70c-b5ce-48c5-b131-45205ed42c97.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/050a6adb-648e-4c3a-800f-62b43f730830.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/7e05ba0c-534e-4f44-bbdc-2b1f728d4490.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/a2de506c-31bc-4b1e-b344-fe17938eb08d.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/04f16c51-7947-4192-811a-5df18197f92f.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/b1796a9c-b838-4548-956d-70205379b1ad.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/a020f182-9470-45b5-92b9-0deb9f27e36f.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/3ffb7d19-5099-4b5b-b45f-c18b513badaf.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0002/assets/3db7c779-ddd2-4462-8159-a0ef5716cb8e.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/424b7d5c-9e2c-48f8-a3c9-bbfea77706ac.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/9960d852-378e-473c-9aef-bcffb63ec836.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/7e75835f-1ade-4003-bb2f-0f68d50270c8.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/21b5a94b-99ae-4a3e-901b-b612bbf4bec4.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/70e1a79c-d6e0-4552-8b5e-3c866241c86b.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/53da0407-9c77-4e2d-b822-cbf81954ff5a.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/4a50c245-4bb4-4f53-9929-3be7fb9642af.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/51260a41-caca-47a9-9911-129611d88cc6.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/e2dd2d4c-3f78-4b27-a909-1e1e4f77635c.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/48e7d146-f537-4902-97c1-b43aefacf9e3.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/12484ac6-ad98-4fce-bd04-669477ade7ec.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/c2fa27ca-4bcf-4b17-8831-3cfc335575b5.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/fb2f6ce2-419c-40ff-b1cd-77adaabd860d.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/ee346055-76f7-482b-8d18-f9afba0b6c0d.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/6a06648e-82bb-4ecf-9b25-c82a8a4720b8.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/1a7b4717-b494-45c7-82f2-b2ddf1fd3c8f.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/f56b3611-5b74-47e5-9261-7ef2db1ecd31.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/0ced82ed-4832-49a6-be3d-7e1001243269.png?format=avif" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"10px"} src="https://f.nooncdn.com/mpcms/EN0001/assets/84bdd49a-ef1a-404d-98fa-f555b249f96d.png?format=avif" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}

