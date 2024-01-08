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
    <div className="lg:px-[73px] px-4 mt-[40px] py-[73px] gap-y-12  flex justify-between flex-col lg:grid grid-rows-1 grid-cols-2">
      <div>
        <p className="text-[65px] font-bold">Ethereum conference</p>
        <p className="text-[65px] font-bold">and hackathon</p>
        <p className="text-[65px] font-bold">in the city of Lagos</p>
        <p className="text-[65px] italic">june 4-7, 2024</p>
        <p className="cursor-pointer bg-black text-yellow rounded px-[48px] py-[18px] w-48 mt-[64px] text-center">
          Register Now
        </p>
      </div>

      <div className="flex flex-col  bg-yellow px-4 pt-4 rounded justify-center lg:self-center ">
        <div className="bg-black text-yellow flex justify-between items-center lg:p-20 p-5">
          <div className="flex flex-col items-center justify-center">
            <div className="">{timeLeft.weeks}</div>
            <p className="text-sm my-2">Weeks</p>
          </div>
          <div className="flex flex-col items-center ">
            <div className="">{timeLeft.days}</div>
            <p className="my-2">Days</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="">{timeLeft.hours}</div>
            <p className="my-2">Hrs</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="">{timeLeft.minutes}</div>
            <p className="text-sm my-2">Mins</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="">{timeLeft.seconds}</div>
            <p className="text-sm my-2">Secs</p>
          </div>
        </div>
        <p className="my-10 self-center">Event Countdown</p>
      </div>
    </div>
  );
}

export default Countdown;
