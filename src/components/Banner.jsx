import React from 'react';
import Background from '../Images/StickerBackground.png';


function Banner(){
    

    return(
        <div className ='h-96 bg-red-600 my-8 '>
            <div className= 'h-96 overflow-hidden flex items-center justify-center '>
                <img src = {Background} className=' flex w-full'/>
                <div className='h-64 absolute flex w-full '>
                    <div className ='h-64 flex w-full bg-black opacity-50 absolute z-1'></div>
                    <h1 className='text-white md:text-9xl text-8xl text-center m-auto font-bold z-10'>Stick With Josh</h1>
                </div>
            </div>
        </div>
    )
}

export default Banner;