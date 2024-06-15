import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Autocomplete from '@mui/material/Autocomplete';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Chip from '@mui/material/Chip';
import ToolTipCar from '../../component/ToolTipCar';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardBlog from '../../component/CardBlog';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { FaArrowCircleRight } from "react-icons/fa";
import { BsFillInfoSquareFill } from "react-icons/bs";
import imgblog from '../../assets/image/drafblog.jpg';
import {Navigation } from 'swiper/modules';
import { GiReceiveMoney } from "react-icons/gi";
import { HiDocumentCheck } from "react-icons/hi2";
import { TbBoxMultiple0 } from "react-icons/tb";
import { RiForward5Fill } from "react-icons/ri";
import { FaSquareCheck } from "react-icons/fa6";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import imageprd3 from '../../assets/image/product3.jpg';


const MainCheckPrice = () =>  {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const currencies = [
    {
      value: '2024',
      label: '2024',
    },
    {
      value: '2023',
      label: '2023',
    },
    {
      value: '2022',
      label: '2022',
    },
    {
      value: '2021',
      label: '2021',
    },
  ];
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
      label: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      label: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
      label: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
      label: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },
    { label: 'City of God', year: 2002 },
    { label: 'Se7en', year: 1995 },
    { label: 'The Silence of the Lambs', year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: 'Life Is Beautiful', year: 1997 },
    { label: 'The Usual Suspects', year: 1995 },
    { label: 'Léon: The Professional', year: 1994 },
    { label: 'Spirited Away', year: 2001 },
    { label: 'Saving Private Ryan', year: 1998 },
    { label: 'Once Upon a Time in the West', year: 1968 },
    { label: 'American History X', year: 1998 },
    { label: 'Interstellar', year: 2014 },
    { label: 'Casablanca', year: 1942 },
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
    { label: 'Modern Times', year: 1936 },
    { label: 'Raiders of the Lost Ark', year: 1981 },
    { label: 'Rear Window', year: 1954 },
    { label: 'The Pianist', year: 2002 },
    { label: 'The Departed', year: 2006 },
    { label: 'Terminator 2: Judgment Day', year: 1991 },
    { label: 'Back to the Future', year: 1985 },
    { label: 'Whiplash', year: 2014 },
    { label: 'Gladiator', year: 2000 },
    { label: 'Memento', year: 2000 },
    { label: 'The Prestige', year: 2006 },
    { label: 'The Lion King', year: 1994 },
    { label: 'Apocalypse Now', year: 1979 },
    { label: 'Alien', year: 1979 },
    { label: 'Sunset Boulevard', year: 1950 },
    {
      label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964,
    },
    { label: 'The Great Dictator', year: 1940 },
    { label: 'Cinema Paradiso', year: 1988 },
    { label: 'The Lives of Others', year: 2006 },
    { label: 'Grave of the Fireflies', year: 1988 },
    { label: 'Paths of Glory', year: 1957 },
    { label: 'Django Unchained', year: 2012 },
    { label: 'The Shining', year: 1980 },
    { label: 'WALL·E', year: 2008 },
    { label: 'American Beauty', year: 1999 },
    { label: 'The Dark Knight Rises', year: 2012 },
    { label: 'Princess Mononoke', year: 1997 },
    { label: 'Aliens', year: 1986 },
    { label: 'Oldboy', year: 2003 },
    { label: 'Once Upon a Time in America', year: 1984 },
    { label: 'Witness for the Prosecution', year: 1957 },
    { label: 'Das Boot', year: 1981 },
    { label: 'Citizen Kane', year: 1941 },
    { label: 'North by Northwest', year: 1959 },
    { label: 'Vertigo', year: 1958 },
    {
      label: 'Star Wars: Episode VI - Return of the Jedi',
      year: 1983,
    },
    { label: 'Reservoir Dogs', year: 1992 },
    { label: 'Braveheart', year: 1995 },
    { label: 'M', year: 1931 },
    { label: 'Requiem for a Dream', year: 2000 },
    { label: 'Amélie', year: 2001 },
    { label: 'A Clockwork Orange', year: 1971 },
    { label: 'Like Stars on Earth', year: 2007 },
    { label: 'Taxi Driver', year: 1976 },
    { label: 'Lawrence of Arabia', year: 1962 },
    { label: 'Double Indemnity', year: 1944 },
    {
      label: 'Eternal Sunshine of the Spotless Mind',
      year: 2004,
    },
    { label: 'Amadeus', year: 1984 },
    { label: 'To Kill a Mockingbird', year: 1962 },
    { label: 'Toy Story 3', year: 2010 },
    { label: 'Logan', year: 2017 },
    { label: 'Full Metal Jacket', year: 1987 },
    { label: 'Dangal', year: 2016 },
    { label: 'The Sting', year: 1973 },
    { label: '2001: A Space Odyssey', year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: 'Toy Story', year: 1995 },
    { label: 'Bicycle Thieves', year: 1948 },
    { label: 'The Kid', year: 1921 },
    { label: 'Inglourious Basterds', year: 2009 },
    { label: 'Snatch', year: 2000 },
    { label: '3 Idiots', year: 2009 },
    { label: 'Monty Python and the Holy Grail', year: 1975 },
  ];
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#223a66",
      color: "#fff",
      fontSize: 18,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      /*backgroundColor: theme.palette.action.hover,*/
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


  const [openData , setOpenData] = useState(false);

  const haddleClk = () => {

  }

  const handleOpen = () => {

    setOpenData(true);
  }
  const handdleClose = () => {
    setOpenData(false);
  }

  const [yearSel , setYearSel] = useState('2024');
  const [showDataInfo , setShowDataInfo] = useState('');
  const [openSnack, setOpenSnack] = useState(false);

  const sizetablet = useMediaQuery('(min-width:768px)');
  const sizeXs = useMediaQuery('(max-width:599px)');
  const sizeSm = useMediaQuery('(max-width:899px)');
  const sizeMd = useMediaQuery('(max-width:1199px)');
  const sizeLg = useMediaQuery('(min-width:1200px)');
  const sizemini = useMediaQuery('(max-width:375px)');

  const clkShow = (id) => {

      let msg = "";
      switch (id) {
        case "1":
          msg = "แฟมิลี่ อินชัวร์ พร้อมดูแลและให้ความคุ้มครองรถยนต์ของคุณเมื่อเกิดความเสียหายจากอุบัติเหตุที่เกิดจากรถชนรถที่จดทะเบียนถูกต้อง";
          break;
        case "2":
          msg = "แฟมิลี่ อินชัวร์ พร้อมดูแลคุณและรถยนต์ของคุณเมื่อเกิดอุบัติเหตุจากรถยนต์ที่อาจไม่เกี่ยวข้องกับการชนกับรถยนต์คันอื่น";
          break;
        case "3":
          msg = "แฟมิลี่ อินชัวร์ ให้ความคุ้มครองรถยนต์ของคุณเมื่อเกิดเหตุไฟไหม้หรือสูญหาย";
          break;
        case "4":
          msg = "แฟมิลี่ อินชัวร์ ให้ความคุ้มครองความเสียหายของรถยนต์ของคุณเมื่อน้ำท่วมหรือประสบภัยธรรมชาติ";
          break;
        case "5":
          msg = "ความคุ้มครองความเสียหายต่อทรัพย์สินของบุคคลภายนอก ตามที่คุณต้องรับผิดชอบตามกฎหมาย";
          break;
        case "6":
          msg = "ความคุ้มครองความเสียหายต่อชีวิตและบาดเจ็บทางร่างกาย ของบุคคลภายนอก ตามที่คุณต้องรับผิดชอบต่อคู่กรณีตามกฎหมายเนื่องจากอุบัติเหตุ";
          break;
        case "7":
          msg = "ความคุ้มครองสำหรับการเสียชีวิต สูญเสียอวัยวะ ทุพพลภาพ ของผู้ขับขี่และผู้โดยสารในรถของคุณ";
          break;
          case "8":
          msg = "ความคุ้มครองค่ารักษาพยาบาลในความบาดเจ็บจากอุบัติเหตุของบุคคลภายในรถคุณ";
          break;
          case "9":
          msg = "ให้ความคุ้มครองตัวผู้ขับขี่ให้มีอิสระภาพจากการถูกควบคุมตัวในคดีอาญาของพนักงานสอบสวน พนักงานอัยการ หรือ ศาล ชั่วระยะเวลาหนึ่งๆ ระหว่างการต่อสู้คดีความอันสืบเนื่องมาจากอุบัติเหตุรถยนต์ที่เกิดขึ้น";
        
      }


      setShowDataInfo(msg);
      setOpenSnack(true)
  }
  const handleClose = () => {
   
          setOpenSnack(false);
  };

  return (<><Box sx={{ position:"relative" , zIndex:2 }}>
             <Container>
             <Snackbar open={openSnack} autoHideDuration={8000} onClose={handleClose} anchorOrigin={{ vertical:"bottom",  horizontal:"center"}} >
                  <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                    {showDataInfo}
                  </Alert>
                </Snackbar>
                  <Box
                    sx={{
                        mt:-10,
                        p:5,
                        background: "#fff",
                        boxShadow: "0 15px 30px 0 rgba(0, 0, 0, 0.05)",
                     }}
                  >
                     <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                    
                                        <Typography variant='h5' sx={{ml:1.5}} >ประเภทประกัน</Typography>
                                        <FormGroup>
                                           {
                                              sizemini ? 
                                                <Grid container>
                                                      <Grid item xs={4} sm={4}>
                                                        <FormControlLabel control={<Checkbox defaultChecked />} label="1" />
                                                      </Grid>
                                                      <Grid item xs={4} sm={4}>
                                                        <FormControlLabel control={<Checkbox />} label="2+" />
                                                      </Grid>
                                                      <Grid item xs={4} sm={4}>
                                                        <FormControlLabel control={<Checkbox />} label="2" />
                                                      </Grid>
                                                      <Grid item xs={4} sm={4}>
                                                        <FormControlLabel control={<Checkbox />} label="3+" />
                                                      </Grid>
                                                      <Grid item xs={4} sm={4}>
                                                        <FormControlLabel control={<Checkbox />} label="3" />
                                                      </Grid>
                                                </Grid>
                                              :
                                              <Stack direction={{ xs: 'row', sm: 'row' }} spacing={{ xs: 0, sm: 2, md: 4 }}>
                                                  <FormControlLabel control={<Checkbox defaultChecked />} label="1" />
                                                  <FormControlLabel control={<Checkbox />} label="2+" />
                                                  <FormControlLabel control={<Checkbox />} label="2" />
                                                  <FormControlLabel control={<Checkbox />} label="3+" />
                                                  <FormControlLabel control={<Checkbox />} label="3" />
                                              </Stack>
                                           }
                                            
                                            
                                        </FormGroup>
                             </Grid>
                             <Grid item xs={12} sm={3} md={3}>
                             <Autocomplete
                                    disablePortal
                                    id="brand"
                                    options={top100Films}
                                    
                                    renderInput={(params) => <TextField {...params} label="ยี่ห้อรถยนต์" />}
                            />
    
                             </Grid>
                             <Grid item xs={12} sm={3} md={3}>
                             <Autocomplete
                                    disablePortal
                                    id="model"
                                    options={top100Films}
                                    
                                    renderInput={(params) => <TextField {...params} label="รุ่นรถยนต์" />}
                            />
    
                             </Grid>
                             <Grid item xs={12} sm={3} md={3}>
                             <Autocomplete
                                    disablePortal
                                    id="detailModel"
                                    options={top100Films}
                                    
                                    renderInput={(params) => <TextField {...params} label="รุ่นย่อย" />}
                            />
    
                             </Grid>
                             <Grid item xs={12} sm={3} md={3}>
                             <FormControl variant="outlined" fullWidth>
                                   <InputLabel id="cate-select-label">ปีจดทะเบียน</InputLabel>
                                   <Select
                                    labelId="year-label"
                                    id="yearsel"
                                    value={yearSel}
                                    onChange={(e) => setYearSel(e.target.value)}
                                    label="ปีจดทะเบียน"
                                    
                                    >
                                    <MenuItem key={0} value=''></MenuItem>
                                    {currencies.map((option ,keys) => (
                                        <MenuItem key={keys} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                  </Select>
                            </FormControl>
                               

                             </Grid>
                             <Grid item xs={12} sm={2} md={2}>
                                    <Button size='large' variant="contained" sx={{background:"#e12454" , fontSize:18}} fullWidth>ค้นหา</Button>               
                             </Grid>
                        </Grid>
                  </Box>
                  <Stack 
                    direction="column" 
                    justifyContent="center"
                    alignItems="center"
                    sx={{mt:2,mb:5}}
                    >
                     <section className='section-title' style={{textAlign:"center"}}>
                        <h2>ประกันรถยนต์แนะนำของเรา</h2>
                     </section>   
                    
                   </Stack>
                <Grid container spacing={2}>
                  {
                      ['0' , '1' , '2'].map((keys , items) => {

                        return <Grid key={keys} item xs={12} sm={6} md={6} lg={4} >
                                  <Card sx={{borderBottom:"3px solid #e12454" ,  boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , transformStyle: "preserve-3d" , 
                                          '&:hover': {
                                          backgroundColor: '#fff',
                                          border: 0.3 , 
                                          borderStyle:"ridge",
                                          borderColor:"gray",
                                          cursor:"pointer",
                                          opacity: [0.9, 0.8, 0.7],
                                      },}}>
                                          <CardHeader
                                              title={"ประกันชั้น 1 วิริยะประกันภัย" + items}
                                              sx={{background:"#f5f0e0"}}
                                          />
                                          <CardMedia
                                          sx={{ 
                                            
                                              height: 300 ,
                                          }}
                                          image={imageprd3}
                                          title={"รูปภาพ"}
                                          />
                                          <Stack sx={{p:1}}>
                                              <Typography  variant="h3" textAlign="center">
                                                5500 / ปี
                                              </Typography>
                                            
                                          </Stack>
                                          
                                          <CardContent sx={{background:"#6b7ea0" , color:"#fff"}}>
                                        
                                              <Grid 
                                                  container
                                                  sx={{mb:1}}
                                              >
                                                      <Grid item xs={6} textAlign="left">
                                                              <Typography variant='p'>ทุนประกัน</Typography>
                                                      </Grid>
                                                      <Grid item xs={6} textAlign="right">
                                                          <Typography variant='p'>500000 บาท</Typography>
                                                      </Grid>
                                                      <Grid item xs={6} textAlign="left">
                                                              <Typography variant='p'>ค่าเสียหายส่วนแรก</Typography>
                                                      </Grid>
                                                      <Grid item xs={6} textAlign="right">
                                                          <Typography variant='p'>0 บาท</Typography>
                                                      </Grid>
                                                      <Grid item xs={6} textAlign="left">
                                                              <Typography variant='p'>ซ่อม</Typography>
                                                      </Grid>
                                                      <Grid item xs={6} textAlign="right">
                                                          <Typography variant='p'>ศูนย์</Typography>
                                                      </Grid>
                                                      <Grid item xs={6} textAlign="left">
                                                              <Typography variant='p'>ทรัพย์สินบุคคลภายนอก</Typography>
                                                      </Grid>
                                                      <Grid item xs={6} textAlign="right">
                                                          <Typography variant='p'>2,500,000 บาท</Typography>
                                                      </Grid>

                                              </Grid>
                                         </CardContent>
                                          <Grid container spacing={2} sx={{pl:1 , pb:1 , background:"#223a66"}} >
                                                      <Grid item md={6}>
                                                          <Typography variant='h6' sx={{pl:1,color:"#fff"}}>เปรียบเทียบ</Typography>
                                                      </Grid>
                                                      <Grid item md={6} sx={{textAlign:"right"}}>
                                                          <Button variant='contained' sx={{mb:1,mr:1 , background:"#e12454"}} onClick={() => haddleClk()}>สนใจแผนประกันนี้</Button>
                                                  </Grid>
                                                  
                                          </Grid>
                                  </Card>
                              </Grid>

                      })

                   }
                    
                       
                     </Grid>
              </Container>
              
         </Box>
          <Box sx={{background: "#e9e9e9!important" , mt:8 , pb:5}}> 
                      <Stack 
                          direction="column" 
                          justifyContent="center"
                          alignItems="center"
                          sx={{mt:1,mb:1}}
                      >
                           <Typography variant={sizetablet ? "h4" : "h5"} textAlign="center" sx={{pt:4 , pb:4}}>  ทำไมต้องซื้อประกันภัยรถยนต์ แฟมิลี่อินชัวร์? </Typography>
                        </Stack>
                        <Container>
                          <Grid container spacing={4}>
                                <Grid item 
                                  xs={12} 
                                  sm={3}
                                  textAlign="center"
                                >

                                <Box sx={{
               
                                      background:"#fff",
                                      cursor:"pointer",
                                      borderRadius:sizetablet ? 25 : 5,
                                      '&:hover': {
                                      border: 1, 
                                      borderStyle:"ridge",
                                      borderColor:"white",
                                      cursor:"pointer",
                                  
                                      },}}>
                                    <GiReceiveMoney style={{color:"#e12454" , fontSize:140 , textAlign:"center", padding:10}} />
                                </Box>
                                  <Typography variant={sizetablet ? "h5" : "h6"} sx={{mt:1}}>มีงบเท่าไหร่ เราหาให้ได้</Typography>
                                </Grid>
                                <Grid item 
                                  xs={12} 
                                  sm={3}
                                  textAlign="center"
                                >

                                <Box sx={{
               
                                      background:"#fff",
                                      cursor:"pointer",
                                      borderRadius:sizetablet ? 25 : 5,
                                      '&:hover': {
                                      border: 1, 
                                      borderStyle:"ridge",
                                      borderColor:"white",
                                      cursor:"pointer",
                                  
                                      },}}>
                                 <RiForward5Fill style={{color:"#e12454" , fontSize:140 , textAlign:"center" , padding:10}} />
                                     
                                </Box>
                                  <Typography variant={sizetablet ? "h5" : "h6"} sx={{mt:1}}>ส่วนลด 5% ทันที</Typography>
                                </Grid>
                                <Grid item 
                                  xs={12} 
                                  sm={3}
                                  textAlign="center"
                                >

                                <Box sx={{
               
                                      background:"#fff",
                                      cursor:"pointer",
                                      borderRadius:sizetablet ? 25 : 5,
                                      '&:hover': {
                                      border: 1, 
                                      borderStyle:"ridge",
                                      borderColor:"white",
                                      cursor:"pointer",
                                  
                                      },}}>
                                    <HiDocumentCheck style={{color:"#e12454" , fontSize:140 , textAlign:"center" ,padding:10}} />
                                     
                                </Box>
                                  <Typography  variant={sizetablet ? "h5" : "h6"} sx={{mt:1}}>ต่ออายุประกันง่ายๆ</Typography>
                                </Grid>
                                <Grid item 
                                  xs={12} 
                                  sm={3}
                                  textAlign="center"
                                >

                                <Box sx={{
               
                                      background:"#fff",
                                      cursor:"pointer",
                                      borderRadius:sizetablet ? 25 : 5,
                                      '&:hover': {
                                      border: 1, 
                                      borderStyle:"ridge",
                                      borderColor:"white",
                                      cursor:"pointer",
                                  
                                      },}}>
                                   <TbBoxMultiple0 style={{color:"#e12454" , fontSize:140 , textAlign:"center" , padding:10}} />
                                     
                                </Box>
                                  <Typography variant={sizetablet ? "h5" : "h6"} sx={{mt:1}}>ผ่อน 0 % 10 เดือน</Typography>
                                </Grid>
                          </Grid>
                        </Container>
                  </Box>
               <Box >
           
              <Grid container spacing={4}>
                    <Grid item xs={12} md={12} sx={{mt:5,mb:5}}>

                    <Container>
                        <Stack textAlign="center">
                            <Typography variant={sizetablet ? "h4" : "h5"}
                                >เปรียบเทียบความคุ้มครองประกันภัยรถยนต์
                            </Typography>
                        </Stack>
                      
                        <Stack textAlign="left" sx={{pt:5 , pb:5}}>
                        
                            <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                     
                                        <TableHead>
                                        <TableRow>
                                            <StyledTableCell className='font-kanit-light' align="center" style={{fontSize:24}}>ความคุ้มครอง	</StyledTableCell>
                                            <StyledTableCell className='font-kanit-light' align="center"  style={{fontSize:24}}> 1</StyledTableCell>
                                            <StyledTableCell className='font-kanit-light' align="center"  style={{fontSize:24}}> 2+</StyledTableCell>
                                            <StyledTableCell className='font-kanit-light' align="center"  style={{fontSize:24}}> 2</StyledTableCell>
                                            <StyledTableCell className='font-kanit-light' align="center"  style={{fontSize:24}}> 3+</StyledTableCell>
                                            <StyledTableCell className='font-kanit-light' align="center"  style={{fontSize:24}}> 3</StyledTableCell>
                                            
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        <StyledTableRow >
                                            <StyledTableCell component="th" scope="row" style={{fontSize:20 , background:"#6b7ea0" , color:"#fff"}} colSpan="6">
                                                 ความเสียหายต่อตัวรถผู้เอาประกัน
                                             </StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow >
                                            
                                             <StyledTableCell component="th" scope="row" style={{fontSize:16}} >
                                                  
                                                 <Stack direction="row">
                                                    <Typography variant='p' sx={{pt:1}}>อุบัติเหตุรถชน</Typography>
                                                    <ToolTipCar title="แฟมิลี่ อินชัวร์ พร้อมดูแลและให้ความคุ้มครองรถยนต์ของคุณเมื่อเกิดความเสียหายจากอุบัติเหตุที่เกิดจากรถชนรถที่จดทะเบียนถูกต้อง">
                                                        <AiTwotoneQuestionCircle style={{fontSize:16}} />
                                                    </ToolTipCar>
                                                    <IconButton sx={{display:{xs:"block" , md:"none"}}} onClick={() => clkShow("1")}>
                                                        <BsFillInfoSquareFill />
                                                     </IconButton>
                                                 </Stack>
                                              </StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><AiOutlineCloseSquare style={{fontSize:30 , color:"#6b7ea0"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><AiOutlineCloseSquare style={{fontSize:30 , color:"#6b7ea0"}}/></StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow >
                                            <StyledTableCell component="th" scope="row" style={{fontSize:16}} >

                                                <Stack direction="row">
                                                    <Typography variant='p' sx={{pt:1}}>อุบัติเหตุที่เกิดจากการชน</Typography>
                                                    <ToolTipCar title="แฟมิลี่ อินชัวร์ พร้อมดูแลคุณและรถยนต์ของคุณเมื่อเกิดอุบัติเหตุจากรถยนต์ที่อาจไม่เกี่ยวข้องกับการชนกับรถยนต์คันอื่น">
                                                        <AiTwotoneQuestionCircle style={{fontSize:16}} />
                                                    </ToolTipCar>
                                                    <IconButton sx={{display:{xs:"block" , md:"none"}}} onClick={() => clkShow("2")}>
                                                        <BsFillInfoSquareFill />
                                                     </IconButton>
                                                 </Stack>
                                             </StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><AiOutlineCloseSquare style={{fontSize:30 , color:"#6b7ea0"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><AiOutlineCloseSquare style={{fontSize:30 , color:"#6b7ea0"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><AiOutlineCloseSquare style={{fontSize:30 , color:"#6b7ea0"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><AiOutlineCloseSquare style={{fontSize:30 , color:"#6b7ea0"}}/></StyledTableCell>
                                        </StyledTableRow>

                                        <StyledTableRow >
                                            <StyledTableCell component="th" scope="row" style={{fontSize:16}} >
                                                
                                                 <Stack direction="row">
                                                    <Typography variant='p' sx={{pt:1}}>ไฟไหม้/สูญหาย </Typography>
                                                    <ToolTipCar title="แฟมิลี่ อินชัวร์ ให้ความคุ้มครองรถยนต์ของคุณเมื่อเกิดเหตุไฟไหม้หรือสูญหาย">
                                                        <AiTwotoneQuestionCircle style={{fontSize:16}} />
                                                    </ToolTipCar>
                                                    <IconButton sx={{display:{xs:"block" , md:"none"}}} onClick={() => clkShow("3")}>
                                                        <BsFillInfoSquareFill />
                                                     </IconButton>
                                                 </Stack>
                                             </StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><AiOutlineCloseSquare style={{fontSize:30 , color:"#6b7ea0"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><AiOutlineCloseSquare style={{fontSize:30 , color:"#6b7ea0"}}/></StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow >
                                            <StyledTableCell component="th" scope="row" style={{fontSize:16}} >
                                                 
                                                  <Stack direction="row">
                                                    <Typography variant='p' sx={{pt:1}}>น้ำท่วม</Typography>
                                                    <ToolTipCar title="แฟมิลี่ อินชัวร์ ให้ความคุ้มครองความเสียหายของรถยนต์ของคุณเมื่อน้ำท่วมหรือประสบภัยธรรมชาติ">
                                                        <AiTwotoneQuestionCircle style={{fontSize:16}} />
                                                    </ToolTipCar>
                                                    <IconButton sx={{display:{xs:"block" , md:"none"}}} onClick={() => clkShow("4")}>
                                                        <BsFillInfoSquareFill />
                                                     </IconButton>
                                                 </Stack>
                                             </StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><AiOutlineCloseSquare style={{fontSize:30 , color:"#6b7ea0"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><AiOutlineCloseSquare style={{fontSize:30 , color:"#6b7ea0"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><AiOutlineCloseSquare style={{fontSize:30 , color:"#6b7ea0"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><AiOutlineCloseSquare style={{fontSize:30 , color:"#6b7ea0"}}/></StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow >
                                            <StyledTableCell component="th" scope="row" style={{fontSize:20 , background:"#6b7ea0" , color:"#fff"}} colSpan="6">
                                                   ความรับผิดชอบต่อบุคคลภายนอก 
                                            </StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow >
                                            <StyledTableCell component="th" scope="row" style={{fontSize:16}} >
                                                
                                                 <Stack direction="row">
                                                    <Typography variant='p' sx={{pt:1}}>ทรัพย์สิน</Typography>
                                                    <ToolTipCar title="ความคุ้มครองความเสียหายต่อทรัพย์สินของบุคคลภายนอก ตามที่คุณต้องรับผิดชอบตามกฎหมาย">
                                                        <AiTwotoneQuestionCircle style={{fontSize:16}} />
                                                    </ToolTipCar>
                                                    <IconButton sx={{display:{xs:"block" , md:"none"}}} onClick={() => clkShow("5")}>
                                                        <BsFillInfoSquareFill />
                                                     </IconButton>
                                                 </Stack>
                                             </StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                        </StyledTableRow>
                                         <StyledTableRow >
                                             <StyledTableCell component="th" scope="row" style={{fontSize:16}} >
                                              
                                                 <Stack direction="row">
                                                    <Typography variant='p' sx={{pt:1}}>บุคคล</Typography>
                                                    <ToolTipCar title="ความคุ้มครองความเสียหายต่อชีวิตและบาดเจ็บทางร่างกาย ของบุคคลภายนอก ตามที่คุณต้องรับผิดชอบต่อคู่กรณีตามกฎหมายเนื่องจากอุบัติเหตุ">
                                                        <AiTwotoneQuestionCircle style={{fontSize:16}} />
                                                    </ToolTipCar>
                                                    <IconButton sx={{display:{xs:"block" , md:"none"}}} onClick={() => clkShow("6")}>
                                                        <BsFillInfoSquareFill />
                                                     </IconButton>
                                                 </Stack>
                                             </StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow >
                                            <StyledTableCell component="th" scope="row" style={{fontSize:20 , background:"#6b7ea0" , color:"#fff"}} colSpan="6">
                                                คุ้มครองผู้ขับขี่และผู้โดยสาร
                                            </StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow >
                                             <StyledTableCell component="th" scope="row" style={{fontSize:16}} >
                                                <Stack direction="row">
                                                    <Typography variant='p' sx={{pt:1}}>อุบัติเหตุส่วนบุคคล</Typography>
                                                    <ToolTipCar title="ความคุ้มครองสำหรับการเสียชีวิต สูญเสียอวัยวะ ทุพพลภาพ ของผู้ขับขี่และผู้โดยสารในรถของคุณ">
                                                        <AiTwotoneQuestionCircle style={{fontSize:16}} />
                                                    </ToolTipCar>
                                                    <IconButton sx={{display:{xs:"block" , md:"none"}}} onClick={() => clkShow("7")}>
                                                        <BsFillInfoSquareFill />
                                                     </IconButton>
                                                 </Stack>
                                             </StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow >
                                             <StyledTableCell component="th" scope="row" style={{fontSize:16}} >
                                                <Stack direction="row">
                                                    <Typography variant='p' sx={{pt:1}}>ค่ารักษาพยาบาล</Typography>
                                                    <ToolTipCar title="ความคุ้มครองค่ารักษาพยาบาลในความบาดเจ็บจากอุบัติเหตุของบุคคลภายในรถคุณ">
                                                        <AiTwotoneQuestionCircle style={{fontSize:16}} />
                                                    </ToolTipCar>
                                                    <IconButton sx={{display:{xs:"block" , md:"none"}}} onClick={() => clkShow("8")}>
                                                        <BsFillInfoSquareFill />
                                                     </IconButton>
                                                 </Stack>
                                             </StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow >
                                             <StyledTableCell component="th" scope="row" style={{fontSize:16}} >
                                               <Stack direction="row">
                                                    <Typography variant='p' sx={{pt:1}}>ประกันตัวผู้ขับขี่</Typography>
                                                    <ToolTipCar title="ให้ความคุ้มครองตัวผู้ขับขี่ให้มีอิสระภาพจากการถูกควบคุมตัวในคดีอาญาของพนักงานสอบสวน พนักงานอัยการ หรือ ศาล ชั่วระยะเวลาหนึ่งๆ ระหว่างการต่อสู้คดีความอันสืบเนื่องมาจากอุบัติเหตุรถยนต์ที่เกิดขึ้น">
                                                        <AiTwotoneQuestionCircle style={{fontSize:16}} />
                                                    </ToolTipCar>
                                                    <IconButton sx={{display:{xs:"block" , md:"none"}}} onClick={() => clkShow("9")}>
                                                        <BsFillInfoSquareFill />
                                                     </IconButton>
                                                 </Stack>
                                             </StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                             <StyledTableCell align="center"><FaSquareCheck style={{fontSize:28 , color:"#e12454"}}/></StyledTableCell>
                                        </StyledTableRow>
                                        </TableBody>
                                    </Table>
                             </TableContainer>
                        </Stack>
                    </Container>
                </Grid>

                    
                </Grid>
           
        </Box>
                  <Box sx={{background:"#e3e3e6" , pt:2 , pb:4}}>
                    <Typography variant='h5' sx={{ml:1.5}}> บทความที่เกี่ยวข้อง  <IconButton> <FaArrowCircleRight  style={{fontSize:32}}  /></IconButton></Typography>
                  <Swiper
                                        style={{
                                            "--swiper-navigation-color": "#e12454",
                                            "--swiper-pagination-color": "#e12454",
                                            
                                        }}
                                        slidesPerView=
                                            {
                                                sizeXs ? 1
                                                 :sizeSm ? 3 
                                                   :sizeMd ? 3
                                                    :sizeLg ? 5 
                                                      : 1
                                                
                                            }
                                        spaceBetween={sizetablet ? 0.5 : 0}
                                        navigation={true}
                                        pagination={{
                                        
                                        clickable: true,
                                        }}
                                        modules={[Navigation]}
                                        className="swiper"

                                    >
                                      
                                      <SwiperSlide
                                      style={{paddingTop:sizetablet ? 20 : 0 , paddingLeft:sizetablet ? 10 : 0 , paddingBottom:sizetablet ? 20 : 0}}>
                                            <CardBlog 
                                                imgs={imgblog} 
                                                txt={1} 
                                                des={"ให้การคุ้มครองมากที่สุด รับผิดชอบความเสียหายที่เกิดขึ้นกับรถยนต์ของเรา และที่เกิดขึ้นกับทรัพย์สิน ชีวิตและร่างกายของคู่กรณี หากเราเป็นฝ่ายผิด รวมถึงกรณีรถยนต์ของเราสูญหาย หรือไฟไหม้ ประกันรถยนชั้น 1 เหมาะสำหรับรถคันใหม่ หรือมือใหม่หัดขับ พอมีเงินจ่ายค่าเบี้ย เลือกประกัยภัยรถยนต์ชั้น 1 ไว้ก็อุ่นใจทุกกรณี"}
                                            >
                                             <Typography variant='h5'>ประมาทร่วม ใครต้องเป็นคนจ่าย ?</Typography>
                                             <Chip label="รถยนต์"  sx={{mt:1,p:1}} style={{background:"#e12454" , color:"#fff"}}/>
                                              <Stack direction="column" sx={{mt:1}}>
                                                <Typography variant='p'>15 มกราคม 2567</Typography>
                                              </Stack>
                                             
                                            </CardBlog>
                                        </SwiperSlide>
                                        <SwiperSlide style={{paddingTop:sizetablet ? 20 : 0 , paddingLeft:sizetablet ? 10 : 0 , paddingBottom:sizetablet ? 20 : 0}}>
                                          <CardBlog 
                                                imgs={imgblog} 
                                                txt={2} 
                                                des={"ให้การคุ้มครองมากที่สุด รับผิดชอบความเสียหายที่เกิดขึ้นกับรถยนต์ของเรา และที่เกิดขึ้นกับทรัพย์สิน ชีวิตและร่างกายของคู่กรณี หากเราเป็นฝ่ายผิด รวมถึงกรณีรถยนต์ของเราสูญหาย หรือไฟไหม้ ประกันรถยนชั้น 1 เหมาะสำหรับรถคันใหม่ หรือมือใหม่หัดขับ พอมีเงินจ่ายค่าเบี้ย เลือกประกัยภัยรถยนต์ชั้น 1 ไว้ก็อุ่นใจทุกกรณี"}
                                            >
                                             <Typography variant='h5'>ประมาทร่วม ใครต้องเป็นคนจ่าย ?</Typography>
                                             <Chip label="รถยนต์"  sx={{mt:1,p:1}} style={{background:"#e12454" , color:"#fff"}}/>
                                              <Stack direction="column" sx={{mt:1}}>
                                                <Typography variant='p'>15 มกราคม 2567</Typography>
                                              </Stack>
                                             
                                            </CardBlog>
                                        </SwiperSlide>
                                      <SwiperSlide  style={{paddingTop:sizetablet ? 20 : 0 , paddingLeft:sizetablet ? 10 : 0 , paddingBottom:sizetablet ? 20 : 0}}>

                                          <CardBlog 
                                                imgs={imgblog} 
                                                txt={3} 
                                                des={"ให้การคุ้มครองมากที่สุด รับผิดชอบความเสียหายที่เกิดขึ้นกับรถยนต์ของเรา และที่เกิดขึ้นกับทรัพย์สิน ชีวิตและร่างกายของคู่กรณี หากเราเป็นฝ่ายผิด รวมถึงกรณีรถยนต์ของเราสูญหาย หรือไฟไหม้ ประกันรถยนชั้น 1 เหมาะสำหรับรถคันใหม่ หรือมือใหม่หัดขับ พอมีเงินจ่ายค่าเบี้ย เลือกประกัยภัยรถยนต์ชั้น 1 ไว้ก็อุ่นใจทุกกรณี"}
                                            >
                                             <Typography variant='h5'>ประมาทร่วม ใครต้องเป็นคนจ่าย ?</Typography>
                                             <Chip label="รถยนต์"  sx={{mt:1,p:1}} style={{background:"#e12454" , color:"#fff"}}/>
                                              <Stack direction="column" sx={{mt:1}}>
                                                <Typography variant='p'>15 มกราคม 2567</Typography>
                                              </Stack>
                                             
                                            </CardBlog>
                                    
                                     </SwiperSlide>
                                     <SwiperSlide  style={{paddingTop:sizetablet ? 20 : 0 , paddingLeft:sizetablet ? 10 : 0 , paddingBottom:sizetablet ? 20 : 0}}>

                                      <CardBlog 
                                            imgs={imgblog} 
                                            txt={4} 
                                            des={"ให้การคุ้มครองมากที่สุด รับผิดชอบความเสียหายที่เกิดขึ้นกับรถยนต์ของเรา และที่เกิดขึ้นกับทรัพย์สิน ชีวิตและร่างกายของคู่กรณี หากเราเป็นฝ่ายผิด รวมถึงกรณีรถยนต์ของเราสูญหาย หรือไฟไหม้ ประกันรถยนชั้น 1 เหมาะสำหรับรถคันใหม่ หรือมือใหม่หัดขับ พอมีเงินจ่ายค่าเบี้ย เลือกประกัยภัยรถยนต์ชั้น 1 ไว้ก็อุ่นใจทุกกรณี"}
                                        >
                                        <Typography variant='h5'>ประมาทร่วม ใครต้องเป็นคนจ่าย ?</Typography>
                                        <Chip label="รถยนต์"  sx={{mt:1,p:1}} style={{background:"#e12454" , color:"#fff"}}/>
                                          <Stack direction="column" sx={{mt:1}}>
                                            <Typography variant='p'>15 มกราคม 2567</Typography>
                                          </Stack>
                                        
                                        </CardBlog>

                                      </SwiperSlide>
                                      <SwiperSlide  style={{paddingTop:sizetablet ? 20 : 0 , paddingLeft:sizetablet ? 10 : 0 , paddingBottom:sizetablet ? 20 : 0}}>

                                      <CardBlog 
                                            imgs={imgblog} 
                                            txt={5} 
                                            des={"ให้การคุ้มครองมากที่สุด รับผิดชอบความเสียหายที่เกิดขึ้นกับรถยนต์ของเรา และที่เกิดขึ้นกับทรัพย์สิน ชีวิตและร่างกายของคู่กรณี หากเราเป็นฝ่ายผิด รวมถึงกรณีรถยนต์ของเราสูญหาย หรือไฟไหม้ ประกันรถยนชั้น 1 เหมาะสำหรับรถคันใหม่ หรือมือใหม่หัดขับ พอมีเงินจ่ายค่าเบี้ย เลือกประกัยภัยรถยนต์ชั้น 1 ไว้ก็อุ่นใจทุกกรณี"}
                                        >
                                        <Typography variant='h5'>ประมาทร่วม ใครต้องเป็นคนจ่าย ?</Typography>
                                        <Chip label="รถยนต์"  sx={{mt:1,p:1}} style={{background:"#e12454" , color:"#fff"}}/>
                                          <Stack direction="column" sx={{mt:1}}>
                                            <Typography variant='p'>15 มกราคม 2567</Typography>
                                          </Stack>
                                        
                                        </CardBlog>

                                      </SwiperSlide>
                                      <SwiperSlide  style={{paddingTop:sizetablet ? 20 : 0 , paddingLeft:sizetablet ? 10 : 0 , paddingBottom:sizetablet ? 20 : 0}}>

                                      <CardBlog 
                                            imgs={imgblog} 
                                            txt={6} 
                                            des={"ให้การคุ้มครองมากที่สุด รับผิดชอบความเสียหายที่เกิดขึ้นกับรถยนต์ของเรา และที่เกิดขึ้นกับทรัพย์สิน ชีวิตและร่างกายของคู่กรณี หากเราเป็นฝ่ายผิด รวมถึงกรณีรถยนต์ของเราสูญหาย หรือไฟไหม้ ประกันรถยนชั้น 1 เหมาะสำหรับรถคันใหม่ หรือมือใหม่หัดขับ พอมีเงินจ่ายค่าเบี้ย เลือกประกัยภัยรถยนต์ชั้น 1 ไว้ก็อุ่นใจทุกกรณี"}
                                        >
                                        <Typography variant='h5'>ประมาทร่วม ใครต้องเป็นคนจ่าย ?</Typography>
                                        <Chip label="รถยนต์"  sx={{mt:1,p:1}} style={{background:"#e12454" , color:"#fff"}}/>
                                          <Stack direction="column" sx={{mt:1}}>
                                            <Typography variant='p'>15 มกราคม 2567</Typography>
                                          </Stack>
                                        
                                        </CardBlog>

                                      </SwiperSlide>
                                      <SwiperSlide  style={{paddingTop:sizetablet ? 20 : 0 , paddingLeft:sizetablet ? 10 : 0 , paddingBottom:sizetablet ? 20 : 0}}>

                                        <CardBlog 
                                              imgs={imgblog} 
                                              txt={7} 
                                              des={"ให้การคุ้มครองมากที่สุด รับผิดชอบความเสียหายที่เกิดขึ้นกับรถยนต์ของเรา และที่เกิดขึ้นกับทรัพย์สิน ชีวิตและร่างกายของคู่กรณี หากเราเป็นฝ่ายผิด รวมถึงกรณีรถยนต์ของเราสูญหาย หรือไฟไหม้ ประกันรถยนชั้น 1 เหมาะสำหรับรถคันใหม่ หรือมือใหม่หัดขับ พอมีเงินจ่ายค่าเบี้ย เลือกประกัยภัยรถยนต์ชั้น 1 ไว้ก็อุ่นใจทุกกรณี"}
                                          >
                                          <Typography variant='h5'>ประมาทร่วม ใครต้องเป็นคนจ่าย ?</Typography>
                                          <Chip label="รถยนต์"  sx={{mt:1,p:1}} style={{background:"#e12454" , color:"#fff"}}/>
                                            <Stack direction="column" sx={{mt:1}}>
                                              <Typography variant='p'>15 มกราคม 2567</Typography>
                                            </Stack>
                                          
                                          </CardBlog>

                                        </SwiperSlide>
                                     
                                  

                                    </Swiper>
                                    </Box>
         </>
        )
}

export default MainCheckPrice