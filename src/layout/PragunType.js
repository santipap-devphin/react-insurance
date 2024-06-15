import React , {useContext , useState} from 'react';
import DataContext from '../context/DataContext';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import imagedata from '../assets/image/producttest.jpg';
import Button from '@mui/material/Button';

import imageprd3 from '../assets/image/product3.jpg';

const PragunType = () => {

  const {matches} = useContext(DataContext);
  const [value, setValue] = useState(0);

  const handleClick = (val) => {
            setValue(val)
  };

  const haddleClk = () => {

  }
  const [listData , setListData] = useState([
    {
        id:0,
        content:"2021",
    },
    {
        id:1,
        content:"2020",
    },
    {
        id:2,
        content:"2019",
    },
    {
        id:3,
        content:"2018",
    },
    {
        id:4,
        content:"2017",
    }
    
  ]);
  const handleChange = (event, newValue) => {
    //console.log(newValue)
        setValue(newValue);
  };

 

  return (<Box sx={{ background:"#fff !important" }}>
          
                <Container>
                
                <Grid 
                 container
                 sx={{mt:"0px" , mb:"50px"}}
                 spacing={0}
                 >
                    
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant={matches ? "h6" : "h4"} sx={{pt:5 , pb:5 , textAlign:"center"}} className='fontKanitLight'>ผลิตภัณฑ์แนะนำ โดย แฟมิลี่ อินชัวร์</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                        <Box sx={{ width: '100%' ,  display:{xs:"none" , md:"block"}}}>
                            <Tabs 
                                value={value} 
                                onChange={handleChange}
                                centered
                                
                                sx={{ 
                                    
                                    textAlign:"left",
                                    borderRight: 0, 
                                    borderColor: 'divider',
                                    color:"orange",
                                    "& .MuiTab-root.Mui-selected": {
                                        background:"#223a66",
                                        color: '#fff',
                                        fontWeight:500
                                    }
                                }}
                                TabIndicatorProps={{
                                    style: {
                                    backgroundColor: "#e12454",
                                    width:30
                                    }
                                }}
                                
                            
                                >
                                <Tab label="ประกันรถ" sx={{fontSize:24 , boxShadow: value === 0 ? "0 0px 15px 0px rgb(0 0 0 / 15%)" : null , background:value === 0 ? "#f5f2e3" : null}}  />
                                <Tab label="ประกันบิ๊กไบค์" sx={{fontSize:24 , boxShadow: value === 1 ? "0 0px 15px 0px rgb(0 0 0 / 15%)" : null, background:value === 1 ? "#f5f2e3" : null}} />
                                <Tab label="ประกันท่องเที่ยว" sx={{fontSize:24 , boxShadow: value === 2 ? "0 0px 15px 0px rgb(0 0 0 / 15%)" : null, background:value === 2 ? "#f5f2e3" : null}} />
                                <Tab label="ประกันชีวิต" sx={{fontSize:24 , boxShadow: value === 3 ? "0 0px 15px 0px rgb(0 0 0 / 15%)" : null, background:value === 3 ? "#f5f2e3" : null}} />
                            
                            </Tabs>
                        </Box>
                        {/* menu Tab Mobile Version */}
                        <Box sx={{ width: '100%' ,  display:{xs:"block" , md:"none"}}}>
                            <Tabs 
                                value={value} 
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable tabl mobile"
                                allowScrollButtonsMobile
                                sx={{ 
                                    
                                    textAlign:"left",
                                    borderRight: 0, 
                                    borderColor: 'divider',
                                    color:"orange",
                                    "& .MuiTab-root.Mui-selected": {
                                        background:"#223a66",
                                        color: '#fff',
                                        fontWeight:500
                                    }
                                }}
                                TabIndicatorProps={{
                                    style: {
                                    backgroundColor: "#e12454",
                                    width:30
                                    }
                                }}
                                
                            
                                >
                                <Tab label="ประกันรถ" sx={{fontSize:18 , boxShadow: value === 0 ? "0 0px 15px 0px rgb(0 0 0 / 15%)" : null , background:value === 0 ? "#f5f2e3" : null}}  />
                                <Tab label="ประกันบิ๊กไบค์" sx={{fontSize:18 , boxShadow: value === 1 ? "0 0px 15px 0px rgb(0 0 0 / 15%)" : null, background:value === 1 ? "#f5f2e3" : null}} />
                                <Tab label="ประกันท่องเที่ยว" sx={{fontSize:18 , boxShadow: value === 2 ? "0 0px 15px 0px rgb(0 0 0 / 15%)" : null, background:value === 2 ? "#f5f2e3" : null}} />
                                <Tab label="ประกันชีวิต" sx={{fontSize:18 , boxShadow: value === 3 ? "0 0px 15px 0px rgb(0 0 0 / 15%)" : null, background:value === 3 ? "#f5f2e3" : null}} />
                            
                            </Tabs>
                        </Box>
                    </Grid>

                    
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{pl:{xs:0 , md:0}}}>
                        <Grid 
                        container
                        spacing={2}
                        sx={{pt:5}}
                        >

                         {
                            ['0' , '1' , '2'].map(( keys , item) => {


                                return <Grid key={keys} item xs={12} sm={6} md={6} lg={4} xl={4} sx={{mt:{xs:2 , sm:2  , md:0 , lg:0 , xl:0}}}>
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
                                                    title={"ประกันชั้น 1 วิริยะประกันภัย" + item}
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
                    </Grid>
                   
                 </Grid>
                 </Container>
          </Box>
        )
}

export default PragunType