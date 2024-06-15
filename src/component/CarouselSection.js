import React , {useContext} from 'react';
import Box from '@mui/material/Box';
import DataContext from '../context/DataContext';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const CarouselSection = () => {

  const {scaleTablet , styles}  = useContext(DataContext);

 

  return (<Grid sx={{ flexGrow: 1  ,pt:0}}>
                    <Box
                        sx={
                           {
                            display: 'flex',
                            flexWrap: 'wrap',
                           }
                        }
                    >
                        <Paper style={styles.paperContainer} component={Stack} direction="column" justifyContent="center">
                            <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}
                            >
                               <Typography
                                    style={{color:"#fff" , textShadow:"2px 2px 10px black" , background:"#e12454" , padding:10 , borderRadius: 10}}
                                    component={scaleTablet ? "h3" : "h6"}
                                    variant={scaleTablet ? "h2" : "h4"}
                                    align="center"
                                    color="text.primary"
                                    gutterBottom
                                    >
                                       ค้นหาประกันที่เหมาะกับคุณ
                                    </Typography>
                                    <Typography style={{color:"#fff" , textShadow:"5px 5px  #15233C"}} variant={scaleTablet ? "h3" : "h5"} align="center" >
                                        เราคัดสรรประกันภัยประเภทต่างๆ ที่เหมาะสำหรับคุณแล้ว
                                    </Typography>
                                    <Button 
                                        variant="contained" 
                                        
                                        style={{
                                        fontSize:scaleTablet ? 32 : 20,
                                        background:"#223a66" , 
                                        borderBottom:"5px solid #e12454"
                                        }}>
                                           
                                            เช็คเลย
                                            <TravelExploreIcon style={{fontSize:scaleTablet ? 32 : 20 , marginLeft:10}} /> 
                                        </Button>
                                 </Stack>
                        </Paper>
                    </Box>
             </Grid>
  )
}

export default CarouselSection