import React, { FormEvent, useState } from "react";
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
    <div className="flex flex-col items-center p-5 font-sans h-screen justify-between">
      <div className="flex flex-col items-center">
        <LogoSvg />
        <h1 className="mt-5 mb-5">Вход в Sirius Future</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-2 text-lg"
            required
          />
          <div className="relative w-full mb-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 text-lg"
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
            className="w-full p-2 bg-purple-600 text-white border-none text-lg cursor-pointer mb-5"
          >
            Войти
          </button>
        </form>
        <div className="w-full flex justify-between mb-5">
          <a href="#" className="no-underline text-purple-600">
            Я забыл пароль
          </a>
          <a href="#" className="no-underline text-purple-600">
            Войти как тренер
          </a>
        </div>
        <div className="mb-5">
          Нет аккаунта?{" "}
          <a href="#" className="no-underline text-purple-600">
            Зарегистрироваться
          </a>
        </div>
      </div>
      <div className="w-12 flex justify-between py-2">
        <button className="bg-white border border-purple-600 px-2 py-1 cursor-pointer">
          EN
        </button>
        <button className="bg-white border border-purple-600 px-2 py-1 cursor-pointer">
          RU
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
