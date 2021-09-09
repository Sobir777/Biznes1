import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image'
import biznes from '../../public/biznes.jpg'
import bizness from '../../public/cat.jpg'
import biznesss from '../../public/aaa.jpg'
import biznea from '../../public/yaponiya.jpg'
import bizneq from '../../public/aaaaa.jpg'
import cls from './VideoCarousel.module.css'
import SwiperCore, {
    Navigation
} from 'swiper/core';
SwiperCore.use([Navigation]);
export default function VideoCarousel() {
    return (
        <div>
            <div className={cls.ContainerCarusel}>
                <Swiper
                    navigation={true}
                    className={cls.mySwiper} 
                    Autoplay="true"
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><Image className={cls.RasimImg} src={biznes} alt="Picture of the author" /></SwiperSlide>
                    <SwiperSlide><Image className={cls.RasimImg} src={bizness} alt="Picture of the author" /></SwiperSlide>
                    <SwiperSlide><Image className={cls.RasimImg} src={biznes} alt="Picture of the author" /></SwiperSlide>
                    <SwiperSlide><Image className={cls.RasimImg} src={biznea} alt="Picture of the author" /></SwiperSlide>
                    <SwiperSlide><Image className={cls.RasimImg} src={bizneq} alt="Picture of the author" /></SwiperSlide>
                    <SwiperSlide><Image className={cls.RasimImg} src={biznesss} alt="Picture of the author" /></SwiperSlide>
                    <SwiperSlide><Image className={cls.RasimImg} src={biznes} alt="Picture of the author" /></SwiperSlide>
                    <SwiperSlide><Image className={cls.RasimImg} src={biznes} alt="Picture of the author" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}





















// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css"

// // import "./styles.css";
// // import Swiper core and required modules


// // install Swiper modules
// SwiperCore.use([Navigation]);
// export default function App() {
//     return (
//         <>
//             <Swiper navigation={true} className="mySwiper">
//                 <SwiperSlide><Image className={cls.CaruselImgImg} src={biznes} alt="Picture of the author" /></SwiperSlide>
//                 <SwiperSlide><Image className={cls.CaruselImgImg} src={biznes} alt="Picture of the author" /></SwiperSlide>
//                 <SwiperSlide><Image className={cls.CaruselImgImg} src={biznes} alt="Picture of the author" /></SwiperSlide>
//                 <SwiperSlide><Image className={cls.CaruselImgImg} src={biznes} alt="Picture of the author" /></SwiperSlide>
//             </Swiper>
//         </>
//     )
// }