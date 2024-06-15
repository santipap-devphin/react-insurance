import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MainSection from "../component/MainSection";
import HeaderUpper from "../layout/HeaderUpper";
import HeaderMenu from "../layout/HeaderMenu";
import CarouselOther from '../component/CarouselOther';
import MenuDashboardUser from './MenuDashboardUser';
import Footer from '../layout/Footer';

const DashBoardUser = ({children}) => {
  return (<MainSection>
                <HeaderUpper />
                <HeaderMenu />
                <CarouselOther page={"บัญชีผู้ใช้"} />
                  <Container>
                      <Grid container sx={{mb:8}}>
                        <Grid item xs={12} sm={3}>
                            <MenuDashboardUser />
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            {children}
                        </Grid>
                      </Grid>
                  </Container>
               
                <Footer />
           </MainSection>
  )
}

export default DashBoardUser