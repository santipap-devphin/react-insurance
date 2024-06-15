import React , {useState , useContext} from 'react';
import {Stack , Box , Typography , Button  , Container , Select , FormControl , Grid , TextField , MenuItem , InputLabel} from "@mui/material";
import DataContext from '../context/DataContext';
import Card from '@mui/material/Card';
import CallIcon from '@mui/icons-material/Call';
import imagecheck from '../assets/image/checkprice3.png'
import renew from '../assets/image/renew.png'

const WelcomeInsure = () => {

 const [typePrakun , setTypePrakun] = useState('');
 const {scaleTablet , matches} = useContext(DataContext);

  return (<Box
            sx={{
            display: 'flex',
            background:"#f5f5f5"
            /*backgroundColor: 'primary.dark',
            '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
            },
            */
            }}
        >
         <Container>
            <Grid container spacing={2} sx={{pt:scaleTablet ? "50px" : "25px" , pb:"0px"}}>
                <Grid item md={8} >
                    <Stack direction="column">
                        <Typography variant='h4' >Welcome to Insurance</Typography>
                        <Typography variant='p' paragraph sx={{pt:scaleTablet ? 5 : 2.5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci nisi, porta sed diam id, venenatis dignissim urna. Duis sit amet eros a sem viverra mollis nec eu sem. Quisque rutporta sed diam id, venenatis dignissim urna. Duis sit amet eros a sem viver uisque rurum euismod fermentum.</Typography>
                    </Stack>
                    <Grid 
                         container 
                         spacing={2} 
                         sx={{mt:1 }}
                         justifyContent="center"
                         alignItems="center"
                         >
                        <Grid item md={6} >
                            <Card sx={{
                                   
                                    boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , 
                                    transformStyle: "preserve-3d" , 
                                    
                                    height: 200 ,
                                    '&:hover': {
                                    backgroundColor: '#fff',
                                    border: 0.3 , 
                                    borderStyle:"ridge",
                                    borderColor:"gray",
                                    cursor:"pointer",
                                    opacity: [0.9, 0.8, 0.7],
                             },}}>
                                <img src={imagecheck} alt="เช็คราคา" style={{width:"100%"}} />
                             
                             </Card>
                        </Grid>
                        <Grid item md={6} >
                            <Card sx={{
                                   
                                    boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , 
                                    transformStyle: "preserve-3d" , 
                                    maxWidth:350,
                                    height: 200 ,
                                    '&:hover': {
                                    backgroundColor: '#fff',
                                    border: 0.3 , 
                                    borderStyle:"ridge",
                                    borderColor:"gray",
                                    cursor:"pointer",
                                    opacity: [0.9, 0.8, 0.7],
                              },}}>
                               <img src={renew} alt="เช็คราคา" style={{width:"100%"}} />
                             </Card>
                        </Grid>
                    </Grid>

                                
                </Grid>
                <Grid item xs={12} md={4} sx={{mt:matches ? 2.5 : -16.2 , mb:matches ? 5 : 0}}>
                        <Box
                            sx={{
                            background:"#fff",
                            boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , 
                             transformStyle: "preserve-3d" 
                            /*'&:hover': {
                                backgroundColor: '#f9f8f7',
                                opacity: [0.9, 0.8, 0.7],
                            },*/
                            
                            }}
                            >
                                <Box sx={{background:"#e12454" , p :3 , color:"#fff"}}>
                                    <Stack direction="row">
                                    <CallIcon style={{paddingTop:2 , paddingRight:5,fontSize:26}} />
                                        <Typography variant='h5'>ให้เราแนะนำประกันรถ</Typography>
                                    </Stack>
                                   
                                </Box>
                                <form style={{padding:15}}>
                                    <TextField id="nameSurname" label="ชื่อ-นามสกุล" variant="standard" fullWidth sx={{mt:2 , mb:2}} />
                                    <TextField id="telephone" label="เบอร์โทร" variant="standard" fullWidth sx={{mt:2 , mb:2}} />
                                    <TextField id="lineID" label="ไลน์ไอดี" variant="standard" fullWidth sx={{mt:2 , mb:2}} />
                                    <FormControl variant="standard" fullWidth  sx={{mt:2 , mb:2}}>
                                   
                                            <InputLabel id="prakun-select-label">กรุณาเลือกประเภทประกัน</InputLabel>
                                            <Select
                                            labelId="prakun-label"
                                            id="typeprakun"
                                            value={typePrakun}
                                            label="ประเภทประกัน"
                                            onChange={(e) => setTypePrakun(e.target.value)}
                                           
                                            >
                                             <MenuItem key={0} value=''>กรุณาเลือกประเภทประกัน</MenuItem>
                                             <MenuItem value={"1"}>
                                                ประกันชั้น 1 
                                                </MenuItem>
                                                <MenuItem value={"2"}>
                                                ประกันชั้น 2 
                                                </MenuItem>
                                                <MenuItem value={"2plus"}>
                                                ประกันชั้น 2+ 
                                                </MenuItem>
                                                <MenuItem value={"3plus"}>
                                                ประกันชั้น 3+ 
                                                </MenuItem>
                                                </Select>
                                    </FormControl>
                                   
                                    <Button 
                                    variant="contained" 
                                    fullWidth
                                    style={{
                                        marginTop:30,
                                        marginBottom:35,
                                        fontSize:18,
                                        background:"#223a66" , 
                                        borderBottom:"2px solid #e12454",
                                        borderRadius:20,
                                        }}>
                                            
                                                ยืนยัน
                                     </Button>
                                </form>
                                
                            </Box>
                </Grid>
                
            </Grid>
        </Container>
        </Box>
  )
}

export default WelcomeInsure