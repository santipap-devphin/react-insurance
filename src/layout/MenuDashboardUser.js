import React ,{useState , useEffect , useContext} from 'react';
import { Link , useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PaymentIcon from '@mui/icons-material/Payment';
import CachedIcon from '@mui/icons-material/Cached';
import HomeIcon from '@mui/icons-material/Home';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PaidIcon from '@mui/icons-material/Paid';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ChatIcon from '@mui/icons-material/Chat';
import Button from '@mui/material/Button';
import Logout from '../component/Logout';


const MenuDashboardUser = ({children}) => {

   const pathname = window.location.pathname;

   //const {userLogin , setUserLogin} = useContext(DataContext);

   const [userLogin , setUserLogin] = useState({});

   useEffect(() => {

   
        switch(pathname) {
            case "/backend/userinfo":
                setValue(0);
            break;
            case "/backend/changepassword":
                setValue(1);
            break;
            case "/backend/renew":
                setValue(2);
            break;
            case "/backend/orders":
                setValue(3);
            break;
            case "/backend/confirm":
                setValue(4);
            break;
            case "/backend/history":
                setValue(5);
            break;
            default:
                setValue(0);
          }

    
  },[pathname])

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [openDialog, setOpenDialog] = useState(false);
  let navicate = useNavigate();

 const [value, setValue] = useState(0);

 const [openMenu, setOpenMenu] = useState(true);

 const handleClick = () => {
    setOpenMenu(!openMenu);
 };

 


 const [txtAlert , setTxtAlert] = useState({title:"ยืนยันการออกจากระบบ ใช่หรื่อไม่" , des:"หากต้องการออกจากระบบ ให้กด OK"});

 const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
    
    switch(newValue) {
       case 0:
           navicate("/backend/userinfo");
         break;
       case 1:
           navicate("/backend/changepassword");
         break;
       case 2:
           navicate("/backend/renew");
         break;
       case 3:
           navicate("/backend/orders");
         break;
       case 4:
           navicate("/backend/confirm");
         break;
       case 5:
             navicate("/backend/history");
         break;
       default:
           navicate("/backend/userinfo");
     }
   
 };

 const confirmLogout = async() => {

   
 }

  return (<>
              <Box sx={{ maxWidth: { xs: 380, sm: 800 } , display:{xs:"block" , md:"none"} ,  bgcolor: 'background.paper' , mt:2 }}>
                    
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="scrollable force tabs example"
                    
                        >
                        <Tab label="ที่อยู่" />
                        <Tab label="เปลื่ยนรหัสผ่าน" />
                        <Tab label="ต่ออายุ" />
                        <Tab label="รายการคำสั้งซื้อ" />
                        <Tab label="แจ้งชำระเงิน" />
                        <Tab label="ประวัติการสั้งซื้อ" />
                        <Tab label="ออกจากระบบ" />
                      
                    </Tabs>
                   
                    <Dialog
                        open={openDialog}
                        onClose={handleCloseDialog}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                        {txtAlert.title}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                             {txtAlert.des}
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            
                        <Button variant="contained" color="error" onClick={handleCloseDialog} >Cancel</Button>
                        <Button variant="contained" onClick={confirmLogout} autoFocus >
                            OK
                        </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
                <Box sx={{display:{xs:"none" , md:"block"}}}>
                <List
                    sx={{ width: '100%', maxWidth: 240 , bgcolor: 'background.paper' , mt:5 , boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)", transformStyle: "preserve-3d"}}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                <ListItemButton onClick={handleClick} sx={{color:"#000"}}>
                    <ListItemIcon>
                         <PaymentIcon />
                    </ListItemIcon>
                    <ListItemText primary="บัญชีของฉัน" />
                    {openMenu ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openMenu} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link to={"/backend/userinfo"} style={{textDecoration: "none"}}>
                                <ListItemButton sx={pathname === "/backend/userinfo" ? {pl: 4 , backgroundColor:"#202C45" , color:"#fff" , "&:hover": { backgroundColor:"#E81C2E"}} : {pl: 4 , color:"#000"}}>
                                <ListItemIcon>
                                    <HomeIcon sx={{color:pathname === "/backend/userinfo" ? "#fff" :"#000"}} />
                                </ListItemIcon>
                                <ListItemText primary="ที่อยู่" />
                                </ListItemButton>
                            </Link>
                            <Link to={"/backend/changepassword"} style={{textDecoration: "none"}}>
                                <ListItemButton sx={pathname === "/backend/changepassword" ? {pl: 4 , backgroundColor:"#202C45" , color:"#fff" , "&:hover": { backgroundColor:"#E81C2E"}} : {pl: 4 , color:"#000"}}>
                                <ListItemIcon>
                                    <ChangeCircleIcon sx={{color:pathname === "/backend/changepassword" ? "#fff" :"#000"}} />
                                </ListItemIcon>
                                <ListItemText primary="เปลื่ยนรหัสผ่าน" />
                                </ListItemButton>
                            </Link>
                        </List>
                    </Collapse>
                <Link to={"/backend/renew"} style={{textDecoration: "none"}}>
                    <ListItemButton sx={pathname === "/backend/renew" ? {backgroundColor:"#202C45" , color:"#fff" , "&:hover": { backgroundColor:"#E81C2E"}} : {color:"#000"}}>
                        <ListItemIcon>
                            <CachedIcon sx={{color:pathname === "/backend/renew" ? "#fff" :"#000"}} />
                        </ListItemIcon>
                        <ListItemText primary="ต่ออายุประกัน" />
                    </ListItemButton>
                </Link>
                <Link to={"/backend/orders"} style={{textDecoration: "none"}}>
                    <ListItemButton sx={pathname === "/backend/orders" ? {backgroundColor:"#202C45" , color:"#fff" , "&:hover": { backgroundColor:"#E81C2E"}} : {color:"#000"}}>
                        <ListItemIcon>
                            <MenuBookIcon sx={{color:pathname === "/backend/orders" ? "#fff" :"#000"}} />
                        </ListItemIcon>
                        <ListItemText primary="ข้อมูลประกันของท่าน" />
                    </ListItemButton>
                </Link>
                <Link to={"/backend/confirm"} style={{textDecoration: "none"}}>
                    <ListItemButton sx={pathname === "/backend/confirm" ? {backgroundColor:"#202C45" , color:"#fff" , "&:hover": { backgroundColor:"#E81C2E"}} : {color:"#000"}}>
                        <ListItemIcon>
                            <PaidIcon sx={{color:pathname === "/backend/confirm" ? "#fff" :"#000"}} />
                        </ListItemIcon>
                        <ListItemText primary="แจ้งชำระเงิน" />
                    </ListItemButton>
                </Link>
               <Link to={"/backend/history"} style={{textDecoration: "none"}}>
                <ListItemButton sx={pathname === "/backend/history" ? {backgroundColor:"#202C45" , color:"#fff" , "&:hover": { backgroundColor:"#E81C2E"}} : {color:"#000"}}>
                    <ListItemIcon>
                        <HistoryIcon sx={{color:pathname === "/backend/history" ? "#fff" :"#000"}} />
                    </ListItemIcon>
                    <ListItemText primary="ประวัติการสั้งซื้อ" />
                </ListItemButton>
                </Link>
             </List>
             </Box>
             <Grid container>
                <Grid item xs={12} sx={{mt:3, mb:3}}>
                    <Logout userLogin={userLogin} setUserLogin={setUserLogin} />
                </Grid>
             </Grid>
        </>
        )
}

export default MenuDashboardUser