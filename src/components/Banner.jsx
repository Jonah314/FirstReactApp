import React from 'react';
import Background from '../Images/StickerBackground.png';


function Banner(){
    

    return(
        <div className ='h-96 bg-red-600 my-8 '>
            <div className= 'h-96 overflow-hidden flex items-center justify-center '>
                <img src = {Background} className=' flex w-full'/>
            </div>
        </div>
    )
}

export default Banner;