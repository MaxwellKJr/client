import Image from 'next/image';
import graph from '../../lib/img/line-graph.jpg';

const Why = () => (
	<section id='why-us' className='py-24 mx-auto w-full bg-cream'>
		<div className='flex flex-col items-center md:w-4/5 max-w-5xl m-auto'>
			<h1 className='text-xl md:text-2xl font-bold relative w-11/12 sm:w-full h-full pl-6 mb-12 after:content-[""] after:absolute after:top-0 after:left-0 after:bg-brand after:w-2 after:h-full'>
				Why you need a website
			</h1>
			<div className=''>
				<div className='flex flex-col md:flex-row lg:justify-between items-center w-full'>
					<div className='md:mr-2 w-11/12'>
						<h2 className='text-3xl text-brand font-bold mb-4'>Worldwide Recognition.</h2>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, voluptate.</p>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla!</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Id earum beatae, delectus
							ipsa quia illum!
						</p>
					</div>
					<div className='w-full sm:w-11/12 md:w-4/5 mt-4 md:mt-0 md:ml-2'>
						<Image src={graph} alt='Line graph illustration' placeholder='blur' />
					</div>
				</div>
			</div>
			<div className='mt-16'>
				<div className='flex flex-col-reverse md:flex-row lg:justify-between items-center w-full'>
					<div className='w-full sm:w-11/12 md:w-4/5 mt-4 md:mt-0 md:mr-4'>
						<Image src={graph} alt='Line graph illustration' placeholder='blur' />
					</div>
					<div className='md:ml-4 w-11/12'>
						<h2 className='text-xl text-brand font-bold mb-4'>Worldwide Recognition.</h2>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, voluptate.</p>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla!</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Id earum beatae, delectus
							ipsa quia illum!
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Why;
