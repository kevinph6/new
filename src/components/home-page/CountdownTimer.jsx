import { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="mx-1">
        {timeLeft[interval]} {interval}
      </span>
    );
  });

  return (
    <div className="text-center mt-2">
      {timeLeft.days !== undefined ? (
        <div className="flex justify-center gap-x-4 sm:gap-x-6 xl:gap-x-8 ">
          <div className="flex flex-col items-center gap-2">
            <div className="xl:w-[72px] xl:h-[72px] w-14 h-14  p-1 flex flex-col justify-center items-center border-2 border-black shadow-[8px_8px_0px_0px_#0C0B0B] rounded-xl">
              <span className="text-2xl  xl:text-4xl tracking-[0.7px] uppercase  text-white heading-shadow  ">
                {timeLeft.days}
              </span>
            </div>
            <span className="text-sm sm:text-base text-shadows text-white uppercase">
              DAYS
            </span>
          </div>{" "}
          <div className="flex flex-col items-center gap-2">
            <div className="xl:w-[72px] xl:h-[72px] w-14 h-14  p-1 flex flex-col justify-center items-center border-2 border-black shadow-[8px_8px_0px_0px_#0C0B0B] rounded-xl">
              <span className="text-2xl  xl:text-4xl tracking-[0.7px] uppercase  text-white heading-shadow  ">
                {timeLeft.hours}
              </span>
            </div>
            <span className="text-sm sm:text-base text-shadows text-white uppercase">
              Hours
            </span>
          </div>{" "}
          <div className="flex flex-col items-center gap-2">
            <div className="xl:w-[72px] xl:h-[72px] w-14 h-14  p-1 flex flex-col justify-center items-center border-2 border-black shadow-[8px_8px_0px_0px_#0C0B0B] rounded-xl">
              <span className="text-2xl  xl:text-4xl tracking-[0.7px] uppercase  text-white heading-shadow  ">
                {timeLeft.minutes}
              </span>
            </div>
            <span className="text-sm sm:text-base text-shadows text-white uppercase">
              Minutes
            </span>
          </div>{" "}
          <div className="flex flex-col items-center gap-2">
            <div className="xl:w-[72px] xl:h-[72px] w-14 h-14  p-1 flex flex-col justify-center items-center border-2 border-black shadow-[8px_8px_0px_0px_#0C0B0B] rounded-xl">
              <span className="text-2xl  xl:text-4xl tracking-[0.7px] uppercase  text-white heading-shadow  ">
                {timeLeft.seconds}
              </span>
            </div>
            <span className="text-sm sm:text-base text-shadows text-white uppercase">
              Seconds
            </span>
          </div>
          {/* <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">{timeLeft.hours}</span>
            <span className="text-sm uppercase">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">{timeLeft.minutes}</span>
            <span className="text-sm uppercase">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">{timeLeft.seconds}</span>
            <span className="text-sm uppercase">Seconds</span>
          </div> */}
        </div>
      ) : (
        <span>Time's up!</span>
      )}
      <p className="mt-4 text-center text-white heading-shadow text-base sm:text-lg lg:text-[18px] font-thin uppercase">
        Listing Price: 1 $LISANA = $0.05
      </p>
    </div>
  );
};

export default CountdownTimer;
