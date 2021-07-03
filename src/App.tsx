import React, { useEffect, useState } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar } from './components';

function App(): JSX.Element {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data }: any = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
    return () => {
      fetchProducts();
    };
  }, []);
  return (
    <div className="container">
      <Navbar />
      <Products products={products} />
    </div>
  );
}

export default App;
