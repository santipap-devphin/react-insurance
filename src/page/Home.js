import React from "react";
import MainSection from "../component/MainSection";
import HeaderUpper from "../layout/HeaderUpper";
import HeaderMenu from "../layout/HeaderMenu";
import CarouselSection from "../component/CarouselSection";
import WelcomeInsure from "../layout/WelcomeInsure";
import PragunType from "../layout/PragunType";
import ProductSection from "../layout/ProductSection";
import PriceEtc from "../layout/PriceEtc";
import Protection from "../layout/Protection";
import Partners from "../layout/Partners";
import BlogNews from "../layout/BlogNews";
import Footer from "../layout/Footer";


const Home = () => {
  return (<MainSection>
            <HeaderUpper />
            <HeaderMenu />
            <CarouselSection />
            <WelcomeInsure />
            <PragunType />
            {/*<ProductSection />*/}
            <PriceEtc />
            <Protection />
            <BlogNews />
            <Partners />
            <Footer />
         </MainSection>
        )
}

export default Home