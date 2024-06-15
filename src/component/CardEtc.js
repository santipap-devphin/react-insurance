import React from 'react';
import Card from '@mui/material/Card';


const CardEtc = ({imgs}) => {
  return (<Card sx={{
               
                background:"#fff",
                cursor:"pointer",
              
                '&:hover': {
                border: 1, 
                borderStyle:"ridge",
                borderColor:"white",
                cursor:"pointer",
            
                },}}>

                <img src={imgs} style={{width:"100%"}} alt={"alt"} />
         </Card>
  )
}

export default CardEtc