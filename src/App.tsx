import LoginForm from "./components/LogiForm.js";
import Navbar from "./components/Navbar.js";
import Calendar from "./components/Calendar.js";
import Header from "./components/Header.js";
import "./index.css";

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] h-screen">
      <div className="row-span-2  p-4">
        <Navbar />
      </div>
      <div className="bg-white p-4">
        <Header />
      </div>
      <div className="bg-white p-4">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
