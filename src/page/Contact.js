import React from 'react';
import MainSection from "../component/MainSection";
import HeaderUpper from "../layout/HeaderUpper";
import HeaderMenu from "../layout/HeaderMenu";
import CarouselOther from '../component/CarouselOther';
import MainContact from '../wrappers/contact/MainContact';
import Footer from '../layout/Footer';

const Contact = () => {
  return ( <MainSection>
                <HeaderUpper />
                <HeaderMenu />
                <CarouselOther page={"ติดต่อเรา"} />
                <MainContact />
            <Footer />
          </MainSection>
  )
}

export default Contact