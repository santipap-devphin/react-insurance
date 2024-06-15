import React from 'react';
import MainSection from "../component/MainSection";
import HeaderUpper from "../layout/HeaderUpper";
import HeaderMenu from "../layout/HeaderMenu";
import CarouselOther from '../component/CarouselOther';
import MainAbout from '../wrappers/about/MainAbout';
import Footer from '../layout/Footer';

const About = () => {
  return (<MainSection>
                <HeaderUpper />
                <HeaderMenu />
                <CarouselOther page={"เกี่ยวกับ แฟมิลี่ อินชัวร์"} />
                <MainAbout />
                <Footer />
         </MainSection>
  )
}

export default About