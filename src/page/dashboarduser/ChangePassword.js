import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DashBoardUser from '../../layout/DashBoardUser';
import FrmChangePass from '../../wrappers/dashboard/FrmChangePass';

const ChangePassword = () => {
  return (<DashBoardUser>
           
                <FrmChangePass />
    
        </DashBoardUser>
  )
}

export default ChangePassword