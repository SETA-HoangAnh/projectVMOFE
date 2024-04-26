import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import CastleIcon from "@mui/icons-material/Castle";
import {lightBlue} from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import {Link, useNavigate} from "react-router-dom";
import * as React from "react";
import axios from 'axios';
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";


export default function CreateForm() {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = React.useState("");
    const [selectedValue, setSelectedValue] = useState('');

    const [open, setOpen] = React.useState(false);

    const handleSelectChange = (event) => {
      setSelectedValue(event.target.value);
  };

    function CreateHandle() {
        var email = document.getElementById('email2').value;
        var password = document.getElementById('password').value;
        var fullName = document.getElementById('fullName2').value;
        var dateOfBirth = document.getElementById('dateOfBirth').value;
        const endpoint = "http://localhost:8080/api/v1/users"; 

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
              alert(t('success-create'));
              window.location.reload();
            } else {
                alert('No data received from server');
            }
        })
        .catch(error => {
          alert(error.response.data.message);
        });
    }

    return (
      <div className="update-form-container">
      <Box>
              <Box component="form" noValidate className='update-form'>
              <div className='inputForm'>
                  <div className='rupdate'>
                  <TextField
                      margin="normal"
                      id="email2"
                      label= {t('email-address')}
                      InputLabelProps={{ shrink: true }}
                      name="email"
                      required
                      autoFocus
                  />
                  
                  <TextField
                      margin="normal"
                      required
                      InputLabelProps={{ shrink: true }}
                      name="password"
                      label={t('password')}
                      type="password"
                      id="password"
                  />
                  </div>
                  <div className="rupdate">
                  <TextField
                      margin="normal"
                      required
                      InputLabelProps={{ shrink: true }}
                      id="fullName2"
                      label={t('full-name')}
                      name="fullName"
                      autoComplete="fullName"
                      autoFocus
                  />

                  <TextField
                      margin="normal"
                      name="dateOfBirth"
                      id="dateOfBirth"
                      label= {t('date-of-birth')}
                      InputLabelProps={{ shrink: true }}
                      type="date"
                  />
                  </div>

                  <div className=''>
                  <TextField
                  select
                  InputLabelProps={{ shrink: true, required: true }}
                  label={t('slect')}
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
                      onClick={() => CreateHandle()}
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                  >
                      {t('save')}
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
    )
}

