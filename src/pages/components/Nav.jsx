// MODULES //

import { NavLink } from "react-router";


// MAIN //

function Nav() {
	return(
		<>
			<NavLink className={( { isActive } ) => ( isActive ? "text-purple-500 underline" : "text-blue-500" )} to="/">Home</NavLink>
			<NavLink className={( { isActive } ) => ( isActive ? "text-purple-500 underline" : "text-blue-500" )} to="/blog">Blog</NavLink>
			<NavLink className={( { isActive } ) => ( isActive ? "text-purple-500 underline" : "text-blue-500" )} to="/portfolio">Portfolio</NavLink>
		</>
	);
}


// EXPORTS //

export default Nav;
