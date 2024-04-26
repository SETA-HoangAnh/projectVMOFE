import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import AlertDialog from "../common/AlertDialog.jsx";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useTranslation } from 'react-i18next';
import UpdateUser from '../../user/UpdateForm.jsx';
import CreateForm from '../../user/CreateForm.jsx';

export default function DataTableFinal() {
    //Handel open dialog:
    const { t } = useTranslation();

    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
    const [deletingUserId, setDeletingUserId] = useState(null);

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
        setOpen2(false);
    };

    const handleOpen2 = () => {
        setOpen2(true);
    };


    const handleDeleteClick = (userId) => {
        setDeletingUserId(userId);
        setConfirmDeleteOpen(true);
    };

    const handleConfirmDelete = () => {
        deleteUser(deletingUserId);
        setConfirmDeleteOpen(false);
    };

    const handleCancelDelete = () => {
        setConfirmDeleteOpen(false);
    };

    // Function to close UpdateUser component
    const handleCloseUpdateUser = () => {
        setOpen(false);
    };


    const [users, setUsers] = useState([]);

    //Search param:
    const [email, setEmail] = React.useState('');
    const [fullName, setFullName] = React.useState('');

    useEffect(() => {
        getAllUsers();
    }, [email, fullName]);

    //Handel change search:
    const handleEmailChange = (event) => {
        setEmail(event.target.value); // Update email state on input change
    };

    const handleFullNameChange = (event) => {
        setFullName(event.target.value); // Update email state on input change
    };

    //Get list user function:
    const getAllUsers = () => {
        let email = document.getElementById('email').value;
        let fullName = document.getElementById('fullName').value;

        axios.post('http://localhost:8080/api/v1/users/paging', {
            email: email,
            fullName: fullName,
            status: null
        })
            .then((response) => {
                const modifiedData = response.data.data.map((user, index) => ({
                    ...user,
                    id: index + 1 // Sử dụng thuộc tính userID làm id cho mỗi hàng
                }));
                setUsers(modifiedData);
                console.log(modifiedData);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const [userIdGet, setUserIdGet] = useState('');
    const [emailGet, setEmailGet] = useState('');
    const [fullnameGet, setFullname] = useState('');
    const [dobGet, setDobGet] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

    // find user by id funcion
    const FindUserById = (userId) => {
        const endpoint = `http://localhost:8080/api/v1/users/${userId}`; 
        
        axios.get(endpoint)
            .then(response => {
                setEmailGet(response.data.data.email);
                setFullname(response.data.data.fullName);
                setDobGet(response.data.data.dateOfBirth);
                setUserIdGet(response.data.data.userID);
                setOpen(true);
                console.log(userId);
            })
            .catch(error => {
            });
    };


    const deleteUser = (userId) => {
        console.log(userId)
        const endpoint = `http://localhost:8080/api/v1/users/${userId}`;

        axios.delete(endpoint)
            .then(response => {
                // Load lại danh sách người dùng sau khi xóa thành công
                getAllUsers();
            })
            .catch(error => {
                // Xử lý lỗi nếu cần
            });
    };


    const columns = [
        { field: 'id', headerName: 'ID', width: 70},
        { field: 'fullName', headerName: 'Full name', width: 130 },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'dateOfBirth',
            headerName: 'Date of birth',
            type: 'number',
            width: 90,
        },
        { field: 'status', headerName: 'Status', width: 160 },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => (
                <div>
                    <IconButton aria-label="edit" onClick={() => FindUserById(params.row.userID)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleDeleteClick(params.row.userID)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            ),
        },
    ];


    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <TextField
                        margin="normal"
                        id="fullName"
                        label="Full Name"
                        name="fullName"
                        autoComplete="fullName"
                        onChange={handleFullNameChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        margin="normal"
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        onChange={handleEmailChange}
                        autoFocus
                    />
                </Grid>
                <Grid item>
                    <Button
                        onClick={() => handleOpen2()}
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {t('create-user')}
                    </Button>
                </Grid>
            </Grid>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                />
            </div>

            {/* Render component AlertDialog */}
            <AlertDialog
                open={confirmDeleteOpen}
                handleClose={handleCancelDelete}
                handleConfirm={handleConfirmDelete}
            />
            <Dialog
        open={open}
        onClose={handleClose}
      >
        <div className="update-form-container">
                <UpdateUser
                    emailGet = {emailGet}
                    fullnameGet = {fullnameGet}
                    dobGet = {dobGet}
                    userId = {userIdGet}

                ></UpdateUser>
        </div>
      </Dialog>
      <Dialog
        open={open2}
        onClose={handleClose}
      >
        <div className="update-form-container">
                <CreateForm></CreateForm>
        </div>
      </Dialog>
        </Box >
    );
}
