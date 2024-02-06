import React from 'react';
import {useSelector} from 'react-redux'
import ProductItem from './productItem';

const List = () => {
  const {productData} = useSelector(state=>state.product)

  return (
    <div className='product-list'>
      {
        productData.map(item=><ProductItem key={item.id} {...item}/>)
      }
    </div>
  );
};

export default List;