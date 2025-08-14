import { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { TextSizeProvider, todoContext } from "./components/todoCotext";
import Header from "./pages/Header";
import "./style/App.css";
import MainOutlet from "./pages/MainOutlet";
import AllTasks from "./pages/AllTasks";
import NewTodo from "./pages/NewTodo";
import Setting from "./pages/Setting";
import HomePage from "./pages/HomePage";
import ToTopBtn from "./components/ToTopBtn";
import GoToNewTodo from "./components/GoToNewTodo";

function App() {
  const APP_RWD_setting = [
    "lg:grid-cols-3",
    "md:grid-cols-1",
    "sm:grid-cols-1",
  ].join(" ");

  return (
    <TextSizeProvider>
      <div
        className={`APP-div relative w-auto lg:grid lg:grid-cols-3 flex flex-col  items-start h-[100vh] lg:overflow-hidden overflow-y-auto`}
      >
        <header className="w-full h-full col-start-1 lg:col-span-1 md:col-span-1">
          <Header />
        </header>
        <main className="lg:col-start-2 lg:col-span-2 md:col-start-2 md:col-span-1 w-full">
          <Routes>
            <Route path="/" element={<MainOutlet />}>
              <Route index element={<HomePage />} />
              <Route path="alltasks" element={<AllTasks />} />
              <Route path="newtodo" element={<NewTodo />} />
              <Route path="setting" element={<Setting />} />
            </Route>
          </Routes>
        </main>

        <div className="fixed bottom-8 right-8 flex flex-col gap-8">
          <ToTopBtn />
          <GoToNewTodo />
        </div>
      </div>
    </TextSizeProvider>
  );
}

export default App;
