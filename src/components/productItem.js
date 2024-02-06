import React from 'react';

const ProductItem = ({ title, price, discount, category_id, id }) => {

  let pricePruduct = price - price * discount / 100

  return (
    <div className='product-card'>
      {
        discount===null ? <>
        <h3>{title}</h3>
        <p>{price}</p></> : <>
        <div className="discount-item">{discount} %</div>
        <h3>{title}</h3>
        <p className='old-price'>{price} COM</p>
        <p>{Math.floor(pricePruduct)} COM</p>
        </>
      }
    </div>
  );
};

export default ProductItem;