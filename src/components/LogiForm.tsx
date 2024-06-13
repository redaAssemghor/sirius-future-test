import { FormEvent, useState } from "react";
import LogoSvg from "./svgs/LogoSvg";

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="flex flex-col items-center p-5 font-sans min-h-screen justify-between bg-gray-50">
      <div className="flex flex-col items-center w-full max-w-md mx-auto">
        <LogoSvg />
        <h1 className="text-3xl text-[#323854] mt-5 mb-5 text-center">
          Вход в Sirius Future
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-6 items-center"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-2 text-lg border rounded-xl"
            required
          />
          <div className="relative w-full mb-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 text-lg border rounded-xl"
              required
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute right-2 top-2 bg-none border-none cursor-pointer"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="w-full mb-2 flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe">Запомнить меня</label>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-[#8D7FC7] rounded-3xl text-white border-none text-lg cursor-pointer mb-5"
          >
            Войти
          </button>
        </form>
        <div className="w-full flex justify-between mb-5">
          <a href="#" className="no-underline text-[#008AFF]">
            Я забыл пароль
          </a>
          <a href="#" className="no-underline text-[#008AFF]">
            Войти как тренер
          </a>
        </div>
        <div className="mb-5 text-center">
          Нет аккаунта?{" "}
          <a href="#" className="no-underline text-[#008AFF]">
            Зарегистрироваться
          </a>
        </div>
      </div>
      <div className="flex justify-between gap-4 py-2 mt-8">
        <button className="bg-white border border-purple-600 px-4 py-2 cursor-pointer transition-transform transform hover:bg-purple-600 hover:text-white hover:scale-105">
          EN
        </button>
        <button className="bg-white border border-purple-600 px-4 py-2 cursor-pointer transition-transform transform hover:bg-purple-600 hover:text-white hover:scale-105">
          RU
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
