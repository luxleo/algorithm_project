import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
	return (
		<>
			<div className="homecontainer">
				<div className="card_link">
					<Link to="route-tracker" className="card">
						Route Tracker
					</Link>
					<Link to="sorting-bars" className="card">
						Sorting Bars
					</Link>
				</div>
			</div>
		</>
	);
};

export default Home;
