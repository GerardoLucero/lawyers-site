import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import theme from '../theme';

function Contact() {
    return (
        <Container>
            <Typography variant="h3" gutterBottom sx={{ color: theme.palette.text.primary }}>
                Contacto
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary }}>
                Déjanos un mensaje y nos pondremos en contacto contigo.
            </Typography>

            <form style={{ marginTop: "20px" }}>
                <TextField fullWidth label="Nombre" margin="normal" />
                <TextField fullWidth label="Correo Electrónico" margin="normal" />
                <TextField fullWidth label="Mensaje" multiline rows={4} margin="normal" />
                <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>Enviar</Button>
            </form>
        </Container>
    );
}

export default Contact;
