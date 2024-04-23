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
import CopyrightApp from "../common/Copyright/CopyrightApp.jsx";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import * as React from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import ChangeLang from "../common/ChangeLang.jsx";

export default function Signup() {
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const [dataQR, setDataQR] = React.useState({});

    const handleClose = () => {
        setOpen(false);
    };

    const handleNext = () => {
        setOpen(false);
        // navigate('/otpCheck');
        navigate('/otpCheck', {state: {
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
                // alert(response.data);
                setDataQR(response.data?.data);
                setOpen(true);
                // navigate('/lay-otp');
            } else {
                alert('No data received from server');
            }
        })
        .catch(error => {
            alert(error.response.data.email ? error.response.data.email : error.response.data)
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
                maxWidth: '600px',
            }}>
                {/*Heading login*/}
                <Avatar sx={{ m: 1, bgcolor: lightBlue[400] }}>
                    <CastleIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
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
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="fullName"
                        label="Fullname"
                        name="fullName"
                        autoComplete="fullName"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="dateOfBirth"
                        id="dateOfBirth"
                        label="Date of birth"
                        InputLabelProps={{ shrink: true, required: true }}
                        type="date"
                    />


                    <Button
                        // href="/qrscan"
                        // type="submit"
                        fullWidth
                        onClick={() => SignUpHandle()}
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid xs>
                            {/*<Typography component="h1" variant="h5">*/}
                                Have an account?
                            {/*</Typography>*/}
                        </Grid>
                        <Grid>
                            <Link to="/" variant="body2">
                                {"Login"}
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
        <DialogTitle>Let's download Google Authenticator to scan</DialogTitle>
        <DialogContent>
          <img src={ dataQR?.qrCode }></img>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNext}>Next</Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}