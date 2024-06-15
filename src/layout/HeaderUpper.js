import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { Stack , Typography , Chip  } from '@mui/material';

const HeaderUpper = () => {
  return (<Box sx={{display:{xs:"none" , md:"block"} , background:"#223a66" , color:"#fff" , height:60 }}>
                <Container>

                <Box sx={{
                            display:"flex" , 
                            background:"#fff" , 
                            borderBottom:"5px solid #e12454",
                            boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , 
                            transformStyle: "preserve-3d" ,
                            position:"absolute", 
                            zIndex:2 
                        }}>

                    <Grid 
                         container
                         spacing={1}>
                        <Grid item xs={12} md={12}>
                             <Stack sx={{p:5 , color:"#223a66"}}>
                                 <Typography variant='h6' className='fontKanitLight'>
                                    
                                    <span style={{color: "#223a66" , fontWeight:500}}>FAMILY</span>
                                    <Diversity1Icon sx={{pl:1 ,pr:1 ,fontSize:32}} />
                                    <span style={{color: "#e12454" , fontWeight:500}}>INSURE</span>
                                   
                                </Typography>
                                <Typography sx={{color:"#000"}}>ประกันออนไลน์ 24 ชั่วโมง</Typography>
                             </Stack>
                        </Grid>
                        </Grid>
                 </Box>

                <Box sx={{position:"relative"}} >
                    <Grid 
                    container
                    spacing={1}>
                        <Grid item xs={6} md={9}>
                                <Stack 
                                                direction="row"
                                                justifyContent="center"
                                                alignItems="center" 
                                                spacing={{ xs: 1, sm: 2, md: 2 }}
                                                sx={{color:"#fff" , height:52}}
                                                >
                                                
                                                <Link to={"/login"}  style={{ textDecoration: 'none' , color:"#fff" }}> 
                                                    <Typography>เข้าสู่ระบบ</Typography>
                                                </Link>
                                                <Typography>|</Typography>
                                                <Link to={"/register"}  style={{ textDecoration: 'none' , color:"#fff" }}> 
                                                    <Typography>สมัครสมาชิก </Typography>
                                                    
                                                </Link>
                                                <Chip label="ส่วนลด 5 %" color="warning" />
                                                
                                               
                                                
                                </Stack>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Stack 
                                justifyContent="center"
                                alignItems="center" 
                                sx={{background:"#e12454" , height:52}}>
                                Contact 089-222-xxxx
                            </Stack>
                            
                        </Grid>
                    </Grid>
                </Box>
                
                </Container>
          </Box>
  )
}

export default HeaderUpper