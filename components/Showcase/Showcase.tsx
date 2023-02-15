const Showcase = () => {
	return (
		<section id='showcase' className='py-[10vh] mx-auto w-full h-screen bg-cream'>
			<div className='flex items-center h-full w-11/12 md:w-4/5 max-w-5xl m-auto'>
				<div className='flex  lg:justify-between w-full'>
					<div className='w-full lg:w-4/5'>
						<h1 className='text-5xl md:text-6xl font-black text-black'>
							Your <span className='text-brand'>brand</span> deserves <br /> a{' '}
							<span className='underline'>website</span>
							<span className='text-brand'>.</span>
						</h1>
						<p className='py-4 text-sm md:text-base text-gray-800'>
							Offering you and your brand an opportunity to have a website at an affordable price.
						</p>
						<div className='flex w-full mt-4'>
							<a
								className='px-4 py-2 md:px-6 md:py-4 bg-brand rounded-full border-2 border-brand text-white uppercase font-bold inline-block hover:bg-white hover:text-brand mr-4 transition-all ease-in-out duration-75'
								href='#why-us'
							>
								See Pricing
							</a>
							<a
								className='px-4 py-2 md:px-6 md:py-4 bg-transparent rounded-full border-2 border-brand text-brand uppercase font-bold inline-block hover:bg-opacity-75'
								href='#services'
							>
								Our Services
							</a>
						</div>
					</div>
					<div className='hidden lg:block'></div>
				</div>
			</div>
		</section>
	);
};

export default Showcase;
