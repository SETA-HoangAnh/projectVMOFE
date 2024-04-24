import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import CastleIcon from "@mui/icons-material/Castle";
import {lightBlue} from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import CopyrightApp from "../common/Copyright/CopyrightApp.jsx";
import * as React from "react";
import ChangeLang from "../common/ChangeLang.jsx";
import {useTranslation} from 'react-i18next';


export default function ForgotPassword() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [errorMessage, setErrorMessage] = React.useState("");
    const [email, setEmail] = React.useState(""); 

    function checkEmail() {
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
            navigate('/otpCheck', { state: { email: email } });
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
                    {t('title-forgot-password')}
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
                        id="email"
                        label={ t('email-address') }
                        name="email"
                        autoComplete="email"
                        autoFocus
                        helperText= {errorMessage}
                    />
                    <Button
                        // href="/otpCheck"
                        // type="submit"
                        onClick={() => checkEmail()}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {t('send')}
                    </Button>
                    <Grid container>
                        <Grid xs>
                            {/*<Typography component="h1" variant="h5">*/}
                            {t('OTP-check')}
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
