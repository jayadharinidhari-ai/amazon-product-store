
import { useState, useEffect } from 'react';
import './App.css';

function Header() {
  return <header><h1>Amazon Product Store</h1></header>;
}

function ProductCard({ name, price, quantity, color, city, setColor, setCity, add, remove, reset }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <h3>Price: ₹{price}</h3>

      <label>Colour: </label>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option>Black</option>
        <option>Blue</option>
        <option>White</option>
      </select>

      <br /><br />

      <label>Delivery City: </label>
      <input value={city} onChange={(e) => setCity(e.target.value)} />

      <p>Quantity: {quantity}</p>

      <button onClick={add}>Add to Cart</button>{' '}
      <button onClick={remove} disabled={quantity === 0}>Remove One</button>{' '}
      <button onClick={reset}>Reset Cart</button>

      <h3>Total: ₹{quantity * price}</h3>
      <p>{quantity === 0 ? 'Cart is empty' : 'Product added to cart'}</p>
    </div>
  );
}

function Footer() {
  return <footer>© 2026 Amazon Product Store</footer>;
}

export default function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [deliveryCity, setDeliveryCity] = useState('Coimbatore');
  const [showProduct, setShowProduct] = useState(true);

  useEffect(() => {
    document.title = 'Amazon Product Store';
  }, []);

  return (
    <>
      <Header />

      <button onClick={() => setShowProduct(!showProduct)}>
        Show/Hide Product
      </button>

      {showProduct && (
        <ProductCard
          name="Wireless Mouse"
          price={499}
          quantity={quantity}
          color={selectedColor}
          city={deliveryCity}
          setColor={setSelectedColor}
          setCity={setDeliveryCity}
          add={() => setQuantity(quantity + 1)}
          remove={() => setQuantity(Math.max(0, quantity - 1))}
          reset={() => setQuantity(0)}
        />
      )}

      <Footer />
    </>
  );
}
