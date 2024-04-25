import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import CastleIcon from "@mui/icons-material/Castle";
import {lightBlue} from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import CopyrightApp from "../common/Copyright/CopyrightApp.jsx";
import * as React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from 'react-i18next';
import ChangeLang from "../common/ChangeLang.jsx";
import axios from "axios";


export default function Login() {
    const { t } = useTranslation();
    const [errorMessage, setErrorMessage] = React.useState("");
    const navigate = useNavigate();

    function handleLogin() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        const endpoint = "http://localhost:8080/api/v1/authenticate/login";
    
        const dataToSend = {
            email: email,
            password: password
        };
    
        axios.post(endpoint, dataToSend, {
            headers: {
                'Content-Type': 'application/json',
                'LOCALE': localStorage.getItem('LOCALE')
            }
        })
        .then(response => {
            navigate('/dashboard')
        })
        .catch(error => {
            setErrorMessage(error.response.data.message);
        });
    }
    return (
        <div className="login-form">
            <Box sx={{
                    my: 10,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '32em',
                    maxHeight: '30em'
                }}>
                {/*Heading login*/}
                <ChangeLang></ChangeLang>
                <Avatar sx={{ m: 1, bgcolor: lightBlue[400] }}>
                    <CastleIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    { t('sign-in') }
                </Typography>
                {/*Form*/}
                <Box component="form" noValidate
                     sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label={ t('email-address') }
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        className="errorCode"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label={ t('password') }
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        helperText= {errorMessage}
                    />

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label={ t('remember-me') }
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={() => handleLogin()}
                    >
                        { t('sign-in') }
                    </Button>
                    <Grid container>
                        <Grid xs>
                            <Link to="/forgotpassword" variant="body2">
                            { t('forgot-password') }
                            </Link>
                        </Grid>
                        <Grid>
                            <Link to="/signup" variant="body2">
                            { t('sign-up') }
                            </Link>
                        </Grid>
                    </Grid>
                    {/*Copyright*/}
                    <CopyrightApp sx={{mt: 5}}></CopyrightApp>
                </Box>
            </Box>
        </div>
    )
}