import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid, Paper, Box } from "@mui/material";
import theme from '../theme';

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <Container sx={{ py: 6 }}>
            <Typography 
                variant="h3" 
                fontWeight="bold" 
                sx={{ textAlign: 'center', color: theme.palette.primary.main, textTransform: 'uppercase', letterSpacing: 2, mb: 4 }}
            >
                Contáctanos
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary, textAlign: 'center', mb: 4, fontSize: '1.2rem' }}>
                Déjanos un mensaje y nos pondremos en contacto contigo lo antes posible.
            </Typography>
            
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={8}>
                    <Paper elevation={2} sx={{ p: 4, borderRadius: 1, backgroundColor: theme.palette.background.paper }}>
                        {!submitted ? (
                            <form onSubmit={handleSubmit}>
                                <TextField fullWidth label="Nombre" name="name" value={formData.name} onChange={handleChange} margin="normal" variant="outlined" required />
                                <TextField fullWidth label="Correo Electrónico" name="email" value={formData.email} onChange={handleChange} margin="normal" variant="outlined" required type="email" />
                                <TextField fullWidth label="Mensaje" name="message" value={formData.message} onChange={handleChange} multiline rows={4} margin="normal" variant="outlined" required />
                                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                                    <Button type="submit" variant="contained" color="primary" size="large">Enviar Mensaje</Button>
                                </Box>
                            </form>
                        ) : (
                            <Typography variant="h6" color="success.main" sx={{ textAlign: 'center' }}>
                                ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.
                            </Typography>
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Contact;