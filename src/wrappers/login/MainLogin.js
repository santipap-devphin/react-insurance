import React , {useContext} from 'react';
import DataContext from '../../context/DataContext';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import Card from '@mui/material/Card';

const MainLogin = () => {

  const {scaleTablet} = useContext(DataContext);

  return (<Box sx={{pb:{sm:5 , md:5} ,mt:{xs:0 , sm:2} , mb:{xs:5 , sm:5}}}>
            <Stack 
                    direction="column" 
                    justifyContent="center"
                    alignItems="center"
                    sx={{mb:{xs:2 , md:5}}}
                    >
                     <section className='section-title'>
                        <h2>เข้าสู่ระบบ</h2>
                    </section>   
             </Stack>

               <Container>

                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs={12} sm={8} >
                            <Card sx={{
                                p:5,
                                background:"#fff",
                                borderTop: "3px solid #e12454",
                                borderBottom: "3px solid #e12454",
                                boxShadow : "0 2px 5px 0 rgba(0, 66, 155, 0.2)",
                                cursor:"pointer",
                                }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                            label="Username"
                                            id="outlined-start-adornment"
                                        
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
                                            }}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                            label="Password"
                                            id="password"
                                        
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start"><PasswordIcon   /></InputAdornment>,
                                            }}
                                            fullWidth
                                        />
                                    </Grid>
                                    
                                    <Grid item xs={12} sm={4}>
                                            
                                            <Button variant="contained" sx={{background:"#223a66"}} fullWidth>   ยืนยัน  <AdsClickIcon sx={{ml:1}} /> </Button>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
          </Box>
        )
}

export default MainLogin