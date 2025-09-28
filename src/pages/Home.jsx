import React from 'react';
import HomeSection1 from './../components/homeManual/HomeSection1';
import HomeSection2 from '../components/homeManual/HomeSection2';
import HomeSection3 from '../components/homeManual/HomeSection3';
import HomeSection4 from '../components/homeManual/HomeSection4';
import HomeSection5 from '../components/homeManual/HomeSection5';
import HomeSection6 from '../components/homeManual/HomeSection6';
import HomeSection7 from '../components/homeManual/HomeSection7';
import HomeSection8 from '../components/homeManual/HomeSection8';
import HomeMobile from '../components/homeManual/homemobile';

const Home = () => {
  return (
    <div>
      {/* Desktop/Web version */}
      <div >
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <HomeSection5 />
        <HomeSection6 />
        <HomeSection7 />
        <HomeSection8 />
      </div>

    
    </div>
  );
};

export default Home;
