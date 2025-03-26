import React from 'react';

import {
    Create,
    SimpleForm,
    TextInput,
    DateInput,
    ArrayInput,
    SimpleFormIterator
} from "react-admin";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

import { RichTextInput } from 'ra-input-rich-text';

const validateUrl = (value) => {
    // Expresión regular para validar URLs
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlPattern.test(value)) {
        return 'Ingrese una URL válida';
    }
    return undefined;
};

export const PlacesCreate = (props: any) => {console.log(props) 
    return (
    <Create {...props}>
        <SimpleForm>
            <Card variant='outlined' sx={{ minWidth: "100%" , boxShadow: 1 }}>
                <CardHeader title="Crear sitio"/>
                // A PARTIR DE AQUI SE DEBE MODIFICAR CON LOS CAMPOS RESPECTIVOS AL MODELO DE SITIOS, ESTO ES UNA COPIA DE MEMORIALS
                <CardContent>
                        <TextInput
                            source="message"
                            label="Nombre del memorial"
                            fullWidth
                            color="primary"
                            variant="outlined"
                            required
                        />
                        <RichTextInput
                            source="abstract"
                            label="Descripción del memorial"
                            fullWidth={true}
                            name={"description"}
                            isRequired
                            multiline
                        />
                        <TextInput
                            source="tipo"
                            label="Tipo de memorial"
                            fullWidth
                            color="primary"
                            variant="outlined"
                            required
                        />
                        <TextInput
                            source="comuna"
                            label="Comuna"
                            fullWidth
                            color="primary"
                            variant="outlined"
                            required
                        />
                        <TextInput
                            source="provincia"
                            label="Provincia"
                            fullWidth
                            color="primary"
                            variant="outlined"
                            required
                        />
                        <ArrayInput source="coordinates" label="Coordenadas">
                            <SimpleFormIterator inline>
                                <TextInput source="coord" label="Coordenada" />
                            </SimpleFormIterator>
                        </ArrayInput>               
                </CardContent>
            </Card>
        </SimpleForm>
    </Create>
)
}