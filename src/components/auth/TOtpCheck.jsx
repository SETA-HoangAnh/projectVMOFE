import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import CastleIcon from "@mui/icons-material/Castle";
import {lightBlue} from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import {useLocation, useNavigate} from "react-router-dom";
import CopyrightApp from "../common/Copyright/CopyrightApp.jsx";
import * as React from "react";
import axios from 'axios';
import ChangeLang from "../common/ChangeLang.jsx";
import {useTranslation} from "react-i18next";


export default function TOtpCheck() {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [errorMessage, setErrorMessage] = React.useState("");
    console.log('param', location.state);
    
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
            navigate('/')
        })
        .catch(error => {
            setErrorMessage(error.response.data.message);
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
                    {t('verification')}
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
                        className="errorCode"
                        margin="normal"
                        required
                        fullWidth
                        id="otpInput"
                        label={t('OTP')}
                        name="otp"
                        autoComplete="otp"
                        autoFocus
                        helperText = {errorMessage}
                        variant="standard"
                    />
                    
                    <Button
                        // href="/newPassword"
                        onClick={checkOtp}
                        // type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {t('send')}
                    </Button>
                    <Grid container>
                        <Grid xs>
                            {/*<Typography component="h1" variant="h5">*/}
                            {t('OTP-instruction')}
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