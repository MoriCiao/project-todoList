import { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { TextSizeProvider } from "./components/todoCotext";
import { todoContext } from "./components/todoCotext";
import Header from "./pages/Header";
import "./style/App.css";
import MainOutlet from "./pages/MainOutlet";
import AllTasks from "./pages/AllTasks";
import NewTodo from "./pages/NewTodo";
import Setting from "./pages/Setting";
import HomePage from "./pages/HomePage";

function App() {
  const APP_RWD_setting = [
    "lg:grid-cols-3",
    "md:grid-cols-2",
    "sm:grid-rows-1",
  ].join(" ");

  return (
    <TextSizeProvider>
      <div
        className={`relative grid w-auto ${APP_RWD_setting} items-start h-[100vh]`}
      >
        <header className="w-full h-full col-start-1 lg:col-span-1 md:col-span-1 ">
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
    </TextSizeProvider>
  );
}

export default App;
