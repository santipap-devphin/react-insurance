import React from 'react';
import {Stack , Box , Typography , TextField, InputAdornment , Button , Alert , Grid} from "@mui/material";
import KeyIcon from '@mui/icons-material/Key';
import GppGoodIcon from '@mui/icons-material/GppGood';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const FrmRenew = () => {

  const handdleSubmit = (e) => {
        e.preventDefault();
  }

  return (<Box sx={{mt:5,backgroundColor: "#ffffff" , color:"#000" , boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)", transformStyle: "preserve-3d"}}>
            <form onSubmit={handdleSubmit}>
                <Stack spacing={3} sx={{p:3}}>
                <Typography variant='h4'>ต่ออายุกรมธรรม์ </Typography>
                    <TextField
                                            label="*หมายเลขกรมธรรม์"
                                            id="documentID"
                                            InputProps={{
                                                endAdornment: <InputAdornment position="start"><CheckCircleIcon sx={{color:"green"}} /></InputAdornment>,
                                            }}
                                            value={""}
                                            /*onChange={(e) => setNewPass(e.target.value)}*/
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                    />
                     <TextField
                                            label="*หมายเลขบัตรประชาชน"
                                            id="IDcard"
                                            InputProps={{
                                                endAdornment: <InputAdornment position="start"><CheckCircleIcon sx={{color:"green"}} /></InputAdornment>,
                                            }}
                                            value={""}
                                            /*onChange={(e) => setNewPass(e.target.value)}*/
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                    />
                </Stack>
                <Grid container>
                    <Grid item xs={12} md={12}>
                        <Button type="submit" variant="contained" sx={{ml:3 , mr:3 , mb:3 , backgroundColor:"#f48225"}}>ยืนยัน</Button>  
                     </Grid>
                </Grid>
                
            </form>
         </Box>
      )
}

export default FrmRenew