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


// <div className='flex flex-col items-center justify-center'>
//     <div className="lg:max-w-full lg:flex relative z-10 px-[5%] py-4 rounded-2xl w-full max-w-full">
//         <div className="lg:h-auto w-[50%] flex-none bg-no-repeat bg-contain bg-center text-center sm:h-48" style={{backgroundImage: `url('https://ic-hack.bmsceieee.com/assets/img/sponsor/SPS_Logo_Color_RGB.png')`}} title="Woman holding a mug">
//         </div>
//         <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
//             <div className="mb-8">
//                 <div className="text-gray-900 font-bold text-xl mb-2">IEEE Computer Society</div>
//                 <p className="text-gray-700 text-base">The IEEE Computer Society is the premier source for information, inspiration, and collaboration in computer science and engineering. Connecting members worldwide, the Computer Society empowers the people who advance technology by delivering tools for individuals at all stages of their professional careers. Our trusted resources include international conferences, peer-reviewed publications, a robust digital library, globally recognized standards, and continuous learning opportunities.
//                 </p>
//             </div>
//             <div className="flex items-center">
//                 <button type='button' className='p-2 bg-[#00629b] border rounded-md text-white'>Know More</button>
//             </div>
//         </div>
//     </div>
// </div>