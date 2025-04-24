import React from 'react'
import arrow from '../assets/RightArrow.png'
import airbnb from '../assets/airbnb-logo.png'
import airways from '../assets/qatar-airways.png'
import uber from '../assets/uber.png'
import trip from '../assets/tripoff.png'

const Catalogue = () => {
  return (
    <>
      <div className="bg-pink-200 flex justify-between items-center relative w-screen h-[192px] p-[4rem]">
            <div className="flex items-center  gap-1">
                <span className="font-bold">Our Partners</span>
                <img className="w-[40px]" src={arrow} alt=""/>
            </div>
            
            <div className="bg-white flex h-[109px] w-[779px]">
                <img className=" w-[224px]" src={airbnb} alt=""/>
                <img className="w-[227px]" src={airways} alt=""/>
                <img className="w-[133.74px]" src={uber} alt=""/>
            </div>
            <div className="relative">
                <div className="w-[286.26px] absolute left-12 h-[191px] relative">
                    <img style={{position: "relative"}} src={trip} alt=""/>
                    <div className="absolute right-0 top-0 w-[9rem] flex flex-col">
                        <span class="font-bold text-3xl text-red-500">ENJOY</span>
                        <div>
                            <span className="font-bold text-3xl text-red-500">60%</span>
                            <span className="font-bold text-xl">OFF</span>
                        </div>
                        <span className="text-[0.7rem] font-bold">Everytime you choose us!</span>
                        <span className="text-[0.7rem] font-light">Your first trip with us  comes with a 
                            complementary voucher and lunch. 
                            Then a 60% off for the first 5 trips.</span>
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}

export default Catalogue
