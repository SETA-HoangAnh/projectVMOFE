import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import CastleIcon from "@mui/icons-material/Castle";
import {lightBlue} from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import {Link, useNavigate} from "react-router-dom";
import CopyrightApp from "../common/Copyright/CopyrightApp.jsx";
import * as React from "react";
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import ChangeLang from "../common/ChangeLang.jsx";
import {useTranslation} from "react-i18next";
import AppleIcon from '@mui/icons-material/Apple';
import { Android, Apple, Padding } from "@mui/icons-material";
import AndroidIcon from '@mui/icons-material/Android';

export default function Signup() {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = React.useState("");

    const [open, setOpen] = React.useState(false);
    const [dataQR, setDataQR] = React.useState({});

    const handleClose = () => {
        setOpen(false);
    };

    const handleNext = () => {
        setOpen(false);
        // navigate('/otpCheck');
        navigate('/totpCheck', {state: {
            email: dataQR?.email
        }});
    };

    function SignUpHandle() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var fullName = document.getElementById('fullName').value;
        var dateOfBirth = document.getElementById('dateOfBirth').value;
        const endpoint = "http://localhost:8080/api/v1/authenticate/signup"; 

        const dataToSend = {
            email: email,
            password: password,
            fullName: fullName,
            dateOfBirth: dateOfBirth
        };

        axios.post(endpoint, dataToSend, {
            headers: {
                'Content-Type': 'application/json',
                'LOCALE': localStorage.getItem('LOCALE')
            }
        })
        .then(response => {
            if (response.data) {
                setDataQR(response.data?.data);
                setOpen(true);
            } else {
                alert('No data received from server');
            }
        })
        .catch(error => {
            setErrorMessage(error.response.data.message);
        });
    }

    return (
        <div className="login-form">
            <Box sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '600px',
            }}>
                <ChangeLang></ChangeLang>
                {/*Heading login*/}
                <Avatar sx={{ m: 1, bgcolor: lightBlue[400] }}>
                    <CastleIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    {t('sign-up')}
                </Typography>
                {/*Form*/}
                <Box component="form" noValidate
                     sx={{ 
                        mt: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32em',
                        height: '32em'
                     
                     }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label= {t('email-address')}
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label={t('password')}
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="fullName"
                        label={t('full-name')}
                        name="fullName"
                        autoComplete="fullName"
                        autoFocus
                    />
                    <TextField
                        className="errorCode"
                        margin="normal"
                        fullWidth
                        name="dateOfBirth"
                        id="dateOfBirth"
                        label= {t('date-of-birth')}
                        InputLabelProps={{ shrink: true, required: true }}
                        type="date"
                        helperText= {errorMessage}
                    />


                    <Button
                        fullWidth
                        onClick={() => SignUpHandle()}
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {t('sign-up')}
                    </Button>
                    <Grid container>
                        <Grid xs>
                            {/*<Typography component="h1" variant="h5">*/}
                            {t('have-account')}
                            {/*</Typography>*/}
                        </Grid>
                        <Grid>
                            <Link to="/" variant="body2">
                                {t('log-in')}
                            </Link>
                        </Grid>
                    </Grid>
                    {/*Copyright*/}
                    <CopyrightApp sx={{mt: 5}}></CopyrightApp>
                </Box>
            </Box>

            <Dialog
        open={open}
        onClose={handleClose}
      >
        <div className="qrCode">
            <DialogTitle className="headerr">
            {t('download-authenticator')}
            <div className="appLogo">
                <a href="https://apps.apple.com/us/app/microsoft-authenticator/id983156458"><img src="src\assets\image\app-store-badge.png" alt="" /></a>
                <a href="https://play.google.com/store/apps/details?id=com.azure.authenticator&hl=en&gl=US"><img src="src\assets\image\en_badge_web_generic.png" alt="" /> </a>
            </div>
            </DialogTitle>
            <DialogContent className="qrImg">
            <img src={ dataQR?.qrCode }></img>
            </DialogContent>
            <DialogActions className="footerNext">
            <Button onClick={handleNext}>{t('next')}</Button>
            </DialogActions>
        </div>
      </Dialog>
        </div>
    )
}