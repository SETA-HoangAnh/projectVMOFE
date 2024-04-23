import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import CastleIcon from "@mui/icons-material/Castle";
import {lightBlue} from "@mui/material/colors";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import CopyrightApp from "../common/Copyright/CopyrightApp.jsx";
import * as React from "react";


export default function GoogleAuthen() {
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
                {/*Form*/}
                <Box component="form" noValidate
                     sx={{ mt: 1 }}>
                    QR here.
                    <Button
                        href="/inputCode"
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {t('next')}
                    </Button>
                    <Grid container>
                        <Grid xs>
                            {/*<Typography component="h1" variant="h5">*/}
                            {t('download-authenticator')}
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