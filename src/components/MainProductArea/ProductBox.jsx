import React from 'react';
import './ProductAreaCss.css';
import { ShoppingCart } from 'react-flaticons';

import image from '../../Images/PunkRockUnicorn.png'; 
import { ProductArray } from '../../productArray.js';

function ProductBox(){
    
    
    
    const products =[];
    for(const prod in ProductArray){
        const product =(
            <div className = 'productBox grid grid-rows-auto '>
            
                <div className = 'rounded-lg overflow-hidden aspect-square bg-gray-100 hover:scale-[1.1]'>
                    <img src = {ProductArray[prod].Link} />
                </div>
                
                <h1 className = 'text-center text-sm mt-2'>{ProductArray[prod].title}</h1>
                
                <h2 className = 'bg-blue-500 mx-2 md-3 text-sm'>DropDown Menu </h2>
                
                <div className= 'grid grid-cols-2 mx-4 text-base my-2'>
                    <div className='place-content-start items-center flex '><h1>${ProductArray[prod].price}</h1></div>
                    <div className= 'place-content-evenly rounded-lg items-center flex bg-gray-100'><ShoppingCart color='black' className='size-6'  /></div>
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


