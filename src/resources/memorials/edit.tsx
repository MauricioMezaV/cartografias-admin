import React from 'react';

import {
    Edit,
    SimpleForm,
    TextInput,
    DateInput,
    ImageInput,
    ImageField
} from "react-admin";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import {RichTextInput} from "ra-input-rich-text";

export const MemorialsEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <Card variant='outlined' sx={{ minWidth: "100%" , boxShadow: 1 }}>
                <CardHeader title="Editar memorial"/>
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
                        source="description"
                        label="Descripción de la noticia"
                        fullWidth={true}
                        name={"description"}
                        isRequired
                        multiline
                    />
                    <TextInput
                        source="author"
                        label="Autor de la noticia"
                        fullWidth
                        color="primary"
                        variant="outlined"
                        required
                    />
                    <DateInput
                        source="publicationDate"
                        label="Fecha de publicación"
                        color="secondary"
                        variant="outlined"
                    />
                    <ImageInput source="image" accept="image/*" label="Imagen">
                        <ImageField source="src" title="title" />
                    </ImageInput>
                </CardContent>
            </Card>
        </SimpleForm>
    </Edit>
)
