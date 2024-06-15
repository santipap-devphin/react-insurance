import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';



const ToolTipCar = ({children , title}) => {
  return ( <Tooltip title={title} arrow>
                <IconButton sx={{display:{xs:"none" , md:"block"}}}>
                     {children}                                   
                </IconButton>
                
         </Tooltip>
  )
}

export default ToolTipCar