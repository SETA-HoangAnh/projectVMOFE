import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import CssBaseline from "@mui/material/CssBaseline";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../auth/Login.jsx";
import Signup from "../auth/Signup.jsx";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ForgotPassword from "../auth/ForgotPassword.jsx";
import TOtpCheck from "../auth/TOtpCheck.jsx";
import OtpCheck from "../auth/OtpCheck.jsx";
import NewPassword from "../auth/NewPassword.jsx";
import GoogleAuthen from "../auth/GoogleAuthen.jsx";
import InputAuthen from "../auth/InputAuthen.jsx";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary
}));

export default function AuthLayout() {
    return (
        <Box sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage: 'url("src/assets/image/background.jpg")',
            backgroundSize: 'cover' }}>
            <CssBaseline />

            <Grid container spacing={2} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <Grid >
                    <Item>
                        <BrowserRouter>
                            <Routes>
                                {/*Log in form*/}
                                <Route path="/" element= {
                                    <Login></Login>
                                } />

                                {/*Signup form*/}
                                <Route path="/signup" element= {
                                    <Signup></Signup>
                                } />

                                {/*Forgot password form*/}
                                <Route path="/forgotpassword" element= {
                                    <ForgotPassword></ForgotPassword>
                                } />

                                {/*OTP check form*/}
                                <Route path="/otpCheck" element= {
                                    <OtpCheck></OtpCheck>
                                } />

                                {/*TOTP check form*/}
                                <Route path="/totpCheck" element= {
                                    <TOtpCheck></TOtpCheck>
                                } />

                                {/*New password form*/}
                                <Route path="/newPassword" element= {
                                    <NewPassword></NewPassword>
                                } />


                            </Routes>
                        </BrowserRouter>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
