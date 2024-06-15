import React , {useContext, useState } from 'react';
import DataContext from '../context/DataContext';
import {Typography , Box , Button , Card , CardActions , CardContent , Chip  , Grid, IconButton  , Collapse , Modal} from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import logotib from '../assets/image/logotib.png'
import imgAccRec from '../assets/image/img-accident-1.jpg'
import CardMedia from '@mui/material/CardMedia';
import { BsFillInfoCircleFill } from "react-icons/bs";




const CardProInsure = ({title}) => {

  const {scaleTablet} = useContext(DataContext);
  const [openDetail , setOpenDetail] = useState(false);

  
  const handleExpandClick = () => {
    setOpenDetail(!openDetail);
   
  };
  const handleClose = () => {
    console.log(openDetail)
    setOpenDetail(false);
  }

  /*const Transition = React.forwardRef(function Transition(props, ref) {

    return <Slide direction="up" ref={ref} {...props} />;

  });*/


 
   return (<Card sx={{ 
                maxWidth: 380 , 
                backgroundColor: '#fff', 
                mt:-1 , 
                border: "2px solid rgba(0,0,0,.125)",
                
                }}
                
        >
           { console.log(openDetail)}
        <CardMedia
                sx={{ height: 180 }}
                image={imgAccRec}
                title="green iguana"
            />
           
            <CardContent>
                 <Grid container>
                        <Grid item xs={3} sm={2} md={3}>
                            <img src={logotib} style={{width:"75%"}} />
                        </Grid>
                        <Grid item xs={9} sm={10} md={9}>
                            <Typography variant="h6" sx={{fontSize:scaleTablet ? 18 : null}}>ประกันอุบัติเหตุ แผน 1</Typography>
                            <Typography variant='p'>ทิพยประกันภัย</Typography>
                        </Grid>
                 </Grid>
                 <Grid container>
                        <Grid item xs={6}>
                            <Typography style={{textAlign:"left" , marginLeft:10}}>เบี้ยประกัน</Typography>
                            <Chip label="500 บาท / ปี" sx={{fontSize:24 , background:"#e12454" , color:"#fff"}} />
                        </Grid>
                        <Grid item xs={6} textAlign="right">
                             <Typography variant='p'>เพิ่มเติม</Typography> 
                             <IconButton onClick={handleExpandClick} >
                                 <BsFillInfoCircleFill style={{fontSize:24}} />
                             </IconButton>
                            
                        </Grid>
                        
                 </Grid>
            </CardContent>
            
            <Dialog
               
                open={openDetail}
                /*TransitionComponent={Transition}*/
                
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                style={{transition: "all 150ms linear 0.5s"}}
            >
                <DialogTitle>{"รายละเอียดเพิ่มเติม"}</DialogTitle>
                <DialogContent>
                <Grid 
                        container
                        sx={{mb:1 ,lineHeight:2.5 , transition: "all 150ms linear 0.5s"}}
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
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} variant='outlined' color="error">ปิด</Button>
              
                </DialogActions>
            </Dialog>
            <CardActions sx={{justifyContent:"center", mb:1}}>
                    <Button className='font-kanit-light' size="large" 
                    variant='outlined'
                    sx={{color:"#007ab3" , borderColor:"#007ab3" , '&:hover': {
                        backgroundColor: '#006192',
                        color:"#fff"
                        },}}
                    >ซื้อแผนประกันนี้</Button>
                    {/*<Button className='font-kanit-light' size="large" variant='outlined'
                    sx={{color:"#007ab3" , borderColor:"#007ab3" , '&:hover': {
                        backgroundColor: '#006192',
                        color:"#fff"
                        },}}
                    >รายละเอียด</Button>*/}
                </CardActions>
        </Card>
      )
}

export default CardProInsure