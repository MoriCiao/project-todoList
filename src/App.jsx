import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { TasksProvider } from "./contexts/TasksContext";
import { UIContext } from "./contexts/UIContext";
import "./style/App.css";
import Header from "./pages/Header";
import MainOutlet from "./pages/MainOutlet";
import AllTasks from "./pages/AllTasks";
import NewTodo from "./pages/NewTodo";
import Setting from "./pages/Setting";
import HomePage from "./pages/HomePage";
import ToTopBtn from "./components/ToTopBtn";
import GoToNewTodoIcon from "./components/GoToNewTodoIcon";

function App() {
  const UICtx = useContext(UIContext);

  return (
    <div
      className={`APP-div relative flex h-[100vh] w-auto flex-col items-start overflow-y-auto 2xl:grid 2xl:grid-cols-3`}
    >
      <TasksProvider>
        <header
          ref={UICtx.headerRef}
          className="col-start-1 h-full w-full md:col-span-1 lg:col-span-1"
        >
          <Header />
        </header>
        <main
          ref={UICtx.mainRef}
          className="w-full md:col-span-1 md:col-start-2 lg:col-span-2 lg:col-start-2"
        >
          <Routes>
            <Route path="/" element={<MainOutlet />}>
              <Route index element={<HomePage />} />
              <Route path="alltasks" element={<AllTasks />} />
              <Route path="newtodo" element={<NewTodo />} />
              <Route path="setting" element={<Setting />} />
            </Route>
          </Routes>
        </main>

        <div className="fixed right-8 bottom-8 flex flex-col gap-8">
          <ToTopBtn />
          <GoToNewTodoIcon />
        </div>
      </TasksProvider>
    </div>
  );
}

export default App;
