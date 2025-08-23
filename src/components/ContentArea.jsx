import React from 'react';

import ContentBar from './MainProductArea/ContentBar';
import ProductArea from './MainProductArea/ProductArea';
import ProductNavBar from './MainProductArea/ProductNavBar';

function ContentArea(){
    return(
        <div className ='max-w-7xl  mx-auto grid grid-cols-6 gap-3'>
            <ProductNavBar />
            <div className= 'col-span-5  gap-3'>
                
                    <ContentBar/>
                    <ProductArea/>
                
            </div>
            
        </div>
    )
}

export default ContentArea;

/*
<ProductNavBar />
<ContentBar />
            <ProductArea />
            */