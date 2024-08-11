"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function Listing() {
  return (
    <div className="bg-[#93BBC7] pt-24">
      <div
        id="listing"
        className="max-w-[1440px] min-h-[400px] px-4 sm:px-6 lg:px-8 2xl:px-10 mx-auto w-full"
      >
        <h1 className="mb-16 text-[40px] md:text-[48px] lg:text-[60px] xl:text-[72px] font-normal  leading-[100%] tracking-[1px] uppercase  text-white main-heading-2 text-center ">
          Future Listings
        </h1>
        <Swiper
          modules={[Pagination]}
          pagination={true}
          spaceBetween={0}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            375: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <div className="listing-container">
              <Image src="/img/svg/bybit.svg" width={107} height={35} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="listing-container">
              <Image src="/img/svg/okx.svg" width={107} height={35} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="listing-container">
              <Image src="/img/svg/kucoin.svg" width={107} height={35} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="listing-container">
              <Image src="/img/svg/gateio.svg" width={107} height={35} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="listing-container">
              <Image src="/img/svg/htx.svg" width={107} height={35} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="listing-container">
              <Image src="/img/svg/mexc.svg" width={107} height={35} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
