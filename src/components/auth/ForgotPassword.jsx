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
import axios from 'axios';
import CopyrightApp from "../common/Copyright/CopyrightApp.jsx";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import * as React from "react";
import { useNavigate  } from 'react-router-dom';
import ChangeLang from "../common/ChangeLang.jsx";
import { useTranslation } from 'react-i18next';


function checkEmail(navigate) {
    var email = document.getElementById('email').value;
    const endpoint = "http://localhost:8080/api/v1/auth/send-otp";

    const dataToSend = {
        email: email
    };

    axios.post(endpoint, dataToSend, {
        headers: {
            'Content-Type': 'application/json',
            'LOCALE': localStorage.getItem('LOCALE')
        }
    })
    .then(response => {
        if (response.data) {
            alert(response);

        } else {
            alert('No data received from server');
        }
    })
    .catch(error => {
        alert(error.response.data.email ? error.response.data.email : error.response.data)
    });
}


export default function ForgotPassword() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    
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
                    Forgot password
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
                        id="email"
                        label={ t('emailAddress') }
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <Button
                        href="/otpCheck"
                        type="submit"
                        onClick={() => checkEmail(navigate)}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Send
                    </Button>
                    <Grid container>
                        <Grid xs>
                            {/*<Typography component="h1" variant="h5">*/}
                            Please check your email to see your OTP.
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