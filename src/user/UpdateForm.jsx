import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useTranslation } from 'react-i18next';


export default function UpdateUser(props) {
    const { t } = useTranslation();
  const [userIdGet, setUserIdGet] = useState('');
  const [emailGet, setEmailGet] = useState('');
  const [fullnameGet, setFullname] = useState('');
  const [dobGet, setDobGet] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [open, setOpen] = React.useState(false);

    const { updateUser, userId} = props;
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };


  // update user by id funcion
  const UpdateUserById = (userId) => {
    const endpoint = `http://localhost:8080/api/v1/users/${userId}`; 
    console.log(userIdGet);

    axios.put(endpoint, {
        status: selectedValue
    })
        .then(response => {
            alert(t('success-update'));
            window.location.reload();
            setEmailGet(response.data.data.email);
            // setPasswordGet(response.data.data.email);
            setFullname(response.data.data.fullName);
            setDobGet(response.data.data.dateOfBirth);
        })
        .catch(error => {
            console.log(error.response);
        });
};



  return (
    <div className="update-form-container">
        <Box>
                <Box component="form" noValidate className='update-form'>
                <div className='inputForm'>
                    <div className='rupdate'>
                    <TextField
                        margin="normal"
                        id="email"
                        label= {t('email-address')}
                        InputLabelProps={{ shrink: true }}
                        name="email"
                        autoFocus
                        disabled
                        value={props.emailGet}
                    />
                    
                    <TextField
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                        name="password"
                        label={t('password')}
                        type="password"
                        id="password"
                        disabled
                        value={"*********"}
                    />
                    </div>
                    <div className="rupdate">
                    <TextField
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                        id="fullName"
                        label={t('full-name')}
                        name="fullName"
                        autoComplete="fullName"
                        autoFocus
                        disabled
                        value={props.fullnameGet}
                    />

                    <TextField
                        margin="normal"
                        name="dateOfBirth"
                        id="dateOfBirth"
                        label= {t('date-of-birth')}
                        InputLabelProps={{ shrink: true }}
                        type="date"
                        disabled
                        value={props.dobGet}
                    />
                    </div>

                    <div className=''>
                    <TextField
                    select
                    InputLabelProps={{ shrink: true, required: true }}
                    label="Select"
                    SelectProps={{
                        native: true,
                        displayEmpty: true,
                    }}
                    value={selectedValue} // Giá trị đã chọn
                    onChange={handleSelectChange} // Xử lý sự kiện khi thay đổi giá trị
                    >
                    <option value="1">active</option>
                    <option value="2">inactive</option>
                    <option value="3">block</option>
                    </TextField>

                    </div>
                    </div>


                    <div className="button-form">
                    <Button
                        onClick={() => UpdateUserById(userId)}
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {t('update')}
                    </Button>
                    <Button
                        // onClick={handleClose}
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {t('cancel')}
                    </Button>
                </div>
                </Box>
            </Box>
        </div>
  );
}
