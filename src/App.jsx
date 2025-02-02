// MODULES //

import { RouterProvider, createBrowserRouter } from "react-router";
import Home from "./pages/home/Home.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";


// VARIABLES //

const router = createBrowserRouter( [
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/blog",
		element: <Blog />
	},
	{
		path: "/portfolio",
		element: <Portfolio />
	}
] );


// MAIN //

function App() {
	return (
		<>
			<RouterProvider router={ router } />
		</>
	);
}


// EXPORTS //

export default App;
