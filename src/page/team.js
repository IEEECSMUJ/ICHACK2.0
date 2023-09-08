import React from 'react'
import TeamsCard from "../components/TeamsCard";

export const Team = () => {
    return (
        <>
            <div className='flex justify-center bg-[#00629b] text-opacity-90 h-[10vh]'>
                Navbar
            </div>
            <div className="flex flex-col items-center justify-center my-[2%]">
                <h1 className="text-6xl text-center text-transparent bg-clip-text bg-gradient-to-tl from-blue-950 to-blue-500 font-extrabold pb-[5%]">
                    TEAM
                </h1>
            </div>
            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <TeamsCard/>
                </div>
            </div>
        </>

    );
};

export default Team;
