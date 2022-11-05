import "./Cart.css";

export default function Cart(props) {
  const closeCart = () => {
    props.setOpen(false);
  };
  const openCart = () => {
    props.setOpen(true);
  };

  // const removeCartHandler = () => {
  //   props.removeFromCart();
  // };

  return (
    <>
      {!props.open && (
        <div className="cartIcon" onClick={openCart}>
          <span class="material-icons">shopping_cart</span>
        </div>
      )}
      {props.open && (
        <>
          <div className="backGround"></div>
          <div className="cart">
            <header>
              <div>Shoping Cart</div>
              <span class="material-icons" onClick={closeCart}>
                close
              </span>
            </header>
            {props.cart.length === 0 && <div className="empty">Cart is Empty!</div>}
            <ul className="cartList">
              {props.cart &&
                props.cart.map((item, idx) => {
                  return (
                    <li key={idx} id={idx}>
                      <div className="image">
                        <img src={item.image} alt="" />
                      </div>
                      <div>{item.name}</div>
                      <button
                        onClick={() => {
                          props.removeFromCart(item);
                        }}
                      >
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
