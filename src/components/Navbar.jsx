const Navbar = ({ setCategory, category }) => {
	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary'>
			<div className='container'>
				<a
					onClick={() => setCategory('general')}
					className='navbar-brand'
					href='#'>
					<span className='badge text-bg-danger fs-4'>News24</span>
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse'
					id='navbarNav'>
					<ul class='navbar-nav me-auto mb-2 mb-lg-0 ps-3'>
						<li class='nav-item'>
							<a
								onClick={() => setCategory('business')}
								class='nav-link'
								style={category == 'business' ? { color: 'red' } : {}}
								aria-current='page'
								href='#'>
								Business
							</a>
						</li>
						<li class='nav-item'>
							<a
								onClick={() => setCategory('entertainment')}
								class='nav-link'
								style={category == 'entertainment' ? { color: 'red' } : {}}
								href='#'>
								Entertainment
							</a>
						</li>
						<li class='nav-item'>
							<a
								onClick={() => setCategory('health')}
								class='nav-link'
								style={category == 'health' ? { color: 'red' } : {}}
								href='#'>
								Health
							</a>
						</li>
						<li class='nav-item'>
							<a
								onClick={() => setCategory('science')}
								class='nav-link'
								style={category == 'science' ? { color: 'red' } : {}}
								href='#'>
								Science
							</a>
						</li>
						<li class='nav-item'>
							<a
								onClick={() => setCategory('sports')}
								class='nav-link'
								style={category == 'sports' ? { color: 'red' } : {}}
								href='#'>
								Sports
							</a>
						</li>
						<li class='nav-item'>
							<a
								onClick={() => setCategory('technology')}
								class='nav-link'
								style={category == 'technology' ? { color: 'red' } : {}}
								href='#'>
								Technology
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
