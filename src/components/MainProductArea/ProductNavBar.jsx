import React from 'react';
import {useState} from 'react';
//import {ProductBox} from './ProductBox';

function ProductNavBar({onSendTag}){
    
    // Build a function that will take the element and search the tags
    
    /*
    function changeDisplay(tag){
        
        setDisplay(displayProducts(tag));
    }
    */
   const handleClick = (tag) =>{
        onSendTag(tag);
   }
    
    
    return(
        <div className='bg-pink-400 min-h-[1000px] min-w-16 p-2 ml-3'>
            <h1>Product Nav Bar</h1>
            
            <ul>
                <li><button onClick = {()=> handleClick()}>All Stickers</button></li>
                <li><button onClick = {() => handleClick('animal')}>Animal</button> </li> 
                <li><button onClick = {()=> handleClick('food')}>Food</button></li>
               
            </ul>
        </div>
    )
}

export default ProductNavBar;

/*
<li onClick={changeDisplay(food)}>Food</li>
                    <li onclick ={changeDisplay(animal)}>Animals</li>

                    <button onClick={onButtonClick}> Click me !!</button>
                    
*/