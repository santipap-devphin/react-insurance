import React  from 'react';
import {Stack , Box , Typography} from "@mui/material";

function HistoryUser() {
  return (<Box sx={{backgroundColor:"#f5f5f5", color:"gray" , mt:5  , borderStyle: "dotted dashed solid double"}}>
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            >
                <Typography variant='h5'>ไม่มีข้อมูล</Typography>
            </Stack>
         </Box>
        )
}

export default HistoryUser