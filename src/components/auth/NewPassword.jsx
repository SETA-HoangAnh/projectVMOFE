import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import CastleIcon from "@mui/icons-material/Castle";
import {lightBlue} from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import CopyrightApp from "../common/Copyright/CopyrightApp.jsx";
import * as React from "react";
import ChangeLang from "../common/ChangeLang.jsx";
import {useTranslation} from "react-i18next";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";


export default function NewPassword() {
    const {t} = useTranslation();
    const [errorMessage, setErrorMessage] = React.useState("");
    const location = useLocation();
    const navigate = useNavigate();

    function changePw() {
        var newPassword = document.getElementById('newpassword').value;
        var confirmPassword = document.getElementById('confirmpassword').value;

        const endpoint = "http://localhost:8080/api/v1/auth/user/passwordChange";
    
        const dataToSend = {
            newPassword: newPassword,
            confirmPassword: confirmPassword,
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
        <div className="login-form">
            <Box sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <ChangeLang></ChangeLang>
                {/*Heading login*/}
                <Avatar sx={{ m: 1, bgcolor: lightBlue[400] }}>
                    <CastleIcon/>
                </Avatar>
                <Typography component="h1" variant="h5" sx={{ 
                        marginBottom: '20px'
                     }}>
                    {t('new-password')}
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
                        height: '20em'
                     
                     }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="newpassword"
                        label="New password"
                        type="password"
                        id="newpassword"
                        autoComplete="new-password"
                    />
                    <TextField
                        className="errorCode"
                        margin="normal"
                        required
                        fullWidth
                        name="confirmpassword"
                        label="Confirm password"
                        type="password"
                        id="confirmpassword"
                        autoComplete="confirm-password"
                        helperText= {errorMessage}
                    />
                    <Button
                        onClick={() => changePw()}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Change
                    </Button>
                    <Grid container>
                        <Grid xs>
                            {/*<Typography component="h1" variant="h5">*/}
                            Change your password here.
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