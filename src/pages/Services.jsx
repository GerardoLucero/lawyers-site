import React from "react";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";

const services = [
    { title: "Derecho Penal", description: "Defensa legal en procesos judiciales.", image: "/src/assets/criminal-law.jpg" },
    { title: "Derecho Laboral", description: "Asesoría y defensa en conflictos laborales.", image: "/src/assets/labor-law.jpg" },
    { title: "Derecho Corporativo", description: "Consultoría y asesoría a empresas.", image: "/src/assets/corporate-law.jpg" },
    { title: "Propiedad Intelectual", description: "Protección de marcas y patentes.", image: "/src/assets/intellectual-property.jpg" }
];

function Services() {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>Nuestros Servicios</Typography>
            <Grid container spacing={3}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <img src={service.image} alt={service.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                            <CardContent>
                                <Typography variant="h6">{service.title}</Typography>
                                <Typography>{service.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Services;
