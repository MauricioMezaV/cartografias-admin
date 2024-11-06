import React from 'react';

import {
    BooleanField,
    Datagrid,
    EditButton,
    List,
    TextField,
    DateField
} from "react-admin";

export const MemorialsList = (props : any) => {
    return (
        <List {...props} >
            <Datagrid
                rowClick="edit"
                bulkActionButtons={false}
                sx={{
                    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)'
                }}
            >
                <TextField source="title" label="Título" />
                <DateField source="publicationDate" label="Fecha de publicación" />
                <EditButton label="Editar"/>
            </Datagrid>
        </List>
    )
}
