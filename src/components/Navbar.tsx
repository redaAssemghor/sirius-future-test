import { useState } from "react";
import Logo from "../assets/logo.png";
import HomeSvg from "./svgs/HomeSvg";
import CalendarSvg from "./svgs/CalendarSvg";
import WalletSvg from "./svgs/WalletSvg";
import RewardSvg from "./svgs/RewardSvg";
import PuzzleSvg from "./svgs/PuzzleSvg";
import FolderSvg from "./svgs/FolderSvg";
import SupportSvg from "./svgs/SupportSvg";
import SettingSvg from "./svgs/SettingSvg";
import QuestionSvg from "./svgs/QuestionSvg";
import Gift from "../assets/gift.png";

interface NavbarProps {
  onLinkClick: (index: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLinkClick }) => {
  const [activeLink, setActiveLink] = useState<number | null>(null);

  const handleLinkClick = (index: number) => {
    setActiveLink(index);
    onLinkClick(index);
  };

  const navItems = [
    { name: "Главная", SvgComponent: HomeSvg },
    { name: "Расписание", SvgComponent: CalendarSvg },
    { name: "Оплата", SvgComponent: WalletSvg },
    { name: "Достижения", SvgComponent: RewardSvg },
    { name: "Тренажеры", SvgComponent: PuzzleSvg },
    { name: "Библиотека", SvgComponent: FolderSvg },
    { name: "Проверка связи", SvgComponent: SupportSvg },
    { name: "Настройки", SvgComponent: SettingSvg },
    { name: "Вопросы", SvgComponent: QuestionSvg },
  ];

  return (
    <div className="bg-[#EEEEFF] rounded-[30px] max-w-[236px] flex flex-col items-center p-5">
      <img src={Logo} alt="Logo" className="w-[148px] h-[58px] mb-5" />
      <ul className="w-full">
        {navItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleLinkClick(index)}
            className={`flex items-center p-3 gap-4 cursor-pointer rounded-r-full ${
              activeLink === index ? "bg-[#8D7FC7] text-white" : ""
            }`}
          >
            <div className="w-6 h-6 mr-3">
              <item.SvgComponent />
            </div>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
      <div className="relative bg-[#FDFDFF] rounded-[15px] mt-auto p-4">
        <h1 className="text-xl mb-2">Бесплатно</h1>
        <p className="text-sm mb-4">
          Приводите друзей с детьми заниматься в Sirius Future и получайте
          подарки!
        </p>
        <button className="bg-[#D8ECFF] rounded-[15px] px-4 py-2">
          Узнать
        </button>
        <img
          src={Gift}
          alt="Gift"
          className="absolute bottom-0 right-0 overflow-hidden w-[81.54px] h-[98.71px] rounded-[15px]"
        />
      </div>
    </div>
  );
};

export default Navbar;
