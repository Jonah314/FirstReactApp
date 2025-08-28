import React from 'react';
import './ProductAreaCss.css';
import { ShoppingCart } from 'react-flaticons';
//import { productSorter } from '../../productArray.js';
import image from '../../Images/PunkRockUnicorn.png'; 
import { ProductArray } from '../../productArray.js';
import { displayProducts } from './displayProducts.jsx';

function ProductBox(){
    
    
    
    const productDisplay = displayProducts('food');
    
    return (
        <div className='grid m-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4'>
            {productDisplay}
        </div>
    )
}

export default ProductBox;


