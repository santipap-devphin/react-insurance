import React from 'react';
import MainSection from "../component/MainSection";
import HeaderUpper from "../layout/HeaderUpper";
import HeaderMenu from "../layout/HeaderMenu";
import CarouselOther from '../component/CarouselOther';
import MainRegister from '../wrappers/register/MainRegister';
import Footer from '../layout/Footer';

const Register = () => {
  return (<MainSection>
            <HeaderUpper />
            <HeaderMenu />
            <CarouselOther page={"สมัครสมาชิก"} />
             <MainRegister />
            <Footer />
        </MainSection>
  )
}

export default Register