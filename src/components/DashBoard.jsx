import React, {useState} from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import  Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import {ReactComponent as VerticalLine} from '../assets/line.svg';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import FormControl from "@mui/material/FormControl";
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormHelperText } from "@mui/material";
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import {ReactComponent as Asterisk} from '../assets/asterisk.svg';
import {useNavigate } from 'react-router-dom';


const DashBoard =() =>{

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const helperText = 'This is required';

    const BootstrapButton = styled(Button)({
        backgroundColor:'rgb(39, 24, 124)',
        width:'20%',
        padding:'11px 0px',
        '&:hover':{
            backgroundColor:'rgb(21, 101, 192)'
        }
        
    })

   

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setError(false);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (value === '') {
            setError(true);
        }
      };
  
      const navigate = useNavigate();
    return(
        
        <Box sx={{backgroundColor:'#FFFFFF', margin:'24px', flexGrow: '1'}}>
            
                 
           
                <Stack flex direction='row' justifyContent='space-between' alignItems='center' marginTop='20px' borderRadius='4px' color='rgb(39, 24, 126)' backgroundColor='#d7d0ffd9'>
                    
                    <Stack flex direction='row' alignItems='center'>
                        <VerticalLine width='2em' height='2em' />
                        Corporate Information
                    </Stack>
                    <IconButton onClick={()=>navigate('/register')} disableRipple>
                        <BorderColorOutlinedIcon/>
                    </IconButton>

                </Stack>

                
                <Box sx={{display:'flex', flexDirection:'row'}}>
                    <Box marginRight='30px' width='50%'>
                        <Stack  direction="row" flex justifyContent='space-between' alignItems='center' borderRadius='4px' marginTop='20px' color='rgb(39, 24, 126)' backgroundColor='#d7d0ffd9'>
                            <Stack flex direction='flex' alignItems='center'>
                            <VerticalLine width='2em' height='2em' />
                            Allowances
                            </Stack>
                            <IconButton onClick={()=>{setIsModalOpen(true)}} disableRipple>
                                <BorderColorOutlinedIcon />
                            </IconButton>


                            <Dialog open={isModalOpen} onClose={()=>setIsModalOpen(false)} fullWidth maxWidth='md' sx={{marginLeft:'7%'}}>
                             

                                <Stack flex direction='row' justifyContent='space-between' margin='0px 14px'>
                                    <h1>Allowances</h1>
                                    <IconButton onClick={()=>setIsModalOpen(false)}>
                                        <CloseIcon />
                                    </IconButton>
                                </Stack>

                                <DialogContent marginLeft='28px'>
                                    <form onSubmit={handleSubmit}>
                                        <Grid container>

                                            <Grid item xs={2} sm={1}>
                                            <Asterisk />
                                            </Grid>

                                            <Grid item xs={8}>
                                            Salary System Based On Meritocracy
                                            </Grid>

                                            <Grid item>

                                                <FormControl error={error} >

                                                <RadioGroup row value={value} onChange={handleRadioChange}>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                </RadioGroup>

                                                <div style={{color:'red', fontSize:'12px', paddingLeft:'5px'}}>
                                                {error && helperText}
                                                </div>
                                               

                                                </FormControl>
                                            </Grid>
                                        </Grid>

                                        <Grid container>

                                            <Grid item xs={2} sm={1}>
                                            <Asterisk />
                                            </Grid>

                                            <Grid item xs={8}>
                                            120 Or More Annual Holidays
                                            </Grid>

                                            <Grid item>

                                                <FormControl>

                                                <RadioGroup row>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                </RadioGroup>

                                                <div style={{color:'red', fontSize:'12px', paddingLeft:'5px'}}>
                                                {error && helperText}
                                                </div>
                                                
                                                </FormControl>
                                            </Grid>
                                        </Grid>

                                        <Grid container>

                                            <Grid item xs={2} sm={1}    >
                                            <Asterisk />
                                            </Grid>

                                            <Grid item xs={8}>
                                            Generous Welfare Benifits
                                            </Grid>

                                            <Grid item>

                                                <FormControl>

                                                <RadioGroup row>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                </RadioGroup>

                                                <div style={{color:'red', fontSize:'12px', paddingLeft:'5px'}}>
                                                {error && helperText}
                                                </div>
                                                
                                                </FormControl>
                                            </Grid>
                                        </Grid>

                                        <Grid container>

                                            <Grid item xs={2} sm={1}>
                                            <Asterisk />
                                            </Grid>

                                            <Grid item xs={8}>
                                            Enhanced Education And Training
                                            </Grid>

                                            <Grid item>

                                                <FormControl>

                                                <RadioGroup row>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                </RadioGroup>

                                                <div style={{color:'red', fontSize:'12px', paddingLeft:'5px'}}>
                                                {error && helperText}
                                                </div>
                                                
                                                </FormControl>
                                            </Grid>
                                        </Grid>

                                        <Grid container>

                                            <Grid item xs={2} sm={1}>
                                            <Asterisk />
                                            </Grid>

                                            <Grid item xs={8}>
                                            Support System For Acquriring Qualification
                                            </Grid>

                                            <Grid item>

                                                <FormControl>

                                                <RadioGroup row>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                </RadioGroup>

                                                <div style={{color:'red', fontSize:'12px', paddingLeft:'5px'}}>
                                                {error && helperText}
                                                </div>
                                                
                                                </FormControl>
                                            </Grid>
                                        </Grid>

                                        <Grid container>

                                            <Grid item xs={2} sm={1}>
                                            <Asterisk />
                                            </Grid>

                                            <Grid item xs={8}>
                                            Reduced Working Hours System
                                            </Grid>

                                            <Grid item>

                                                <FormControl>

                                                <RadioGroup row>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                </RadioGroup>

                                                <div style={{color:'red', fontSize:'12px', paddingLeft:'5px'}}>
                                                {error && helperText}
                                                </div>
                                                
                                                </FormControl>
                                            </Grid>
                                        </Grid>

                                        <Grid container>

                                            <Grid item xs={2} sm={1}>
                                            <Asterisk />
                                            </Grid>

                                            <Grid item xs={8}>
                                            Maternity Care Leave System
                                            </Grid>

                                            <Grid item>

                                                <FormControl>

                                                <RadioGroup row>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                </RadioGroup>

                                                <div style={{color:'red', fontSize:'12px', paddingLeft:'5px'}}>
                                                {error && helperText}
                                                </div>
                                                
                                                </FormControl>
                                            </Grid>
                                        </Grid>

                                        <Grid container>

                                            <Grid item xs={2} sm={1}>
                                            <Asterisk />
                                            </Grid>

                                            <Grid item xs={8}>
                                            Company Housing / Rent Subsidy
                                            </Grid>

                                            <Grid item>

                                                <FormControl>

                                                <RadioGroup row>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                </RadioGroup>

                                                <div style={{color:'red', fontSize:'12px', paddingLeft:'5px'}}>
                                                {error && helperText}
                                                </div>
                                                
                                                </FormControl>
                                            </Grid>
                                        </Grid>

                                        <Grid container>

                                            <Grid item xs={2} sm={1}>
                                            <Asterisk />
                                            </Grid>

                                            <Grid item xs={8}>
                                            Family Allowance
                                            </Grid>

                                            <Grid item>

                                                <FormControl>

                                                <RadioGroup row>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                </RadioGroup>

                                                <div style={{color:'red', fontSize:'12px', paddingLeft:'5px'}}>
                                                {error && helperText}
                                                </div>
                                                
                                                </FormControl>
                                            </Grid>
                                        </Grid>

                                        <Grid container>

                                            <Grid item xs={2} sm={1}>
                                            <Asterisk />
                                            </Grid>

                                            <Grid item xs={8}>
                                            Employee Stock Ownership
                                            </Grid>

                                            <Grid item>

                                                <FormControl>

                                                <RadioGroup row>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                </RadioGroup>

                                                <div style={{color:'red', fontSize:'12px', paddingLeft:'5px'}}>
                                                {error && helperText}
                                                </div>
                                                
                                                </FormControl>
                                            </Grid>
                                        </Grid>

                                        <Grid container>

                                            <Grid item xs={2} sm={1}>
                                            <Asterisk />
                                            </Grid>

                                            <Grid item xs={8}>
                                            Side Job Available
                                            </Grid>

                                            <Grid item>

                                                <FormControl>

                                                <RadioGroup row>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                </RadioGroup>

                                                <div style={{color:'red', fontSize:'12px', paddingLeft:'5px'}}>
                                                {error && helperText}
                                                </div>
                                                
                                                </FormControl>
                                            </Grid>
                                        </Grid>

                                        <Grid container>

                                            <Grid item xs={2} sm={1}>
                                            
                                            </Grid>

                                            <Grid item xs={8}>
                                            Mentor System
                                            </Grid>

                                            <Grid item>

                                                <FormControl>

                                                <RadioGroup row>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                </RadioGroup>

                                                
                                                </FormControl>
                                            </Grid>
                                        </Grid>

                                        <Grid container>

                                            <Grid item xs={2} sm={1}>
                                           
                                            </Grid>

                                            <Grid item xs={8}>
                                            Career Consulting
                                            </Grid>

                                            <Grid item>

                                                <FormControl>

                                                <RadioGroup row>
                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                </RadioGroup>

                                               
                                                
                                                </FormControl>
                                            </Grid>
                                        </Grid>

                                        <Stack flex alignItems='center'>
                                            <BootstrapButton variant='contained' type='submit'>SAVE</BootstrapButton>
                                        </Stack>
                                    </form>
                                </DialogContent>
                        

                        </Dialog>


                        </Stack>
                        
                    </Box>

                    <Box width='50%'>
                        <Box>

                            <Stack direction="row" flex justifyContent='space-between' alignItems='center' borderRadius='4px' marginTop='20px' color='rgb(39, 24, 126)' backgroundColor='#d7d0ffd9'>
                                <Stack flex direction='row' alignItems='center'>
                                <VerticalLine width='2em' height='2em' />
                                Others
                                </Stack>
                                <IconButton disableRipple>
                                    <BorderColorOutlinedIcon />
                                </IconButton>
                            </Stack>

                            <Stack flex direction='row' fontSize='14px'>
                                <Stack flex direction='row' width='80%' backgroundColor='rgb(247, 247, 247)' padding='10px 30px' fontWeight='500'>
                                Retention Rate Of New Graduate Hires
                                </Stack>
                                <Stack flex direction='row' width='20%' padding='10px 50px'>
                                    Over 50%
                                </Stack>
                            </Stack>

                            <Divider/>

                            <Stack flex direction='row' fontSize='14px'>
                                <Stack flex direction='row' width='80%' backgroundColor='rgb(247, 247, 247)' padding='10px 30px' fontWeight='500'>
                                Work Style ( Overseas bases )
                                </Stack>
                                <Stack flex direction='row' width='20%' padding='10px 50px'>
                                    Yes
                                </Stack>
                            </Stack>

                            <Divider margin='0' sx={{borderWidth:'0px 0px thin', borderStyle:'solid', borderColor:'rgba(0, 0, 0, 0.12)'}}/>

                            <Stack flex direction='row' fontSize='14px'>
                                <Stack flex direction='row' width='80%' backgroundColor='rgb(247, 247, 247)' padding='10px 30px' fontWeight='500'>
                                Working Environment
                                </Stack>
                                <Stack flex direction='row' width='20%' padding='10px 50px'>
                                    Not Working
                                </Stack>
                            </Stack>

                            <Divider />

                        </Box>

                        <Box>

                        <Stack direction="row" flex justifyContent='space-between' alignItems='center' borderRadius='4px' marginTop='20px' color='rgb(39, 24, 126)' backgroundColor='#d7d0ffd9'>
                                <Stack flex direction='row' alignItems='center'>
                                <VerticalLine width='2em' height='2em' />
                                Holidays
                                </Stack>
                                <IconButton disableRipple>
                                    <BorderColorOutlinedIcon />
                                </IconButton>
                            </Stack>

                            <Stack flex direction='row' fontSize='14px'>
                                <Stack flex direction='row' width='80%' backgroundColor='rgb(247, 247, 247)' padding='10px 30px' fontWeight='500'>
                                Summer Holidays
                                </Stack>
                                <Stack flex direction='row' width='20%' padding='10px 50px'>
                                    Yes
                                </Stack>
                            </Stack>

                            <Divider />

                            <Stack flex direction='row' fontSize='14px'>
                                <Stack flex direction='row' width='80%' backgroundColor='rgb(247, 247, 247)' padding='10px 30px' fontWeight='500'>
                                Golden Weeks
                                </Stack>
                                <Stack flex direction='row' width='20%' padding='10px 50px'>
                                    Yes
                                </Stack>
                            </Stack>

                            <Divider />

                            <Stack flex direction='row' fontSize='14px'>
                                <Stack flex direction='row' width='80%' backgroundColor='rgb(247, 247, 247)' padding='10px 30px' fontWeight='500'>
                                Other Holidays
                                </Stack>
                                <Stack flex direction='row' width='20%' padding='10px 50px'>
                                    Yes
                                </Stack>
                            </Stack>

                            <Divider />
                        </Box>
                    </Box>
                </Box>
               
            </Box>
    )
} 

export default DashBoard;