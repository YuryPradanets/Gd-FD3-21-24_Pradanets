import React from 'react';
import styles from './StoreTableStyles.module.css';

interface Product {
  name: string;
  price: number;
  quantity: number;
  image: string;
}
interface StoreProps {
  storeName: string;
  products: Product[];
}

const StoreTable: React.FC<StoreProps> = ({ storeName, products }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{storeName}</h2>
      <table >
        <thead>
         <tr>
            <th className={styles.name}>Name</th>
            <th className={styles.price}>Price</th>
            <th className={styles.quantity}>Quantity</th>
            <th className={styles.image}>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className={styles.name}>{product.name}</td>
              <td className={styles.price}>{product.price}</td>
              <td className={styles.quantity}>{product.quantity}</td>
              <td className={styles.imgBlock}>
                <img
                  src={product.image}
                  alt={product.name}
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