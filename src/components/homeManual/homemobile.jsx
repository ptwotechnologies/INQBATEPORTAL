import React from "react";

const Hero = () => {
  return (
<div className="relative w-[375px] sm:w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1350px] mx-auto bg-[#FFFFFF]">


      <div className="absolute left-[20px] top-[1900px] w-[329px] h-[100px] font-poppins font-semibold text-[40px] leading-[45px] text-[#FFFFFF] z-50">
        <p>Who is this portal for?</p>
      </div>

      {/* Hero Blue Section */}
      <div className="relative w-[375px] sm:w-full h-[1116px] bg-[#001D21] rounded-[12px] overflow-hidden mx-auto">

        {/* Decorative Circle Logo */}
        <img
          src="/logo.png"
          alt="Logo"
          className="absolute w-[198px] h-[198px] top-[-52px] left-[-15px] opacity-100"
        />

        {/* Hamburger Menu */}
        <button className="absolute top-[39px] left-[322px] w-[22.5px] h-[15px] flex flex-col justify-between">
          <span className="block h-[2px] w-full bg-white"></span>
          <span className="block h-[2px] w-full bg-white"></span>
          <span className="block h-[2px] w-full bg-white"></span>
        </button>

        {/* Heading */}
        <h1 className="absolute w-[286px] h-[177px] left-[20px] top-[134px] font-poppins font-semibold text-[36px] leading-[59px] text-[#FFFFFF]">
          Everything you need to scale your startUp
        </h1>

        {/* Subheading */}
        <p className="absolute w-[317px] h-[105px] left-[20px] top-[328px] font-poppins font-normal text-[14px] leading-[35px] text-[rgba(255,255,255,0.8)]">
          Get expert-backed support, investor visibility, low-cost services and
          organic audience access — all in one system
        </p>

        {/* Get Started Button */}
        <div className="absolute left-[20px] top-[464px] w-[163px] h-[60px] bg-[#FFFFFF] rounded-[5px] flex items-center justify-center">
          <span className="font-poppins font-normal text-[18px] leading-[35px] text-[#12355C]">
            Get Started
          </span>
        </div>

        {/* Divider Line */}
        <div className="absolute left-[42px] top-[585px] w-[291px] h-px border border-[#FFFFFF33]" />

        {/* Built for Startups Button */}
        <div className="absolute left-[34px] top-[644px] w-[306px] h-[50px] 
                        bg-[linear-gradient(91.53deg,#001032_36.03%,rgba(216,216,216,0.55)_99.25%)] 
                        rounded-[50px] flex items-center justify-center gap-[10px] p-[10px]">
          <span className="font-poppins font-normal text-[14px] leading-[30px] text-[#FFFFFF]">
            Built for startups ready to grow smarter
          </span>
        </div>

        {/* Small Platform Label */}
        <div className="absolute top-[93px] left-[20px] w-[180px] h-[27px] 
                        bg-[linear-gradient(91.44deg,#001032_19.12%,#D8D8D8_94.01%)] 
                        rounded-[50px] flex items-center px-[10px] gap-[10px] opacity-100">
          <span className="font-poppins font-normal text-[9px] leading-[30px] text-[#FFFFFF]">
            We’ve built a platform for startups
          </span>
        </div>
      </div>

      {/* Images Below Hero */}
      <img src="/image.png" alt="Startup Preview 5" className="absolute left-[11px] top-[1016px] w-[351px] h-[205px] rounded-[20px] border border-[#001032]" />
      <img src="/image.png" alt="Startup Preview 4" className="absolute left-[11px] top-[944px] w-[351px] h-[205px] rounded-[20px] border border-[#001032]" />
      <img src="/image.png" alt="Startup Preview 3" className="absolute left-[11px] top-[849px] w-[351px] h-[205px] rounded-[20px] border border-[#001032]" />
      <img src="/image.png" alt="Startup Preview 2" className="absolute left-[11px] top-[789px] w-[351px] h-[205px] rounded-[20px] border border-[#001032]" />
      <img src="/image.png" alt="Startup Preview 1" className="absolute left-[11px] top-[734px] w-[351px] h-[205px] rounded-[20px] border border-[#001032]" />

      {/* See How It Works Button */}
      <div className="absolute left-[89px] top-[1243px] w-[197px] h-[50px] rounded-[5px] border border-[#001032] flex items-center justify-center">
        <span className="font-poppins font-medium text-[18px] leading-[30px] text-[#001748]">
          See How It Works →
        </span>
      </div>

      {/* Other colored sections */}
      <div className="absolute left-[1px] top-[1315px] w-[376px] h-[1040px] bg-[#001D21] rounded-[10px] opacity-100"></div>
      <div className="absolute left-[36px] top-[1381px] w-[297px] h-[454px] bg-[#FFFFFF] rounded-[40px] opacity-80"></div>
      <div className="absolute left-[1px] top-[2577px] w-[376px] h-[692px] bg-[#002A30] opacity-80"></div>
      <div className="absolute left-[1px] top-[3365px] w-[376px] h-[836px] bg-[#001032] rounded-[5px] opacity-100"></div>
      <div className="absolute left-[20px] top-[4874px] w-[335px] h-[248px] bg-[#001D21] rounded-[5px] opacity-80"></div>
      <div className="absolute left-[20px] top-[5147px] w-[335px] h-[248px] bg-[#8FB8DC] rounded-[5px]"></div>
      <div className="absolute left-[20px] top-[5424px] w-[335px] h-[248px] bg-[#001032] rounded-[5px] opacity-80"></div>
      <div className="absolute w-[335px] h-[374px] top-[4270px] left-[20px] opacity-100 shadow-[0px_4px_4px_0px_#00000040]"></div>

      {/* Divider lines */}
      <div className="absolute top-[2025px] left-[20px] w-[130px] border-t border-[#FFFFFF33]" style={{ height: '0px' }}></div>
      <div className="absolute top-[2025px] left-[166px] w-[130px] border-t border-[#FFFFFF33]" style={{ height: '0px' }}></div>
      <div className="absolute top-[2025px] left-[312px] w-[130px] border-t border-[#FFFFFF33]" style={{ height: '0px' }}></div>

      <div className="absolute top-[2079px] left-[20px] w-[131px] h-[241px] border-red-500 border rounded-[20px] flex flex-col items-center justify-center text-white" style={{ opacity: 1, gap: '10px' }}></div>

      <div className="absolute top-[2399px] left-[63px] w-[251px] h-[62px] flex flex-col justify-center items-center">
        <h1 className="font-poppins font-semibold text-[20px] leading-[30px] text-center text-[#12355C]">Found yourself nodding?</h1>
        <p className="font-poppins font-medium text-[16px] leading-[30px] text-center text-[#12355C]">Cool, let’s show you around</p>
      </div>

      {/* Bottom sections */}
      <div className="absolute top-[5718px] w-[375px] h-[579px] bg-[#F99728]/10"></div>
      <div className="absolute top-[5758px] left-[40px] w-[295px] h-[499px] bg-gradient-to-b from-[#C1CDEF] to-[#001032]"></div>
      <div className="absolute left-[64px] top-[5782px] w-[247px] h-[451px] bg-[#001032]"></div>
      <div className="absolute left-[43px] top-[6824px] w-[281px] h-[281px]">
        <img src="/logo5.png" alt="Logo" className="w-full h-full object-contain" />
      </div>

    </div>
  );
};

export default Hero;


/*
font-family: Poppins;
font-weight: 600;
font-style: SemiBold;
font-size: 40px;
leading-trim: NONE;
line-height: 45px;
letter-spacing: 0%;
width: 329;
height: 100;
top: 1900px;
left: 20px;
angle: 0 deg;
opacity: 1;

*/
