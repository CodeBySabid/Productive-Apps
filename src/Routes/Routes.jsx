import { createBrowserRouter, Route } from "react-router-dom";
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
    element: <MainLayout />,
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
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }
    ]
  },
])

export default router
