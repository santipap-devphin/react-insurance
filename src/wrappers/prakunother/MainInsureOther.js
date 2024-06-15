import React , {useState , useContext} from 'react';
import DataContext from '../../context/DataContext';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardProInsure from '../../component/CardProInsure';
import Collapse from '@mui/material/Collapse';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation } from 'swiper/modules';
import CardHeader from '@mui/material/CardHeader';
import CardContentOther from '../../component/CardContentOther';
import logotib from '../../assets/image/logotib.png'
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { FaInfoCircle } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BsLine , BsFacebook } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { TbClock24 } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { PiSealCheckBold } from "react-icons/pi";



const MainInsureOther = ({titlePage}) => {

   const sizelaptop = useMediaQuery('(min-width:1024px)');
   const [expanded, setExpanded] = useState(false);
   const [openFaqs , setOpenFaqs] = useState(false);
   const {scaleTablet} = useContext(DataContext);

   const handleChange = (panel) => (event, isExpanded) => {
        setOpenFaqs(isExpanded ? panel : false);
   };
   const handleExpandClick = () => {
    setExpanded(!expanded);
  };

   return (<><Box sx={{background:"#f5f5f5" , p:scaleTablet ? 5 : 2.5}}>
            <Container sx={{padding:{xs:0}}}>
                    <Grid container spacing={4}>
                            <Grid item xs={12} sm={12} md={8}>
                                <Typography variant='h6'>{titlePage}</Typography>
                                <Typography variant={scaleTablet ? "h4" : "h5"} className='mb-4 section-title'> {titlePage} หมดกังวลค่ารักษาพยาบาล </Typography>
                              
                                <Typography paragraph sx={{lineHeight:2.5}}>
                                    รับประกันโดย แฟมิลี่อินชัวร์ โบรกเกอร์ประกันออนไลน์ที่ดีที่สุด เรามีแผนประกันอุบัติเหตุส่วนบุคคล (Personal Accident Insurance ) ให้คุณเลือกมากมายจากหลายบริษัทประกันชั้นนำ เพื่อให้ความคุ้มครองเมื่อประสบอุบัติเหตุ ทำให้คุณมีค่ารักษาพยาบาลฉุกเฉิน โดยจ่ายเบี้ยไม่กี่บาทต่อปีเท่านั้น
                                </Typography>

                                <Grid container>
                                        <Grid item xs={3} md={1}>
                                        <Typography variant='h6'>
                                            <PiSealCheckBold style={{fontSize:scaleTablet ? 42 : 32 , color:"#e12454"}} />
                                        </Typography>
                                        </Grid>
                                        <Grid item xs={9} md={11}>
                                            <Typography variant='p' sx={{fontSize:scaleTablet ? 24 : 14}}>รับประกันโดยบริษัทประกันภัยชั้นนำ</Typography>
                                        </Grid>
                                </Grid>
                                <Grid container>
                                        <Grid item xs={3} md={1}>
                                        <Typography variant='h6'>
                                            <TbClock24 style={{fontSize:scaleTablet ? 42 : 32 , color:"#e12454"}} />
                                        </Typography>
                                        </Grid>
                                        <Grid item xs={9} md={11}>
                                            <Typography variant='p' sx={{fontSize:scaleTablet ? 24 : 14}}>คุ้มครองทันที</Typography>
                                        </Grid>
                                </Grid>
                                <Grid container>
                                        <Grid item xs={3} md={1}>
                                        <Typography variant='h6'>
                                            <MdOutlineSupportAgent style={{fontSize:scaleTablet ? 42 : 32 , color:"#e12454"}} />
                                        </Typography>
                                        </Grid>
                                        <Grid item xs={9} md={11}>
                                            <Typography variant='p' sx={{fontSize:scaleTablet ? 24 : 14}}>มีผู้เชี่ยวชาญคอยให้คำปรึกษา</Typography>
                                        </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <Swiper
                                    style={{
                                        "--swiper-navigation-color": "#e12454",
                                        "--swiper-pagination-color": "#e12454",
                                        "--swiper-navigation-size": "20"
                                    
                                        }}
                                        slidesPerView={sizelaptop ? 1 : 1}
                                        spaceBetween={10}
                                        navigation={true}
                                        loop={true}
                                        pagination={{
                                        
                                        clickable: true,
                                        }}
                                        modules={[Navigation]}
                                        className="swiper"
                                >
                                        
                                        {
                                            ['1', '2' , '3' , '4'].map((val , index) => {

                                                        
                                                            return (<SwiperSlide key={index.toString()} style={{ background:"transparent" , borderTopLeftRadius: "30px" ,borderBottomRightRadius: "30px"}}>
                                                                            <CardProInsure title={`${titlePage}`} />
                                                                    </SwiperSlide>
                                                                    )
                                                        

                                            })
                                        }
                                </Swiper>
                            </Grid>
                    </Grid>
                </Container>
          </Box>
          <Box sx={{m:scaleTablet ? 5 : 2.5 , pb:scaleTablet ? 5 : 2.5}}>
            <Container sx={{padding:{xs:0}}}>
                <Stack textAlign="center" sx={{m:5}}>
                     <Typography variant={scaleTablet ? "h4" : "h6"}>รายละเอียด แผน {titlePage} สำหรับคุณ </Typography>
                </Stack>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <CardContentOther>
                        <CardHeader
                            avatar={
                            <img src={logotib} alt="logo"  style={{width:50}}/>
                            }
                           
                            title="ทิพยประกันภัย"
                            subheader="700 บาท / ปี"
                            subheaderTypographyProps={{ color: '#fff' , fontSize:24 }} 
                            sx={{background:"#223a66" , color:"#fff"}}
                        />
                         <CardContent>
                                <Grid 
                                         container
                                         sx={{mb:1 , lineHeight:2.5}}
                                    >
                                            <Grid item xs={6} textAlign="left">
                                                    <Typography variant='p'>กรณีเสียชีวิต</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="right">
                                                <Typography variant='p'>100,000 บาท</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="left">
                                                    <Typography variant='p'>สูญเสียอวัยวะ หรือ พิการถาวร</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="right">
                                                <Typography variant='p'>100,000 บาท</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="left">
                                                    <Typography variant='p'>ค่ารักษาพยาบาลต่อครั้ง</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="right">
                                                <Typography variant='p'>฿5,000</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="left">
                                                    <Typography variant='p'>สูญเสียการรับฟัง การพูดออกเสียง</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="right">
                                                <Typography variant='p'>฿0</Typography>
                                            </Grid>

                                    </Grid>
                        </CardContent>
                            <Grid container spacing={2} sx={{pl:1 , pb:1 , background:"#f5f5f5"}} >
                                <Grid item md={6}>
                                     <Button 
                                        variant='outlined' 
                                        sx={{mb:1,mr:1 , background:"#e12454" , color:"#fff"}} 
                                        onClick={handleExpandClick}
                                        >
                                        <FaInfoCircle style={{fontSize:20 , marginRight:5}} /> รายละเอียด
                                    </Button>
                                </Grid>
                                <Grid item md={6} sx={{textAlign:"right"}}>
                                     <Button 
                                        variant='contained' 
                                        sx={{mb:1,mr:1 , background:"#DFB163"}} >
                                            <IoIosCheckmarkCircle style={{fontSize:20 , marginRight:5}} /> สนใจแผนประกันนี้
                                           
                                    </Button>
                                </Grid>
                                            
                            </Grid>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Grid 
                                         container
                                         sx={{mb:1 ,lineHeight:2.5}}
                                    >
                                            <Grid item xs={6} textAlign="left" sx={{background:"#E6F4F6"}}>
                                                    <Typography variant='p'>เสียชีวิตจากอุบัติเหตุ</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="right" sx={{background:"#E6F4F6"}}>
                                                <Typography variant='p'>รวมในวงเงิน 100,000 บาท</Typography>
                                            </Grid>
                                          
                                            <Grid item xs={6} textAlign="left">
                                                    <Typography variant='p'>การสูญเสียอวัยวะ สายตา หรือทุพพลภาพถาวรจากอุบัติเหตุ</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="right">
                                                <Typography variant='p'>รวมในวงเงิน 100,000 บาท</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="left" sx={{background:"#E6F4F6"}}>
                                                    <Typography variant='p'>เสียชีวิต สูญเสียอวัยวะ สายตา และทุพพลภาพถาวรสิ้นเชิง จากฆาตกรรม ลอบทำร้าย</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="right" sx={{background:"#E6F4F6"}}>
                                                <Typography variant='p'>รวมในวงเงิน ฿100,000</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="left">
                                                    <Typography variant='p'>เสียชีวิต สูญเสียอวัยวะ สายตา และทุพพลภาพถาวรสิ้นเชิง จากการขับขี่หรือโดยสารรถจักรยานยนต์</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="right">
                                                <Typography variant='p'>รวมในวงเงิน ฿100,000</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="left" sx={{background:"#E6F4F6"}}>
                                                    <Typography variant='p'>ค่ารักษาพยาบาล (ต่ออุบัติเหตุแต่ละครั้ง)</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="right" sx={{background:"#E6F4F6"}}> 
                                                <Typography variant='p'>฿5,000</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="left">
                                                    <Typography variant='p'>ค่าใช้จ่ายทันตกรรมจากอุบัติเหตุ</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="right">
                                                <Typography variant='p'>฿1,000 (สูงสุด 30 ครั้ง/ปี)</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="left" sx={{background:"#E6F4F6"}}>
                                                    <Typography variant='p'>กรณีเข้าห้อง ICU จ่ายชดเชยวันละ (สูงสุดไม่เกิน 10 วัน)</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="right" sx={{background:"#E6F4F6"}}>
                                                <Typography variant='p'>ไม่คุ้มครอง</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="left">
                                                    <Typography variant='p'>ค่าปลงศพและค่าใช้จ่ายในการจัดการงานศพ</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="right">
                                                <Typography variant='p'>฿10,000 (จากการเจ็บป่วย และ ระยะเวลารอคอย 180 วัน)</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="left" sx={{background:"#E6F4F6"}}>
                                                    <Typography variant='p'>สูญเสียการรับฟัง การพูดออกเสียง</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="right" sx={{background:"#E6F4F6"}}>
                                                <Typography variant='p'>ไม่คุ้มครอง</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="left">
                                                    <Typography variant='p'>ค่ารักษาพยาบาล (จากอุบัติเหตุจากการขับขี่ หรือโดยสารรถจักรยานยนต์ ต่อครั้ง)</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="right">
                                                <Typography variant='p'>รวมในวงเงิน ฿5,000</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="left" sx={{background:"#E6F4F6"}}>
                                                    <Typography variant='p'>อุบัติเหตุสาธารณะ จ่ายเพิ่มเติม</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="right" sx={{background:"#E6F4F6"}}>
                                                <Typography variant='p'>ไม่คุ้มครอง</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="left">
                                                    <Typography variant='p'>ค่าเลี้ยงดู กรณีผู้เอาประกันภัยทุพพลภาพถาวรสิ้นเชิงจากอุบัติเหตุ</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="right">
                                                <Typography variant='p'>ไม่คุ้มครอง</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="left" sx={{background:"#E6F4F6"}}>
                                                    <Typography variant='p'>เงินช่วยเหลือครอบครัว กรณีผู้เอาประกันภัยเสียชีวิตจากอุบัติเหตุ</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="right" sx={{background:"#E6F4F6"}}>
                                                <Typography variant='p'>ไม่คุ้มครอง</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="left">
                                                    <Typography variant='p'>เงินชดเชยหนี้ค้างชำระตามกฎหมาย</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="right">
                                                <Typography variant='p'>ไม่คุ้มครอง</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="left" sx={{background:"#E6F4F6"}}>
                                                    <Typography variant='p'>ค่าใช้จ่ายสำหรับรถพยาบาลในการเคลื่อนย้ายผู้บาดเจ็บ (1 ครั้งต่อวัน และสูงสุดไม่เกิน 2 ครั้งต่อปี)</Typography>
                                            </Grid>
                                            <Grid item xs={6} textAlign="right" sx={{background:"#E6F4F6"}}>
                                                <Typography variant='p'>ไม่คุ้มครอง</Typography>
                                            </Grid>

                                    </Grid>
                                </CardContent>
                            </Collapse>
                        </CardContentOther>
                    </Grid>
                 </Grid>
             </Container>
          </Box>
          <Box sx={{pb:8 , background:"#f5f5f5"}}>
            <Container>
                    <Stack textAlign="center" sx={{p:scaleTablet ? 5 : 2.5}}>
                        <Typography variant={scaleTablet ? "h4" : "h6"}>{titlePage}  คืออะไร ทำไมต้องทำ ? </Typography>
                    </Stack>
                    <Stack direction="column">
                        <Typography paragraph sx={{fontSize:scaleTablet ? 16 : 12}}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        </Typography>
                        
                    </Stack>
            </Container>
          </Box>
          <Grid 
                container 
                spacing={3} 
                sx={{background:"#223a66" , pb:2}}
                justifyContent="center"
                alignItems="center"
            
             >
                         <Grid item xs={12} md={12}>
                             <Typography variant={scaleTablet ? "h4" : "h6"} sx={{color:"#fff"}} textAlign="center">ต้องการความช่วยเหลือ ติดต่อเราเลย</Typography>
                         </Grid>
                         <Grid item xs={12} md={12} textAlign="center" sx={{pt:2 , pb:1}}>
                            <IconButton size={scaleTablet ? "large" : "medium"} style={{background:"#00b900" , margin:5}}>
                                <BsLine style={{color:"#fff"}} />  
                            </IconButton>
                            <IconButton size={scaleTablet ? "large" : "medium"} style={{background:"#1877f2" , margin:5}}>
                                <BsFacebook style={{color:"#fff"}} />  
                             </IconButton>
                             <IconButton size={scaleTablet ? "large" : "medium"} style={{background:"#e12454" , margin:5}}>
                                <LuPhoneCall style={{color:"#fff"}} />  
                             </IconButton>
                         </Grid>
            </Grid>
            <Box sx={{p:scaleTablet ? 1 : 0.5, background:"#f5f5f5" , pb:5}}>
                <Container>
                    <Stack textAlign="center" sx={{mt:scaleTablet ? 5 : 2.5}}>
                        <Typography variant={scaleTablet ? "h4" : "h6"}>คำถาม {titlePage} พบบ่อย </Typography>
                    </Stack>
                    <Grid container sx={{pt:scaleTablet ? 5 : 2.5,pb:scaleTablet ? 5 : 2.5}}>
                        <Grid item xs={12} md={12}>
                        <Accordion expanded={openFaqs === 'panel1'} onChange={handleChange('panel1')} sx={{mb:2}}>
                                 <AccordionSummary
                                 expandIcon={<ExpandMoreIcon sx={{color:"#e12454"}} />}
                                 aria-controls="panel1bh-content"
                                 id="panel1bh-header"
                                 >
                                <Box sx={{pt:0.25 ,pr:0.2}}><HelpOutlineIcon style={{fontSize:scaleTablet ? 28 : 20 , color:"#47b2e4"}} /> </Box>
                                 <Typography variant={scaleTablet ? "h5" : "p"} sx={{color:"#37517e"}}>
                                     ใครที่ซื้อ{titlePage}ได้บ้าง
                                 </Typography>
                                </AccordionSummary>
                                 <AccordionDetails>
                                     
                                 <Grid container spacing={1} sx={{mb:1}}>
                                            <Grid item xs={12} md={6}>
                                            <Typography>
                                                1.1 ค่าห้อง ค่าอาหาร และค่าบริการในโรงพยาบาล
                                            </Typography>    
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                            <Typography>
                                                20,000 บาทต่อวัน
                                            </Typography>    
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                            <Typography>
                                                9,000 บาทต่อวัน
                                            </Typography>   
                                            </Grid>
                                     </Grid>
                                    </AccordionDetails>
                             </Accordion>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
          </>
  )
}

export default MainInsureOther