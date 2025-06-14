import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import "./style/App.css";
import MainOutlet from "./pages/MainOutlet";
import AllTasks from "./pages/AllTasks";
import NewTodo from "./pages/NewTodo";
import Setting from "./pages/Setting";
import HomePage from "./pages/HomePage";
import BtnTheme from "./components/BtnTheme";
function App() {
  const handleTheme = () => {};
  const [theme, setTheme] = useState(false);
  console.log(theme);
  const APP_RWD_setting = [
    "lg:grid-cols-3",
    "md:grid-cols-2",
    "sm:grid-cols-1",
  ].join(" ");

  return (
    <div
      className={`${
        theme ? "light" : "dark"
      } relative grid ${APP_RWD_setting}  p-4`}
    >
      <header className="w-full col-start-1 lg:col-span-1   md:col-span-1">
        <Header />
      </header>

      <main className="lg:col-start-2 lg:col-span-2 md:col-start-2 md:col-span-1">
        <Routes>
          <Route path="/" element={<MainOutlet />}>
            <Route index element={<HomePage />} />
            <Route path="alltasks" element={<AllTasks />} />
            <Route path="newtodo" element={<NewTodo />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
      </main>

      {/* <BtnTheme theme={theme} setTheme={setTheme} /> */}
    </div>
  );
}

export default App;
