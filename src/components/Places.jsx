import React from 'react'
import hotel from '../assets/hotel.png'
import beach from '../assets/Luxurybeach.png'
import ocean from '../assets/Oceanbay.png'
import rectangle from '../assets/Rectangle1.png'
import flight from '../assets/Flight.png'
import newyork from '../assets/Newyork.png'
import dubai from '../assets/Dubai.png'
import rome from '../assets/Rome.png'
import event from '../assets/Events.png'
import festive from '../assets/Festival.png'

const Places = () => {
  return (
    <>
    <div className="flex items-center gap-2 ml-12 mt-12">
    <span className="text-2xl font-bold">Popular Hotels</span>
    <img className="w-[55px] h-[55px]" src={hotel} alt=""/>
 </div>
 <div className='flex py-12'>
 <div className="w-[385px] h-[373px] border border-blue-200 ml-12 rounded-xl">
        <div>
        <img className="w-[385px] h-[188px]" src={beach} alt=""/>
    </div>
    <div className="ml-6 mt-3">
        <span className="font-bold">Luxury Beach Resort</span><br />
        <span className="text-sm font-light">MALDIVES</span><br />
        <span className="text-sm font-light">Enjoy one of the most popular hotels on our radar</span>
        <div className="flex justify-between mt-8">
            <span className="text-l font-bold">$256/night</span>
            <button className="bg-black text-white font-bold w-[120px] h-[41px] mr-6 rounded-xl">Book now</button>
        </div>
    </div>
    </div>
    <div className="w-[385px] h-[373px] border border-blue-200 ml-12 rounded-xl">
        <div>
        <img className="w-[385px] h-[188px]" src={ocean} alt=""/>
    </div>
    <div className="ml-6 mt-3">
        <span className="font-bold">Oceanbay Resort</span><br />
        <span className="text-sm font-light">New York</span><br />
        <span className="text-sm font-light">Enjoy one of the most popular hotels on our radar</span>
        <div className="flex justify-between mt-8">
            <span className="text-l font-bold">$256/night</span>
            <button className="bg-black text-white font-bold w-[120px] h-[41px] mr-6 rounded-xl">Book now</button>
        </div>
    </div>
    </div>
    <div className="w-[385px] h-[373px] border border-blue-200 ml-12 rounded-xl ">
        <div>
        <img className="w-[385px] h-[188px]" src={rectangle} alt=""/>
    </div>
    <div className="ml-6 mt-3">
        <span className="font-bold">Banana Island</span><br />
        <span className="text-sm font-light">Lagos</span><br />
        <span className="text-sm font-light">Enjoy one of the most popular hotels on our radar</span>
        <div className="flex justify-between mt-8">
            <span className="text-l font-bold">$256/night</span>
            <button className="bg-black text-white font-bold w-[120px] h-[41px] mr-6 rounded-xl">Book now</button>
        </div>
    </div>
    </div>
 </div>
 <div class="flex items-center ml-12 mt-12">
    <span class="text-2xl font-bold">Featured Flights</span>
    <img class="w-[69px] h-[61px] ml-4" src={flight} alt=""/>
 </div>
 <div className='flex py-12'>
 <div class="w-[385px] h-[373px] border border-blue-200 ml-12 rounded-xl">
        <div>
        <img class="w-[385px] h-[188px]" src={newyork} alt=""/>
    </div>
    <div class="ml-6 mt-3">
        <span class="font-bold">New York to London</span><br />
        <span class="text-sm font-light">Departure 21/3/25 10:00AM</span><br />
        <span class="text-sm font-light">Enjoy one of the most popular flights on our radar</span>
        <div class="flex justify-between mt-8">
            <span class="text-l font-bold">$256/night</span>
            <button class="bg-black text-white font-bold w-[120px] h-[41px] mr-6 rounded-xl">Book now</button>
        </div>
    </div>
    </div>
    <div className="w-[385px] h-[373px] border border-blue-200 ml-12 rounded-xl">
        <div>
        <img className="w-[385px] h-[188px]" src={dubai} alt=""/>
    </div>
    <div className="ml-6 mt-3">
        <span className="font-bold">Dubai to Tokyo</span><br />
        <span className="text-sm font-light">Departure 21/3/25 10:00AM</span><br />
        <span className="text-sm font-light">Enjoy one of the most popular flights on our radar</span>
        <div className="flex justify-between mt-8">
            <span className="text-l font-bold">$256/night</span>
            <button className="bg-black text-white font-bold w-[120px] h-[41px] mr-6 rounded-xl">Book now</button>
        </div>
    </div>
    </div>

    <div className="w-[385px] h-[373px] border border-blue-200 ml-12 rounded-xl ">
        <div>
        <img className="w-[385px] h-[188px]" src={rome} alt=""/>
    </div>
    <div className="ml-6 mt-3">
        <span className="font-bold">Banana Island</span><br/>
        <span className="text-sm font-light">Departure 21/3/25 10:00AM</span><br />
        <span className="text-sm font-light">Enjoy one of the most popular flights on our radar</span>
        <div className="flex justify-between mt-8">
            <span className="text-l font-bold">$256/night</span>
            <button className="bg-black text-white font-bold w-[120px] h-[41px] mr-6 rounded-xl">Book now</button>
        </div>
    </div>
    </div>
 </div>

 <div className="flex items-center ml-12 mt-12">
    <span className="text-2xl font-bold">Upcoming Events</span>
    <img className="w-[69px] h-[61px] ml-4" src={event} alt=""/>
 </div>
 <div className='flex py-12'>
 <div class="w-[385px] h-[373px] border border-blue-200 ml-12 rounded-xl">
        <div>
        <img class="w-[385px] h-[188px]" src={festive} alt=""/>
    </div>
    <div class="ml-6 mt-3">
        <span class="font-bold">Summer Music Festival</span><br />
        <span class="text-sm font-light">Lagos</span><br />
        <span class="text-sm font-light">Enjoy one of the most popular events on our radar</span>
        <div class="flex justify-between mt-8">
            <span class="text-l font-bold">$256/night</span>
            <button class="bg-black text-white font-bold w-[120px] h-[41px] mr-6 rounded-xl">Book now</button>
        </div>
    </div>
    </div>
 </div>
    </>
  )
}

export default Places
