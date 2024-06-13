import React, { useState, useEffect } from "react";
import mainImage from "../assets/main.png";
import IconSvg from "./svgs/IconSvg";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const Main: React.FC = () => {
  const calculateTimeLeft = (totalSeconds: number): TimeLeft => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { hours, minutes, seconds };
  };

  const initialSeconds = 36000; // 10 hours in seconds
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(initialSeconds)
  );

  useEffect(() => {
    let secondsRemaining = initialSeconds;

    const timer = setInterval(() => {
      if (secondsRemaining > 0) {
        secondsRemaining -= 1;
        setTimeLeft(calculateTimeLeft(secondsRemaining));
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    console.log("Time left updated:", timeLeft);
  }, [timeLeft]);

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-[#7362BC] text-white rounded-3xl flex flex-col md:flex-row items-center w-full md:w-[526px] h-auto md:h-[248px] overflow-hidden">
          <div className="p-4 md:p-8 flex-1">
            <h1 className="text-lg md:text-2xl mb-2 md:mb-4">
              До 31 декабря любой курс со скидкой 20%
            </h1>
            <p className="text-xs md:text-sm">
              До конца года у вас есть уникальная возможность воспользоваться
              нашей новогодней скидкой 20% на любой курс!
            </p>
          </div>
          <img
            src={mainImage}
            alt="Main Promotion"
            className="w-full md:w-auto h-auto md:h-full object-cover"
          />
        </div>

        <div className="bg-[#FFF1CB] flex flex-col justify-center items-center gap-2 md:gap-4 rounded-3xl w-full md:w-[344px] h-auto md:h-[248px] p-16">
          <h1 className="text-center text-sm md:text-base">
            Следующее занятие начнется через:
          </h1>
          <h3 className="text-xl md:text-3xl font-bold">
            {timeLeft.hours} <span className="text-sm md:text-lg">ч</span>{" "}
            {timeLeft.minutes} <span className="text-sm md:text-lg">мин</span>{" "}
            {timeLeft.seconds} <span className="text-sm md:text-lg">сек</span>
          </h3>
          <button className="border-dashed border-2 border-black rounded-full font-semibold w-full p-2 text-lg">
            Button
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mt-4">
        <div className="flex flex-col gap-4 p-4 border-2 border-[#7362BC] rounded-3xl w-full lg:w-[300px]">
          <h1 className="font-bold text-2xl">Баланс занятий</h1>
          <ul className="flex flex-col gap-2">
            <li className="border-b border-[#EEEEFF] flex justify-between items-center pb-2">
              Ментальная Арифметика
              <span className="bg-[#EEEEFF] rounded-full w-8 h-8 flex items-center justify-center">
                32
              </span>
            </li>
            <li className="border-b border-[#EEEEFF] flex justify-between items-center pb-2">
              Программирование
              <span className="bg-[#EEEEFF] rounded-full w-8 h-8 flex items-center justify-center">
                0
              </span>
            </li>
            <li className="flex justify-between items-center">
              Скорочтение
              <span className="bg-[#EEEEFF] rounded-full w-8 h-8 flex items-center justify-center">
                4
              </span>
            </li>
          </ul>
          <button className="bg-[#DECFFF] w-full rounded-full py-2">
            Button
          </button>
        </div>

        <div className="flex flex-col gap-4 p-4 border-2 border-[#7362BC] rounded-3xl flex-1">
          <h1 className="font-bold text-2xl">Ближайшие уроки</h1>

          <div className="flex flex-col gap-4 md:flex-row items-center justify-evenly border-b border-gray-300 pb-2">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center text-3xl font-bold">
                1
              </div>
              <span className="text-sm">мая</span>
            </div>
            <h2 className="text-xl font-bold">Ментальная Арифметика</h2>

            <div className="flex items-center gap-2">
              <p className="mr-4">14:00-14:25</p>
              <IconSvg />
              <h3 className="font-medium">Белкина Инна</h3>
            </div>

            <div className="flex gap-2">
              <button className="bg-[#8D7FC7] rounded-3xl text-white px-4 py-2">
                Button
              </button>
              <button className="border-[#8D7FC7] rounded-3xl border px-4 py-2">
                Button
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row items-center justify-evenly border-b border-gray-300 pb-2">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center text-3xl font-bold">
                30
              </div>
              <span className="text-sm">октября</span>
            </div>
            <h2 className="text-xl font-bold">Программирование</h2>

            <div className="flex items-center gap-2">
              <p className="mr-4">11:00-11:11</p>
              <IconSvg />
              <h3 className="font-medium">Животновская Оксана</h3>
            </div>

            <div className="flex gap-2">
              <button className="bg-[#8D7FC7] rounded-3xl text-white px-4 py-2">
                Button
              </button>
              <button className="border-[#8D7FC7] rounded-3xl px-4 py-2 border">
                Button
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row items-center justify-evenly">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center text-3xl font-bold">
                16
              </div>
              <span className="text-sm">мая</span>
            </div>
            <h2 className="text-xl font-bold">Скорочтение</h2>

            <div className="flex items-center gap-2 mx-[90px]">
              <p className="mr-4">09:00-09:45</p>
              <IconSvg />
              <h3 className="font-medium">Мин Елена</h3>
            </div>

            <div className="flex gap-2">
              <button className="px-4 py-2 bg-[#8D7FC7] rounded-3xl text-white">
                Button
              </button>
              <button className="border-[#8D7FC7] rounded-3xl px-4 py-2 border">
                Button
              </button>
            </div>
          </div>

          <button className="bg-[#DECFFF] w-full rounded-full py-2">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
