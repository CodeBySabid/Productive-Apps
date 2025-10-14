import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Componenets/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import HeroSection from "../Componenets/HeroSection";
import MainAllApps from "../Componenets/MainAllApps";
import Installation from "../Componenets/Installation";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loadding....</p>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/hero',
        element: <HeroSection></HeroSection>,
      },
      {
        path: '/mainapp',
        element: <MainAllApps></MainAllApps>,
      },
      {
        path: '/installation',
        element: <Installation></Installation>,
      },
    ]
  },
])

export default router
