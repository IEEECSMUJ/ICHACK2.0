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
                <h1 className="text-5xl font-bold m-8">
                    SPONSORS
                </h1>
            </div>
            <SponsorCard/>
        </div>
    </>
  )
}

export default Sponsor;