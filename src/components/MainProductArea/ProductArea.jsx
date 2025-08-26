import React from 'react'
import './ProductAreaCss.css'
import ProductBox from './ProductBox'

function ProductArea(){
    
    const Products = ['product1', 'product2', 'product3'];
    const ProductsInContainers = Products.map(product => <li> {product}</li>)
    
    
    
    
    
    
    return (
        <div className ='bg-green-500 '>
            <ProductBox />
           

            
        </div>
    )
}

export default ProductArea;