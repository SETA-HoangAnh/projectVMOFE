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
import ChangeLang from "../common/ChangeLangButton.jsx";
import {useTranslation} from "react-i18next";

export default function OTP(props) {
    const {t} = useTranslation();

    const checkOtp = () => {
        props.checkOtp();
    };

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
                <div className="change-lang">
                    <ChangeLang></ChangeLang>
                </div>
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
                        helperText = {props.errorMessage}
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