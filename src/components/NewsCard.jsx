import pic from '../assets/react.svg';

const NewsCard = ({ title, description, src, url }) => {
	return (
		<div className='card bg-body-tertiary m-2 p-2 d-inline-block'>
			<img
				src={src ? src : pic}
				className='card-img-top'
				alt='News image'
			/>
			<div className='card-body'>
				<h5 className='card-title'>{title}</h5>
				<p className='card-text'>{description}</p>
				<a
					href={url}
					className='btn btn-primary'>
					Read more..
				</a>
			</div>
		</div>
	);
};

export default NewsCard;
