import React from 'react';

import {
    BooleanField,
    Datagrid,
    EditButton,
    List,
    TextField,
} from "react-admin";

export const VictimList = (props : any) => {
    return (
        <List {...props} >
            <Datagrid
                rowClick="edit"
                bulkActionButtons={false}
                sx={{
                    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)'
                }}
            >
                <TextField source="name" label="Nombre" />
                <TextField source="email" label="Email" />
                <EditButton label="Editar" />
            </Datagrid>
        </List>
    )
}
