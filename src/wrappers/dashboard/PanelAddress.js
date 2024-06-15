import React , {Fragment , useState , useEffect , useContext} from 'react';
import {Stack , Box , Typography , Button  , Grid , Chip , Dialog ,DialogActions , DialogContent , DialogContentText , DialogTitle} from "@mui/material";
import PushPinIcon from '@mui/icons-material/PushPin';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';


const PanelAddress = () => {

    const activeStatus = (id) => {

        /*setCallConFirmActive(false);
        setActiveDialog(true);
        setActiveData(id);*/
        //console.log("active" , id)
    
     }
     const editAddress = (id) => {

        /*const findAddr = list.find((val) => val.addrID ===  id);
    
        setfrmEditAddr(findAddr);
    
        setStatusEdit(true);*/
        //console.log(findAddr)
        }
        const delAddress = (id) => {

            /*setCallDel(false);
            setOpenDialog(true);
            setDelID(id)*/
    
      }

  return (<>
                <Box sx={{backgroundColor:"#030f27", color:"#dfb163" , mt:5 , boxShadow: "1px 5px 5px 0px rgb(0 0 0 / 10%)"}}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Stack spacing={2}>
                                        <Stack direction="row">
                                            <PushPinIcon sx={{p:1 , fontSize:32}} /> <Typography variant='h6' sx={{p:1}}>ข้อมูลที่อยู่</Typography>           
                                        <Chip label="ค่าเริ่มต้น" color="info" sx={{mt:1}} /> 
                                        </Stack>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="outlined" color="success" disabled={false}  sx={{mt:0.5}} onClick={() => activeStatus("")}>
                                        <BookmarkAddedIcon />  ตั้งเป็นค่าเริ่มต้น
                                    </Button>
                                    <Button variant="outlined" color="warning"  sx={{mt:0.5 , ml:1}} onClick={() => editAddress("")}>
                                    <EditIcon /> แก้ไข
                                    </Button>
                                    <Button variant="outlined" disabled={false} sx={{mt:0.5 , ml:1}} onClick={() => delAddress("") }>
                                    <DeleteIcon /> ลบ
                                    </Button>
                                </Grid>
                            </Grid>
                </Box>
                <Box sx={{backgroundColor: "#ffffff" , color:"#000" , boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)", transformStyle: "preserve-3d"}}>
                            <Grid container>
                                    <Grid item xs={6} textAlign="center">
                                        <Typography>ชื่อ-นามสกุล</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{ /*addr.nameAddr*/} </Typography>
                                    </Grid>
                            </Grid>
                            <Grid container>
                                    <Grid item xs={6} textAlign="center">
                                        <Typography>โทรศัพท์</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{/*addr.telAddr*/}</Typography>
                                    </Grid>
                            </Grid>
                            <Grid container>
                                    <Grid item xs={6} textAlign="center">
                                        <Typography>ที่อยู่</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{/*addr.detailAddr*/}</Typography>
                                        <Typography>  </Typography>
                                    </Grid>
                            </Grid>
                            <Grid container>
                                    <Grid item xs={6} textAlign="center">
                                        <Typography>จังหวัด / อำเภอ / ตำบล / รหัสไปรษณีย์</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{/*addr.provinceAddr} / {addr.districtAddr} / {addr.tambonAddr} / {addr.postcodeAddr*/}</Typography>
                                        <Typography>  </Typography>
                                    </Grid>
                            </Grid>
                 </Box>
        </>
    
  )
}

export default PanelAddress