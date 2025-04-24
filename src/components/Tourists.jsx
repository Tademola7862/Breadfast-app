import React from 'react'
import temp from '../assets/temple.png'
import bicycle from '../assets/bicycle.png'
import beach from '../assets/beach.png'
import tripguy from '../assets/Tripguy.png'
import trip from '../assets/trip-guy.png'

const Tourists = () => {
  return (
   <>
    <div className='bg-[#F6F6F6] h-[695px]'>
      <div className="py-12">
        <h1 className="font-bold ml-20 text-4xl ">Top Travel Picks for You</h1>
        <p className="font-light ml-20 text-xl">All our destination are packed with activities</p>
      </div>
      <div className='flex'>
    <div className="w-[385px] h-[373px] border border-blue-200 ml-12 rounded-xl">
        <div>
            <img className="w-[385rem] h-[218px]" src={temp} alt=""/>
        </div>
        <div className="ml-6 mt-3">
            <span className="font-bold py-2">Daria Daulet Bagh</span><br />
            <span>Srirangapatna, India</span><br />
            <div className="flex justify-between mt-8">
            <span className="text-l font-bold">$5340</span>
            <button className="bg-black text-white font-bold w-[120px] h-[41px] mr-4 rounded-xl">Book now</button>
        </div>
        </div>
    </div>
    <div className="w-[385px] h-[373px] border border-blue-200 ml-12 rounded-xl">
        <img className="w-[385px] h-[218px]" src={bicycle} alt=""/>
        <div className="ml-6 mt-3">
            <span className="font-bold py-2">Daria Daulet Bagh</span><br />
            <span>Srirangapatna, India</span><br />
            <div className="flex justify-between mt-8">
            <span className="text-l font-bold">$5340</span>
            <button className="bg-black text-white font-bold w-[120px] h-[41px] mr-4 rounded-xl">Book now</button>
        </div>
        </div>
    </div>
    <div class="w-[385px] h-[373px] border border-blue-200 ml-12 rounded-xl">
        <img class="w-[385px] h-[218px]" src={beach} alt=""/>
        <div class="ml-6 mt-3">
            <span class="font-bold py-2">Daria Daulet Bagh</span><br />
            <span>Srirangapatna, India</span><br />
            <div class="flex justify-between mt-8">
            <span class="text-l font-bold">$5340</span>
            <button class="bg-black text-white font-bold w-[120px] h-[41px] mr-4 rounded-xl">Book now</button>
        </div>
        </div>
    </div>
    </div>
    </div>
    
    <div>
    <div className="mt-20">
    <span className="flex justify-center font-bold text-4xl">Become a Tour Guide</span>
    <span className="flex justify-center text-2xl">Share your local expertise and create unforgetable experiences for travellers.</span>
    <span className="flex justify-center text-2xl">Join our network of verified tour guides</span>
    </div>
    </div>
    <div className='px-50 mt-2'>
      <div className='flex w-[937px] relative shadow-xl h-[278px] bg-[#FF3D00] rounded-3xl'>
        <div className='flex w-[708px] h-[253px] bg-white rounded-3xl ml-4 my-3'>
        <div>
            <img className="w-[255.2px] h-[241px]" src={tripguy} alt=""/>
        </div>
        <div className="flex-col ml-4 ">
            <span className="text-2xl ml-4 font-bold">PASSIONATE ABOUT TRAVEL?</span><br />
            <span className="text-orange-500 text-2xl ml-11 font-bold">BECOME A TOUR GUIDE</span><br />
            <span className="text-xl font-semibold">Join</span> <span className="text-orange-600 text-2xl font-semibold">Trippers</span> <span className='text-xl font-semibold'>and share your knowledge <br /> with travelers worldwide! <br />
                Earn money, meet new people, and create <br /> unforgettable experiences.</span> <br /> 
            <span className="text-orange-600 font-semibold text-xl">Register now</span> <span className='text-xl font-semibold'>and start guiding <br /> adventures today!</span>
        </div>

        </div>
        <button class="border absolute bottom-5 right-6 rounded-l shadow-md bg-white w-[153px] h-[33px] font-bold text-xl">Sign up now</button>
      </div>
    </div>
    <div className="bg-[#FF3D00] flex  w-full h-[300px] justify-center items-center mb-30 mt-30">
        <img src={trip} className="h-[521px] z-1 absolute left-[12rem]"  alt=""/>
    <div class="bg-white w-[300px] h-[300px] absolute left-[12rem]">
    </div>
    <div class="absolute right-[8rem]">

        <span class="text-white text-3xl font-bold">Get Out and have</span> <br />
        <div class="flex">
          <button class="w-[273px] h-[112px] bg-white text-[#FF3D00] text-3xl font-bold rounded-xl">BOOK NOW</button>
          <span class="text-white text-9xl font-bold">FUN</span>
        </div>
    </div>
    </div>
   </>
  )
}

export default Tourists
