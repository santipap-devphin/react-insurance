import React , {useContext} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import imgabout from '../../assets/image/drafabout.jpg'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import DataContext from '../../context/DataContext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const MainAbout = () => {

 const {scaleTablet} = useContext(DataContext);

  return (<Box sx={{pt:5 , pb:5}}>
            <Container>
                <Box sx={{display:"flex" , pr:3 ,pb:3 , position:"absolute" , zIndex:2 , backgroundColor: "#fff !important" , borderRadius:5}}>
                <Card sx={{
                    p:scaleTablet ? 5 : 1,
                    background:"#e12454",
                    cursor:"pointer",
                    color:"#fff",
                    '&:hover': {
                    border: 1, 
                    borderStyle:"ridge",
                    borderColor:"white",
                    cursor:"pointer",
                
                    },}}>

                     <Stack 
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                     >
                        <Typography variant='h4'> 25</Typography>
                        <Typography variant='h5'>Years</Typography>
                        <Typography variant='h6'>Experience</Typography>
                     </Stack>
                   
                </Card>
                </Box>  
                <Box sx={{position:"relative"}} >
                    
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 2, md: 3 }} >
                        <Grid item xs={12} md={6} sx={{pr:scaleTablet ? 5 : 3.5}}>
                            <img src={imgabout} alt="img about" style={{width:"100%" , marginTop:scaleTablet ? "3rem" : "1rem"  , marginLeft:scaleTablet ? "3rem" : "1rem"}}  />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant={scaleTablet ? "h4" : "h6"} sx={{pl:scaleTablet ? "3rem" : "1rem"}}>
                             จุดเริ่มต้น ของแฟมิลี่ อินชัวร์
                            </Typography>
                            <Typography  sx={{p:scaleTablet ? "3rem" : "1rem"}} paragraph>
                                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet
                            </Typography>
                        </Grid>
                    </Grid>

                </Box>
             </Container>
             <Box  sx={{mt:5}}>
                   <Grid container>
                        <Grid item xs={12} md={6} sx={{backgroundColor:"#e6f4f6" }}>
                            <Stack direction="column" sx={{p:scaleTablet ? 10 :2}}>
                                <Typography variant='h5'>For Individuals And Organisations</Typography>
                                <Typography paragraph>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</Typography>
                                <Button 
                                    variant="contained" 
                                    style={{
                                        
                                        fontSize:16,
                                        background:"#223a66" , 
                                        borderBottom:"2px solid #e12454",
                                        borderRadius:20,
                                        marginTop:2,
                                        marginBottom:10
                                        }}
                                       sx={{width:{xs:"55%" , sm:"40%" , md:"45%" , lg:"35%"}}}
                                        >
                                        รายละเอียด
                                        <ArrowForwardIosIcon style={{fontSize:24 , marginLeft:5}} />
                                            
                                </Button>
                           
                            </Stack>
                           
                        </Grid>
                        <Grid item xs={12} md={6} sx={{p:scaleTablet ? 10 :2 , backgroundColor:"#f5f5f5"}}>
                            xxxxxxxxxxxxxx
                        </Grid>
                   </Grid>
                   
                </Box>
                <Container>
                    <Box sx={{mt:5 ,mb:1,borderBottom:"1px solid #e12454" ,  boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , transformStyle: "preserve-3d" }}>
                        
                        <Stack 
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                            sx={{p:5}}
                            >
                        
                           
                            <Typography variant='h4'>ความเป็นมาของเรา</Typography>
                            <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                            </Typography>
                            <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                            </Typography>
                           
                        </Stack>
                    </Box>
                </Container>
                
          </Box>
  )
}

export default MainAbout