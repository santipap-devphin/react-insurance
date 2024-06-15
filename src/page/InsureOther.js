import React from 'react';
import { useParams } from 'react-router-dom';
import MainSection from "../component/MainSection";
import HeaderUpper from "../layout/HeaderUpper";
import HeaderMenu from "../layout/HeaderMenu";
import CarouselOther from '../component/CarouselOther';
import MainInsureOther from '../wrappers/prakunother/MainInsureOther';

import Footer from '../layout/Footer';

const InsureOther = () => {

 const {slug} = useParams();
    
  return ( <MainSection>
                <HeaderUpper />
                <HeaderMenu />
                <CarouselOther page={"ประกันประเภทอื่น"} slug={slug.trim()} />
                <MainInsureOther titlePage={slug.trim()} />
                <Footer />
            </MainSection>
  )
}

export default InsureOther