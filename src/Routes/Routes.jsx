import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Componenets/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import HeroSection from "../Componenets/HeroSection";
import MainAllApps from "../Componenets/MainAllApps";
import Installation from "../Componenets/Installation";
import AppDeteils from "../Componenets/AppDeteils";

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
      {
        path: '/appdeteils/:id',
        element: <AppDeteils></AppDeteils>
      },
    ]
  },
])

export default router
