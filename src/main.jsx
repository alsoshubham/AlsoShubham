import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import "./index.css";
import "./App.css";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import Socials from "./components/Socials.jsx";
import Services from "./pages/Services.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/projects",
				element: <Projects />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "*",
				element: <div>Not Found</div>,
			},
			{
				path: "/socials",
				element: <Socials />,
			},
      {
        path: "/services",
        element: <Services/>
      }
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);


