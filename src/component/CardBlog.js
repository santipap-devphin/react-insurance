import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

function CardBlog({children , imgs , title}) {
  return (<Card sx={{
            background:"#fff",
            cursor:"pointer",
            boxShadow : "0 2px 5px 0 rgba(0, 66, 155, 0.2)",
            '&:hover': {
            border: 1, 
            borderStyle:"ridge",
            borderColor:"white",
            cursor:"pointer",

            },}}>
            <CardMedia
                sx={{ height: 168 }}
                    image={imgs}
                    title={title}
                />
            <CardContent>
                        {children}
            </CardContent>
        </Card>
  )
}

export default CardBlog