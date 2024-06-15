import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {Typography} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import CardContent from '@mui/material/CardContent';

const CardProduct = ({imgs , txt , des}) => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

   

    return ( <Card sx={{
               
             
                background:"#fff",
                cursor:"pointer",
                '&:hover': {
                border: 1, 
                borderStyle:"ridge",
                borderColor:"white",
                cursor:"pointer",
              
                },}}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={imgs}
                        title={txt}
                     />
                    <Typography gutterBottom variant="h5" component="div" textAlign="center" sx={{pt:2}}>
                        ประกันภัยประเภท {txt} 
                    </Typography>
                    <CardContent>
                        <Typography variant="h6" color="text.secondary">
                          จุดเด่น รับผิดชอบทุกกรณี
                        </Typography>
                    </CardContent>

                        <ExpandMoreIcon
                            expand={expanded.toString()}
                            onClick={handleExpandClick}
                            aria-expanded={expanded.toString()}
                            aria-label="show more"
                            >
                             <ExpandMoreIcon />
                        </ExpandMoreIcon>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                          
                                <Typography paragraph>
                                {des}
                                </Typography>
                            </CardContent>
                        </Collapse>

                    
                   
                
            </Card>
        )
}

export default CardProduct