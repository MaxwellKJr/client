import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => (
	<header className='w-full bg-black'>
		<nav className=' text-white'>
			<div className='flex justify-between items-center w-4/5 max-w-5xl m-auto'>
				<a href='#' className='px-2 py-4 font-bold'>
					Struggling Clients
				</a>

				<ul className='hidden md:flex items-center uppercase text-xs'>
					<li>
						<a href='#' className='px-2 py-4'>
							Home
						</a>
					</li>
					<li>
						<a href='#about' className='px-2 py-4'>
							About
						</a>
					</li>
					<li>
						<a href='#solutions' className='px-2 py-4'>
							Solutions
						</a>
					</li>
					<li>
						<a href='#projects' className='px-2 py-4'>
							Projects
						</a>
					</li>
					<li>
						<a href='#contact' className='px-2 py-4'>
							Contact
						</a>
					</li>
				</ul>

				<FontAwesomeIcon icon={faBars} className='block md:hidden text-white h-6 cursor-pointer' />
			</div>
		</nav>
	</header>
);

export default Header;
