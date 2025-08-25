import React from 'react'
import './ProductAreaCss.css'

function ProductArea(){
    
    const Products = ['product1', 'product2', 'product3'];
    const ProductsInContainers = Products.map(product => <li> {product}</li>)
    
    
    
    
    
    
    return (
        <div className ='bg-green-500 '>
            <h1>Box</h1>
            <h1>Box</h1>
        </div>
    )
}

export default ProductArea;