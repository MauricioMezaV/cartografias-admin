import React from 'react';

import {
    Edit,
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

export const PlacesEdit = (props: any) => {console.log(props) 
    return (
    <Edit {...props}>
        <SimpleForm>
            <Card variant='outlined' sx={{ minWidth: "100%" , boxShadow: 1 }}>
                <CardHeader title="Editar sitio"/>
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
                        required
                    />                
                </CardContent>
            </Card>
        </SimpleForm>
    </Edit>
)
}
