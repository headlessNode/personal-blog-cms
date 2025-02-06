// MODULES //

import { Outlet } from "react-router";
import Nav from "./Nav";
import Menu from "./Menu";


// MAIN //

function Layout() {
	return(
		<div className="px-3 font-display">
			<header className="py-2 flex">
				<h1 className="w-full text-size-h1 font-h1">
					CMS
				</h1>
				<div className="w-full hidden md:flex md:justify-start">
					<Nav/>
				</div>
				<Menu/>
			</header>
			<main>
				<Outlet/>
			</main>
		</div>
	);
}


// EXPORTS //

export default Layout;
