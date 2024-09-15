import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

const NewsBord = ({ category }) => {
	const [articles, setArticles] = useState([]);
	const [errmsg, setErrmsg] = useState('');
	const [loding, setLoding] = useState(true);

	useEffect(() => {
		fetchData();
	}, [category]);

	let fetchData = () => {
		let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
			import.meta.env.VITE_API_KEY
		}`;
		fetch(url)
			.then((res) => {
				setLoding(false);
				setErrmsg('');
				return res.json();
			})
			.then((data) => setArticles(data.articles))
			.catch((error) => {
				setLoding(false);
				setErrmsg('Unexpected error', error);
			});
		return setLoding(true);
	};

	return (
		<>
			{loding ? (
				<div class='text-center mt-5'>
					<div
						class='spinner-border'
						role='status'>
						<span class='visually-hidden'>Loading...</span>
					</div>
				</div>
			) : errmsg ? (
				<h1 className='text-center mt-5'>
					{errmsg}
					<br />
					<button
						onClick={() => fetchData()}
						class='btn btn-danger mt-3'>
						Restore
					</button>
				</h1>
			) : (
				<div className='container'>
					<h2 className='text-center'>
						{category === 'general' ? (
							<>
								Latest <span className='badge text-bg-danger'>News</span>
							</>
						) : (
							<span>
								<br />
								{category.toUpperCase()}
								<br />
								<hr />
							</span>
						)}
					</h2>
					{articles.map((news, index) => {
						return (
							<NewsCard
								key={index}
								title={news.title}
								description={news.description}
								src={news.urlToImage}
								url={news.url}
							/>
						);
					})}
				</div>
			)}
		</>
	);
};

export default NewsBord;
