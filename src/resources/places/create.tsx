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
                <CardContent>
                    <TextInput
                        source="title"
                        label="Título"
                        fullWidth
                        color="primary"
                        variant="outlined"
                        required
                    />
                    <RichTextInput
                        source="abstract"
                        label="Abstract"
                        fullWidth
                        color="primary"
                        variant="outlined"
                        isRequired
                        multiline
                    />
                    <ArrayInput source="authors" label="Autores">
                        <SimpleFormIterator inline>
                            <TextInput source="name" label="Nombre autor" />
                        </SimpleFormIterator>
                    </ArrayInput>
                    <DateInput
                        source="publicationDate"
                        label="Fecha de publicación"
                        color="secondary"
                        variant="outlined"
                    />
                    <TextInput
                        source="publicationLink"
                        label="Enlace de la publicación"
                        fullWidth
                        color="primary"
                        variant="outlined"
                        validate={validateUrl}
                        required
                    />                
                </CardContent>
            </Card>
        </SimpleForm>
    </Create>
)
}