import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeItems = ({ items }) => {
	return (
		<div className='welcome-items'>
			{items.map(({ id, title, description }) => (
				<Link key={id} to={`/description/${id}`} state={{ fromWelcome: true }}>
					<div className='card card-hov'>
						<h2>{title}</h2>
						<p>{description}</p>
					</div>
				</Link>
			))}
		</div>
	);
};

export default WelcomeItems;
