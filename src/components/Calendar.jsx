import { useState } from "react";
// import ArrowLeftSvg from "./svgs/ArrowLeftSvg";
// import ArrowRightSvg from "./svgs/ArrowRightSvg";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handlePreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  const daysInMonth = getDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push("");
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex items-center justify-between p-4 bg-gray-100">
        <button onClick={handlePreviousMonth}>
          {/* <ArrowLeftSvg className="w-6 h-6" /> */}
          left
        </button>
        <span className="text-lg font-bold">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </span>
        <button onClick={handleNextMonth}>
          {/* <ArrowRightSvg className="w-6 h-6" /> */}
          right
        </button>
      </div>
      <div className="grid grid-cols-7 bg-gray-200 text-center">
        {daysOfWeek.map((day) => (
          <div key={day} className="p-2 font-bold">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 flex-grow">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`p-4 border-t border-l ${day === "" ? "" : "border-r"}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
