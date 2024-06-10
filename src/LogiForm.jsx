import React, { useState } from "react";
import LogoSvg from "./assets/svgs/LogoSvg";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        height: "100vh",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LogoSvg />

        <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>
          Вход в Sirius Future
        </h1>

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            fontSize: "16px",
          }}
        />

        <div
          style={{ position: "relative", width: "100%", marginBottom: "10px" }}
        >
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
          />
          <button
            onClick={toggleShowPassword}
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div
          style={{
            width: "100%",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            type="checkbox"
            id="rememberMe"
            style={{ marginRight: "10px" }}
          />
          <label htmlFor="rememberMe">Запомнить меня</label>
        </div>

        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#8D7FC7",
            color: "#fff",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Войти
        </button>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <a href="#" style={{ textDecoration: "none", color: "#8D7FC7" }}>
            Я забыл пароль
          </a>
          <a href="#" style={{ textDecoration: "none", color: "#8D7FC7" }}>
            Войти как тренер
          </a>
        </div>

        <div style={{ marginBottom: "20px" }}>
          Нет аккаунта?{" "}
          <a href="#" style={{ textDecoration: "none", color: "#8D7FC7" }}>
            Зарегистрироваться
          </a>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 0",
        }}
      >
        <button
          style={{
            backgroundColor: "#fff",
            border: "1px solid #8D7FC7",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          EN
        </button>
        <button
          style={{
            backgroundColor: "#fff",
            border: "1px solid #8D7FC7",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          RU
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
