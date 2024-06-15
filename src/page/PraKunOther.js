import React from 'react';
import MainSection from "../component/MainSection";
import HeaderUpper from "../layout/HeaderUpper";
import HeaderMenu from "../layout/HeaderMenu";
import CarouselOther from '../component/CarouselOther';
import MainPrakunOther from '../wrappers/prakunother/MainPrakunOther';
import Footer from '../layout/Footer';

const PraKunOther = () => {
  return (<MainSection>
                <HeaderUpper />
                <HeaderMenu />
                <CarouselOther page={"ประกันภัยด้านอื่น"} />
                <MainPrakunOther />
                <Footer />
            </MainSection>
  )
}

export default PraKunOther