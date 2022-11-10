export default function MerchCard({ data, id, addToCart }) {
  const addCartHandler = () => {
    addToCart(id, data.name, data.price);
  };

  return (
    <div className="card">
      <div className="images">
        <img src={data.img} alt={data.name} />
      </div>
      <p className="name">{data.name}</p>
      <p className="description">{data.description}</p>
      <p className="price">${data.price}</p>
      <button onClick={addCartHandler}>Add to Cart</button>
    </div>
  );
}
