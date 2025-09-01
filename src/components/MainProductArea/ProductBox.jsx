import React, { useEffect } from 'react';
import './ProductAreaCss.css';



import { ProductArray } from '../../productArray.js';
import { displayProducts } from './displayProducts.jsx';
import { useState } from 'react';
import ProductNavBar from './ProductNavBar.jsx';

function ProductBox({tagSent}){
    const [productDisplay, setDisplay] = useState(displayProducts(''));
    
    
    function changeDisplay(tag){
        
        setDisplay(displayProducts(tag));
    }
   
    useEffect(()=>{
        if(tagSent){
            changeDisplay(tagSent);
        }
    },[tagSent]);
    
    
    
    return (
        <div className='grid m-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4'>
            {productDisplay}
            <div>{tagSent} </div>
            
            
        </div>
    );
}

export default ProductBox;

/*
{productDisplay}
<button onClick ={()=>{
                changeDisplay('food')}}>Food Button</button>
            <button onClick ={()=>{
                changeDisplay('animal')}}>Animal</button>
                */
