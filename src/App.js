import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Home from './Home/Home';
import RouteTracker from './RouteTracker/RouteTracker';
import SortingBars from './SortingBars/SortingBars';

function App() {
	return (
		<div className="App">
			<header className="App-header"></header>
			<BrowserRouter>
				<div className="navContainer">
					<div className="navBar">
						<Link to="/" className="navlink">
							<div className="navDiv">Home</div>
						</Link>
						<Link to="route-tracker" className="navlink">
							<div className="navDiv">Route Tracker</div>
						</Link>
						<Link to="sorting-bars" className="navlink">
							<div className="navDiv">Sorting Bars</div>
						</Link>
					</div>
				</div>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="route-tracker" element={<RouteTracker />} />
					<Route path="sorting-bars" element={<SortingBars />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
