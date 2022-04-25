import React from 'react'

const NavBar = () => {
  return (
		<nav
			className='navbar navbar-dark border border-4 border-white  '
			style={{background: '#e3f2fd' }}
		>
			<div className='container'>
				<a className='navbar-brand text-dark' href='/'>
					React Redux App
				</a>
			</div>
		</nav>
  );
}

export default NavBar