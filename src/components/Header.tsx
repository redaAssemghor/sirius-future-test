import React, { useState } from "react";
import ChatBubble from "./ChatBubble";
import ArrowsSvg from "./svgs/ArrowsSvg";
import user from "../assets/user.png";
import DropDown from "./DropDown";

interface HeaderProps {
  headerText?: string;
}

const Header: React.FC<HeaderProps> = ({ headerText }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center justify-between max-h-[100px] border-b-2 p-2 rounded-full shadow-sm relative">
      <div>
        {headerText && (
          <h1 className="lg:text-2xl p-4">
            Добро пожаловать, <span className="text-[#7362BC]">Михаил!</span>
          </h1>
        )}
      </div>
      <div className="flex gap-4">
        <button>
          <ChatBubble />
        </button>
        <button
          className="flex justify-center items-center"
          onClick={toggleDropdown}
        >
          <img src={user} alt="user" />
          <ArrowsSvg />
        </button>
      </div>
      <DropDown open={isDropdownOpen} closeDropdown={toggleDropdown} />
    </div>
  );
};

export default Header;
