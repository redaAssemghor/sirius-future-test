import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaChevronDown } from "react-icons/fa";
import InterfaceSvg from "./svgs/InterfaceSvg";
import Lesson from "./Lesson";

interface LessonType {
  day: number;
  time: string;
}

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [lessons, setLessons] = useState<LessonType[]>([]);

  const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const monthNames = [
    "Ян",
    "Фе",
    "Ма",
    "Ап",
    "Ма",
    "Ию",
    "Ию",
    "Ав",
    "Се",
    "Ок",
    "Но",
    "Де",
  ];

  const subjects = ["Math", "Science", "History", "Art"];

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

  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateRandomLessons = () => {
    const lessons: LessonType[] = [];
    const daysInMonth = getDaysInMonth(
      currentDate.getFullYear(),
      currentDate.getMonth()
    );
    const lessonCount = Math.floor(Math.random() * (daysInMonth / 2));

    for (let i = 0; i < lessonCount; i++) {
      const randomDay = Math.floor(Math.random() * daysInMonth) + 1;
      const randomTime = `${Math.floor(Math.random() * 12) + 1}:00 ${
        Math.random() > 0.5 ? "AM" : "PM"
      }`;
      lessons.push({ day: randomDay, time: randomTime });
    }

    setLessons(lessons);
  };

  useEffect(() => {
    generateRandomLessons();
  }, [currentDate]);

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  const daysInMonth = getDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  const calendarDays: (string | number)[] = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push("");
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  return (
    <div>
      <div className="flex flex-col h-full w-full">
        <div>
          <div className="flex items-center justify-between gap-4 p-4">
            <div className="relative">
              <select className="appearance-none w-48 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700">
                <option value="" disabled selected hidden>
                  Выбрать предмет
                </option>
                {subjects.map((subject, index) => (
                  <option key={index} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 pointer-events-none" />
            </div>
            <button className="bg-[#DECFFF] text-[#323854] py-[20px] px-[80px] rounded-3xl shadow-sm">
              Изменить расписание
            </button>
          </div>
          <div className="flex my-4">
            <div className="flex items-center gap-7 p-4">
              <button onClick={handlePreviousMonth}>
                <FaArrowLeft className="w-6 h-6" />
              </button>
              <span className="text-lg font-bold">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </span>
              <button onClick={handleNextMonth}>
                <FaArrowRight className="w-6 h-6" />
              </button>
            </div>
            <button className="border-[#8D7FC7] border py-1 px-4 rounded-3xl">
              Сегодня
            </button>
            <button className="p-4">
              <InterfaceSvg />
            </button>
          </div>
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
              className={` border-t border h-[150px] flex flex-col justify-between ${
                day === "" ? "bg-gray-100" : ""
              }`}
            >
              <div>{day}</div>
              {lessons.some((lesson) => lesson.day === day) && (
                <Lesson
                  time={
                    lessons.find((lesson) => lesson.day === day)?.time || ""
                  }
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
