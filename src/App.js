import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import RouteTracker from './RouteTracker/RouteTracker';
import SortingBars from './SortingBars/SortingBars';

function App() {
	return (
		<div className="App">
			<header className="App-header"></header>
			<BrowserRouter>
				<div className="navBar">
					<Link to="Home" className="navlink">
						Home
					</Link>
					<Link to="route-tracker" className="navlink">
						Route Tracker
					</Link>
				</div>
				<Routes>
					<Route path="route-tracker" element={<RouteTracker />} />
					<Route path="/" element={<SortingBars />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
