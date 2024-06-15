import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const BoxPrakunOther = ({children , title , des}) => {

  let navicate = useNavigate();
  const goToUrl = (url) => {

    navicate("/prakun/"+url)

  }
  return (<Card sx={{
                background:"#fff",
                cursor:"pointer",
                boxShadow : "0 0 45px rgba(0, 0, 0, .07)",
                '&:hover': {
                border: 1, 
                borderStyle:"ridge",
                borderColor:"white",
                cursor:"pointer",
            },}}>
            <Grid container 
                sx={{mt:5}}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={4} md={3} 
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    sx={{
                            
                        background:"#e12454" ,
                        borderTopRightRadius:"10px !important" ,
                        borderBottomRightRadius:"10px !important",
                         p:1
                        }}>
                      
                           {children}

                     </Grid>
                    <Grid item 
                        xs={8} 
                        md={9}
                       sx={{pl:3}}
                    >
                         <Typography variant='h5'>{title}</Typography>
                    </Grid>
            </Grid>
            <Stack direction="column" sx={{p:4}}>
                <Typography paragraph sx={{pt:2 , pb:2}}>
                        {des}
                </Typography>
                <Button variant="outlined" 
                sx={{
                    background:"#F6F7FC" , 
                    borderColor:"#F6F7FC",
                    fontSize:18,
                    color:"#e12454",
                    '&:hover': {
                        border: 2, 
                        borderStyle:"ridge",
                        borderColor:"white",
                        cursor:"pointer",
                        color:"#000"
                        }
                    }}
                    onClick={() => goToUrl(title)}
                    >
                    ดูเพิ่มเติม
                </Button>
            </Stack>
        
    </Card>
  )
}

export default BoxPrakunOther