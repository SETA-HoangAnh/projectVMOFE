import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import CastleIcon from "@mui/icons-material/Castle";
import {lightBlue} from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import CopyrightApp from "../common/Copyright/CopyrightApp.jsx";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import * as React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import FormDialog from "../auth/FormDialog.jsx";
import axios from 'axios';
import ChangeLang from "../common/ChangeLang.jsx";


export default function OtpCheck() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log('param', location.state);
    

    // function checkOtp(navigate) {
    //     var totp = document.getElementById('otpInput').value;
    //     const endpoint = "http://localhost:8080/api/auth/user/otp-verify";
    
    //     const dataToSend = {
    //         totp: totp
            
    //     };
    
    //     axios.post(endpoint, dataToSend, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'LOCALE': localStorage.getItem('LOCALE')
    //         }
    //     })
    //     .then(response => {
    //         navigate('/new-password', {state: {
    //             email: "123"
    //         }} )
    //     })
    //     .catch(error => {
    //         alert(error.response.data);
    //     });
    // }

    function checkOtp() {
        var totp = document.getElementById('otpInput').value;
        const endpoint = "http://localhost:8080/api/v1/authenticate/verify";
    
        const dataToSend = {
            totp: totp,
            email: location.state?.email
        };
    
        axios.post(endpoint, dataToSend, {
            headers: {
                'Content-Type': 'application/json',
                'LOCALE': localStorage.getItem('LOCALE')
            }
        })
        .then(response => {
            // navigate('/new-password', {state: {
            //     email: "123"
            // }})
        })
        .catch(error => {
            alert(error.response.data);
        });
    }

    return (
        <div>
            <ChangeLang></ChangeLang>
            <Box sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/*Heading login*/}
                <Avatar sx={{ m: 1, bgcolor: lightBlue[400] }}>
                    <CastleIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    OTP check
                </Typography>
                {/*Form*/}
                <Box component="form" noValidate
                        sx={{ mt: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '32em',
                            height: '20em'
                     }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="otpInput"
                        label="OTP"
                        name="otp"
                        autoComplete="otp"
                        autoFocus
                    />
                    <Button
                        // href="/newPassword"
                        onClick={checkOtp}
                        // type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Send
                    </Button>
                    <Grid container>
                        <Grid xs>
                            {/*<Typography component="h1" variant="h5">*/}
                            Fill your OTP we just sent to your email.
                            {/*</Typography>*/}
                        </Grid>
                    </Grid>
                    {/*Copyright*/}
                    <CopyrightApp sx={{mt: 5}}></CopyrightApp>
                </Box>
            </Box>
        </div>
    )
}