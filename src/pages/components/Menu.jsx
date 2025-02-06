// MODULES //

import { useRef } from "react";
import { NavLink } from "react-router";

// MAIN //


function Menu() {
	const menuRef = useRef( null );

	function handleTouch() {
		if ( menuRef.current ) {
			menuRef.current.classList.toggle( 'hidden' );
		}
	}

	return(
		<div className="flex items-center justify-center md:hidden">
			<div
				className="flex items-center justify-center"
				tabIndex={1}
				onTouchStart={handleTouch}
			>
				<svg viewBox="0 0 30 30" width="30px" height="30px" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g stroke="#1C274C" strokeWidth="2" strokeLinecap="round">
						<path d="M30 7H4M25 12H4M20 17H4"/>
					</g>
				</svg>
			</div>
			<div ref={menuRef} className="absolute top-10 right-10 hidden z-10 px-3 py-2 rounded-md bg-yellow-100">
				<ul className="flex flex-col gap-1.5 text-start">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to='/blog'>Blog</NavLink>
					</li>
					<li>
						<NavLink to='/portfolio'>Portfolio</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
}


// EXPORTS //

export default Menu;
