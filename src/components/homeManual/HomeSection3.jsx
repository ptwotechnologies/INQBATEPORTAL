import React from "react";

import { Link } from "react-router-dom";

const HomeSection3 = () => {
  return (
    <div className="">
      <div id="top" className="text-center mt-16">
        <h1 className="text-2xl lg:text-5xl font-semibold lg:tracking-wider mb-1  lg:mb-9 text-[#001032] ">
          Found yourself nodding?
        </h1>
        <p className="text-xl lg:text-3xl font-medium lg:tracking-wider text-[#12355C] mb-9 ">
          Cool, let’s show you around.
        </p>
        <div className="text-white rounded-2xl font-medium hidden lg:block">
          <button className="bg-[#001D21] m-2 w-100 p-2 text-2xl rounded-sm">
            I’d Like To Get Me Started
          </button>
          <button className="bg-[#001D21] m-2 w-100 p-2 text-2xl rounded-sm">
            How it works
          </button>
        </div>
        <div className="text-white rounded-2xl font-medium flex justify-center items-center lg:hidden">
           <button className="bg-[#001D21] m-2 w-fit p-2 text-md lg:text-xl rounded-sm">
            How it works
          </button>
          <button className="border border-[#12355C] text-[#001032] m-2 w-fit p-2 text-md lg:text-xl rounded-sm">
            I’d Like To Get Me Started
          </button>
         
        </div>
      </div>

        <div className="bg-[#001032CC] hidden lg:block">
           <div id="bottom" className="  mt-16 text-white w-full p-10">
       <div className="flex justify-center items-center">
         <div className=" p-2 h-96 w-full mt-14">
          <h1 className="text-5xl font-medium mb-7">What makes us different?</h1>
          <p className="text-sm w-[80%] leading-5 tracking-wider mb-15">You see, we’ve already spent years chasing investors, 
            burning cash on Facebook ads, and paying agencies that promised the moon, guess what? 
            most of it went nowhere.</p>
            <p className="mb-2">That’s when we realized —</p>
              <p className="text-2xl font-semibold   mb-2">The problem wasn’t our ideas.</p>
                <p className="text-2xl font-semibold  ">It was the system around us. </p>
        </div>
        <div className=" h-96 w-full  grid grid-cols-2 gap-x-20 gap-y-20 place-items-center">
          <div>
            <h1 className="text-5xl font-bold">150+</h1>
            <p className="text-sm font-semibold">Service Professionals</p>
          </div>
          <div>
                <h1 className="text-5xl font-bold">500+</h1>
            <p className="text-sm font-semibold">Startups & Businesses</p>
          </div>
          <div>
                <h1 className="text-5xl font-bold">10+</h1>
            <p className="text-sm font-semibold">Venture Firms</p>
          </div>
          <div >
              <h1 className="text-5xl font-bold">50+</h1>
            <p className="text-sm font-semibold ">Angel Investors & VCs</p>
          </div>
          </div>
       </div>
       <div className="flex justify-center items-center gap-10 w-full rounded-sm">
         <div className="  h-96 w-full ">
            <img src={"/homeSec2Img2.png"} alt="Image" className="h-96 w-full rounded-xs"/>
        </div>
        <div className=" h-96 w-full  "> 
          <img src={"/homeSec2Img2.png"} alt="Image" className="h-96 w-full rounded-xs" />
          </div>
          <div className=" h-96 w-full  "> 
          <img src={"/homeSec2Img2.png"} alt="Image" className="h-96 w-full rounded-xs" />
          </div>
       </div>
         
      </div>

      <div className="pb-12 pt-5" >
        <p className="bg-white w-120 text-center rounded-4xl  mx-auto p-2 px-3 font-bold text-[#001032] tracking-wide ">Simply, a one stop solution for startups & founders!</p>
      </div>

        </div>

        <div id="phoneScreenBottom" className="lg:hidden bg-[#001426CC] rounded-t-sm mt-16 p-7 text-white">
          <h1 className="text-3xl font-semibold leading-12 tracking-wider">Created by founders,
             who needed it first</h1>
             <p className="text-md  leading-8 tracking-wider my-5">You see, we’ve already spent years chasing investors, burning cash on Facebook ads, and paying agencies that promised the moon, guess what? most of it went nowhere.</p>
              <p className="text-xl font-semibold leading-8 tracking-wider" >That’s when we realized — <br/>
                The problem wasn’t our ideas.
                 It was the system around us.
                  </p>
                <p className="bg-[#001D21E5] p-3 text-sm rounded-4xl text-center mt-9 mb-3">Really! The system is built to drain founders…</p>
                <p className="px-2 text-sm font-light">First, the ad platforms charge you for every single click (doesn’t matter if those clicks) <Link to="/" className="cursor-pointer">See more...</Link></p>
                <hr className="border-t border-[#FFFFFF33] mt-9 m-3 "/>

                <p className="bg-[#001D21E5] p-3  text-sm rounded-4xl text-center mt-6 mb-3">That’s when we decided, we need to fix this... </p>
                <p className="px-2 pl-4 text-sm font-light">So our team sat together, spent months on planning, strategizing, building and came up <Link to="/" className="cursor-pointer">See more...</Link></p>
        </div>
        <div className="lg:hidden p-4">
                <p className="bg-[#334351] p-3 px-4 text-sm rounded-4xl text-center  mt-7 mb-7 text-white ">Simply, a one stop solution for startups & founders!</p>
        </div>

     
    </div>
  );
};

export default HomeSection3;
