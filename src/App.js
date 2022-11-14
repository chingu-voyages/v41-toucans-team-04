import Header from './components/Header';
import Main from './components/Main';
import Shop from './components/Shop';
import Menu from './components/Menu';
import About from './components/About';
import Plan from './components/Plan';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import Cart from './components/Cart';
import { useState } from 'react';

export default function App() {
	const [open, setOpen] = useState(false);
	const [cart, setCart] = useState([]);

	const addToCart = (id, name, price) => {
		const newItem = {
			id: id,
			name: name,
			price: price,
		};
		setCart([...cart, newItem]);
		setOpen(true);
	};

	const removeFromCart = (item) => {
		let cartItem = [...cart];
		cartItem = cartItem.filter((cartItem) => cartItem.id !== item.id);
		setCart(cartItem);
	};

	return (
		<div className="App">
			<Router>
				<Header setOpen={setOpen} />
				<Cart
					removeFromCart={removeFromCart}
					cart={cart}
					open={open}
					setOpen={setOpen}
				/>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route
						path="/menu"
						element={<Menu addToCart={addToCart} />}
					/>
					<Route path="/about" element={<About />} />
					<Route
						path="/plan"
						element={<Plan addToCart={addToCart} />}
					/>
					<Route
						path="/shop"
						element={<Shop addToCart={addToCart} />}
					/>
					{/* Components not made yet */}

					<Route path="*" element={<NotFound />} />

					{/* Wildcard - if a route is entered in URL with no set path, it will redirect to Main */}
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}
