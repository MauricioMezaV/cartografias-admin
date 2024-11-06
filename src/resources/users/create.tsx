import React from "react";

import {
    Create,
    SelectArrayInput,
    SimpleForm,
    TextInput,
    BooleanInput
} from "react-admin";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

export const UserCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <Card variant='outlined' sx={{ minWidth: "100%" , boxShadow: 1 }}>
                <CardHeader title="Crear Usuario" />
                <CardContent>
                    <TextInput
                        source="name"
                        label="Nombre"
                        fullWidth
                        color="primary"
                        variant="outlined"
                        required
                    />
                    <TextInput
                        source="email"
                        label="Email"
                        fullWidth
                        color="primary"
                        variant="outlined"
                        required
                    />
                    <TextInput
                        source="password"
                        label="Contraseña"
                        fullWidth
                        color="primary"
                        variant="outlined"
                        required
                    />
                    {/*
                    <BooleanInput
                        source="confirmed"
                        label="Verificado"
                        color="secondary"
                        variant="outlined"
                    />
                    <Card variant="outlined" sx={{ boxShadow: 1 }}>
                        <CardHeader
                            title="Información Administrativa"
                        />
                        <CardContent>
                            <SelectArrayInput
                                label="Roles"
                                source="roles"
                                choices={[
                                    { id: "admin", name: "Admin" },
                                    { id: "super-admin", name: "Super Admin" },
                                ]}
                                fullWidth
                                defaultValue={'admin'}
                            />
                        </CardContent>
                    </Card>
                    */}
                </CardContent>
            </Card>
        </SimpleForm>
    </Create>
)
