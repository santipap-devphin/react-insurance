import React from 'react';
import MainSection from "../component/MainSection";
import HeaderUpper from "../layout/HeaderUpper";
import HeaderMenu from "../layout/HeaderMenu";
import CarouselOther from '../component/CarouselOther';
import MainBlogNew from '../wrappers/blog/MainBlogNew';

import Footer from '../layout/Footer';

const Blogs = () => {
  return (<MainSection>
                <HeaderUpper />
                <HeaderMenu />
                <CarouselOther page={"บทความประกันภัย"} />
                <MainBlogNew />
                <Footer />
         </MainSection>
  )
}

export default Blogs