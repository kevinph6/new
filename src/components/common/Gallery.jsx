import Image from "next/image";
import React from "react";

function Gallery() {
  return (
    <div className="flex md:flex-row flex-wrap md:flex-nowrap">
      <div className="flex flex-col w-1/3 md:w-1/6">
        <Image
          src={"/img/png/garllery-1.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={212}
          alt="garllery-1"
        />
        <Image
          src={"/img/png/garllery-2.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={212}
          alt="garllery-2"
        />
        <Image
          src={"/img/png/garllery-3.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={212}
          alt="garllery-3"
        />
        <Image
          src={"/img/png/garllery-4.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={191}
          alt="garllery-4"
        />
      </div>
      <div className="flex flex-col w-1/3 md:w-1/6">
        <Image
          src={"/img/png/garllery-5.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={349}
          alt="garllery-5"
        />
        <Image
          src={"/img/png/garllery-6.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={242}
          alt="garllery-6"
        />
        <Image
          src={"/img/png/garllery-7.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={242}
          alt="garllery-7"
        />
      </div>
      <div className="flex flex-col w-1/3 md:w-1/6">
        <Image
          src={"/img/png/garllery-8.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={122}
          alt="garllery-8"
        />
        <Image
          src={"/img/png/garllery-9.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={212}
          alt="garllery-9"
        />
        <Image
          src={"/img/png/garllery-10.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={260}
          alt="garllery-10"
        />
        <Image
          src={"/img/png/garllery-11.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={234}
          alt="garllery-11"
        />
      </div>
      <div className="flex flex-col w-1/3 md:w-1/6">
        <Image
          src={"/img/png/garllery-12.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={95}
          alt="garllery-12"
        />{" "}
        <Image
          src={"/img/png/garllery-13.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={122}
          alt="garllery-13"
        />
        <Image
          src={"/img/png/garllery-14.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={212}
          alt="garllery-14"
        />
        <Image
          src={"/img/png/garllery-15.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={122}
          alt="garllery-15"
        />
        <Image
          src={"/img/png/garllery-16.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={181}
          alt="garllery-16"
        />
      </div>{" "}
      <div className="flex flex-col w-1/3 md:w-1/6">
        <Image
          src={"/img/png/garllery-17.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={212}
          alt="garllery-17"
        />
        <Image
          src={"/img/png/garllery-18.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={277}
          alt="garllery-18"
        />
        <Image
          src={"/img/png/garllery-19.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={212}
          alt="garllery-19"
        />{" "}
        <Image
          src={"/img/png/garllery-20.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={127}
          alt="garllery-20"
        />
      </div>{" "}
      <div className="flex flex-col w-1/3 md:w-1/6">
        <Image
          src={"/img/png/garllery-21.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={212}
          alt="garllery-21"
        />
        <Image
          src={"/img/png/garllery-22.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={212}
          alt="garllery-22"
        />
        <Image
          src={"/img/png/garllery-23.png"}
          className="w-full h-full p-[3px]"
          width={213}
          height={115}
          alt="garllery-23"
        />
        <Image
          src={"/img/png/garllery-24.png"}
          className="w-full h-full p-[3px]  "
          width={213}
          height={289}
          alt="garllery-24"
        />
      </div>
    </div>
  );
}

export default Gallery;
