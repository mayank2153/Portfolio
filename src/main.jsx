import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { Analytics } from "@vercel/analytics/react"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Projects from './components/Projects.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import TracingBeam from './components/tracingbeam.jsx';
const AppLayout = () => {
  return (
    <div className="relative w-full h-full min-w-screen overflow-hidden      bg-[#0a1930]">
      <Analytics />
      <Navbar className="relative " />
      <div className="relative w-full h-full">

        <App />
      </div>
      <Footer className="relative z-1 " />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);