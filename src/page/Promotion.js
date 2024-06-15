import React from 'react';
import MainSection from "../component/MainSection";
import HeaderUpper from "../layout/HeaderUpper";
import HeaderMenu from "../layout/HeaderMenu";
import CarouselOther from '../component/CarouselOther';
import MainPromotion from '../wrappers/promotion/MainPromotion';
import Footer from '../layout/Footer';

const Promotion = () => {
  return ( <MainSection>
                <HeaderUpper />
                <HeaderMenu />
                <CarouselOther page={"โปรโมชั่น"} />
                <MainPromotion />
            <Footer />
          </MainSection>
         )
}

export default Promotion