import React from 'react'
import SponsorCard from "../components/SponsorCard";

function Sponsor() {
  return (
    <>
        <div className='flex justify-center bg-[#00629b] text-opacity-90 h-[10vh]'>
            Navbar
        </div>
        <div className="flex flex-col items-center justify-center my-[2%]">
            <div>
                <h1 className="text-6xl text-center text-transparent bg-clip-text bg-gradient-to-tl from-blue-950 to-blue-500 font-extrabold pb-[5%]">
                    SPONSORS
                </h1>
            </div>
            <SponsorCard/>
        </div>
    </>
  )
}

export default Sponsor;