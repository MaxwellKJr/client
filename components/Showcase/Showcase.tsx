const Showcase = () => {
	return (
		<section
			id='showcase'
			className='py-[10vh] mx-auto w-full h-screen bg-gradient-to-br from-white via-white to-brand'
		>
			<div className='flex items-center h-full w-4/5 max-w-5xl m-auto'>
				<div className='flex  lg:justify-between w-full'>
					<div className='w-full lg:w-4/5'>
						<h1 className='text-3xl md:text-6xl font-black text-black'>
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
								href='#pricing'
							>
								See Pricing
							</a>
							<a
								className='px-4 py-2 md:px-6 md:py-4 bg-white rounded-full border-2 border-brand text-brand uppercase font-bold inline-block hover:bg-opacity-75'
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
