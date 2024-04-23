import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
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
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import ChangeLang from "../common/ChangeLang.jsx";

export default function Login() {
    const { t } = useTranslation();

    return (
        <div className="login-form">
            <ChangeLang></ChangeLang>
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
                <Avatar sx={{ m: 1, bgcolor: lightBlue[400] }}>
                    <CastleIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    { t('signin') }
                </Typography>
                {/*Form*/}
                <Box component="form" noValidate
                     sx={{ mt: 1 }}>
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
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label={ t('password') }
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label={ t('rememberMe') }
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        { t('signin') }
                    </Button>
                    <Grid container>
                        <Grid xs>
                            <Link to="/forgotpassword" variant="body2">
                            { t('forgotPassword') }
                            </Link>
                        </Grid>
                        <Grid>
                            <Link to="/signup" variant="body2">
                            { t('signUp') }
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