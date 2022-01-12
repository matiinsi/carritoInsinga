import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


const Slider = () => {
    return(
        <section className="slider__container">
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='slider__container-container'
            >
                <SwiperSlide className="portada" style={{
                    backgroundImage: "url('/assets/img/Vanher-Detail.jpeg')"
                }}>

                </SwiperSlide>
                <SwiperSlide className="portada" style={{
                    backgroundImage: "url('/assets/img/176972797_878440036344647_8837844682143756304_n.jpeg')"
                }}>

                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Slider;