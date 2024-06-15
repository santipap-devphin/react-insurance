import React from 'react';
import MainSection from "../component/MainSection";
import HeaderUpper from "../layout/HeaderUpper";
import HeaderMenu from "../layout/HeaderMenu";
import CarouselOther from '../component/CarouselOther';
import MainLogin from '../wrappers/login/MainLogin';
import Footer from '../layout/Footer';

const Login = () => {
  return (<MainSection>
            <HeaderUpper />
            <HeaderMenu />
            <CarouselOther page={"เข้าสู่ระบบ"} />
            <MainLogin />
            <Footer />
        </MainSection>
  )
}

export default Login