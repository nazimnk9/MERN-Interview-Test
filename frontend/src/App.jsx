import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout"
import Home from "./components/Home";
import Projects from "./components/Projects";
import Templates from "./components/Templates";
import CreateDesign from "./components/CreateDesign";
import MainPage from "./pages/MainPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/templates',
        element: <Templates />
      },
    ]
  },
  {
    path: "/design/create",
    element: <CreateDesign />
  },
  {
    path: "/design/:id/edit",
    element: <MainPage />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
