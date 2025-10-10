import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Allapp from "../Componenets/Allapp";
import MainLayout from "../Componenets/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import HeroSection from "../Componenets/HeroSection";
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
        path: '/allapp',
        element: <Allapp></Allapp>,
      },
      {
        path: '/f',
        element: <AppDeteils></AppDeteils>,
      },
    ]
  },
])

export default router
