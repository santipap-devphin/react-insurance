import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DashBoardUser from '../../layout/DashBoardUser';
import PanelAddress from '../../wrappers/dashboard/PanelAddress';
import FrmAddress from '../../wrappers/dashboard/FrmAddress';


function UserInfo() {
  return   (<DashBoardUser>
                <PanelAddress />
                <Box sx={{mt:5 , backgroundColor: "#ffffff" , color:"#000" , boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)", transformStyle: "preserve-3d"}}>
                    <Typography variant='h4' sx={{pt:3,pl:3}}> ข้อมูลที่อยู่ { /*Object.keys(frmEditAddr).length > 0 ? "แก้ไขข้อมูลที่อยู่" : "ข้อมูลที่อยู่" */}</Typography>
                    <FrmAddress />
                </Box>
                
            </DashBoardUser>
          )
}

export default UserInfo