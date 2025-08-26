import React from 'react';
import './ProductAreaCss.css';
import { ShoppingCart } from 'react-flaticons';

import image from '../../Images/PunkRockUnicorn.png'; 
import { ProductArray } from '../../productArray.js';

function ProductBox(){
    
    
    
    const products =[];
    for(const prod in ProductArray){
        const product =(
            <div className = 'productBox  '>
            
            <div className = 'rounded-lg overflow-hidden aspect-square'>
                <img src = {ProductArray[prod].Link} />
            </div>
            
            <h1 className = 'text-center'>{ProductArray[prod].title}</h1>
            
            <h2 className = 'bg-blue-500 mx-2'>DropDown Menu</h2>
            
            <div className= 'grid grid-cols-2 ml-2'>
                <div><h1>{ProductArray[prod].price}</h1></div>
                <div><ShoppingCart color='black' /></div>
            </div>


        </div>
        );
        products.push(product);
    }
        
    //lg:grid-cols-4 gap-3 p-2 md:grid-cols-3 sm:grid-cols-2
    
    return (
        <div className='grid m-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-2'>
            {products}
        </div>
    )
}

export default ProductBox;


