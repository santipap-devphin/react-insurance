import React from 'react';
import Card from '@mui/material/Card';
import imgDraf from '../assets/image/drafimgnew.jpg';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import {Typography} from '@mui/material';

const CardNew = () => {
  return (<Card sx={{
               
        background:"#fff",
        cursor:"pointer",
      
        '&:hover': {
        border: 1, 
        borderStyle:"ridge",
        borderColor:"white",
        cursor:"pointer",
    
        },}}>
            <CardMedia
                      sx={{ height: 153 }}
                        image={imgDraf}
                        title={"ประกันรถยนต์ vs ประกันอะไหล่รถยนต์ ต่างกันยังไง?"}
              />
               <CardContent>
                         <Typography variant="h6" color="text.secondary">
                          จุดเด่น รับผิดชอบทุกกรณี
                        </Typography>
                        <Typography paragraph>
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        </Typography>
               </CardContent>

         
         </Card>
  )
}

export default CardNew