import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import "./style/App.css";
import MainOutlet from "./pages/MainOutlet";
import AllTasks from "./pages/AllTasks";
import NewTodo from "./pages/NewTodo";
import Setting from "./pages/Setting";
import HomePage from "./pages/HomePage";
function App() {
  const [theme, setTheme] = useState(false);
  console.log(theme);
  const handleTheme = () => {};
  const APP_RWD_setting = [
    "lg:grid",
    "lg:grid-cols-4",
    "md:grid",
    "md:grid-cols-2",
    "sm:grid-cols-1",
  ].join(" ");

  useEffect(() => {}, [theme]);

  return (
    <div
      className={`${theme ? "light" : "dark"} relative ${APP_RWD_setting}  p-4`}
    >
      <header className="w-full lg:col-span-1 col-start-1 md:col-span-2">
        <Header />
      </header>

      <main className="lg:col-start-2 lg:col-span-3 md:col-start-3">
        <Routes>
          <Route path="/" element={<MainOutlet />}>
            <Route index element={<HomePage />} />
            <Route path="alltasks" element={<AllTasks />} />
            <Route path="newtodo" element={<NewTodo />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
      </main>

      <button
        className={`absolute bottom-0 left-4  border-2 p-2`}
        onClick={() => setTheme(!theme)}
      >
        Theme
      </button>
    </div>
  );
}

export default App;
