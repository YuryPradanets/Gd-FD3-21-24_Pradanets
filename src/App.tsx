import React from 'react';
import './App.css';
import StoreTable from './components/StoreTable'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StoreTable storeName="My Store" products={[{ name: 'Product 1', price: 10, quantity: 5 }, { name: 'Product 2', price: 20, quantity: 3 }]} />
      </header>
    </div>
  );
}

export default App;
