import "./App.css";
import KanbanBoard from "./components/KanbanBoard";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Welcome from "./components/Welcome";
import CreateKanban from "./components/CreateKanban";

const router = createBrowserRouter([
  {
    path: "/kanban",
    element: <KanbanBoard />,
  },
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/createKanban",
    element: <CreateKanban />,
  },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
