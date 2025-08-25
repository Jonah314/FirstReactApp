import React from 'react';

import ContentBar from './MainProductArea/ContentBar';
import ProductArea from './MainProductArea/ProductArea';
import ProductNavBar from './MainProductArea/ProductNavBar';

function ContentArea(){
    return(
        <div className ='max-w-7xl  mx-auto grid grid-cols-[200px_80%] gap-3'>
            <ProductNavBar />
            <div className= 'm-h-full   grid grid-rows-[40px_1fr]'>
                
                    <ContentBar/>
                    <ProductArea/>
                
            </div>
            
        </div>
    )
}

export default ContentArea;

