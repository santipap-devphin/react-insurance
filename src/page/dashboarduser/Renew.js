import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DashBoardUser from '../../layout/DashBoardUser';
import FrmRenew from '../../wrappers/dashboard/FrmRenew';

const Renew = () => {
  return (<DashBoardUser>
                <FrmRenew />
          </DashBoardUser>
  )
}

export default Renew