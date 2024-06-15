import React , {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import ShieldIcon from '@mui/icons-material/Shield';
import { Typography } from '@mui/material';

const bgProtection = () => {

 const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {

         setExpanded(isExpanded ? panel : false);
    };

    return (<Box sx={{ background:"#e9e9e9 !important"}}>
            <Box sx={{backgroundColor:"#e6f4f6"}}>
                <Stack sx={{textAlign:"center" , pt:5 , pb:5}}>
                    <Typography variant='h3'> ความแตกต่างประกันแต่ละประเภท </Typography>
                </Stack>
            </Box>
                        <Box sx={{backgroundColor:"#f5f0e0"}}>

                                    <Container>
                                    <Grid container sx={{pt:5}}>
                                        <Grid item xs={12} md={12} sx={{mb:5}}>
                                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{mb:2}}>
                                                <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1bh-content"
                                                id="panel1bh-header"
                                                >
                                                <Typography variant="h4">
                                                
                                                    ประกันภัยประเภท 1
                                                </Typography>
                                                {/*<IconButton size="large" style={{background:"#00b900" , margin:5}}>
                                                    <ShieldIcon style={{color:"#fff"}} label="1" /> 
                                                </IconButton>*/}
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                <Typography paragraph>
                                                    
                                                    ให้การคุ้มครองมากที่สุด รับผิดชอบความเสียหายที่เกิดขึ้นกับรถยนต์ของเรา และที่เกิดขึ้นกับทรัพย์สิน ชีวิตและร่างกายของคู่กรณี หากเราเป็นฝ่ายผิด รวมถึงกรณีรถยนต์ของเราสูญหาย หรือไฟไหม้ <br />
                                                    ประกันรถยนชั้น 1 เหมาะสำหรับรถคันใหม่ หรือมือใหม่หัดขับ พอมีเงินจ่ายค่าเบี้ย เลือกประกัยภัยรถยนต์ชั้น 1 ไว้ก็อุ่นใจทุกกรณี
                                                    
                                                </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{mb:2}}>
                                                <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2bh-content"
                                                id="panel2bh-header"
                                                >
                                                <Typography variant="h4">
                                                    ประกันภัยประเภท 2
                                                </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                <Typography paragraph>
                                                        รับผิดชอบเกือบทุกอย่างเหมือนประเภทที่ 1 รวมกรณีรถยนต์ของเราสูญหายหรือไฟไหม้ เพียงแต่ไม่รวมความเสียหายกับรถยนต์ของเรา คือรถเราต้องจ่ายเอง <br/>
                                                        ประกันรถยนต์ประเภท 2 และ ประกันรถยนต์ 2+ เหมาะสำหรับคนขับรถช่ำชองแล้ว มั่นใจการขับรถตัวเองว่ารอบคอบ ปลอดภัยพอสมควร หรือใช้รถไม่บ่อย การเลือกประกันภัยรถยนต์ชั้น 2 จึงเป็นตัวเลือกที่ดีที่สุด
                                                </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{mb:2}}>
                                                <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2bh-content"
                                                id="panel2bh-header"
                                                >
                                                <Typography variant="h4">
                                                    ประกันภัยประเภท 3
                                                </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                <Typography paragraph>
                                                        รับผิดชอบเฉพาะของคู่กรณี ในกรณีเราเป็นฝ่ายผิด แต่ไม่รับผิดชอบความเสียหายของรถยนต์เรา <br/>
                                                        ประกันรถยนต์ประเภท 3 และ ประกันชั้น 3 เหมาะสำหรับรถเก่าอายุหลายปี หรือนานๆ ใช้รถสักครั้ง ดูรายละเอียด ประกันภัยรถยนต์ชั้น 3 ได้ที่นี่
                                                </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{mb:2}}>
                                                <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2bh-content"
                                                id="panel2bh-header"
                                                >
                                                <Typography variant="h4">
                                                    ประกันภัยประเภท 3+
                                                </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                <Typography paragraph>
                                                        รับผิดชอบเหมือนประเภท 3 บวกรับผิดชอบรถยนต์ของเรากรณีชนกับยานพาหนะทางบก ดูรายละเอียด ประกันภัยรถยนต์ชั้น 3+ ได้ที่นี่
                                                </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{mb:2}}>
                                                <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2bh-content"
                                                id="panel2bh-header"
                                                >
                                                <Typography variant="h4">
                                                    ประกันภัยประเภท 4
                                                </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                <Typography paragraph>
                                                        รับผิดชอบเฉพาะทรัพย์สินของคู่กรณี ดูรายละเอียด ประกันภัยรถยนต์ชั้น 4 ได้ที่นี่
                                                </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            </Grid>
                                    </Grid>
                                    </Container>
                        </Box>
                    
                    </Box>)
}

export default bgProtection