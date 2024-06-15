import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DashBoardUser from '../../layout/DashBoardUser';
import OrderInsure from '../../wrappers/dashboard/OrderInsure';


const Orders = () => {
  return (<DashBoardUser>
           
                <OrderInsure />

            </DashBoardUser>
  )
}

export default Orders