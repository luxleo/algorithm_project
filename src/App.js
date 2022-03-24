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
					<div>
						<Link to="Home" className="navlink">
							Home
						</Link>
					</div>
					<div>
						<Link to="route-tracker" className="navlink">
							Route Tracker
						</Link>
					</div>
					<div>
						<Link
							to="sorting-bars"
							className="navlink"
							element={<SortingBars />}
						>
							Sorting Bars
						</Link>
					</div>
				</div>
				<div className="card_link">
					<div className="card">
						<Link to="route-tracker" className="navlink">
							Route Tracker
						</Link>
					</div>
					<div className="card">
						<Link
							to="sorting-bars"
							className="navlink"
							element={<SortingBars />}
						>
							Sorting Bars
						</Link>
					</div>
				</div>
				<Routes>
					<Route path="route-tracker" element={<RouteTracker />} />
					<Route path="sorting-bars" element={<SortingBars />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
