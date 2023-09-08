import React from "react";
import {TracksData} from "./TracksData";


const TracksCard = () => {

    return(
        <>
            {TracksData.map((Tracks, index) => (
                <div key={index}>
                    <div className='px-[10%] justify-around'>
                        <div className='grid-rows-2 px-3'>
                            <div className='opacity-90 pb-[10%]'>
                                <div className='flex px-2.5'>
                                    <h1 className='font-bold text-4xl pb-[1%]'>{Tracks.TracksName}</h1>
                                </div>
                                <div className='pb-[1%]'>
                                    <p className='px-3 justify-around text-justify'>
                                        {Tracks.TracksAbout}
                                    </p>
                                </div>
                                <div className='px-3 pb-[1%]'>
                                    <a href="/">
                                        <button type = "button" className='button py-2 px-4 bg-gradient-to-tl from-blue-950 to-blue-500 text-white rounded-lg font-semibold'>Read More</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default TracksCard;