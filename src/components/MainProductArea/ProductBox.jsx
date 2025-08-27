import React from 'react';
import './ProductAreaCss.css';
import { ShoppingCart } from 'react-flaticons';
//import { productSorter } from '../../productArray.js';
import image from '../../Images/PunkRockUnicorn.png'; 
import { ProductArray } from '../../productArray.js';

function ProductBox(){
    
    
    function displayProducts(arr){
        const newProductArr = arr || ProductArray;
        
        const products =[];
        for(const prod in newProductArr){
            const product =(
                <div className = 'productBox grid grid-rows-auto '>
                
                    <div className = 'rounded-lg overflow-hidden aspect-square bg-gray-100 hover:scale-[1.1] flex items-center'>
                        <img src = {newProductArr[prod].Link} />
                    </div>
                    
                    <h1 className = 'text-center text-sm mt-2'>{newProductArr[prod].title}</h1>
                    
                    <h2 className = 'bg-blue-500 mx-2 md-3 text-sm'>DropDown Menu </h2>
                    
                    <div className= 'grid grid-cols-2 mx-4 text-base my-2'>
                        <div className='place-content-start items-center flex '><h1>${newProductArr[prod].price}</h1></div>
                        <div className= 'place-content-evenly rounded-lg items-center flex bg-gray-100 border-2 border-white hover:border-black'><ShoppingCart color='black' className='size-6'  /></div>
                    </div>
                    


            </div>
            );
            products.push(product);
            
        } return products;
    
    }    
    const productDisplay = displayProducts();
    
    return (
        <div className='grid m-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4'>
            {productDisplay}
        </div>
    )
}

export default ProductBox;


