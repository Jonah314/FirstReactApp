import React from 'react';

import ContentBar from './MainProductArea/ContentBar';
import ProductArea from './MainProductArea/ProductArea';
import ProductNavBar from './MainProductArea/ProductNavBar';

function ContentArea(){
    return(
        <div className ='md'>
        <div className ='max-w-7xl  mx-auto grid grid-cols-[160px_1fr] gap-3'>
            <ProductNavBar />
            <div className= 'm-h-full   grid grid-rows-[40px_1fr] max-w[1280px] mr-3'>
                
                    <ContentBar/>
                    <ProductArea/>
                
            </div>
            
        </div>
        </div>
    )
}

export default ContentArea;

