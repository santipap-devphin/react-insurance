import React from 'react';
import Card from '@mui/material/Card';

const CardContentOther = ({children}) => {
  return (<Card sx={{
                background:"#fff",
                cursor:"pointer",
                boxShadow : "0 3px 10px rgba(0,0,0,.3)",
                '&:hover': {
                border: 1, 
                borderStyle:"ridge",
                borderColor:"white",
                cursor:"pointer",
        },}}>
            {children}
        </Card>
  )
}

export default CardContentOther