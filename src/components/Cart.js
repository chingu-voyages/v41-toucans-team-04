import './Cart.css';

export default function Cart(props) {
	const closeCart = () => {
		props.setOpen(false);
	};
	return (
		<>
			{props.open && (
				<>
					<div className="backGround"></div>
					<div className="cart">
						<header>
							<div>Shopping Cart</div>
							<span className="material-icons" onClick={closeCart}>
								close
							</span>
						</header>
						{props.cart.length === 0 && (
							<div className="empty">Cart is Empty!</div>
						)}
						<ul className="cartList">
							{props.cart &&
								props.cart.map((item, idx) => {
									return (
										<li key={idx} id={idx}>
											<div className="cartItemName">{item.name}</div>
											<div className="cartItemPrice">
												${item.price}
											</div>
											<button
												className="btnRemove"
												onClick={() => {
													props.removeFromCart(item);
												}}>
												Remove
											</button>
										</li>
									);
								})}
						</ul>
					</div>
				</>
			)}
		</>
	);
}
