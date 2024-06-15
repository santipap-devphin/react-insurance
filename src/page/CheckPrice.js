import React from 'react';
import MainSection from "../component/MainSection";
import HeaderUpper from "../layout/HeaderUpper";
import HeaderMenu from "../layout/HeaderMenu";
import CarouselOther from '../component/CarouselOther';
import MainCheckPrice from '../wrappers/checkprice/MainCheckPrice';
import Footer from '../layout/Footer';


const CheckPrice = () => {
  return (<MainSection>
                        <HeaderUpper />
                        <HeaderMenu />
                            <CarouselOther page={"เช็คราคาประกันรถ"} />
                            <MainCheckPrice />
                        <Footer />
          </MainSection>
  )
}

export default CheckPrice