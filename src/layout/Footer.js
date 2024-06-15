import React , {useContext} from 'react';
import DataContext from '../context/DataContext';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { BsLine , BsFacebook } from "react-icons/bs";
import IconButton from '@mui/material/IconButton';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { LuPhoneCall } from "react-icons/lu";
import Card from '@mui/material/Card';
import { IoIosCall } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { IoMdLink } from "react-icons/io";
import { BsPersonVcardFill } from "react-icons/bs";
import { BsPostcardHeartFill } from "react-icons/bs";




const Footer = () => {

  const {scaleTablet} = useContext(DataContext);

  const handleClk = () => {

  }

  return (<Box sx={{ background:"#6b7ea0 !important" , color:"#fff"}}>
             <Container>
                <Grid container sx={{pt:2 ,pb:2}} spacing={scaleTablet ? 3 : 1}>

                        
                      
                        <Grid item xs={12} sm={6} md={6} lg={3} sx={{mb:1}}>
                                <Card sx={{
                                              
                                                p:1,
                                                borderRadius:2.5,
                                                background:"#F6F7FC",
                                                '&:hover': {
                                                backgroundColor: '#fff',
                                                border: 0.1 , 
                                                borderStyle:"ridge",
                                                borderColor:"gray",
                                                cursor:"pointer",
                                                opacity: [0.9, 0.8, 0.7],
                                                },}}>
                                                <Box sx={{ background:"#fff" , p:1.5}}>
                                                     <Stack direction="row" spacing={2}>
                                                        <Diversity1Icon style={{fontSize:32 , color:"#223a66"}} />
                                                        <Typography variant='h6'>FAMILY INSURE</Typography>
                                                     </Stack>
                                                    
                                                </Box>
                                </Card>
                      
                            <Stack direction="column">

                                <Typography variant='p' sx={{p:1}}>ประกันออนไลน์ 24 ชั่วโมง พร้อมเป็นที่ปรึกษาของคุณกรณี เกิดปัญหา เคลม เราเป็นตัวกลางให้คุณได้รับความสะดวก ลดขั้นตอนยุ่งยากในการติดต่อประสานกลาง ดูแลคุณเหมือนเป็นคนในครอบครัว</Typography>
                             </Stack>
                            <Stack 
                            direction={{ xs: 'row', sm: 'row' }}
                            spacing={{ xs: 1, sm: 2, md: 1 }}>
                             <IconButton size="large" onClick={() => handleClk("line")} style={{background:"#00b900" , margin:5}}>
                                     <BsLine style={{color:"#fff"}} />  
                             </IconButton>
                             <IconButton size="large" onClick={() => handleClk("line")} style={{background:"#1877f2" , margin:5}}>
                                     <BsFacebook style={{color:"#fff"}} />  
                             </IconButton>
                             <IconButton size="large" onClick={() => handleClk("call")} style={{background:"#e12454" , margin:5}}>
                                     <LuPhoneCall style={{color:"#fff"}} />  
                             </IconButton>
                            </Stack>
                        </Grid> 
                        <Grid item xs={12} sm={6} md={6} lg={3} sx={{mb:1}}>
                            <Typography variant='h5'>เลขที่ใบอนุญาต</Typography>
                            <Stack direction="row" sx={{mt:scaleTablet ? 2 :0}}>
                                <IconButton size='small'style={{color:"#fff"}}>
                                     <BsPersonVcardFill />   
                                </IconButton>
                                <Typography variant='p'>ประกันวินาศภัย ว000xxx/xxxxx</Typography>             
                                       
                            </Stack>
                            <Stack direction="row">
                                <IconButton size='small'style={{color:"#fff"}}>
                                     <BsPostcardHeartFill />   
                                </IconButton>
                                <Typography variant='p'>ประกันชีวิต ว000xxx/xxxxx</Typography>             
                                       
                            </Stack>
                        </Grid>
                        
                        
                         <Grid item xs={12} sm={6} md={6} lg={3} sx={{mb:1}}>
                            
                            <Typography variant='h5'>ลิงก์ภายใน</Typography>
                            <Stack direction="row" sx={{mt:scaleTablet ? 2 :0}}>
                                <IconButton size='small'style={{color:"#fff"}}>
                                     <IoMdLink />   
                                </IconButton>
                                <Typography variant='p'>เปรียบเทียบราคาตามงบ</Typography>             
                                       
                            </Stack>
                            <Stack direction="row">
                                <IconButton size='small'style={{color:"#fff"}}>
                                     <IoMdLink />   
                                </IconButton>
                                <Typography variant='p'>โปรโมชั่น</Typography>             
                                       
                            </Stack>
                            <Stack direction="row">
                                <IconButton size='small'style={{color:"#fff"}}>
                                     <IoMdLink />   
                                </IconButton>
                                <Typography variant='p'>เกี่ยวกับเรา</Typography>             
                                       
                            </Stack>
                            <Stack direction="row">
                                <IconButton size='small'style={{color:"#fff"}}>
                                     <IoMdLink />   
                                </IconButton>
                                <Typography variant='p'>คำถามพบบ่อย</Typography>             
                                       
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                             <Typography variant='h5'>ติดต่อเรา(Call Center) </Typography>
                             <Stack direction="row" sx={{mt:scaleTablet ? 2 :0}}>
                                <IconButton size='small'style={{color:"#fff"}}>
                                    <IoIosCall />     
                                </IconButton>
                                <Typography variant='p'> 02-xxx-xxxx </Typography>
                             </Stack>
                             <Stack direction="row">
                                <IconButton size='small'style={{color:"#fff"}}>
                                     <RiContactsFill   />
                                </IconButton>
                                
                                <Typography variant='p'>เวลาทำการ จ-ส 8.00 - 18.00 <br/>(ยกเว้นวันหยุดนักขัตฤกษ์) </Typography>
                             </Stack>
                         </Grid>
                      
                </Grid>
             </Container>
             <Box sx={{ background:"#e12454 !important" , color:"#fff"}}>
                    <Stack direction="column" textAlign="center">
                         <Typography variant="h6" sx={{p:1}}>Copy right Devphin 2023</Typography>
                    </Stack>
             </Box>
          </Box>
  )
}

export default Footer