import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

import SparklesCore from './components/Sparkles';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Projects from './components/Projects.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/Footer.jsx';

const AppLayout = () => {
  return (
    <div className="relative w-full h-full min-w-screen overflow-hidden">
      <SparklesCore
        className="absolute inset-0 z-0" // Adjust the positioning and z-index as needed
        particleDensity={20} // Customize particle density and other props as needed
        particleColor="#ffffff"
        background="#2E2C5D"
        speed={4}
      />
      <Navbar className="relative " />
      <div className="relative w-full h-full">
        <Outlet/>
      </div>
      <Footer className="relative " />
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
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);