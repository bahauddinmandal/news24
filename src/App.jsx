import Navbar from './components/Navbar';
import NewsBord from './components/NewsBord';
import { useState } from 'react';

function App() {
	const [category, setCategory] = useState('general');

	return (
		<>
			<Navbar
				category={category}
				setCategory={setCategory}
			/>
			<NewsBord category={category} />
		</>
	);
}

export default App;
