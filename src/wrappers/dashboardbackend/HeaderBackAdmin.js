import React , {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import SweetAlert2 from 'react-sweetalert2';
import { Typography } from '@mui/material';

const HeaderBackAdmin = () => {

    let navicate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const pathname = window.location.pathname;
    let spPath = pathname.split("/");

    const isMenuOpen = Boolean(anchorEl);
    const [conFirmLogout , setConFirmLogout] = useState(false);

    let userInfo = JSON.parse(localStorage.getItem('info'));

    const [swalProps, setSwalProps] = useState({
        show: false,
        title: 'ยืนยัน Logout',
        text: "กรุณากด OK เพื่อยืนยัน",
        icon: 'warning',
        allowOutsideClick: false,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText:"OK",
        cancelButtonText:"Cancel"
      });

      const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
      };
      const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
      };

      const userLogout = () => {

   
        setAnchorEl(null);

        setSwalProps({...swalProps , show:true});


  }

    const menuId = 'primary-search-account-menu';

    return (<Box sx={{ flexGrow: 1 }}>
                <SweetAlert2 
                {...swalProps}
                    didClose={() => {
                                // run when swal is closed...
                                setSwalProps({...swalProps , show:false});
                    }}
                    onConfirm={result =>  {

                        if(result.isConfirmed){
                            setConFirmLogout(true);
                        }
                                
                    }}
                            
            /> 
            <AppBar sx={{ background: '#006F70'}} position="fixed">
            <Toolbar>
                
                <Box sx={{background:"none" , p:0.5 , ml:-3 , display: { xs: 'none', md: 'flex' }}}>
                   <Typography variant='h6'>LOGO</Typography>
                        
                </Box>
                <Box sx={{background:"none" , p:0.5 , ml:-3 , display: { xs: 'flex', md: 'none' }}}>
                    <Typography variant='h6'>LOGO</Typography>
                </Box>
            
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <Button variant="contained" color="warning" onClick={userLogout}>ออกจากระบบ</Button>
                </Box>
                
            </Toolbar>
            </AppBar>
            
            <Box sx={{display:{ xs: 'none', md: 'flex' }}}>
                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    id={menuId}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={isMenuOpen}
                    onClose={handleMenuClose}
                    sx={{mt:7}}
                    >
                    
                    <MenuItem onClick={userLogout}> <LogoutIcon/> ออกจากระบบ</MenuItem>
                </Menu>
            </Box>
     
        </Box>
    )
}

export default HeaderBackAdmin