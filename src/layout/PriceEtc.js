import React , {useContext} from 'react';
import DataContext from '../context/DataContext';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import CardEtc from '../component/CardEtc';
import imageicon1 from '../assets/image/icon1.png';
import imageicon2 from '../assets/image/icon2.png';
import imageicon3 from '../assets/image/icon3.png';
import imageicon4 from '../assets/image/icon4.png';

const PriceEtc = () => {

  const {matches} = useContext(DataContext);

  return (<Box sx={{ background:"#e9e9e9 !important"}}>
            <Container>
                <Stack direction="column">
                    <Typography variant={matches ? "h6" : "h4"} textAlign="center" sx={{pt:4 , pb:2}}>  ทำไมต้องซื้อประกันภัยรถยนต์ แฟมิลี่อินชัวร์? </Typography>
                </Stack>
                <Grid container 
                    sx={{p:2}}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                    >
                    <Grid item md={3} textAlign="center" >
                        <CardEtc imgs={imageicon1} />
                        <Typography variant={matches ? "h6" : "h5"} sx={{pt:1.5 , pb:1.5}}>มีงบเท่าไหร่ เราหาให้ได้</Typography>
                        
                    </Grid>
                    <Grid item md={3} textAlign="center">
                        <CardEtc imgs={imageicon2} />
                        <Typography variant={matches ? "h6" : "h5"} sx={{pt:1.5 , pb:1.5}}>ส่วนลด 5% ทันที</Typography>
                        
                    </Grid>
                    <Grid item md={3} textAlign="center">
                        <CardEtc imgs={imageicon3} />
                        <Typography variant={matches ? "h6" : "h5"} sx={{pt:1.5 , pb:1.5}}>ต่ออายุประกันง่ายๆ</Typography>
                        
                    </Grid>
                    <Grid item md={3} textAlign="center">
                        <CardEtc imgs={imageicon4} />
                        <Typography variant={matches ? "h6" : "h5"} sx={{pt:1.5 , pb:1.5}}>ผ่อน 0 % 10 เดือน</Typography>
                        
                    </Grid>
                </Grid>
            </Container>
          </Box>
  )
}

export default PriceEtc