import { createBrowserRouter, Outlet } from "react-router-dom";
import { lazy } from "react";
import ErrorPage from "../pages/ErrorPage";
import SuspenseWrapper from "./SuspenseWrapper";

// Lazy load all pages for better performance
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Projects = lazy(() => import("../pages/Projects"));
const Blog = lazy(() => import("../pages/Blog"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Roadmap = lazy(() => import("../pages/Roadmap"));
const Calendar = lazy(() => import("../pages/Calendar"));

// Create and export the router
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />, // Will be replaced with MainLayout later
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <Home />
          </SuspenseWrapper>
        ),
      },
      {
        path: "about",
        element: (
          <SuspenseWrapper>
            <About />
          </SuspenseWrapper>
        ),
      },
      {
        path: "projects",
        element: (
          <SuspenseWrapper>
            <Projects />
          </SuspenseWrapper>
        ),
      },
      {
        path: "blog",
        element: (
          <SuspenseWrapper>
            <Blog />
          </SuspenseWrapper>
        ),
      },
      {
        path: "gallery",
        element: (
          <SuspenseWrapper>
            <Gallery />
          </SuspenseWrapper>
        ),
      },
      {
        path: "roadmap",
        element: (
          <SuspenseWrapper>
            <Roadmap />
          </SuspenseWrapper>
        ),
      },
      {
        path: "calendar",
        element: (
          <SuspenseWrapper>
            <Calendar />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]);
