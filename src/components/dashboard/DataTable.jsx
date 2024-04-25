import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";

const columns = [
    { field: 'userID', headerName: 'ID', width: 70 },
    { field: 'fullName', headerName: 'Full name', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
        field: 'dateOfBirth',
        headerName: 'Date of birth',
        type: 'number',
        width: 90,
    },
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    // },
    { field: 'status', headerName: 'Status', width: 160 },
];

export default function DataTable() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = () => {
        axios.post('http://localhost:8080/api/v1/users/paging', {
            email: null,
            fullName: null,
            status: null
        })
            .then((response) => {
                const modifiedData = response.data.data.map((user) => ({
                    ...user,
                    id: user.userID // Sử dụng thuộc tính userID làm id cho mỗi hàng
                }));
                setUsers(modifiedData);
                console.log(modifiedData);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <div style={{ height: 400, width: '100%' }}>
            <div>
                <DataGrid
                    rows={users}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>

        </div>
    );
}
