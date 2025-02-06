// MODULES //

import { NavLink } from "react-router";
import { useAnimate, spring } from "motion/react";
import { useEffect, useRef, useState } from "react";


// MAIN //

function Nav() {
	const [ activeLink, setActiveLink ] = useState( 'home' );
	const [ scope, animate ] = useAnimate();
	const linkRefs = useRef( {
		home: null,
		blog: null,
		portfolio: null
	} );
	const prevClipPath = useRef( null );

	function calculateClipPath() {
		const container = scope.current;
		if ( container ) {
			const containerWidth = container.clientWidth;
			const currentLinkElement = linkRefs.current[activeLink];

			if ( currentLinkElement ) {
				const { offsetLeft, offsetWidth } = currentLinkElement;
				const clipLeft = ( offsetLeft / containerWidth ) * 100;
				const clipRight = ( ( containerWidth - ( offsetLeft + offsetWidth ) ) / containerWidth ) * 100;
				const newClipPath = `inset(0px ${clipRight}% 0px ${clipLeft}% round 10px)`;
				return newClipPath;
			}
		}
		return null;
	}

	useEffect( () => {
		if ( prevClipPath === null ) {
			prevClipPath.current = calculateClipPath();
		}
	}, [] );

	useEffect( () => {
		const newClipPath = calculateClipPath();
		if ( newClipPath ) {
			const fromClipPath = prevClipPath.current;
			animate( scope.current, {
				clipPath: newClipPath
			}, { 
				from: fromClipPath, 
				type: spring,
				bounce: 0.3,
				duration: 0.8
			} );
			prevClipPath.current = newClipPath;
		}
	}, [ activeLink ] );

	return (
		<div className="relative h-12 text-size-body-3 flex justify-center">
			<div className="absolute px-2 w-72 flex justify-around text-black bg-white">
				<NavLink className='w-full px-3 py-3 text-center' onClick={() => setActiveLink( 'home' )} to="/">Home</NavLink>
				<NavLink className='w-full px-3 py-3 text-center' onClick={() => setActiveLink( 'blog' )} to="/blog">Blog</NavLink>
				<NavLink className='w-full px-3 py-3 text-center' onClick={() => setActiveLink( 'portfolio' )} to="/portfolio">Portfolio</NavLink>
			</div>
			<div
				ref={scope}
				aria-hidden="true"
				className="absolute px-2 w-72 flex justify-around bg-blue-500 text-white"
			>
				<NavLink 
					ref={el => linkRefs.current.home = el || linkRefs.current.home}
					onClick={() => setActiveLink( 'home' )}
					className='px-3 py-3 w-full text-center'
					to="/"
					tabIndex={-1}
				>
					Home
				</NavLink>
				<NavLink 
					ref={el => linkRefs.current.blog = el || linkRefs.current.blog}
					onClick={() => setActiveLink( 'blog' )}
					className='w-full px-3 py-3 text-center'
					to="/blog"
					tabIndex={-1}
				>
					Blog
				</NavLink>
				<NavLink 
					ref={el => linkRefs.current.portfolio = el || linkRefs.current.portfolio }
					onClick={() => setActiveLink( 'portfolio' )}
					className='w-full px-3 py-3 text-center'
					to="/portfolio"
					tabIndex={-1}
				>
					Portfolio
				</NavLink>
			</div>
		</div>
	);
}


// EXPORTS //

export default Nav;
