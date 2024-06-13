import WalletSvg from "./svgs/WalletSvg";

interface LessonProps {
  time: string;
}

const Lesson: React.FC<LessonProps> = ({ time }) => {
  const calculateLesson = Math.floor(Math.random() * 3);

  const formatTime = (timeString: string, addHours: number): string => {
    const [hour, minutePeriod] = timeString.split(":");
    let hourInt = parseInt(hour);
    if (minutePeriod.includes("PM") && hourInt !== 12) hourInt += 12;
    if (minutePeriod.includes("AM") && hourInt === 12) hourInt = 0;

    hourInt += addHours;
    if (hourInt >= 24) hourInt -= 24;

    return `${hourInt}:00`;
  };

  const endTime = formatTime(time, calculateLesson);

  return (
    <div className="relative p-4 border rounded-md shadow-md">
      <div className="absolute top-2 right-2 text-red-500">
        <WalletSvg />
      </div>
      <h1 className="font-bold">
        {time.split(" ")[0]} - {endTime}
      </h1>
      <h6 className="text-gray-600 text-xs">Ментальная арифметика</h6>
    </div>
  );
};

export default Lesson;
