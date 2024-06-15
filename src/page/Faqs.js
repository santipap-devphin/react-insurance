import React from 'react';
import MainSection from "../component/MainSection";
import HeaderUpper from "../layout/HeaderUpper";
import HeaderMenu from "../layout/HeaderMenu";
import CarouselOther from '../component/CarouselOther';
import MainFaq from '../wrappers/faq/MainFaq';
import Footer from '../layout/Footer';

const Faqs = () => {
  return (<MainSection>
            <HeaderUpper />
            <HeaderMenu />
            <CarouselOther page={"คำถามพบบ่อย"} />
            <MainFaq />
            <Footer />
          </MainSection>
        )
}

export default Faqs