import React from 'react';
import './App.css';
import StoreTable from './components/StoreTable';
import products from './components/products.json';
import { useEffect, useState } from 'react';

function App() {
  const [storeProducts, setStoreProducts] = useState(products);

  useEffect(() => {
    // Ваша логика обработки данных при изменении storeProducts
  }, [storeProducts]);

  return (
    <div className="App">
      <header className="App-header">
        <StoreTable storeName="My Store" products={storeProducts} />
      </header>
    </div>
  );
}






// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <StoreTable storeName="My Store" products={products} />
//         {/* State[product, setProduct] = useState(products) */}
//       </header>
//     </div>
//   );
// }

 export default App;
