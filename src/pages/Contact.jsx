import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

function Contact() {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>Contacto</Typography>
            <Typography>Déjanos un mensaje y nos pondremos en contacto contigo.</Typography>

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
