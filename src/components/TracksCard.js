import {Button} from "@mui/material";
import React from "react";
import {TracksData} from "./TracksData";


const TracksCard = () => {

    return(
        <>
            {TracksData.map((Tracks, index) => (
                <div key={index}>
                    <div className='px-[5%] py-[2%]'>
                        <div className='grid-rows-2 px-3 py-3 justify-around'>
                            <div className='opacity-90 pb-[10vh]'>
                                <div className='flex px-2.5'>
                                    <h1 className='text-5xl pb-[5px]'>{Tracks.TracksName}</h1>
                                </div>
                                <div className='pb-[1vh]'>
                                    <p className='px-3'>
                                        {Tracks.TracksAbout}
                                    </p>
                                </div>
                                <div className='px-3 pb-[5px]'>
                                    <Button variant="contained" href="">Read More</Button>
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