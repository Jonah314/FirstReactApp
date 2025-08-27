import React from 'react'
import './ProductAreaCss.css'
import ProductBox from './ProductBox'

function ProductArea(){
    
    const Products = ['product1', 'product2', 'product3'];
    const ProductsInContainers = Products.map(product => <li> {product}</li>)
    
    
    
    
    
    
    return (
        <div className ='bg-white m-2  '>
            <ProductBox />
           

            
        </div>
    )
}

export default ProductArea;