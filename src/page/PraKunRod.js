import React from 'react'
import MainSection from "../component/MainSection";
import HeaderUpper from "../layout/HeaderUpper";
import HeaderMenu from "../layout/HeaderMenu";
import CarouselOther from '../component/CarouselOther';
import Footer from '../layout/Footer';

const PraKunRod = () => {
  return (  <MainSection>
                <HeaderUpper />
                <HeaderMenu />
                <CarouselOther page={"ประกันรถประเภทต่างๆ"} />
               
                <Footer />
            </MainSection>
  )
}

export default PraKunRod