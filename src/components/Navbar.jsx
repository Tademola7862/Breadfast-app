import React from 'react'
import trippers1 from '../assets/tripperslogo1.png'
import trippers2 from '../assets/tripperslogo2.png'
import searchicon from '../assets/searchicon.png'

const Navbar = () => {
  return (
   <>
      <div className="flex justify-between p-5">
          <div className="flex">
            <img className="w-[174px] h-[72px]" src={trippers1} alt=""/>
            <img className="w-[236px] h-[46px] ml-2" src={trippers2} alt=""/>
          </div>
          <div className="space-x-10 absolute left-120">
        <span className="w-[58px] h-[26px]">Hotels</span>
        <span>Flights</span>
        <span>Events</span>
        <span>Tourism</span>
        <span>Account</span>
        <button className="w-[116px] h-[41px] bg-black text-white ml-45 rounded-full">Book now</button>
    </div>
    <div>
        <input className="w-[707px] h-[50px] font-semibold shadow-md border-[#00000040] absolute top-16 border rounded-full pl-10 right-87 text-gray-500" type="text" placeholder="LOCATION"/>
        <button className="border shadow-md border-[#00000040] bg-[#D9D9D9] rounded-r-full absolute top-16 right-87 w-[156px] h-[50px] font-semibold">Search</button>
        <img className="w-[27.09px] h-[27.09px] absolute top-19 right-112" src={searchicon} alt=""/>
    </div>
      </div>
   </>
  )
}

export default Navbar



