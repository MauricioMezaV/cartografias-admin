import React from 'react';

import {
    Edit,
    SimpleForm,
    ArrayInput, 
    TextInput,
    ImageInput,
    ImageField,
    NumberInput,
} from "react-admin";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { RichTextInput } from 'ra-input-rich-text';

export const MemorialsEdit = (props: any) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <Card variant="outlined" sx={{ minWidth: "100%", boxShadow: 1 }}>
                    <CardHeader title="Editar memorial" />
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
        </Edit>
    );
};