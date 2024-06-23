import React from 'react';

interface Product {
  name: string;
  price: number;
  quantity: number;
}

interface StoreProps {
  storeName: string;
  products: Product[];
}

const StoreTable: React.FC<StoreProps> = ({ storeName, products }) => {
  return (
    <div>
      <h2>{storeName}</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <img
                  src={`https://picsum.photos/200/300?random=${index}`}
                  alt={product.name}
                  style={{ width: '50px', height: '50px' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StoreTable;