// /* eslint-disable react/jsx-no-undef */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About/About.jsx";
import './index.css'
import Contact from "./components/ContactPage/Contact.jsx";
import Projects from "./components/Projects/ProjectsSection.jsx";

const router =  createBrowserRouter([
    {
        path: '/',
        element:<Layout/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
              path:"ProjectSection",
              element:<Projects/>
          }
        ]
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>
);

export default createRoot;
