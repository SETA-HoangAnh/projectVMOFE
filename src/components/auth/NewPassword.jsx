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
import Link from "@mui/material/Link";
import CopyrightApp from "../common/Copyright/CopyrightApp.jsx";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import * as React from "react";


export default function NewPassword() {
    return (
        <div>
            <Box sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '600px'
            }}>
                {/*Heading login*/}
                <Avatar sx={{ m: 1, bgcolor: lightBlue[400] }}>
                    <CastleIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    New password
                </Typography>
                {/*Form*/}
                <Box component="form" noValidate
                     sx={{ mt: 1 }}>
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
                        margin="normal"
                        required
                        fullWidth
                        name="confirmpassword"
                        label="Confirm password"
                        type="password"
                        id="confirmpassword"
                        autoComplete="confirm-password"
                    />
                    <Button
                        href="/"
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Change
                    </Button>
                    <Grid container>
                        <Grid item xs>
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