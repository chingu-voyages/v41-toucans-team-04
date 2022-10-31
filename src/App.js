import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';
import About from './components/About';
import Plan from './components/Plan';
import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from 'react-router-dom';
import './fonts/Atkinson-Hyperlegible-Regular-102.ttf';
import './fonts/Atkinson-Hyperlegible-Bold-102.ttf';
import './fonts/Atkinson-Hyperlegible-BoldItalic-102.ttf';
import './fonts/Atkinson-Hyperlegible-Italic-102.ttf';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/about" element={<About />} />
					<Route path="/plan" element={<Plan />} />
					{/*<Route path="/shopping" element={<Shop />} /> */}
					{/* Components not made yet */}

					<Route path="*" element={<Navigate to="/" />} />

					{/* Wildcard - if a route is entered in URL with no set path, it will redirect to Main */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
