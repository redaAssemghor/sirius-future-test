import { FaSignOutAlt, FaTimes } from "react-icons/fa";
import user from "../assets/user.png";

interface DropDownProps {
  open: boolean;
  closeDropdown: () => void;
}

const DropDown: React.FC<DropDownProps> = ({ open, closeDropdown }) => {
  return (
    <section
      className={`absolute top-16 right-0 w-64 h-64 bg-white border rounded-lg border-purple-500 flex flex-col p-8 shadow-lg ${
        open ? "block" : "hidden"
      }`}
    >
      {open && (
        <div className="flex flex-col gap-4 relative">
          <button
            className="absolute -top-5 -right-5 text-gray-500 hover:text-gray-700"
            onClick={closeDropdown}
          >
            <FaTimes size={20} />
          </button>
          <h1 className="text-lg font-semibold">Смена пользователя</h1>

          <button className="bg-purple-100 flex p-2 gap-2 rounded-lg text-sm w-48 hover:bg-purple-200">
            <img src={user} alt="User" className="w-6 h-6 rounded-full" />
            <div>
              <h3 className="font-medium">Михаил</h3>
              <h6 className="text-gray-500">Это вы</h6>
            </div>
          </button>

          <button className="flex p-2 gap-2 rounded-lg text-sm items-center w-48 hover:bg-gray-100">
            <img src={user} alt="User" className="w-6 h-6 rounded-full" />
            <div>
              <h3 className="font-medium">Анна</h3>
            </div>
          </button>

          <div className="flex justify-between mt-4">
            <button className="text-blue-500 hover:text-blue-700">Выход</button>
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={closeDropdown}
            >
              <FaSignOutAlt size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default DropDown;
