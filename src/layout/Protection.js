import React , {useState} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import ShieldIcon from '@mui/icons-material/Shield';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardProduct from '../component/CardProduct';
import protect1 from '../assets/image/protect1.jpg'
import protect2 from '../assets/image/protect2.jpg';
import protect3 from '../assets/image/protect3.jpg';
import protect4 from '../assets/image/protect4.jpg';
import protect5 from '../assets/image/protect5.jpg';

import {Navigation } from 'swiper/modules';

import { Typography } from '@mui/material';

const Protection = () =>  {

  const sizetablet = useMediaQuery('(min-width:768px)');

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {

         setExpanded(isExpanded ? panel : false);
    };
 

  return (<Box >
                    {/*<Box sx={{backgroundColor:"#e6f4f6"}}>
                        <Stack sx={{textAlign:"center" , pt:5 , pb:5}}>
                            <Typography variant='h3'> ความแตกต่างประกันแต่ละประเภท </Typography>
                        </Stack>
</Box>*/}
                    <Container>
                        <Grid container sx={{pt:5 , pb:5}}   justifyContent="center"
                            alignItems="center">
                            <Grid 
                            item md={4}
                          
                            >
                            <Typography variant='h4'>โปรโมชั่น</Typography>
                            <Typography variant='h6'>ประกันภัยเอาใจคนงบน้อย
                                งบหลักพันก็ทำประกันได้
                            </Typography>
                            <Button 
                                    variant="contained" 
                                    style={{
                                            
                                        fontSize:18,
                                        background:"#223a66" , 
                                        borderBottom:"2px solid #e12454",
                                        borderRadius:20,
                                        marginTop:10,
                                        marginBottom:50
                                        
                                        }}>
                                            
                                                รายละเอียดเพิ่มเติม
                                            <ArrowForwardIosIcon style={{fontSize:24 , marginLeft:10}} />
                                            
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                    <Box sx={{ 
                                           borderBottom:"5px solid #e12454",
                                            boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , 
                                            transformStyle: "preserve-3d" 
                                    }}
                                    >
                                    <Swiper
                                        style={{
                                            "--swiper-navigation-color": "#e12454",
                                            "--swiper-pagination-color": "#e12454",
                                            
                                        }}
                                        slidesPerView={sizetablet ? 3 : 1}
                                        spaceBetween={sizetablet ? 10 : 0}
                                        navigation={true}
                                        pagination={{
                                        
                                        clickable: true,
                                        }}
                                        modules={[Navigation]}
                                        className="swipernew"

                                    >
                                      
                                      <SwiperSlide
                                      style={{paddingTop:sizetablet ? 20 : 0 , paddingLeft:sizetablet ? 10 : 0 , paddingBottom:sizetablet ? 20 : 0}}>
                                            <CardProduct 
                                                imgs={protect1} 
                                                txt={1} 
                                                des={"ให้การคุ้มครองมากที่สุด รับผิดชอบความเสียหายที่เกิดขึ้นกับรถยนต์ของเรา และที่เกิดขึ้นกับทรัพย์สิน ชีวิตและร่างกายของคู่กรณี หากเราเป็นฝ่ายผิด รวมถึงกรณีรถยนต์ของเราสูญหาย หรือไฟไหม้ ประกันรถยนชั้น 1 เหมาะสำหรับรถคันใหม่ หรือมือใหม่หัดขับ พอมีเงินจ่ายค่าเบี้ย เลือกประกัยภัยรถยนต์ชั้น 1 ไว้ก็อุ่นใจทุกกรณี"}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide style={{paddingTop:sizetablet ? 20 : 0 , paddingLeft:sizetablet ? 10 : 0 , paddingBottom:sizetablet ? 20 : 0}}>
                                            <CardProduct 
                                                imgs={protect2} 
                                                txt={2} 
                                                des={"รับผิดชอบเกือบทุกอย่างเหมือนประเภทที่ 1 รวมกรณีรถยนต์ของเราสูญหายหรือไฟไหม้ เพียงแต่ไม่รวมความเสียหายกับรถยนต์ของเรา คือรถเราต้องจ่ายเอง ประกันรถยนต์ประเภท 2 และ ประกันรถยนต์ 2+ เหมาะสำหรับคนขับรถช่ำชองแล้ว มั่นใจการขับรถตัวเองว่ารอบคอบ ปลอดภัยพอสมควร หรือใช้รถไม่บ่อย การเลือกประกันภัยรถยนต์ชั้น 2 จึงเป็นตัวเลือกที่ดีที่สุด"}
                                            />
                                        </SwiperSlide>
                                      <SwiperSlide  style={{paddingTop:sizetablet ? 20 : 0 , paddingLeft:sizetablet ? 10 : 0 , paddingBottom:sizetablet ? 20 : 0}}>

                                        <CardProduct
                                        imgs={protect3} 
                                        txt={3} 
                                        des={"รับผิดชอบเฉพาะของคู่กรณี ในกรณีเราเป็นฝ่ายผิด แต่ไม่รับผิดชอบความเสียหายของรถยนต์เรา ประกันรถยนต์ประเภท 3 และ ประกันชั้น 3 เหมาะสำหรับรถเก่าอายุหลายปี หรือนานๆ ใช้รถสักครั้ง ดูรายละเอียด ประกันภัยรถยนต์ชั้น 3 ได้ที่นี่"}
                                        
                                        />
                                    
                                     </SwiperSlide>
                                      <SwiperSlide  style={{paddingTop:sizetablet ? 20 : 0 , paddingLeft:sizetablet ? 10 : 0 , paddingBottom:sizetablet ? 20 : 0}}>
                                        
                                        <CardProduct
                                        imgs={protect4} 
                                        txt={"3+"} 
                                        des={"รับผิดชอบเหมือนประเภท 3 บวกรับผิดชอบรถยนต์ของเรากรณีชนกับยานพาหนะทางบก ดูรายละเอียด ประกันภัยรถยนต์ชั้น 3+ ได้ที่นี่"}
                                        
                                        />
                                        
                                      </SwiperSlide>
                                      <SwiperSlide  style={{paddingTop:sizetablet ? 20 : 0 , paddingLeft:sizetablet ? 10 : 0 , paddingBottom:sizetablet ? 20 : 0 }}>
                                      <CardProduct
                                        imgs={protect5} 
                                        txt={"2+"} 
                                        des={"ให้การคุ้มครองมากที่สุด รับผิดชอบความเสียหายที่เกิดขึ้นกับรถยนต์ของเรา และที่เกิดขึ้นกับทรัพย์สิน ชีวิตและร่างกายของคู่กรณี หากเราเป็นฝ่ายผิด รวมถึงกรณีรถยนต์ของเราสูญหาย หรือไฟไหม้ ประกันรถยนชั้น 1 เหมาะสำหรับรถคันใหม่ หรือมือใหม่หัดขับ พอมีเงินจ่ายค่าเบี้ย เลือกประกัยภัยรถยนต์ชั้น 1 ไว้ก็อุ่นใจทุกกรณี"}
                                        
                                        />
                                     </SwiperSlide>

                                    </Swiper>
                                    </Box>

                            </Grid>
                        </Grid>

                    </Container>
                   
                    
          </Box>
  )
}

export default Protection