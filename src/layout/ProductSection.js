import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Stack , Box , Typography ,Button  , Container , Divider , Chip , Grid} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardProduct from '../component/CardProduct';
import {Navigation } from 'swiper/modules';


const ProductSection = () => {

  const sizetablet = useMediaQuery('(min-width:768px)');

  return (
         <Box
                sx={{
                display: 'flex',
               
                /*backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
                */
                }}
            >
             <Container>
             <Grid container spacing={2} sx={{pt:"50px" , pb:"50px"}}>
                        <Grid item md={4} >
                         <Box
                            sx={{
                            
                             background:"#f4f9fc",
                             boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , 
                             transformStyle: "preserve-3d" 
                            /*'&:hover': {
                                backgroundColor: '#f9f8f7',
                                opacity: [0.9, 0.8, 0.7],
                            },*/
                            
                            }}
                            >

                            <Stack 
                                direction="column" 
                                sx={{pt:8 , pb:8 ,pl:3 , pr:3}}>
                                <Typography variant='h3'>ประกันแนะนำ</Typography>
                                <Typography variant='h6' paragraph>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</Typography>
                            
                            </Stack>

                            <Button 
                                    variant="contained" 
                                    style={{
                                            
                                        fontSize:24,
                                        background:"#223a66" , 
                                        borderBottom:"2px solid #e12454",
                                        borderRadius:20,
                                        marginLeft:20,
                                        marginBottom:50
                                        
                                        }}>
                                            
                                                ค้นหาข้อเสนอเพิ่มเติม
                                            <ArrowForwardIosIcon style={{fontSize:24 , marginLeft:10}} />
                                            
                                </Button>

                            </Box>
                           

                            

                                
                        </Grid>
                        <Grid item md={8} >
                      
                                    <Box sx={{ 
                                            
                                            boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , 
                                            transformStyle: "preserve-3d" 
                                    }}
                                    >
                                    <Swiper
                                        style={{
                                            "--swiper-navigation-color": "#e12454",
                                            "--swiper-pagination-color": "#e12454",
                                           
                                        }}
                                        slidesPerView={sizetablet ? 1 : 1}
                                        spaceBetween={1}
                                        navigation={true}
                                        pagination={{
                                        
                                        clickable: true,
                                        }}
                                        modules={[Navigation]}
                                        className="swiper"

                                    >
                                      <SwiperSlide><CardProduct /></SwiperSlide>
                                      <SwiperSlide><CardProduct /></SwiperSlide>
                                      <SwiperSlide><CardProduct /></SwiperSlide>
                                      <SwiperSlide><CardProduct /></SwiperSlide>
                                      <SwiperSlide><CardProduct /></SwiperSlide>

                                    </Swiper>
                                    </Box>
                            
                            
                        </Grid>
                        
                        
            </Grid>

            </Container>   
            </Box>
  )
}

export default ProductSection