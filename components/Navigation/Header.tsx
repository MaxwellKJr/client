import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import pageLinks from './PageLinks';

const links = pageLinks;

const Header = () => (
	<header className='w-full h-[10vh] bg-brand m-auto fixed'>
		<nav className='flex items-center h-full text-white'>
			<div className='flex justify-between items-center w-4/5 max-w-5xl m-auto'>
				<a href='/' className='font-bold'>
					Struggling Clients
				</a>

				<ul className='hidden md:flex items-center uppercase text-xs'>
					{links.map(link => (
						<li key={link.name}>
							<Link
								href={link.route}
								title={link.title}
								className='px-4 py-6 inline-block font-medium transition-all ease-in-out hover:opacity-80'
							>
								<span className='route-text'>{link.name}</span>
							</Link>
						</li>
					))}
				</ul>

				<FontAwesomeIcon icon={faBars} className='block md:hidden text-white h-6 cursor-pointer' />
			</div>
		</nav>
	</header>
);

export default Header;
