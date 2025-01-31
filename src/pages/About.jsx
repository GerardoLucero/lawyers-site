import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import partner1 from '../assets/partner1.jpg';
import partner2 from '../assets/partner2.jpg';
import partner3 from '../assets/partner3.jpg';

function About() {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>Sobre Nosotros</Typography>
            <Typography>
                Somos un bufete con más de 20 años de experiencia en distintas áreas del derecho.
            </Typography>

            <Grid container spacing={4} sx={{ marginTop: 3 }}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image={partner1}
                            alt="Abogado 1"
                        />
                        <CardContent>
                            <Typography variant="h6">Lic. Juan Pérez</Typography>
                            <Typography>Especialista en derecho penal y civil.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image={partner2}
                            alt="Abogada 2"
                        />
                        <CardContent>
                            <Typography variant="h6">Lic. María López</Typography>
                            <Typography>Experta en derecho corporativo y laboral.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image={partner3}
                            alt="Abogado 3"
                        />
                        <CardContent>
                            <Typography variant="h6">Lic. Roberto García</Typography>
                            <Typography>Especialista en propiedad intelectual.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default About;
