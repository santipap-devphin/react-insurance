import React , {Fragment, useContext , useState , useEffect} from 'react';
import DataContext from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import {Typography, Grid ,Stack}  from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import HeaderBackAdmin from '../wrappers/dashboardbackend/HeaderBackAdmin';
import FooterBackAdmin from '../wrappers/dashboardbackend/FooterBackAdmin';
import DeskTopBackAdmin from '../wrappers/dashboardbackend/DeskTopBackAdmin';
import MobileBackAdmin from '../wrappers/dashboardbackend/MobileBackAdmin';
import SweetAlert2 from 'react-sweetalert2';
const BackEndAdmin = ({titlepage , children}) => {

 const {theme , scaleTablet , matches} = useContext(DataContext);

 let navicate = useNavigate();

  //let userInfo = JSON.parse(localStorage.getItem('info'));

  let userInfo = {
    "user": "admin",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzA2MTY3OTIyLCJleHAiOjE3MDYyNTQzMjJ9.0omi9o6sjws3JJ44SE6ek62EANGHc2fdIXbgHi7NRJc"
  }

  const [statusTxt , setStatusTxt] = useState(false);
 
  const [swalProps, setSwalProps] = useState({
    show: true,
    title: 'ข้อความจากระบบ',
    text: "กรุณาเข้าสู่ระบบ",
    icon: 'warning',
    allowOutsideClick: false,
    showCancelButton: true,
    showConfirmButton: false,
    confirmButtonText:"OK",
    cancelButtonText:"Cancel"
  });

  return (<ThemeProvider theme={theme}>
            <Fragment>
                {
                        statusTxt && userInfo === null ? 

                        <SweetAlert2 
                                {...swalProps}
                                didClose={() => {
                                    // run when swal is closed...
                                    setSwalProps({...swalProps , show:false , title:"" ,text:"", icon: '', showConfirmButton:false});
                                    setTimeout(function(){ navicate("/login") }, 500);
                                }}
                                onConfirm={result =>  {
                                
                                }}
                            
                        /> :
                    null

                    }
                 <HeaderBackAdmin />
                 <Grid container sx={{backgroundColor:"#f5f5f5" ,color:"#000"}}>
                    
                    <Grid item xs={12} md={1} sx={{mt:scaleTablet && !matches ? 0 : 10}}>
                    {
                        scaleTablet && !matches   ? <DeskTopBackAdmin /> : <MobileBackAdmin />
                    }
                    </Grid>
                
                    <Grid item xs={12} md={11} sx={{mt:matches ? 5 : 10 , backgroundColor:"#f5f5f5"}}>

                        <Stack spacing={2} sx={{ml:matches ? 0 : 10 , mr:matches ? 0 : 5}}>
                        <Typography variant='h6'>{titlepage} </Typography>
                        <hr/>

                         {children}
                         <FooterBackAdmin />
                        </Stack>
                    </Grid>
            </Grid>
            </Fragment>
          </ThemeProvider>
  )
}

export default BackEndAdmin