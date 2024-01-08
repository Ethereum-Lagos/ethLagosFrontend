import React, { useState, useEffect } from "react";

function Countdown() {
  //timer logic
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-06-04T11:00:00Z"); // Set your event date and time here
    const now = new Date();
    const difference = eventDate - now;

    if (difference > 0) {
      const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
      const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 7);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { weeks, days, hours, minutes, seconds };
    }
    return { weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="lg:px-[73px] px-4 my-10 lg:py-[73px] py-10  lg:flex justify-between ">
      <div className="lg:w-[50%] leading-tight lg:text-[53px] text-4xl">
        <p className="font-bold ">Ethereum conference
          and hackathon
          in the city of Lagos
        </p>
        <p className="italic">june 4-7, 2024</p>
        <p className="cursor-pointer text-base bg-black text-yellow rounded px-[48px] py-[18px] w-48 mt-10 text-center">
          Register Now
        </p>
      </div>

      <div className="lg:w-[45%] sm:mt-10 flex flex-col bg-yellow p-4 my-auto rounded ">
        <div className="bg-black text-xl text-yellow flex justify-between items-center lg:p-20 p-5">
          <div className="flex flex-col items-center justify-center">
            <div className="">{timeLeft.weeks}</div>
            <p className="text-sm">Weeks</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="">{timeLeft.days}</div>
            <p className="text-sm ">Days</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="">{timeLeft.hours}</div>
            <p className="text-sm ">Hrs</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="">{timeLeft.minutes}</div>
            <p className="text-sm ">Mins</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="">{timeLeft.seconds}</div>
            <p className="text-sm ">Secs</p>
          </div>
        </div>
        <p className="my-4 flex self-center font-medium">Event Countdown
          <img className="w-4 h-4 my-auto ml-3" src="/images/icons/icon.png" alt="" />
        </p>
      </div>
    </div>
  );
}

export default Countdown;
