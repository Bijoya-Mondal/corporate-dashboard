import React from "react";
import './CorporateInfoForm.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {useForm, Controller} from 'react-hook-form';
import SideNav from "./SideNav";


 const CorporateInfoForm = () =>{

    const BootstrapButton = styled(Button)({
        backgroundColor:'rgb(39, 24, 124)',
        width:'20%',
        padding:'11px 0px',
        '&:hover':{
            backgroundColor:'rgb(21, 101, 192)'
        }
        
    })

    const { control, handleSubmit, formState: { errors }, trigger } = useForm();

    const onSubmit = (data) => {
        // Handle form submission here
        console.log(data);
    }

    
    return(
        <Box sx={{display: 'flex'}}>
            <SideNav />
        <Box flexGrow={1} style={{margin:'24px'}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid spacing={3} container flex flexGrow='wrap' >

                    <Grid item md={6}>
                        <Stack>
                            <label className="form-label">
                                Business Description
                                <div className="asterisk">*</div> 
                            </label>
                            <Controller
                            name="businessDesc"
                            control={control}
                            defaultValue=""
                            rules={{
                            required: 'This field is required',
                            
                            }}
                            render={({ field }) => (
                            <TextField
                                {...field}
                                id="outlined-basic"
                                variant="outlined"
                                multiline
                                rows={4}
                                error={!!errors.businessDesc}
                                helperText={errors.businessDesc?.message}
                               
                            />
                            )}
                        />
                        </Stack>
                    </Grid>

                    <Grid item md={6}>
                        <Stack>
                            <label>
                                Corporate Philosophy 
                            </label>
                           
                            <TextField id="outlined-basic" multiline rows={4} />
                        </Stack>
                    </Grid>
                </Grid>

                <Grid container rowSpacing={4} columnSpacing={4} marginTop={2}>

                    <Grid item md={4}>
                    <Stack>
                        <label >
                            Company Name
                            <div className='asterisk'>*</div> 
                        </label>
                        <Controller
                            name="companyName"
                            control={control}
                            defaultValue=""
                            rules={{
                            required: 'This field is required',
                            
                            }}
                            render={({ field }) => (
                            <TextField
                                {...field}
                                id="outlined-basic"
                                variant="outlined"
                                
                                error={!!errors.companyName}
                                helperText={errors.companyName?.message}
                               
                            />
                            )}
                        />
                        </Stack>
                    </Grid>

                    <Grid item md={4}>
                    <Stack>
                        <label>
                            Industry
             
                        </label>
                        <TextField id="outlined-basic" variant="outlined"/>
                        </Stack>
                    </Grid>

                    <Grid item md={4}>
                    <Stack>
                        <label >
                            Mail ID
                            <div className='asterisk'>*</div> 
                        </label>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                            required: 'This field is required',
                            pattern: {
                                required: true,
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Please enter a valid email format',
                            },
                            }}
                            render={({ field }) => (
                            <TextField
                                {...field}
                                id="outlined-basic"
                              
                                variant="outlined"
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                
                            />
                            )}
                        />
                        </Stack>
                    </Grid>

                    <Grid item md={4}>
                    <Stack>
                        <label >
                            Phone Number
                            <div className='asterisk'>*</div> 
                        </label>
                        <Controller
                            name="phoneNumber"
                            control={control}
                            defaultValue=""
                            rules={{
                            required: 'This field is required',
                            pattern: {
                                value: /^[0-9]{10}$/, // Adjust the pattern to match your desired format
                                message: 'Invalid phone number format (e.g., 1234567890)',
                            },
                            }}
                            render={({ field }) => (
                            <TextField
                                {...field}
                                id="outlined-basic"
                                variant="outlined"
                                error={!!errors.phoneNumber}
                                helperText={errors.phoneNumber?.message}
                               
                            />
                            )}
                        />
                        </Stack>
                    </Grid>

                    <Grid item md={4}>
                    <Stack>
                        <label >
                            Location
                            <div className='asterisk'>*</div> 
                        </label>
                        <Controller
                            name="location"
                            control={control}
                            defaultValue=""
                            rules={{
                            required: 'This field is required',
                            
                            }}
                            render={({ field }) => (
                            <TextField
                                {...field}
                                id="outlined-basic"
                                variant="outlined"
                                error={!!errors.location}
                                helperText={errors.location?.message}
                               
                            />
                            )}
                        />
                        </Stack>
                    </Grid>

                    <Grid item md={4}>
                    <Stack>
                        <label>
                            Website
                            
                        </label>
                        <TextField id="outlined-basic" variant="outlined" />
                        </Stack>
                    </Grid>

                    <Grid item md={4}>
                    <Stack>
                        <label >
                            Working Hours
                            <div className='asterisk'>*</div> 
                        </label>
                        <Controller
                            name="workingHours"
                            control={control}
                            defaultValue=""
                            rules={{
                            required: 'This field is required',
                            
                            }}
                            render={({ field }) => (
                            <TextField
                                {...field}
                                id="outlined-basic"
                                variant="outlined"
                                error={!!errors.workingHours}
                                helperText={errors.workingHours?.message}
                               
                            />
                            )}
                        />
                        </Stack>
                    </Grid>

                    <Grid item md={4}>
                    <Stack>
                        <label >
                            Establishment Date
                            <div className='asterisk'>*</div> 
                        </label>
                        <Controller
                            name="date"
                            control={control}
                            defaultValue=""
                            rules={{
                            required: 'This field is required',
                            }}
                            render={({ field }) => (
                                <TextField
                                {...field}
                                id="date-picker"
                           
                                variant="outlined"
                                type="date"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                error={!!errors.date}
                                helperText={errors.date?.message}
                            />
                            )}
                        />
                        </Stack>
                    </Grid>

                    <Grid item md={4}>
                    <Stack>
                        <label >
                            Initial Capital
                            <div className='asterisk'>*</div> 
                        </label>
                        <Controller
                            name="IniCapital"
                            control={control}
                            defaultValue=""
                            rules={{
                            required: 'This field is required',
                            }}
                            render={({ field }) => (
                        <TextField id="outlined-basic" variant="outlined" error={!!errors.IniCapital}
                        helperText={errors.IniCapital?.message}
                        value={field.value || ''} 
                        onChange={(e) => {
                            field.onChange(e); 
                            trigger('IniCapital'); 
                        }} />
                        )}
                    />
                        </Stack>
                    </Grid>

                    <Grid item md={4}>
                    <Stack>
                        <label >
                            Representative
                            <div className='asterisk'>*</div> 
                        </label>
                        <Controller
                            name="representative"
                            control={control}
                            defaultValue=""
                            rules={{
                            required: 'This field is required',
                            }}
                            render={({ field }) => (
                        <TextField id="outlined-basic" variant="outlined" 
                        error={!!errors.representative} helperText={errors.representative?.message}
                        value={field.value || ''} 
                        onChange={(e) => {
                            field.onChange(e); 
                            trigger('representative'); 
                        }}/>
                        )}
                        />
                        </Stack>
                    </Grid>

                    <Grid item md={4}>
                    <Stack>
                        <label >
                            Branch
                            <div className='asterisk'>*</div> 
                        </label>
                        <Controller
                            name="branch"
                            control={control}
                            defaultValue=""
                            rules={{
                            required: 'This field is required',
                            }}
                            render={({ field }) => (
                        <TextField id="outlined-basic" variant="outlined" error={!!errors.branch} helperText={errors.branch?.message}
                        value={field.value || ''} 
                        onChange={(e) => {
                            field.onChange(e); 
                            trigger('branch'); 
                        }}/>
                        )}
                        />
                        </Stack>
                    </Grid>

                    <Grid item md={4}>
                    <Stack>
                        <label >
                            Number of Employees
                            <div className='asterisk'>*</div> 
                        </label>
                        <Controller
                            name="numEmployees"
                            control={control}
                            defaultValue=""
                            rules={{
                            required: 'This field is required',
                            }}
                            render={({ field }) => (
                        <TextField id="outlined-basic" variant="outlined" type='number'
                        error={!!errors.numEmployees} helperText={errors.numEmployees?.message}
                        value={field.value || ''} 
                        onChange={(e) => {
                            field.onChange(e); 
                            trigger('numEmployees'); 
                        }}/>
                        )}
                        />
                        </Stack>
                    </Grid>

                    <Grid item md={4}>
                    <Stack>
                        <label >
                            Sales Revenue
                            <div className='asterisk'>*</div> 
                        </label>
                        <Controller
                            name="salesRevenue"
                            control={control}
                            defaultValue=""
                            rules={{
                            required: 'This field is required',
                            }}
                            render={({ field }) => (
                        <TextField id="outlined-basic" variant="outlined" type='number' 
                        error={!!errors.salesRevenue} helperText={errors.salesRevenue?.message}
                        value={field.value || ''} 
                        onChange={(e) => {
                            field.onChange(e); 
                            trigger('salesRevenue'); 
                        }}/>
                        )}
                        />
                        </Stack>
                    </Grid>

                    <Grid item md={4}>
                    <Stack>
                        <label >
                            Operation Profit
                            <div className='asterisk'>*</div> 
                        </label>
                        <Controller
                            name="operationProfit"
                            control={control}
                            
                            
                            rules={{
                            required: 'This field is required',
                            }}
                            render={({ field }) => (
                        <TextField id="outlined-basic" variant="outlined" type='number' 
                        error={!!errors.operationProfit} helperText={errors.operationProfit?.message}
                        value={field.value || ''} 
                        onChange={(e) => {
                            field.onChange(e); 
                            trigger('operationProfit'); 
                        }}/>
                        )}
                        />
                        </Stack>
                    </Grid>

                    <Grid item md={4}>
                    <Stack>
                        <label>
                            Average Age of Employees
                            
                        </label>
                        <TextField id="outlined-basic" variant="outlined" type="number"/>
                        </Stack>
                    </Grid>

                    <Grid item md={4}>
                    <Stack>
                        <label>
                            Stock
                            
                        </label>
                        <TextField id="outlined-basic" variant="outlined" type="number"/>
                        </Stack>
                    </Grid>

                    <Grid item md={4}>
                    <Stack>
                        <label>
                            LinkedIn Link
                            
                        </label>
                        <TextField id="outlined-basic" variant="outlined" />
                        </Stack>
                    </Grid>

                    <Grid item md={4}>
                    <Stack>
                        <label>
                            Twitter Link
                            
                        </label>
                        <TextField id="outlined-basic" variant="outlined" />
                        </Stack>
                    </Grid>

                    <Grid item md={4}>
                    <Stack>
                        <label>
                            Facebook Link
                            
                        </label>
                        <TextField id="outlined-basic" variant="outlined" />
                        </Stack>
                    </Grid>

                    <Grid item md={4}>
                    <Stack>
                        <label>
                            Instagram Link
                            
                        </label>
                        <TextField id="outlined-basic" variant="outlined" />
                        </Stack>
                    </Grid>

                    <Grid item md={4}>
                    <Stack>
                        <label>
                            YouTube Link
                            
                        </label>
                        <TextField id="outlined-basic" variant="outlined" />
                        </Stack>
                    </Grid>
                </Grid>

                <FormControl sx={{margin:'34px 0px'}}>
                    <FormLabel >Foreign Owned</FormLabel>
                    <RadioGroup
                    row
                    >
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                <Stack alignItems='center'>
                <BootstrapButton variant="contained" type="submit">
                    SAVE
                </BootstrapButton>
                </Stack>
            </form>
        </Box>
    </Box>
    )

}

export default CorporateInfoForm;