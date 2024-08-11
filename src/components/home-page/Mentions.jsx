import Image from "next/image";

export default function Mentions() {
  return (
    <div className="bg-[#93BBC7] py-24 xl:py-36">
      <div
        id="listing"
        className="max-w-[1440px] px-4 sm:px-6 lg:px-8 2xl:px-10 mx-auto w-full"
      >
        <h1 className="text-[40px] md:text-[48px] lg:text-[60px] xl:text-[72px] font-normal  leading-[100%] tracking-[1px] uppercase  text-white main-heading-2 text-center ">
          Mentions
        </h1>
        <div className="mt-24 max-w-[662px] mx-auto w-full p-4 sm:p-6 border-2 border-black rounded-3xl bg-[#A0C8D4] shadow-[8px_8px_0px_0px_#0C0B0B] flex gap-6 flex-wrap">
          <Image src="/img/svg/benzinga.svg" width={168} height={34} />
          <Image src="/img/png/techbullion.png" width={168} height={34} />
          <Image src="/img/png/bitcoinist.png" width={218} height={34} />
          <Image src="/img/png/thenewscrypto.png" width={283} height={34} />
          <Image src="/img/png/newsbtc.png" width={150} height={34} />
        </div>
      </div>
    </div>
  );
}
