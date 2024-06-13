import { useState } from "react";
import Navbar from "./components/Navbar";
import Calendar from "./components/Calendar";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";
import LoginForm from "./components/LogiForm";

const App = () => {
  const [activeView, setActiveView] = useState<number | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLinkClick = (index: number) => {
    setActiveView(index);
  };

  const handleLogin = (email: string, password: string) => {
    if (email === "demo@demo" && password === "demo") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="h-screen">
      {isAuthenticated ? (
        <div className="grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] h-full">
          <div className="row-span-2 p-4">
            <Navbar onLinkClick={handleLinkClick} />
          </div>
          <div className="bg-white p-4">
            <Header
              headerText={activeView === 0 ? "Добро пожаловать, Михаил!" : ""}
            />
          </div>
          <div className="bg-white p-4">
            {activeView === 0 && <Main />}
            {activeView === 1 && <Calendar />}
          </div>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
