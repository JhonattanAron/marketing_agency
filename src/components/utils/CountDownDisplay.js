import React, { useState, useEffect } from "react";

function CountdownDisplay({ deadline }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(deadline) - +new Date();
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

  return (
    <div className="flex justify-center text-center text-white">
      <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
        <div className="text-2xl font-semibold md:text-3xl">
          <span>{timeLeft.days}</span>
        </div>
        <div className="mt-3 text-xs uppercase opacity-75">Day</div>
      </div>
      <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
        <div className="text-2xl font-semibold md:text-3xl">
          <span>{timeLeft.hours}</span>
        </div>
        <div className="mt-3 text-xs uppercase opacity-75 ">Hour</div>
      </div>
      <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
        <div className="text-2xl font-semibold md:text-3xl">
          <span>{timeLeft.minutes}</span>
        </div>
        <div className="mt-3 text-xs uppercase opacity-75 ">Min</div>
      </div>
      <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
        <div className="text-2xl font-semibold md:text-3xl">
          <span>{timeLeft.seconds}</span>
        </div>
        <div className="mt-3 text-xs uppercase opacity-75 ">Second</div>
      </div>
    </div>
  );
}

export default CountdownDisplay;
