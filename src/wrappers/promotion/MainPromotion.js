import React , {useContext} from 'react';
import DataContext from '../../context/DataContext';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import imgpromotion from '../../assets/image/drafpromotion.jpg';
import CardData from '../../component/CardData';
import Pagination from '@mui/material/Pagination';



const MainPromotion = () => {

  const  {scaleTablet} = useContext(DataContext);
  return (<Box sx={{p:scaleTablet ? 5 : 1 , mt:{xs:2 , sm:2}}}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <CardData imgs={imgpromotion} title="โปรปัง ไปต่อ ประกันภัยชั้น 1">
                            <Typography variant='h5'>โปรปัง ไปต่อ ประกันภัยชั้น 1</Typography>
                            <Typography paragraph>
                                 ประกันชั้น 1 ราคาเริ่มต้น 6,800 บาท ไม่มีบัตร ผ่อนเงินสดได้  0% สูงสุด 6 งวด อ่านต่อ...
                             </Typography>
                            
                             
                             <Chip  label="ระยะเวลาโปรโมชั่น 01/10/2023-15/01/2024"/>
                        </CardData>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <CardData imgs={imgpromotion} title="โปรปัง ไปต่อ ประกันภัยชั้น 1">
                            <Typography variant='h5'>โปรปัง ไปต่อ ประกันภัยชั้น 1</Typography>
                            <Typography paragraph>
                                 ประกันชั้น 1 ราคาเริ่มต้น 6,800 บาท ไม่มีบัตร ผ่อนเงินสดได้  0% สูงสุด 6 งวด อ่านต่อ...  
                             </Typography>

                             <Chip label="ระยะเวลาโปรโมชั่น 01/10/2023-15/01/2024" />
                        </CardData>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <CardData imgs={imgpromotion} title="โปรปัง ไปต่อ ประกันภัยชั้น 1">
                            <Typography variant='h5'>โปรปัง ไปต่อ ประกันภัยชั้น 1</Typography>
                            <Typography paragraph>
                                 ประกันชั้น 1 ราคาเริ่มต้น 6,800 บาท ไม่มีบัตร ผ่อนเงินสดได้  0% สูงสุด 6 งวด อ่านต่อ...
                             </Typography>
                             <Chip label="ระยะเวลาโปรโมชั่น 01/10/2023-15/01/2024" />
                        </CardData>
                    </Grid>
                </Grid>
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{pt:3 ,pb:{xs:3 , sm:3 , md:0}}}
                >

                    <Pagination count={5} color="secondary" size='large'/>
                  
                </Stack>
            </Container>
         </Box>
  )
}

export default MainPromotion