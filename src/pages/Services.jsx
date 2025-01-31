import React from "react";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import criminal from '../assets/criminal-law.jpg' 
import laboral from '../assets/labor-law.jpg'
import corporate from  '../assets/corporate-law.jpg' 
import intellectual from '../assets/intellectual-property.jpg'

const services = [
    { title: "Derecho Penal", description: "Defensa legal en procesos judiciales.", image: criminal},
    { title: "Derecho Laboral", description: "Asesoría y defensa en conflictos laborales.", image: laboral },
    { title: "Derecho Corporativo", description: "Consultoría y asesoría a empresas.", image: corporate }
];

function Services() {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>Nuestros Servicios</Typography>
            <Grid container spacing={3}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <img src={service.image} alt={service.title} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
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
