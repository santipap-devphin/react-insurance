import React , {useContext} from 'react';
import DataContext from '../../context/DataContext';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaDog } from "react-icons/fa";
import { FaAccessibleIcon } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { PiHeartbeat } from "react-icons/pi";
import { IoIosHome } from "react-icons/io";
import BoxPrakunOther from '../../component/BoxPrakunOther';
import reasonimg from '../../assets/image/reasonimg.jpg'
import Card from '@mui/material/Card';
import { MdLocalConvenienceStore } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrDocumentTime } from "react-icons/gr";
import { FaHandHoldingHand } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";





import Button from '@mui/material/Button';

const MainPrakunOther = () => {
 
  const {scaleTablet} = useContext(DataContext);

  return (<Box sx={{mt:3 , mb:7}}>
            <Stack 
                    direction="column" 
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    sx={{mb:5 , display:{xs:"none" , md:"flex"}}}
                    >
                     <section className='section-title'>
                        <h2 >แฟมิลี่อินชัวร์ เราไม่ได้ขายแค่ประกันรถ </h2>
                    </section>   
             </Stack>
             <Box sx={{pb:10}}>
                 <Container>
                    <Grid container spacing={3}>
                            <Grid item xs={12} md={8} lg={6} xl={6}>

                                <Stack direction="column">
                                    <Typography variant='h4'>Few Reasons Why People Choosing Us!</Typography>
                                    <Typography paragraph sx={{pt:2}}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</Typography>
                                </Stack>
                               
                                <Grid 
                                    container 
                                    spacing={2}
                                    sx={{mt:1}}
                                    >
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{textAlign:"center"}}>
                                        <Card sx={{
                                                p:2,
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
                                                <Box sx={{ background:"#fff" , p:2.5}}>
                                                    <MdLocalConvenienceStore style={{fontSize:60 , color:"#223a66"}} />
                                                    <Typography variant='h6'>เราช่วยดูแล 24 ชั่วโมง</Typography>
                                                </Box>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{textAlign:"center"}}>
                                        <Card sx={{
                                                p:2,
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
                                                <Box sx={{ background:"#fff" , p:2.5}}>
                                                    <GiTakeMyMoney style={{fontSize:60 , color:"#223a66"}} />
                                                    <Typography variant='h6'>ประหยัดเงิน</Typography>
                                                </Box>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{textAlign:"center"}}>
                                        <Card sx={{
                                                p:2,
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
                                                <Box sx={{ background:"#fff" , p:2.5}}>
                                                    <GrDocumentTime style={{fontSize:60 , color:"#223a66"}} />
                                                    <Typography variant='h6'>เอกสารไม่ยุ่งยาก</Typography>
                                                </Box>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{textAlign:"center"}}>
                                        <Card sx={{
                                                p:2,
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
                                                <Box sx={{ background:"#fff" , p:2.5}}>
                                                    <FaHandHoldingHand  style={{fontSize:60 , color:"#223a66"}} />
                                                    <Typography variant='h6'>ครอบคุมทุกความเสี่ยง</Typography>
                                                </Box>
                                        </Card>
                                    </Grid>
                                 
                                </Grid>
                                
                            </Grid>
                            <Grid item xs={12} md={4} lg={6} xl={6} sx={{display:{xs:"none" , md:"flex"}}}>
                                <img src={reasonimg} alt="drafimgreason" style={{width:"100%" , objectFit: "cover" }} />
                            </Grid>
                    </Grid>
                 </Container>
             </Box>
             <Grid 
                container 
                spacing={3} 
                sx={{background:"#6b7ea0" , pb:2}}
                justifyContent="center"
                alignItems="center"
                textAlign="center"
             >
                 
                        <Grid item xs={12} md={6}>
                            <Stack direction="column" sx={{p:1}}>
                                <Typography variant='h4' sx={{color:"#fff"}}>We're Award Winning Insurance Company</Typography>
                                <Card sx={{
                                                mt:3,
                                                mb:3,
                                                p:2,
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
                                                <Box sx={{ background:"#fff" , p:2.5}}>
                                                     <Stack direction="row" spacing={3}>
                                                        <BsPersonCircle style={{fontSize:40 , color:"#223a66"}} />
                                                        <Typography variant='h6'>โทร : 089-xxx-xxxx</Typography>
                                                     </Stack>
                                                    
                                                </Box>
                                        </Card>
                            </Stack>
                        </Grid>
                        
                       

                 
                   
            </Grid>
             <Container>
                 
                <Grid container spacing={3} sx={{mt:5}}>
                    <Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
                         <BoxPrakunOther title="ประกันชีวิต" des={"Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet"}>
                                <MdFamilyRestroom style={{fontSize: 60 , color:"#fff"}} />
                         </BoxPrakunOther>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
                         <BoxPrakunOther title="ประกันสุขภาพ" des={"Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet"}>
                                <PiHeartbeat style={{fontSize:60 , color:"#fff"}} />  
                         </BoxPrakunOther>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
                         <BoxPrakunOther title="ประกันบ้าน" des={"Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet"}>
                                <IoIosHome style={{fontSize:60 , color:"#fff"}} />
                         </BoxPrakunOther>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
                         <BoxPrakunOther title="ประกันเดินทาง" des={"Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet"}>
                                <FaPersonWalkingLuggage  style={{fontSize:60 , color:"#fff"}} />
                         </BoxPrakunOther>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
                         <BoxPrakunOther title="ประกันสัตวเลี้ยง" des={"Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet"}>
                                <FaDog style={{fontSize:60 , color:"#fff"}} />
                         </BoxPrakunOther>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
                         <BoxPrakunOther title="ประกันอุบัติเหตุ" des={"Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet"}>
                                <FaAccessibleIcon style={{fontSize:60 , color:"#fff"}} />
                         </BoxPrakunOther>
                    </Grid>
                 </Grid>
            </Container>
            
             
                
          </Box>
        
  )
}

export default MainPrakunOther