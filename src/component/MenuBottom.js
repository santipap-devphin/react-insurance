import React ,{useState} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import {Stack } from "@mui/material";

function MenuBottom() {

    const pages = ['หน้าแรก','เช็คราคาประกัน', 'โปรโมชั่น','เกี่ยวกับเรา' , 'ประกันภัยด้านอื่นๆ' , 'บทความน่ารู้' , 'ติดต่อเรา'];
    const [anchorElNav, setAnchorElNav] = useState(null);
    const ITEM_HEIGHT = 48;
    const handleOpenNavMenu = (event) => {

            setAnchorElNav(event.currentTarget);
            console.log(event.currentTarget)
    };
    const handleCloseNavMenu = () => {
            setAnchorElNav(null);
    };

  return (<AppBar sx={{ position:{xs:"fixed" , md:"relative"} , top: 'auto', top: 0 , background:"#fff"}}>
                            <Toolbar>
                            <Box>
                                <Stack sx={{p:1 , color:"#223a66"}}>
                                    <Typography variant='h6' className='fontKanitLight'>
                                        
                                        <span style={{color: "#223a66" , fontWeight:500}}>FAMILY</span>
                                        <Diversity1Icon sx={{pl:1 ,pr:1 ,fontSize:32}} />
                                        <span style={{color: "#e12454" , fontWeight:500}}>INSURE</span>
                                    
                                    </Typography>
                                    <Typography sx={{color:"#000"}}>ประกันออนไลน์ 24 ชั่วโมง</Typography>
                                </Stack>
                            </Box>

                            <Box sx={{ flexGrow: 1 , display: { xs: 'flex', sm:"flex" ,  md: 'none' } }} justifyContent="flex-end" alignItems="center">
                                    <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                    >
                                        <MenuIcon sx={{color:"#e12454"}} />
                                    </IconButton>
                                    <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    PaperProps={{
                                        style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: '50ch',
                                        marginTop:"20px"
                                        },
                                    }}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                    >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                             <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                    </Menu>
                                </Box>
                            </Toolbar>
                        </AppBar>
  )
}

export default MenuBottom