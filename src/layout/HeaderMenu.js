import React ,{useState , useContext , useEffect} from "react";
import DataContext from "../context/DataContext";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import MenuBottom from "../component/MenuBottom";
import { Grid, Stack } from "@mui/material";

const HeaderMenu = () => {

    const pages = ['หน้าแรก','เช็คราคาประกัน', 'โปรโมชั่น','เกี่ยวกับเรา' , 'ประกันภัยด้านอื่นๆ' , 'บทความน่ารู้' , 'ติดต่อเรา'];
    const {scaleTablet} = useContext(DataContext);
    const [posMenu , setPosMenu] = useState(false);
    const miniSize = useMediaQuery('(max-width:300px)');
    const ITEM_HEIGHT = 48;
    
    
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {

            setAnchorElNav(event.currentTarget);
            console.log(event.currentTarget)
    };
    const handleCloseNavMenu = () => {
            setAnchorElNav(null);
    };

    const handleScroll = () => {
  
        //console.log(val)
        var element = document.getElementById("boxmenuhead");
        var rect = element.getBoundingClientRect();
        //alert(rect.y)
         var newval = parseInt(rect.y) + window.scrollY;
         //console.log(rect.y +' //' + window.scrollY)
        
        if (window.scrollY > newval) {
               setPosMenu(true);
        }
        else {
               setPosMenu(false);
        }
    
        //console.log(val)
      };

      useEffect(() => {
   
    
        //const header = document.querySelector(".boxmenuhead");
       
        //console.log(rect.y)
        //setHeaderTop(header.offsetTop);
        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    
   
  }, []);



  return (<><AppBar position="static" sx={{background:"#FFFFFF" , color:"#000" , fontWeight:800}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Container>
                            <Grid container sx={{display:{xs:"none" ,sm:"none" , md:"flex"}}}>
                                <Grid item xs={12} md={12}>
                                    <Stack 
                                        direction="row" 
                                        justifyContent="flex-end"
                                        alignItems="center"
                                        spacing={2}
                                       
                                        >
                                         <Link to={"/"}  style={{ textDecoration: 'none' , color:"#000" }}> 
                                            <Typography variant="h6" sx={{fontSize:{sm:14 , md:14 , lg:20}}}>หน้าแรก</Typography>
                                        </Link>
                                        <Link to={"/checkprice"}  style={{ textDecoration: 'none' , color:"#000" }}> 
                                             <Typography variant="h6" sx={{fontSize:{sm:14 , md:14 , lg:20}}}>เช็คราคาประกัน</Typography>
                                        </Link>
                                        <Link to={"/promotion"}  style={{ textDecoration: 'none' , color:"#000" }}> 
                                             <Typography variant="h6" sx={{fontSize:{sm:14 , md:14 , lg:20}}}>โปรโมชั่น</Typography>
                                        </Link>
                                        <Link to={"/about"}  style={{ textDecoration: 'none' , color:"#000" }}> 
                                            <Typography variant="h6" sx={{fontSize:{sm:14 , md:14 , lg:20}}}>เกี่ยวกับเรา</Typography>
                                        </Link>
                                        <Link to={"/prakun"}  style={{ textDecoration: 'none' , color:"#000" }}> 
                                            <Typography variant="h6" sx={{fontSize:{sm:14 , md:14 , lg:20}}}>ประกันภัยด้านอื่นๆ</Typography>
                                        </Link>
                                        <Link to={"/blogs"}  style={{ textDecoration: 'none' , color:"#000" }}> 
                                            <Typography variant="h6" sx={{fontSize:{sm:14 , md:14 , lg:20}}}>บทความน่ารู้</Typography>
                                        </Link>
                                        <Link to={"/contact"}  style={{ textDecoration: 'none' , color:"#000" }}> 
                                            <Typography variant="h6" sx={{fontSize:{sm:14 , md:14 , lg:20}}}>ติดต่อเรา</Typography>
                                        </Link>
                                    </Stack>

                                </Grid>
                            </Grid>
                            <Grid container sx={{ background:"#fff",display:{xs:"flex" , sm:"flex" , md:"none"}}}>
                        
                            <Box>
                                <Stack sx={{p:1 , color:"#223a66"}}>
                                    <Typography variant={miniSize ? "p" : "h6"} className='fontKanitLight'>
                                        
                                        <span style={{color: "#223a66" , fontWeight:500}}>FAMILY</span>
                                        <Diversity1Icon sx={{pl:1 ,pr:1 ,fontSize:miniSize ? 12 : 24}} />
                                        <span style={{color: "#e12454" , fontWeight:500}}>INSURE</span>
                                    
                                    </Typography>
                                    <Typography sx={{color:"#000" , fontSize:miniSize ? 12 : 18}}>ประกันออนไลน์ 24 ชั่วโมง</Typography>
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
                                    <MenuIcon />
                                        </IconButton>
                                    <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
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
                            </Grid>
                        </Container>
                     </Toolbar>
                </Container>
                </AppBar>
                <div id='boxmenuhead'></div>
                {
                    posMenu ? <MenuBottom /> : null
                }
             </>
  )
}

export default HeaderMenu