import React , {useContext} from 'react';
import DataContext from '../context/DataContext';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import imagepartner from '../assets/image/testimonial-desktop (1).jpg';


const Partners = () => {

 const {matches} = useContext(DataContext);

  return (
    <Box sx={{ background:"#fff !important" , mb:6}}>
            <Container>
                    <Stack direction="column">
                        <Typography variant={matches ? "h6" : "h4"} textAlign="center" sx={{pt:5}}> เรามีประกันชั้นนำเป็นพันธมิตร มากกว่า 20 บริษัท </Typography>
                    </Stack>
                    <Grid container>
                            <Grid item xs={12} md={12}>
                                <img src={imagepartner} style={{width:"100%"}} alt="พันธมิตร บริษัทประกัน" />

                            </Grid>
                    </Grid>
            </Container>

    </Box>
  )
}

export default Partners