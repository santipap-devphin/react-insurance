import React , {useState} from 'react';
import { Stack , Typography , Box , Accordion , AccordionSummary , AccordionDetails , TextField , InputAdornment , Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import SendIcon from '@mui/icons-material/Send';
import noImg from '../../assets/image/noimg.jpg'

const FrmConFirm = () => {
  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => (event, isExpanded) => {
    console.log(panel)
    setExpanded(isExpanded ? panel : false);
  };

  return (<Stack spacing={1} sx={{mt:5 , mb:5}}>
                <Box sx={{ width: '100%',color:"#000" , backgroundColor:"#f5f0e0", boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)", transformStyle: "preserve-3d" , p:2.5}}>
                <Accordion expanded={expanded === 'panel1'} sx={{backgroundColor:"#ffffff"}} onChange={handleChange('panel1')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    
                    >
                    <Typography variant='h5'>แจ้งชำระเงิน จาก หมายเลขกรมธรรม์</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                            <TextField
                                label="หมายเลขกรมธรรม์"
                                id="name-docid"
                                InputProps={{
                                    endAdornment: <InputAdornment position="start"><ConfirmationNumberIcon /></InputAdornment>,
                                }}
                                variant="outlined"
                                size="small"
                                fullWidth
                                />
                            <Button
                                variant="contained"
                                component="label"
                                sx={{mt:2 , backgroundColor:"#1976d2" , "&:hover": { backgroundColor:"#fff" , color:"#000"}}}
                            >
                                <FileUploadIcon/>
                                อัพโหลดสลิปโอนเงิน
                                <input
                                type="file"
                                hidden
                                />
                            </Button>
                            
                            <Stack sx={{mt: 1 , mb:1}}>
                             <img src={noImg} style={{width:"50%"}} alt="No image" />
                           </Stack>
                            <hr/>
                           
                            <Button variant="contained" color="warning" sx={{"&:hover": { backgroundColor:"#C2B4D6"}}}>
                            <SendIcon sx={{pr:1}}/>
                                ยืนยัน
                            </Button>
                    </AccordionDetails>
                </Accordion>
             </Box>
        </Stack>   
  )
}

export default FrmConFirm