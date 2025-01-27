import React from 'react';
import { Datagrid, EditButton, List, TextField } from 'react-admin';

export const MemorialsList = (props: any) => (
    <List {...props}>
        <Datagrid
            rowClick="edit"
            bulkActionButtons={false}
            sx={{
                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
            }}
        >
            <TextField source="message" label="Memorial" />
            <TextField source="abstract" label="Descripción" />
            <EditButton label="Editar" />
        </Datagrid>
    </List>
);