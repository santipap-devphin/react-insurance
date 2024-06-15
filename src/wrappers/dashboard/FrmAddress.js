import React , {useState , useEffect , useContext} from 'react';
import {Stack , Box ,InputLabel, MenuItem , Typography  , TextField , FormControl 
    , InputAdornment , Button , Select , Grid , Chip } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

const FrmAddress = () => {
 
 const btnReset = () => {

 }
 
 const handdleSubmit = (e) => {
        e.preventDefault();
 }
  return (<form onSubmit={handdleSubmit} style={{padding:20}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    
                    <TextField
                            label="ชื่อ-นามสกุล"
                            id="nameAddr"
                            InputProps={{
                                endAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
                            }}
                            value={"" /*nameAddr*/}
                            onChange={(e) => {
                              
                              /*if(Object.keys(frmEditAddr).length > 0){
                              
                                setfrmEditAddr({...frmEditAddr  , nameAddr :e.target.value})
                               }else{
                                  setfrmAddress({...frmAddress , nameAddr: e.target.value})
                              }
                              setNameAddr(e.target.value)*/
                            }}
                            variant="outlined"
                            size="small"
                            fullWidth
                            />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                            label="หมายเลขโทรศัพท์"
                            id="telAddr"
                            InputProps={{
                                endAdornment: <InputAdornment position="start"><PhoneEnabledIcon  /></InputAdornment>,
                            }}
                            value={""/*telAddr*/}
                            onChange={(e) => {/*
                              if(Object.keys(frmEditAddr).length > 0){
                                  setfrmEditAddr({...frmEditAddr  , telAddr :e.target.value})
                              }else{
                                setfrmAddress({...frmAddress , telAddr: e.target.value})
                              }
                              setTelAddr(e.target.value)
                              */
                            }}
                            variant="outlined"
                            size="small"
                            fullWidth
                                        />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl size="small" fullWidth>
                                    <InputLabel id="labelprovinceAddr">จังหวัด</InputLabel>
                                    <Select
                                    labelId="lprovinceAddr"
                                    id="provinceAddr"
                                    value={""/*provinces*/}
                                    label="จังหวัด"
                                    /*onChange={handleChangeProvinces}
                                    MenuProps={{style:{maxHeight:300} }}*/
                                   
                                    >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    {/*
                                      thaiprovinces.RECORDS.map((val , index) => {

                                          return <MenuItem key={index} value={val.id} name={val.name_th}>{val.name_th}</MenuItem>

                                      })
                                    */}
                                    
                                    </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl size="small" fullWidth>
                                    <InputLabel id="labeldistrictAddr">เขต/อำเภอ</InputLabel>
                                    <Select
                                    labelId="ldistrictAddr"
                                    id="districtAddr"
                                    value={"" /*distinct*/}
                                    label="เขต/อำเภอ"
                                    /*onChange={handdleChangedistinct}*/
                                    MenuProps={{style:{maxHeight:300} }}
                                    maxRows={4}
                                    >
                                    <MenuItem value="">
                                    <em>{/*provinces === "" ? "กรุณาเลือก จังหวัด ก่อน" : "None" */}</em>
                                    </MenuItem>
                                    {/*
                                        listDistinct.length > 0 ?
                                        listDistinct.map((val , index) => {

                                            return <MenuItem key={index} value={val.id} name={val.name_th}>{val.name_th}</MenuItem>

                                        })
                                        : null
                                    */}
                                   
                                    </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl size="small" fullWidth>
                                    <InputLabel id="labeltambon">ตำบล/แขวง</InputLabel>
                                    <Select
                                    labelId="ltambon"
                                    id="tambonaddr"
                                    value={""/*tambon*/}
                                    label="ตำบล/แขวง"
                                   /* onChange={handdleChangetambon}*/
                                    MenuProps={{style:{maxHeight:300} }}
                                    maxRows={4}
                                    >
                                    <MenuItem value="">
                                    <em>{/*distinct === "" ? "กรุณาเลือก อำเภอ ก่อน" : "None" */}</em>
                                    </MenuItem>
                                    {/*
                                        listTambom.length > 0 ?
                                        listTambom.map((val , index) => {

                                            return <MenuItem key={index} value={val.id} name={val.name_th}>{val.name_th}</MenuItem>

                                        })
                                        : null
                                    */}
                                   
                                    </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl size="small" fullWidth>
                                    <InputLabel id="labelpostcodeAddr">รหัสไปรษณีย์</InputLabel>
                                    <Select
                                    labelId="lpostcodeAddr"
                                    id="postcodeAddr"
                                    value={""/*postCode*/}
                                    label="รหัสไปรษณีย์"
                                    /*onChange={handdlechangePostcode}*/
                                    >
                                    <MenuItem value="">
                                    <em>{/*tambon === "" ? "กรุณาเลือก ตำบล ก่อน" : "None"*/}</em>
                                    </MenuItem>
                                    {/*
                                      
                                      listZipcode.length > 0 ?
                                      listZipcode.map((val , index) => {

                                          return <MenuItem key={index} value={val.zip_code}>{val.zip_code}</MenuItem>

                                      })
                                      : null
                                    */}
                                    
                                    </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField
                        id="filled-multiline-static"
                        label="รายละเอียดที่อยู่"
                        multiline
                        value={""/*detailAddr*/}
                        onChange={(e) => {/*
                          if(Object.keys(frmEditAddr).length > 0){
                              setfrmEditAddr({...frmEditAddr  , detailAddr :e.target.value})
                          }else{
                              setfrmAddress({...frmAddress , detailAddr: e.target.value})
                          }
                          setDetailAddr(e.target.value)
                          
                        */}}
                        rows={4}
                        fullWidth
                        />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Button type="submit" variant="contained" sx={{ml:0 , mr:3 , mb:3 , backgroundColor:"#f48225"}}>ยืนยัน</Button>  
                    <Button type="reset" variant="contained" color="error" sx={{ml:1 , mr:1 , mb:3}} onClick={btnReset}>รีเซ็ต</Button>
                </Grid>
         </Grid>
               
        </form>
    
         )
}

export default FrmAddress