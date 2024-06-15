import React , {useContext} from 'react';
import DataContext from '../context/DataContext';
import CardNew from '../component/CardNew';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';

const BlogNews = () => {

  const {matches} = useContext(DataContext);

  return (<Box sx={{ background:"#e9e9e9 !important"}}>
            <Container>
                <Stack 
                     direction="column"
                     justifyContent="center"
                     alignItems="center"
                     sx={{pt:4 , pb:4}}
                    >
                        <Typography variant={matches ? "h6" : "h4"} textAlign="center">บทความน่ารู้ สำหรับประกันภัย</Typography>
                </Stack>
                <Grid container spacing={3} sx={{pb:10}}>
                        
                        <Grid item xs={12} sm={6} md={6} lg={4} >
                            <CardNew />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <CardNew />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <CardNew />
                        </Grid>
                </Grid>
            </Container>
           </Box>
  )
}

export default BlogNews