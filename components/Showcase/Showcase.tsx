const Showcase = () => {
	return (
		<section
			id='showcase'
			className='pt-[10vh] mx-auto w-full h-screen bg-gradient-to-br from-white via-white to-brand'
		>
			<div className='flex items-center h-full w-4/5 max-w-5xl m-auto'>
				<div className='flex  lg:justify-between w-full'>
					<div>
						<h1 className='text-4xl font-black text-black'>Here for Struggling Clients</h1>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero exercitationem
							temporibus sequi.
						</p>
					</div>
					<div className='hidden lg:block'>
						<h1 className='text-4xl font-black'>Here for Struggling Clients</h1>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero exercitationem
							temporibus sequi.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Showcase;
