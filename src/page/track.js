import React from 'react'
import navbar from './navbar'
import footer from './footer'
import TracksCard from "../components/TracksCard";

function track() {
  return (
    <>
        <div className='flex justify-center bg-cover bg-[#00629B] opacity-90 h-[10vh]'><h1 className='text-3xl'>NAVBAR</h1></div>
        <div className='px-[5%] py-[2%]'>
            <div className='justify-center pb-[5%] py-[2%]'>
                <h1 className='text-6xl text-center'>TRACKS</h1>
            </div>
            <TracksCard />
        </div>
    </>
  )
}

export default track
