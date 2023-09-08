import React from 'react'
import navbar from './navbar'
import footer from './footer'
import {Button} from "@mui/material";

function track() {
  return (
    <>
        <div className='flex justify-center bg-cover bg-[#00629B] opacity-90 h-[10vh]'><h1 className='text-3xl'>NAVBAR</h1></div>
        <div className='px-[5%] py-[2%]'>
            <div className='flex justify-center pb-[5vh]'><h1 className='text-6xl '>TRACKS</h1></div>
            <div></div>
            <div className='grid-rows-2 px-3 py-3'>
                <div className='opacity-90 pb-[10vh]'>
                    <div className='flex px-2.5'>
                        <h1 className='text-5xl pb-[5px]'>EDUCATION</h1>
                    </div>
                    <div className='pb-[1vh]'>
                        <p className='px-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='px-3 pb-[5px]'>
                        <Button variant="contained" href="">Read More</Button>
                    </div>
                </div>
                <div className='opacity-90 pb-[10vh]'>
                    <div className='flex px-2.5'>
                        <h1 className='text-5xl pb-[5px]'>HEALTH</h1>
                    </div>
                    <div className='pb-[1vh]'>
                        <p className='px-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='px-3 pb-[5px]'>
                        <Button variant="contained" href="">Read More</Button>
                    </div>
                </div>
                <div className='opacity-90 pb-[10vh]'>
                    <div className='flex px-2.5'>
                        <h1 className='text-5xl pb-[5px]'>TRANSPORT</h1>
                    </div>
                    <div className='pb-[1vh]'>
                        <p className='px-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='px-3 pb-[5px]'>
                        <Button variant="contained" href="">Read More</Button>
                    </div>
                </div>
                <div className='opacity-90 pb-[10vh]'>
                    <div className='flex px-2.5 '>
                        <h1 className='text-5xl pb-[5px]'>SECURITY</h1>
                    </div>
                    <div className='pb-[1vh]'>
                        <p className='px-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='px-3 pb-[5px]'>
                        <Button variant="contained" href="">Read More</Button>
                    </div>
                </div>
                <div className='opacity-90 pb-[10vh]'>
                    <div className='flex px-2.5'>
                        <h1 className='text-5xl pb-[5px]'>COMPUTER VISION</h1>
                    </div>
                    <div className='pb-[1vh]'>
                        <p className='px-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='px-3 pb-[5px]'>
                        <Button variant="contained" href="">Read More</Button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default track
