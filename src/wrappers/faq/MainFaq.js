import React , {useState , useContext} from 'react';
import DataContext from '../../context/DataContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const MainFaq = () => {

    const sizeXs = useMediaQuery('(min-width:1200px)');
    const {scaleTablet} = useContext(DataContext);
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: "#252531",
          color: "#DFB163",
          fontSize: 18,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 16,
        },
      }));

      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));


  return (<Box sx={{backgroundColor:"#f3f5fa" , pt:3 , pb:3}}>
            <Stack 
                    direction="column" 
                    justifyContent="center"
                    alignItems="center"
                    sx={{mb:2}}
                    >
                     <section className='section-title'>
                        <h2>คำถามพบบ่อย</h2>
                    </section>   
                    
            </Stack>
           
            <Box sx={{
                        pl:3,
                        pr:3,
                        pb:3,
                        backgroundColor:"#f3f5fa",
                        /*boxShadow : "0 0 20px 0 rgba(0, 0, 0, 0.25)"*/
                    }}>

                     
                    <Container>
                     <Grid container spacing={4}>

                         <Grid item xs={12} md={12}>
 
                         <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{mb:2}}>
                                 <AccordionSummary
                                 expandIcon={<ExpandMoreIcon sx={{color:"#e12454"}} />}
                                 aria-controls="panel1bh-content"
                                 id="panel1bh-header"
                                 >
                                <Box sx={{pt:0.25 ,pr:0.2}}><HelpOutlineIcon style={{fontSize:scaleTablet ? 28 : 20 , color:"#47b2e4"}} /> </Box>
                                 <Typography variant={scaleTablet ? "h5" : "p"} sx={{color:"#37517e"}}>
                                   แฟมิลี่อินชัวร์ ขายประกันที่ไหนบ้าง
                                 </Typography>
                                </AccordionSummary>
                                 <AccordionDetails>
                                     {
                                         sizeXs ? 
                                         <>
                                         <Grid container spacing={1} sx={{mb:1}}>
                                            <Grid item xs={12} md={6}>
                                            <Typography>
                                                1.1 ค่าห้อง ค่าอาหาร และค่าบริการในโรงพยาบาล
                                            </Typography>    
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                            <Typography>
                                                20,000 บาทต่อวัน
                                            </Typography>    
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                            <Typography>
                                                9,000 บาทต่อวัน
                                            </Typography>   
                                            </Grid>
                                     </Grid>
                                     <Grid container spacing={1} sx={{mb:1}}>
                                            <Grid item xs={12} md={6}>
                                            <Typography>
                                                1.2 ค่าบริการทางการพยาบาล
                                            </Typography>    
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                            <Typography>
                                                จ่ายตามจริง
                                            </Typography>    
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                            <Typography>
                                                จ่ายตามจริง
                                             </Typography>   
                                            </Grid>
                                     </Grid>
                                     <Grid container spacing={1} sx={{mb:1}}>
                                            <Grid item xs={12} md={6}>
                                            <Typography>
                                                1.3 ค่าห้อง ค่าอาหาร ค่าบริการในโรงพยาบาล และค่าบริการทางการพยาบาลในห้อง ICU
                                            </Typography>    
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                            <Typography>
                                                จ่ายตามจริง
                                            </Typography>    
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                            <Typography>
                                                จ่ายตามจริง
                                             </Typography>   
                                            </Grid>
                                     </Grid>
                                     </> 
                                         :
                                      <>
                                      <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                                <TableHead style={{backgroundColor:"#fff"}}>
                                                <TableRow>
                                                    <StyledTableCell className='font-kanit-light' align="center">จุดเด่น </StyledTableCell>
                                                    <StyledTableCell className='font-kanit-light' align="center"> แผนบียอนด์ แพลทินัม</StyledTableCell>
                                                    <StyledTableCell className='font-kanit-light' align="center"> แผนแพลทินัม </StyledTableCell>
                                                    
                                                </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <StyledTableRow>
                                                        <StyledTableCell component="th" scope="row" sx={{maxWidth:250}}>
                                                            1.1 ค่าห้อง ค่าอาหาร และค่าบริการในโรงพยาบาล
                                                        </StyledTableCell>
                                                        <StyledTableCell align="center">20,000 บาทต่อวัน</StyledTableCell>
                                                        <StyledTableCell align="center">9,000 บาทต่อวัน</StyledTableCell>
                                                    </StyledTableRow>
                                                    <StyledTableRow>
                                                        <StyledTableCell component="th" scope="row" sx={{maxWidth:250}}>
                                                            1.2 ค่าบริการทางการพยาบาล
                                                        </StyledTableCell>
                                                        <StyledTableCell align="center">จ่ายตามจริง</StyledTableCell>
                                                        <StyledTableCell align="center">จ่ายตามจริง</StyledTableCell>
                                                    </StyledTableRow>
                                                    <StyledTableRow>
                                                        <StyledTableCell component="th" scope="row" sx={{maxWidth:250}}>
                                                            1.3 ค่าห้อง ค่าอาหาร ค่าบริการในโรงพยาบาล และค่าบริการทางการพยาบาลในห้อง ICU
                                                        </StyledTableCell>
                                                        <StyledTableCell align="center">จ่ายตามจริง</StyledTableCell>
                                                        <StyledTableCell align="center">จ่ายตามจริง</StyledTableCell>
                                                    </StyledTableRow>
                                                 </TableBody>
                                            </Table>
                                    </TableContainer>
                                      </>
                                         
                                     }
                                     
                                    
                                     
                                 </AccordionDetails>
                             </Accordion>
                             <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{mb:2}}>
                                 <AccordionSummary
                                 expandIcon={<ExpandMoreIcon sx={{color:"#e12454"}} />}
                                 aria-controls="panel2bh-content"
                                 id="panel2bh-header"
                                 >
                                 <Box sx={{pt:0.25 ,pr:0.2}}><HelpOutlineIcon style={{fontSize:scaleTablet ? 28 : 20 , color:"#47b2e4"}} /> </Box>
                                 <Typography sx={{ width: '100%' , color:"#37517e"}} variant={scaleTablet ? "h5" : "p"}>ไม่มีใบขับขี่ ซื้อได้ประกันได้ไหม?</Typography>
                                 
                                 </AccordionSummary>
                                 <AccordionDetails>
                                 <Typography>
                                     Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                     varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                     laoreet.
                                 </Typography>
                                 </AccordionDetails>
                             </Accordion>
                             <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{mb:2}}>
                                 <AccordionSummary
                                 expandIcon={<ExpandMoreIcon sx={{color:"#e12454"}} />}
                                 aria-controls="panel3bh-content"
                                 id="panel3bh-header"
                                 >
                                 <Box sx={{pt:0.25 ,pr:0.2}}><HelpOutlineIcon style={{fontSize:scaleTablet ? 28 : 20 , color:"#47b2e4"}} /> </Box>
                                 <Typography sx={{ width: '100%' , color:"#37517e"}} variant={scaleTablet ? "h5" : "p"}>
                                        ไม่มีใบขับขี่ ใช้สิทธิ์ พ.ร.บ. ได้ไหม? 
                                 </Typography>
                                 </AccordionSummary>
                                 <AccordionDetails>
                                 <Typography>
                                     Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                     amet egestas eros, vitae egestas augue. Duis vel est augue.
                                 </Typography>
                                 </AccordionDetails>
                             </Accordion>
                             <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{mb:2}}>
                                 <AccordionSummary
                                 expandIcon={<ExpandMoreIcon sx={{color:"#e12454"}} />}
                                 aria-controls="panel4bh-content"
                                 id="panel4bh-header"
                                 >
                                 <Box sx={{pt:0.25 ,pr:0.2}}><HelpOutlineIcon style={{fontSize:scaleTablet ? 28 : 20 , color:"#47b2e4"}} /> </Box>
                                 <Typography sx={{ width: '100%' , color:"#37517e"}} variant={scaleTablet ? "h5" : "p"}>ผ่อนประกันคุ้มครองทันทีไหม ?</Typography>
                                 </AccordionSummary>
                                 <AccordionDetails>
                                 <Typography>
                                     Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                     amet egestas eros, vitae egestas augue. Duis vel est augue.
                                 </Typography>
                                 </AccordionDetails>
                             </Accordion>
                             
                         </Grid>
 
                     </Grid>
                     </Container>
                </Box>
           

         </Box>
  )
}

export default MainFaq