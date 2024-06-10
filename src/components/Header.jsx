import ChatBubble from "./ChatBubble";
import ArrowsSvg from "./svgs/ArrowsSvg";
import user from "../assets/user.png";

const Header = ({ headerText }) => {
  return (
    <div className="flex items-center justify-between max-h-[100px] border-b-2 p-2 rounded-full shadow-lg">
      <div>
        {headerText && (
          <h1>
            Добро пожаловать, <span>Михаил!</span>
          </h1>
        )}
      </div>
      <div className="flex gap-4">
        <button>
          <ChatBubble />
        </button>
        <button className="flex justify-center items-center">
          <img src={user} alt="user" />
          <ArrowsSvg />
        </button>
      </div>
    </div>
  );
};

export default Header;
