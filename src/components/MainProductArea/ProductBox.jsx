import React from 'react';
import './ProductAreaCss.css';
import image from '../../Images/PunkRockUnicorn.png';

function ProductBox(){
    const PunkRockUnicorn = '.././Images/PunkRockUnicorn.png';
    
    
    
    
    return (
        <div className = 'productBox '>
            <div className = 'rounded-lg overflow-hidden aspect-square'>
                <img src = {image} />
            </div>
            <h1 className = 'text-center'>Box</h1>
            <h2 className = 'bg-blue-500 mx-2'>DropDown Menu</h2>
            <div className= 'grid grid-rows-2'>
                <div><h1>Price</h1></div>
                <div><h1>SC ICON</h1></div>
            </div>


        </div>
    )
}

export default ProductBox;