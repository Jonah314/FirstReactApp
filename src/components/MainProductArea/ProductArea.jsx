import React from 'react'
import './ProductAreaCss.css'
import ProductBox from './ProductBox'

function ProductArea(){
    
    const Products = ['product1', 'product2', 'product3'];
    const ProductsInContainers = Products.map(product => <li> {product}</li>)
    
    
    
    
    
    
    return (
        <div className ='bg-green-500 grid lg:grid-cols-4 gap-3 p-2 md:grid-cols-3 sm:grid-cols-2'>
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />

            <h1>Box</h1>
        </div>
    )
}

export default ProductArea;