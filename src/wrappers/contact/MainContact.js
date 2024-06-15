import React , {useContext} from 'react';
import DataContext from '../../context/DataContext';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import imgmap from '../../assets/image/drafmap.jpg';
import Card from '@mui/material/Card';

const MainContact = () => {

  const {scaleTablet} = useContext(DataContext);

  return (<Box sx={{pb:{sm:5 , md:5} ,mt:{xs:5 , sm:2} , mb:{xs:5 , sm:2}}}>

                 <Stack 
                    direction="column" 
                    justifyContent="center"
                    alignItems="center"
                    sx={{mb:5}}
                    >
                     <section className='section-title'>
                        <h2>ติดต่อเรา</h2>
                    </section>   
                    
                </Stack>
           
                <Container>
                <div className='contact'>
                
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                    <Card sx={{
                        p:3,
                        background:"#fff",
                        borderTop: "3px solid #e12454",
                        borderBottom: "3px solid #e12454",
                        boxShadow : "0 2px 5px 0 rgba(0, 66, 155, 0.2)",
                        cursor:"pointer",
                        }}>
                        <Grid container spacing={2}>
                                <Grid item xs={3} sm={3} md={4} lg={2}>
                                    <IconButton aria-label="Example">
                                            <LocationOnIcon sx={{fontSize:scaleTablet ? 32 :22}} />
                                    </IconButton>
                                
                                </Grid>
                                <Grid item xs={9} sm={9} md={8} lg={10}>
                                    <Typography variant="h6">Location</Typography>
                                    <Typography variant='p' sx={{fontSize:{xs:12 , md:14 }}}>A108 Adam Street, New York, NY 535022</Typography>
                                </Grid>
                            </Grid>
                            <Grid container sx={{mt:2}}>
                                <Grid item xs={3} sm={3} md={4} lg={2}>
                                    <IconButton aria-label="Example">
                                            <MarkunreadIcon sx={{fontSize:scaleTablet ? 28 :18}} />
                                     </IconButton>
                                </Grid>
                                <Grid item xs={9} sm={9} md={8} lg={10}>
                                    <Typography variant="h6">Email:</Typography>
                                    <Typography variant='p' sx={{fontSize:{xs:12 , md:14 }}}>info@example.com</Typography>
                                </Grid>
                            </Grid>
                            <Grid container sx={{mt:2}}>
                                <Grid item xs={3} sm={3} md={4} lg={2}>
                                    <IconButton aria-label="Example">
                                            <ContactPhoneIcon sx={{fontSize:scaleTablet ? 26 :18}} />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={9} sm={9} md={8} lg={10}>
                                    <Typography variant="h6">Call:</Typography>
                                    <Typography variant='p' sx={{fontSize:{xs:12 , md:14 }}}>+1 5589 55488 55s</Typography>
                                </Grid>
                            </Grid>
                            <Grid container sx={{mt:2}}>
                                <Grid item xs={12} sm={12}>
                                    <img src={imgmap} style={{width:"100%"}} alt="img map" />
                                </Grid>
                               
                            </Grid>
                   
                     </Card>

                      
                    </Grid>
                    <Grid item xs={12} sm={8} >

                        <Card sx={{
                            p:3,
                            background:"#fff",
                            borderTop: "3px solid #e12454",
                            borderBottom: "3px solid #e12454",
                            boxShadow : "0 2px 5px 0 rgba(0, 66, 155, 0.2)",
                            cursor:"pointer",
                            }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="ชื่อ"
                                        id="outlined-start-adornment"
                                    
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="อีเมล์"
                                        id="email"
                                    
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><AlternateEmailIcon /></InputAdornment>,
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                    
                                        id="message"
                                        label="ข้อความติดต่อ"
                                        rows={4}
                                        multiline
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                        <Button variant="contained" sx={{background:"#223a66"}} fullWidth>ส่งข้อความ</Button>
                                </Grid>

                            
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
                </div>
                </Container>
            
            
          </Box>    
  )
}

export default MainContact